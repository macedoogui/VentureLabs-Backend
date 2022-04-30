const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const Pessoa = req.body;

  if (
    !Pessoa ||
    !Pessoa.sabor ||
    !Pessoa.descricao ||
    !Pessoa.foto ||
    !Pessoa.preco
  ) {
    return res.status(400).send({ message: 'Envie todos os campos do cadastro' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
