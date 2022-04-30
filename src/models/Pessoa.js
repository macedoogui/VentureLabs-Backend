const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: Number, required: true },
  cep: { type: Number, required: true },
  endereço1: { type: String, required: true },
  endereço2: { type: String, required: true },
  nascimento: { type: String, required: true },
  cpf: { type: Number, required: true },
  renda: { type: Number, required: true },
});

const Pessoa = mongoose.model('Pessoas', PessoaSchema);

module.exports = Pessoa;


