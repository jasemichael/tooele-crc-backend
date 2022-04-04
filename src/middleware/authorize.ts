import { verifyJWT } from '../utils'

const authorize = function (req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1]
    try {
      verifyJWT(token)
      next()
    } catch (err) {
      res.send('Unable to authorize: Invalid token!')
    }
  } else {
    res.send('Unable to authorize: No authentication was sent!')
  }
}

export default authorize
