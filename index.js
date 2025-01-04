import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));
function passwordCheck(req, res, next) {
  const password = req.body.password;
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
