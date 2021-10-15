const express = require("express");
const app = express();
const users = require("./users.json");

// EXPRESSS FUNCTION FOR QUERIES

const getUsersFunction = (req, res) => {
  
  //Getting the parametres
  const page = req.query.page;
  const limit = req.query.limit;
  const filteredUsers = users.filter((u) => u.id >= page);
  res.send(filteredUsers.slice(0, limit));
};
const getUsersByIdFunction = (req, res) => {
  const userId = parseInt(req.params.userId);
  res.send(users.find((u) => u.id === userId));
};
// ENDPOINTS

app.get("/users", getUsersFunction);

app.get("/users/:userId", getUsersByIdFunction);

// Ports
const port= 3000;
app.listen(port, () => console.log("Server is up and running"))

