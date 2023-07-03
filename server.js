const express = require("express");
const OSC = require("osc-js");
const app = express();
const port = 8383;
var osc = new OSC();
osc.open();

app.use(express.static("public"));
app.use(express.json());

app.get("/info", (req, res) => {
  res.status(200).json({ info: "preset text" });
});

app.post("/", (req, res) => {
  const { parcel } = req.body;
  console.log(parcel);
  var message = new OSC.Message("/m " + parcel);
  osc.send(message);
  if (!parcel) {
    return res.status(400).send({ status: "failed" });
  }
  res.status(200).send({ status: "received" });
});
app.listen(port, () => console.log("Server has started on port: ${port}"));
