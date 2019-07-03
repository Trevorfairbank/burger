const connection = require("./connection.js");


const orm = {

  selectAll: function (table, cb) {
    const queryString = "SELECT*FROM ??";
    connection.query(queryString, table, (err, result) => {
      if (err) throw err;
      cb(result);
    })
  },


  insertOne: function (table, item, cb) {
    let queryString = "INSERT INTO ?? SET ?";

    connection.query(queryString,[table,item], (err, result) => {
      if (err) throw err;
      cb(result);
    })
  },

  updateOne: function (table, colsToUpdate, id, cb) {
    let queryString = "UPDATE ?? SET ? WHERE id = ?";
    connection.query(queryString,[table,colsToUpdate, id], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  }

}

// orm.selectAll("burgers", (results) => {
//   console.log(results);
// });

// orm.insertOne("burgers", {burger_name: "Big 'Ol Burger"}, (results) => {
//   console.log(results);
// })

// orm.updateOne("burgers", {burger_name: "Spicy Chicken Patty Burger"}, 2, (results) => {
//   console.log(results);
// })

module.exports = orm;