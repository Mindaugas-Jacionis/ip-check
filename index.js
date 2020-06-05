const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  const remoteAddress = (req.connection && req.connection.remoteAddress) || "not available";
  const forwardedFor = (req.headers && req.headers["x-forwarded-for"]) || "not available";

  res.json({ remoteAddress, forwardedFor });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
