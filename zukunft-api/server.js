const express = require("express");
const cors = require("cors");
const clientsRouter = require("./routes/clients");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/clients", clientsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Zukunft API is running" });
});

app.listen(PORT, () => {
  console.log(`Zukunft API → http://localhost:${PORT}`);
});
