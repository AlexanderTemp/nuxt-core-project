import * as z from 'zod';
import { EmptyString } from '../base';

export const LoginValidationSchema = z.object({
  email: EmptyString.email({ message: 'El correo introducido es inválido' }),
  password: EmptyString.min(6, {
    message: 'La contraseña debe tener al menos 6 caracteres'
  })
});

export type LoginSchema = z.output<typeof LoginValidationSchema>;
