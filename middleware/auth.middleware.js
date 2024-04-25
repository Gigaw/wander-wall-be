import jwt from "jsonwebtoken";

const { sign, verify } = jwt;

export default function authMiddleware(req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    // console.log(req.headers.authorization)
    console.log(process.env.TOKEN_SECRET)
    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: "Not authorized" });
  }
}
