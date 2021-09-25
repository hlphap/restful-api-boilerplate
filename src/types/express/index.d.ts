import { JwtPayload } from '../jwt-payload.type';

declare global {
  namespace Express {
    export interface Request {
      jwtPayload: JwtPayload;
    }
  }
}