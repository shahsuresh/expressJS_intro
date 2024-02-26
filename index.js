// import express from "express";

// const app = express();
// app.use("/", (req, res) => {
//   return res.send("<h1>Hello Suresh</h1>");
// });

// // network port allocate
// const port = 8000;

// app.listen(port, () => {
//   console.log(`App is listening on port ${port}`);
// });

import express from "express";

const app = express();
app.get("/users", (req, res) => {
  let userList = ["Suresh", "Santosh", "Ktm"];

  return res.status(200).send(userList);
});

app.get("/student/details", (req, res) => {
  let studentDetails = {
    fname: "Suresh",
    lname: "Shah",
    address: " Kathmandu",
  };

  return res.status(200).send(studentDetails);
});

// network port allocate
const port = 8000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
