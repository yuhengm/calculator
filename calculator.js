const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/* Parse data from HTML form */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Set up home route. When it is called, send html file to display.
 */
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

/* When submit button is triggered, this method will be called and executed */
app.post("/", function (req, res) {
  var w = Number(req.body.weight);
  var h = Number(req.body.height);

  var result = w / (h * h);
  res.send("Your BMI is " + result.toFixed(2));
});

/* Define route to spin up server */
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
