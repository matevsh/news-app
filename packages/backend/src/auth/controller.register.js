import { genSalt, hash } from 'bcrypt';
import { user } from '../shared/db/prisma.js';
import { isTaken, validator } from './facade.register.js';

export const authRegister = async (req, res) => {
  try {
    const { login, password } = req.body;

    await isTaken(login);
    await validator(login, password);

    const salt = await genSalt(10);
    const passwordHash = await hash(password, salt);

    await user.create({ data: { login, passwordHash } });

    res.status(200).json({
      message: '✅ User created successfully',
    });
  } catch (e) {
    res.status(406).json({ message: `${e}` });
  }
};
