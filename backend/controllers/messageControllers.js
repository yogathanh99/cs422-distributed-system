const Message = require('../models/messagesModel');

exports.getMessages = async (req, res) => {
  const messages = await Message.find();

  res.status(201).json({
    status: 'success',
    result: messages.length,
    data: {
      messages,
    },
  });
};

exports.postMessage = async (req, res) => {
  const newMessage = await Message.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      message: newMessage,
    },
  });
};

exports.getMessage = async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  } else {
    res.status(201).json({
      status: 'success',
      data: {
        message,
      },
    });
  }
};

exports.updateMessage = async (req, res) => {
  const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!message) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  } else {
    res.status(201).json({
      status: 'success',
      data: {
        message,
      },
    });
  }
};

exports.deleteMessage = async (req, res) => {
  const message = await Message.findByIdAndDelete(req.params.id);

  if (!message) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  } else {
    res.status(201).json({
      status: 'success',
      message: 'Delete successful',
      data: null,
    });
  }
};
