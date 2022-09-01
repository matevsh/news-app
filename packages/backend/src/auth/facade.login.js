import { genSalt, hash, compare } from 'bcrypt';

export const comparePassword = async (user, password) => {
  const hashSalt = await genSalt(10);
  const passwordHash = await hash(password, hashSalt);

  return await compare(user.passwordHash, passwordHash);
};
