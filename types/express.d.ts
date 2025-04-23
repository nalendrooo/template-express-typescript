declare namespace Express {
    export interface Request {
       token?: {
           gid?: string
       }
    }
 }