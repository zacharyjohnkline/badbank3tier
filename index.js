const express = require("express");
const app = express();
const cors = require("cors");
const dal = require("./dal.js");

app.use(express.static("public"));
app.use(cors());

app.get(
  "/account/create/:name/:email/:password/:favoriteColor",
  function (req, res) {
    dal
      .create(
        req.params.name,
        req.params.email,
        req.params.password,
        req.params.favoriteColor
      )
      .then((user) => {
        console.log(user);
        res.send(user);
      });
  }
);

// app.post("/login/:email/:password", async function (req, res) {
//   try {
//     // check if the user exists
//     const user = await user.findOne({ email: req.body.email });
//     if (user) {
//       //check if password matches
//       const result = req.body.password === user.password;
//       if (result) {
//         res.render("secret");
//       } else {
//         res.status(400).json({ error: "password doesn't match" });
//       }
//     } else {
//       res.status(400).json({ error: "User doesn't exist" });
//     }
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// });
app.get("/login/:email/:password", function (req, res) {
  dal.login(req.params.email, req.params.password).then((user) => {
    console.log(user);
    if (user) {
      if (
        req.params.email === user.email &&
        req.params.password === user.password
      ) {
        res.send(user);
        console.log(`${user.name} is now logged in!`);
      } else if (
        req.params.email === user.email &&
        req.params.password !== user.email
      ) {
        res.send("Wrong password!");
        console.log("Wrong password!");
      }
    } else {
      res.send("Wrong email!");
      console.log("Wrong email!");
    }
  });
});

app.get("/account/alldata", function (req, res) {
  dal.all().then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

var port = 3000;
app.listen(port, () => {
  console.log("Running on port: " + port);
});
