import { user } from './prisma.js';

export const findByLogin = async (login) => (
  await user.findUnique({ where: { login } })
);
