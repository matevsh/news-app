import { user } from '../shared/db/prisma.js';

export const isTaken = async (login) => {
  const loginExist = await user.count({ where: { login } });
  if (loginExist) throw new Error('login already exist');
};

export const dataExist = (data) => {
  const { login, password } = data;

  if (!login || !password) {
    throw new Error('Invalid data');
  }
};

export const validator = (login, password) => {
  [login, password].forEach((x) => {
    if (x.includes(' ')) {
      throw new Error('Login, password cannot contain whitespace');
    }
  });
};
