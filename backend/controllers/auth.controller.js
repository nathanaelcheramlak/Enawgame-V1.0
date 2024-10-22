export const signUp = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
  } catch (error) {
    console.error("Signup Failed: ", error);
  }
};

export const login = (req, res) => {
  res.send("Login User");
};

export const logout = (req, res) => {
  res.send("Logout User");
};
