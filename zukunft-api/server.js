require("dotenv").config({ path: require("path").resolve(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");
const prisma = require("./lib/prisma");
const clientsRouter = require("./routes/clients");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/clients", clientsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Zukunft API is running" });
});

const server = app.listen(PORT, () => {
  console.log(`Zukunft API → http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  server.close();
});
