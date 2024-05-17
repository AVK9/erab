const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

const userEventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: emailRegexp,
    unique: true,
    required: [true, 'Email is required'],
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required'],
  },
  survey: {
    type: String,
    enum: ['Social media', 'Friends', 'Found myself'],
    required: [true, 'Survey is required'],
  },
});

userEventSchema.post('save', handleMongooseError);

const registerEventSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  dateOfBirth: Joi.string().required(),
  survey: Joi.string().required(),
});

const UserEvent = model('userEvent', userEventSchema);

module.exports = {
  UserEvent,
  registerEventSchema,
};
