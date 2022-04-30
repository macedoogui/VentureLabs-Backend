const express = require('express');
const router = express.Router();
const {
  validId,
  validObjectBody,
} = require('../middlewares/Pessoa.middleware');

const PessoasController = require('../controllers/Pessoas.controller');

router.get('/all-Pessoas', PessoasController.findPessoasController);

router.get(
  '/one-Pessoa/:id',
  validId,
  PessoasController.findPessoaByIdController,
);

router.post(
  '/create-Pessoa',
  validObjectBody,
  PessoasController.createPessoaController,
);

router.put(
  '/update-Pessoa/:id',
  validId,
  validObjectBody,
  PessoasController.updatePessoaController,
);

router.delete(
  '/delete-Pessoa/:id',
  validId,
  PessoasController.deletePessoaController,
);

module.exports = router;
