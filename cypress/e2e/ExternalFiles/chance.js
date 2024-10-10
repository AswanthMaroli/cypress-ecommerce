const Chance = require('chance');
const chance = new Chance();

const generateRandomUserData = () => {

  const username = chance.word(); 
  const email = `${username}@gmail.com`;
  return {
    firstname: chance.first(),
    lastname: chance.last(),
    email: email,
    password: chance.string({ length: 8, alpha: true, numeric: true }),
  };
};

module.exports = {
  generateRandomUserData,
};
