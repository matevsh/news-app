export const userProfile = (req, res) => {
  const { user } = req.session;

  const response = user || { message: 'You\'re not logged in' };
  res.status(200).json(response);
};
