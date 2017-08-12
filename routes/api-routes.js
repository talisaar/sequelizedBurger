var db = require("../models");

var dbBurgers = db.burger;

module.exports = function(app) {

app.get("/", function(req, res) {
  // burger.selectAll(function(data) {
  //   var allburgers = {
  //     burgers: data
  //   };
  //   console.log(allburgers);
  //   res.render("index", allburgers);
  // });

db.burger.findAll({}).then(function(data) {
      // res.json(dbBurger);
      console.log(data);

       var allburgers = {
      burgers: data
    };
      res.render("index", allburgers);
    });

});


app.post("/", function(req, res) {
  // burger.insertOne([
  //   "name"
  // ], [
  //   req.body.name
  // ], function() {
  //   res.redirect("/");
  // });
console.log(req.body.name);

db.burger.create({
	name:req.body.name
}).then(function() {
      res.redirect("/");
    });


});

app.put("/:id", function(req, res) {
  // var condition = "id = " + req.params.id;
  // console.log("condition", condition);

  // burger.updateOne({
  //   devoured: req.body.devoured
  // }, condition, function() {
  //   res.redirect("/");
  // });

  db.burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(function(dbBurger) {
      res.redirect("/");
    });
});



};