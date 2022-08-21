const loginController = (req, res) => {
  res.json({ ...req.body });
  // if (!login) return res.json({ message: 'Musisz podać login aby się zalogować' });
  //
  // req.session.user = { login, description: `siema jestem ${login}` };
  // res.json({ message: `Pomyślnie zalogowano na użytkownika ${login}` });
};

const profileController = (req, res) => {
  const { user } = req.session;

  if (user) {
    return res.json({
      message: `jesteś zalogowany na użytkownika ${user.login}`,
      ...user,
    });
  }
  res.json({
    message: 'nie jesteś zalogowany',
  });
};

export { loginController, profileController };
