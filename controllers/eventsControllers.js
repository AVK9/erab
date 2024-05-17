const Event = require('../models/events');
const { ctrlWrapper, HttpError } = require('../helpers');

const getAllEvents = async (req, res) => {
  // const { _id: owner } = req.user;
  // const { page = 1, limit = 10, favorite } = req.query;
  // const skip = (page - 1) * limit;
  const result = await Event.find();
  // if (favorite) {
  //   const favoriteFiltr = result.filter((contact) => contact.favorite === true);
  //   return res.status(200).json(favoriteFiltr);
  // }

  res.status(200).json(result);
};

const getOneEvents = async (req, res) => {
  const { id } = req.params;
  const result = await Event.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

const createEvents = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Event.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
  getOneEvents: ctrlWrapper(getOneEvents),

  createEvents: ctrlWrapper(createEvents),
};
