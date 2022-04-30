const Pessoa = require('../models/Pessoa');

const findPessoasService = async () => {
  const Pessoas = await Pessoa.find();
  return Pessoas;
};

const findPessoaByIdService = async (id) => {
  const Pessoa = await Pessoa.findById(id);
  return Pessoa;
};

const createPessoaService = async (Pessoa) => {
  const newPessoa = await Pessoa.create(Pessoa);
  return newPessoa;
};

const updatePessoaService = async (id, Pessoa) => {
  const PessoaEdited = await Pessoa.findByIdAndUpdate(id, Pessoa);
  return PessoaEdited;
};

const deletePessoaService = async (id) => {
  return await Pessoa.findByIdAndDelete(id);
};

module.exports = {
  findPessoasService,
  findPessoaByIdService,
  createPessoaService,
  updatePessoaService,
  deletePessoaService,
};
