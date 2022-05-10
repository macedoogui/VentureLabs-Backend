const mongoose = require('mongoose');
const PaletasService = require('../services/Paletas.service');

const findPaletasController = async (req, res) => {
  const allPaletas = await PaletasService.findPaletasService();

  if (allPaletas.length == 0) {
    return res
      .status(400)
      .send({ message: 'Não existe nenhuma Paleta cadastrada' });
  }

  res.send(allPaletas);
};

const findPaletaByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenPaleta = await PaletasService.findPaletaByIdService(idParam);

  if (!chosenPaleta) {
    return res.status(400).send({ message: 'Paleta não encontrada' });
  }

  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const Paleta = req.body;
  const newPaleta = await PaletasService.createPaletaservice(Paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const PaletaEdit = req.body;
  const updatePaleta = await PaletasService.updatePaletaservice(
    idParam,
    PaletaEdit,
  );

  res.send(updatePaleta);
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  await PaletasService.deletePaletaservice(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
