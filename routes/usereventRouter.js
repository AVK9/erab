const express = require('express');
const validateBody = require('../helpers/validateBody');
const schemas = require('../models/userevent');
const ctrl = require('../controllers/userEventControllers');

const usereventRouter = express.Router();

usereventRouter.post(
  '/register',
  validateBody(schemas.registerEventSchema),
  ctrl.createEventSubscribe
);
// eventRouter.get('/register', ctrl.verifyEmail);

module.exports = usereventRouter;
