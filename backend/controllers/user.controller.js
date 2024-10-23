import User from '../models/user.model.js';

export const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // TODO - Only return users that already have a conversation
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      '-password',
    );

    res.status(200).json(allUsers);
  } catch (error) {
    console.log('Error in getUsers controller: ', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// TODO - Implement search by username
