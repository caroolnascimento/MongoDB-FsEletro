const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// model
require("./data/models/Contato");
const Contato = mongoose.model("contato");
// Conexão DB
require("./db/connect");

app.use(express.json());

app.get("/", async (req, res) => {
  const ContatoResponse = await Contato.find();
  const ContatoJson = await ContatoResponse;

  res.json(ContatoJson);
});

app.post("/contato", async (req, res) => {
  const validate = await Contato.findOne({ mensagem: req.body.mensagem });
  if (validate) {
    return res.json({
      message: "Mensagem Enviada!",
    });
  
      };
});

app.listen(3333);