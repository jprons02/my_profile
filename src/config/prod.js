//prod.js = production keys here
//These keys are all stored as environment variables within heroku
//using .env

export default {
  serviceID: process.env.REACT_APP_SERVICE_ID,
  templateID: process.env.REACT_APP_TEMPLATE_ID,
  userID: process.env.REACT_APP_USER_ID,
};
