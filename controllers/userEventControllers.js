const { UserEvent } = require('../models/userevent.js');
const { ctrlWrapper, HttpError } = require('../helpers/index.js');

const createEventSubscribe = async (req, res) => {
  // const { _id: owner } = req.user;
  const result = await UserEvent.create({ ...req.body });
  res.status(201).json(result);
};

module.exports = {
  createEventSubscribe: ctrlWrapper(createEventSubscribe),
};
