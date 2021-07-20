import Joi from 'joi';
import auth from 'magic/utils/auth';
import request from 'magic/utils/request';
import prisma from 'server/context/prisma';
import config from 'magic/utils/config';
import serverEmail from 'magic/utils/email';
import loginConfirmEmail from 'magic/utils/emailTemplates/loginConfirmEmail';
// import words from 'server/magic/utils/words';
import { expiresMinutesDuration } from 'magic/utils/time';

// schema for validating username and password
const schema = Joi.object({
  email: Joi.string().email().required(),
});

export default async function login(req, res) {
  try {
    const form = typeof req.body === 'string' ? JSON.parse(req.body) : {};
    const { error, value } = schema.validate(form);

    if (error) {
      const [errorDetail] = error.details;

      return res.status(400).json({ error: true, message: errorDetail.message });
    }

    const email = value.email.toLowerCase();

    const loginToken = auth.generateLoginToken();

    const requestMetadata = request.parse(req);
    const domain = request.getDomain(req);

    // update/create user & update/create loginToken
    // the stored token is used to confirm and complete login

    const createLoginToken = await prisma.loginToken.create({
      data: {
        email,
        domain,
        user: {
          connectOrCreate: {
            create: {
              email,
            },
            where: {
              email,
            },
          },
        },
        // metadata for login token (user agent, ip, etc.)
        userAgentRaw: requestMetadata.userAgentRaw,
        userAgent: requestMetadata.userAgent,
        ip: requestMetadata.ip,
        geo: requestMetadata.geo,
        // loginToken contains secret and expires
        secret: loginToken.secret,
        expires: loginToken.expires,
      },
      include: {
        user: true,
      },
    });

    // store loginToken id in cookie
    // returns a jwtToken for requesting the single loginToken request
    // returns phrase for check email modal
    const { jwtToken, phrase } = auth.setupLoginRequest({
      req,
      res,
      loginTokenId: createLoginToken.id,
      userId: createLoginToken.user.id,
      loginTokenSecret: createLoginToken.secret,
    });

    // send email
    const queryParams = [
      ['id', createLoginToken.id],
      ['token', createLoginToken.secret],
    ]
      .map((qp) => {
        const [key, value] = qp;
        return `${key}=${encodeURIComponent(value)}`;
      })
      .join('&');

    const loginConfirmUrl =
      process.env.NODE_ENV === 'production'
        ? `${process.env.PROTOCOL}://${domain}/api/magic/confirm?${queryParams}`
        : `${process.env.PROTOCOL}://${process.env.HOSTNAME}/api/magic/confirm?${queryParams}`;
    // const phrase = words.getPhraseFromToken(secret);
    const expiresIn = expiresMinutesDuration(config.LOGIN_TOKEN_EXPIRES);
    const emailHtml = loginConfirmEmail({
      email,
      loginConfirmUrl,
      phrase,
      expiresIn,
    });

    const emailResponse = await serverEmail.send(email, {
      subject: `Magic login confirmation (${phrase})`,
      html: emailHtml,
    });

    return res.status(200).json({
      error: false,
      phrase,
      jwtToken,
    });
  } catch (e) {
    console.error(JSON.stringify(e));

    return res.status(400).json({ error: true, message: e.message, stack: e.stack.split('\n') });
  }
}
