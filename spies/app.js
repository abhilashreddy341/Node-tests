const db = require('./db.js');
module.exports.sampleSpie = (email,password) => {
  db.saveUser({email,password});
}
