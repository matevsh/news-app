import { findByLogin } from '../shared/db/utills.js';
import { dataExist } from './facade.register.js';
import { comparePassword } from './facade.login.js';

export const authLogin = async (req, res) => {
  try {
    dataExist(req.body);

    const { login, password } = req.body;
    const user = await findByLogin(login);

    const passwordCorrectly = (
      await comparePassword(user, password));

    if (passwordCorrectly) {
      req.session.user = user;
    }
  } catch (e) {
    res.status(403).json(`${e}`);
  }
};

export const logout = (req, res) => {
  req.session.destroy();
  res.status(200).json({
    message: 'logged out successfully',
  });
};
