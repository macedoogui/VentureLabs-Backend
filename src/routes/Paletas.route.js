const express = require('express');
const router = express.Router();
const paletasController = require('../controllers/paletas.controller');
const controllerCarinho = require('../controllers/carrinho.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const express = require('express');
const router = express.Router();
const {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} = require('../middlewares/paleta.middleware');

const paletasController = require('../controllers/paletas.controller');


router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/all-paletas', paletasController.findPaletasController);

router.get(
  '/one-paleta/:id',
  validId,
  paletasController.findPaletaByIdController,
);

router.post(
  '/create-paleta',
  validObjectBody,
  paletasController.createPaletaController,
);

router.put(
  '/update-paleta/:id',
  validId,
  validObjectBody,
  paletasController.updatePaletaController,
);

router.delete(
  '/delete-paleta/:id',
  validId,
  paletasController.deletePaletaController,
);

router.get('/all-carrinho', controllerCarinho.findAllCarrinhoController);
router.post('/create-carrinho', validObjectBodyCarrinho, controllerCarinho.createManyItemsCarrinhoController);
router.delete(
  '/finish-carrinho',
  controllerCarinho.deleteAllItemsCarrinhoController,
);

module.exports = router;