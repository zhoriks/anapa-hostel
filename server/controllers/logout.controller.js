const logout = async (req, res) => {
  // eslint-disable-next-line consistent-return
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.clearCookie('user_sid');
  });
};

module.exports = {
  logout,
};
