import { Request, Response } from "express";
import { User } from "../models/user.model";
import { formValidation } from "../services/form-validation.service";

export class UserController {
    async register (req: Request, res: Response) {
        const { body } = req
        const formValid = await formValidation.validateForm(body, {
            email: 'required|email',
            name: 'required|minLength:3',
            phone_number: 'required|numeric|min:10'
        });
        if (!formValid.success) return res.status(400).send({ message: 'Formulario inválido', ...formValid });
        // validar si existencia
        const userExists = await User.findOne({ body })
        let user; 
        if (userExists) {
            user = userExists;
        } else {
            user = await (new User(body)).save();
        }
        res.status(200).send(user);
    }
}