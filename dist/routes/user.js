"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();
// Não deve existir em um sistema real!
router.get('/', _UserController2.default.index); // Lista os usuarios
router.get('/:id', _UserController2.default.show); // Lista um usuario

router.post('/', _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update); // Remover o ID, pois o usuario não pode ter acesso a mudanças de outros users
router.delete('/', _loginRequired2.default, _UserController2.default.delete);// Remover o ID, pois o usuario não pode ter acesso ao delete de outros users
exports. default = router;

/**
 * Métodos de controller
 * Index -> Lista todos os usuarios = GET
 * store/create -> cria um novo usuario = POST
 * delete ->  apaga um usuario = DELETE
 * show -> mostra um usuário = GET
 * update -> atualiza um usuário = PUT(substitui todo o objeto)/PATCH(Altera so um valor)
 */
