const express = require("express");
const prisma = require("../lib/prisma");

const router = express.Router();

// GET /clients — tous les clients (filtres optionnels : ?status=actif&sector=Finance)
router.get("/", async (req, res) => {
  try {
    const { status, sector } = req.query;
    const where = {};

    if (status) where.status = status;
    if (sector) where.sector = sector;

    const clients = await prisma.client.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
});

// GET /clients/:id — un client par id
router.get("/:id", async (req, res) => {
  try {
    const client = await prisma.client.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!client) return res.status(404).json({ error: "Client introuvable" });
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
});

// POST /clients — créer un client
router.post("/", async (req, res) => {
  try {
    const { company, contact, email, phone, sector, services } = req.body;

    if (!company || !contact || !email) {
      return res.status(400).json({ error: "company, contact et email sont requis" });
    }

    const client = await prisma.client.create({
      data: {
        company,
        contact,
        email,
        phone: phone || "",
        sector: sector || "",
        services: services || [],
        status: "actif",
      },
    });

    res.status(201).json(client);
  } catch (err) {
    if (err.code === "P2002") {
      return res.status(409).json({ error: "Cet email existe déjà" });
    }
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
});

// PUT /clients/:id — modifier un client
router.put("/:id", async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Le body JSON est requis" });
    }

    const client = await prisma.client.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });

    res.json(client);
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).json({ error: "Client introuvable" });
    }
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
});

// DELETE /clients/:id — supprimer un client
router.delete("/:id", async (req, res) => {
  try {
    const client = await prisma.client.delete({
      where: { id: Number(req.params.id) },
    });

    res.json({ message: "Client supprimé", client });
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).json({ error: "Client introuvable" });
    }
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
});

module.exports = router;
