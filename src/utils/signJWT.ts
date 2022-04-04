import jwt from 'jsonwebtoken'

const signJWT = (payload: {}) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string)
}

export default signJWT
