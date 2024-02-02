const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const DATA_PATH = path.join(__dirname, "..", "data", "clients.json");

function readClients() {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeClients(clients) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(clients, null, 2), "utf-8");
}

// GET /clients — tous les clients (filtres optionnels : ?status=actif&sector=Finance)
router.get("/", (req, res) => {
  let clients = readClients();
  const { status, sector } = req.query;

  if (status) clients = clients.filter((c) => c.status === status);
  if (sector) clients = clients.filter((c) => c.sector === sector);

  res.json(clients);
});

// GET /clients/:id — un client par id
router.get("/:id", (req, res) => {
  const clients = readClients();
  const client = clients.find((c) => c.id === Number(req.params.id));

  if (!client) return res.status(404).json({ error: "Client introuvable" });
  res.json(client);
});

// POST /clients — créer un client
router.post("/", (req, res) => {
  const clients = readClients();
  const { company, contact, email, phone, sector, services } = req.body;

  if (!company || !contact || !email) {
    return res.status(400).json({ error: "company, contact et email sont requis" });
  }

  const newClient = {
    id: clients.length ? Math.max(...clients.map((c) => c.id)) + 1 : 1,
    company,
    contact,
    email,
    phone: phone || "",
    sector: sector || "",
    services: services || [],
    status: "actif",
    createdAt: new Date().toISOString().split("T")[0],
  };

  clients.push(newClient);
  writeClients(clients);
  res.status(201).json(newClient);
});

// PUT /clients/:id — modifier un client
router.put("/:id", (req, res) => {
  const clients = readClients();
  const index = clients.findIndex((c) => c.id === Number(req.params.id));

  if (index === -1) return res.status(404).json({ error: "Client introuvable" });

  const updated = { ...clients[index], ...req.body, id: clients[index].id };
  clients[index] = updated;
  writeClients(clients);
  res.json(updated);
});

// DELETE /clients/:id — supprimer un client
router.delete("/:id", (req, res) => {
  let clients = readClients();
  const index = clients.findIndex((c) => c.id === Number(req.params.id));

  if (index === -1) return res.status(404).json({ error: "Client introuvable" });

  const [deleted] = clients.splice(index, 1);
  writeClients(clients);
  res.json({ message: "Client supprimé", client: deleted });
});

module.exports = router;
