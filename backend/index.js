const express = require("express");
const cors = require("cors");
const checkOut = require("./routes/checkOut");
const app = express();
app.use(cors());
const port = 8000;
app.use(express.json());

// checkOut MiddleWare
app.use("/", checkOut);

app.listen(port, (req, res) => {
  console.log(`Server listen on Port ${port}`);
});
