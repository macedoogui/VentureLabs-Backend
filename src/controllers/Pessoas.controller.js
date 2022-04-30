const mongoose = require('mongoose');
const PessoasService = require('../services/Pessoas.service');

const findPessoasController = async (req, res) => {
  const allPessoas = await PessoasService.findPessoasService();

  if (allPessoas.length == 0) {
    return res
      .status(400)
      .send({ message: 'Não existe nenhuma Pessoa cadastrada' });
  }

  res.send(allPessoas);
};

const findPessoaByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenPessoa = await PessoasService.findPessoaByIdService(idParam);

  if (!chosenPessoa) {
    return res.status(400).send({ message: 'Pessoa não encontrada' });
  }

  res.send(chosenPessoa);
};

const createPessoaController = async (req, res) => {
  const Pessoa = req.body;
  const newPessoa = await PessoasService.createPessoaservice(Pessoa);
  res.status(201).send(newPessoa);
};

const updatePessoaController = async (req, res) => {
  const idParam = req.params.id;
  const PessoaEdit = req.body;
  const updatePessoa = await PessoasService.updatePessoaservice(
    idParam,
    PessoaEdit,
  );

  res.send(updatePessoa);
};

const deletePessoaController = async (req, res) => {
  const idParam = req.params.id;
  await PessoasService.deletePessoaservice(idParam);
  res.send({ message: 'Pessoa deletada com sucesso!' });
};

module.exports = {
  findPessoasController,
  findPessoaByIdController,
  createPessoaController,
  updatePessoaController,
  deletePessoaController,
};
