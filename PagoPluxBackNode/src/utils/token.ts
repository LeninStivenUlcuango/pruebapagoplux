import {JwtPayload, verify} from "jsonwebtoken"

const secretKey=process.env.SCRET_KEY_TOKEN;

export default function verifyToken(req:any, res:any, next:any) {
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token not provied" });
    }
    try {
      const payload = verify(token, secretKey!) as JwtPayload;
      req.username = payload.username;
      next();
    } catch (error) {
      return res.status(403).json({ message: "Token not valid" });
    }
  }