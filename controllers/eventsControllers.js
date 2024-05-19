const Events = require('../models/events');
const { ctrlWrapper, HttpError } = require('../helpers');

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Events.find().skip(skip).limit(limit).populate();

  res.status(200).json(result);
};

const getOneEvents = async (req, res) => {
  const { id } = req.params;
  const result = await Events.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

const createEvents = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Events.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
  getOneEvents: ctrlWrapper(getOneEvents),

  createEvents: ctrlWrapper(createEvents),
};
