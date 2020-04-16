const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Message must have title'],
    unique: true,
  },
  info: String,
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
