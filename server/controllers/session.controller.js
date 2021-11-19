const session = async (req, res) => {
  const sessionCheck = !!req.session.admin;
  try {
    if (sessionCheck) {
      res.json({ isAdmin: true, session: req.session.admin });
    } else {
      res.json({ isAdmin: false, session: {} });
    }
  } catch (error) {
    console.log(error);
    res.json({ isAdmin: false, session: {} });
  }
};

module.exports = session;
