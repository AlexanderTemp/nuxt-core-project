import * as z from 'zod';

const REQUIRED = 'Este campo es obligatorio';

export const EmptyString = z.string().nonempty({ message: REQUIRED });
