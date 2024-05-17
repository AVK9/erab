const express = require('express');
const ctrl = require('../controllers/eventsControllers.js');
const validateBody = require('../helpers/validateBody.js');
const schemas = require('../schemas/index.js');
const { isValId, authenticate } = require('../middlewares/index.js');

const eventsRouter = express.Router();

eventsRouter.get('/', ctrl.getAllEvents);
// contactsRouter.get('/', authenticate, ctrl.getAllContacts);
// eventsRouter.get('/:id', authenticate, isValId, ctrl.getOneContact);
// eventsRouter.delete('/:id', authenticate, isValId, ctrl.deleteContact);

// eventsRouter.post(
//   '/',
//   validateBody(schemas.createContactSchema),
//   authenticate,
//   ctrl.createContact
// );

module.exports = eventsRouter;
