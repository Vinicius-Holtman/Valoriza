import { Request, Response ,NextFunction} from "express";
import { verify } from "jsonwebtoken"

interface IPayLoad {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    // receber o token
        const authToken = req.headers.authorization

        //validar se token esta preenchido
        if (!authToken) {
            return res.status(401).end();
        }

        const [, token] = authToken.split(" ");

        try {
            //validar se token e valido
            const { sub } = verify( token, "3b741ccec5f827424cfef2e8fed0cfd7") as IPayLoad;
            req.user_id = sub;

            return next();
        } catch (err) {
            return res.status(401).end();
        }
        
        //recuperar informacoes usuario
}