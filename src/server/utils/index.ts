import { verify } from 'jsonwebtoken'
import { NextApiRequest } from 'next'
import cookie from 'cookie'
// import getConfig from 'next/config'

export const JWT_SECRET =
  process.env.JWT_SECRET && typeof process.env.JWT_SECRET === 'string' ? JSON.parse(process.env.JWT_SECRET) : {}

interface Token {
  userId: number
}

export function getUserId(request: NextApiRequest) {
  const { token } = cookie.parse(request.headers.cookie ?? '')
  if (token && token !== 'null') {
    try {
      const verifiedToken = verify(token, JWT_SECRET.key) as Token
      return verifiedToken && verifiedToken.userId
    } catch (e) {
      console.log(e)
    }
  }
}

export const getPermission = ({ req, res, prisma }) => {
  try {
    let result = permissions[0]
    const accessToken = req.headers?.authorization?.replace('Bearer', '').trim()
    const { token } = cookie.parse(req.headers.cookie ?? '')

    if (accessToken && accessToken !== 'null') {
      const verifiedToken = verify(accessToken, JWT_SECRET.key) as Token
      if (verifiedToken?.permission?.admin) {
        permissions.forEach((permission) => {
          if (verifiedToken?.permission.admin === permission.admin) {
            result = {
              ...verifiedToken?.permission,
              ...permission,
            }
          }
        })
      }
      return result
    } else if (token && token !== 'null') {
      const verifiedToken = verify(token, JWT_SECRET.key) as Token
      const userPermission = permissions.find((permission) => permission.admin === 'User')
      result = {
        ...userPermission,
        ...verifiedToken?.permission
      }
    }

    return result
  } catch (e) {
    console.log(e)
    throw new Error(e)
  }
}