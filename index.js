//require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = require("express")();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/hello", (req, res) => {
  const name = req.query.name || "World";
  res.send(`Hello ${name}`);
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
