const express = require("express");
const cors = require("cors");
const loginRoute = require("./Routes/loginRoute");
const promptRoute = require("./Routes/promptRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/login", loginRoute);
app.use("/api/roaster", promptRoute);

app.listen(process.env.PORT || 3001, () => {
  console.log("Backend running on port", process.env.PORT || 3001);
});
