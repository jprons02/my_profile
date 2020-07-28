//prod.js = production keys here
//These keys are all stored as environment variables within heroku
//using .env

export default {
  serviceID: process.env.serviceID,
  templateID: process.env.templateID,
  userID: process.env.userID,
};
