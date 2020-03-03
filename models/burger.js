const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(item, cb) {
    orm.insertOne("burgers", item, res => {
      cb(res);
    });
  },
  updateOne: function(colsToUpdate, id, cb) {
    orm.updateOne("burgers", colsToUpdate, id, res => {
      cb(res);
    });
  }
};

module.exports = burger;
