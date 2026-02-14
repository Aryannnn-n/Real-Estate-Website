exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@gmail.com' && password === '1234') {
    return res.json({ success: true });
  }

  res.status(401).json({ success: false, message: 'Invalid Credentials' });
};
