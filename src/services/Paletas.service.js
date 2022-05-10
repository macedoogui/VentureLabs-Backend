const Paleta = require('../models/Paleta');

const findPaletasService = async () => {
  const Paletas = await Paleta.find();
  return Paletas;
};

const findPaletaByIdService = async (id) => {
  const Paleta = await Paleta.findById(id);
  return Paleta;
};

const createPaletaService = async (Paleta) => {
  const newPaleta = await Paleta.create(Paleta);
  return newPaleta;
};

const updatePaletaService = async (id, Paleta) => {
  const PaletaEdited = await Paleta.findByIdAndUpdate(id, Paleta);
  return PaletaEdited;
};

const deletePaletaService = async (id) => {
  return await Paleta.findByIdAndDelete(id);
};

module.exports = {
  findPaletasService,
  findPaletaByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
