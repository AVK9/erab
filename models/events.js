const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const eventSchema = new Schema({
  title: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
  },
  event_date: {
    type: Date,
  },
  organizer: {
    type: String,
  },
  // owner: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'user',
  //   required: true,
  // },
});

eventSchema.post('save', handleMongooseError);

const Events = model('events', eventSchema);

module.exports = Events;
