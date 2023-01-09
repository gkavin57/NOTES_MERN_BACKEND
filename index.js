const express = require("express");
const app = express();
var cors = require("cors");
require("./src/Connection/Connection");
const noteRouter = require("./src/Routes/noteRouter");
const userRouter = require("./src/Routes/userRouter");

//Middleware;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes;
app.use("/users", userRouter);
app.use("/api/notes", noteRouter);

//Port Listing;
const PORT = process.env.PORT;
app.listen(process.env.PORT || PORT, () => {
  console.log("Port is Running on " + PORT);
});

app.get("/", (req, res) => {
  console.log("hello 13");
});
