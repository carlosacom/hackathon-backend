import { niceNames, extendMessages, Validator, addCustomMessages } from 'node-input-validator';

class FormValidation {
    constructor() {
        extendMessages({
            required: 'El Valor de :attribute es requerido.',
            email: 'El correo tiene que ser válido.',
        });
        addCustomMessages({
            'password.same' : 'Contraseñas no coinciden.'
        });
        niceNames({
            password: 'Contraseña',
            email: 'Correo',
            name: 'Nombre',
            surname: 'Apellidos',
        });
    }
    async validateForm(body: any, validation: any) {
        const validate = new Validator(body, validation);
        return {
            success: await validate.check(),
            errors: validate.errors
        };
    }
}

export const formValidation = new FormValidation()