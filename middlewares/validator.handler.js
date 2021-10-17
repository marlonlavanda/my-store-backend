// Middleware to handle the validations
const boom = require('@hapi/boom');

function validatorHandler (schema, property) {
  return (req, res, next) => {
    // the data comes frome the request
    const data = req[property];
    // abortEarly = false makes Joi sends all error at the same times
    const { error } = schema.validate(data, { abortEarly: false });
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = { validatorHandler }
