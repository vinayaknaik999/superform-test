import {z} from 'zod';

export const userSchema = z.object({
  id:z.string().regex(/^d+$/),
  name:z.string().min(2),
  email:z.string().email()
})