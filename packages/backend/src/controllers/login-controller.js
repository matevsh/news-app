const loginController = (req, res) => {
  req.session.user = { login: 'mati', message: 'siema jestem mati' };
  res.json({ message: 'Pomyślnie zalogowano na użytkownika mati' });
};

const profileController = (req, res) => {
  const { user } = req.session;

  if (user) {
    res.json({
      xd: `jesteś zalogowany na użytkownika ${user.login}`,
      ...user,
    });
  }
  res.json({
    message: 'nie jesteś zalogowany',
  });
};

export { loginController, profileController };
