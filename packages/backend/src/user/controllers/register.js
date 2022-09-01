import { genSalt, hash } from 'bcrypt';
import { user } from '../../shared/db/prisma.js';

const throwError = (msg) => { throw new Error(msg); };

const register = async (req, res) => {
  const { login, password } = req.body;

  try {
    if (!login || !password) throwError('invalid data');

    const loginExist = await user.count({ where: { login } });
    if (loginExist) throwError('login already exist');

    const salt = await genSalt(10);
    const passwordHash = await hash(password, salt);

    await user.create({ data: { login, passwordHash } });

    res.status(200).json({
      message: '✅ User created successfully',
    });
  } catch (e) {
    res.json({ message: `🔸 ${e}` });
  }
};

export default register;
