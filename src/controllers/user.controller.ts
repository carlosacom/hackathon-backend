import { Request, Response } from "express";

export class UserController {
    async register (req: Request, res: Response) {
        res.status(200).send({ 'algo': 'algo' });
    }
}