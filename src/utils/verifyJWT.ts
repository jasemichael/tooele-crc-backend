import jwt from 'jsonwebtoken'

const verifyJWT = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string)
}

export default verifyJWT
