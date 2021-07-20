import confirm from 'src/magic/api/confirm';
import login from 'src/magic/api/login';
import logout from 'src/magic/api/logout';
import complete from 'src/magic/api/complete';
import refresh from 'src/magic/api/refresh';
import watch from 'src/magic/api/watch';

export default async function magicRoutes(req, res) {
  const { action } = req.query;
  if (req.method === 'GET') {
    switch (action) {
      case 'confirm':
        return confirm(req, res);

      default:
    }
  } else if (req.method === 'POST') {
    switch (action) {
      case 'login':
        return login(req, res);
      case 'complete':
        return complete(req, res);
      case 'refresh':
        return refresh(req, res);
      case 'logout':
        return logout(req, res);
      case 'watch':
        return watch(req, res);
      default:
    }
  }
  return res.status(400).end(`Error: HTTP ${req.method} is not supported for ${req.url}`);
}
