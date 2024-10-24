import User from '../models/user.model.js';
import Conversation from '../models/conversation.model.js';

// Get users with conversations.
export const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const conversations = await Conversation.find({
      members: loggedInUserId, // Find all conversations where the user is a member
    }).populate('members', '-password'); // Populate member details, excluding passwords

    const friends = [];
    conversations.forEach((conversation) => {
      conversation.members.forEach((member) => {
        if (
          member._id.toString() !== loggedInUserId.toString() &&
          !friends.some((friend) => friend._id.equals(member._id))
        ) {
          friends.push(member);
        }
      });
    });

    res.status(200).json(friends);
  } catch (error) {
    console.log('Error in getUsers controller: ', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Search by username.
export const getUserById = async (req, res) => {
  try {
    // Fetch user by ID
    const user = await User.findById(req.params._id).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log('Error in getUserById controller: ', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Search by username.
export const getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username }).select('-password');

    if (!user) return res.status(404).json({ error: 'User not found' });

    return res.status(200).json(user);
  } catch (error) {
    console.log('Error in getUserByUsername controller: ', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
