import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// Não deve existir em um sistema real!
router.get('/', UserController.index); // Lista os usuarios
router.get('/:id', UserController.show); // Lista um usuario

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update); // Remover o ID, pois o usuario não pode ter acesso a mudanças de outros users
router.delete('/', loginRequired, UserController.delete);// Remover o ID, pois o usuario não pode ter acesso ao delete de outros users
export default router;

/**
 * Métodos de controller
 * Index -> Lista todos os usuarios = GET
 * store/create -> cria um novo usuario = POST
 * delete ->  apaga um usuario = DELETE
 * show -> mostra um usuário = GET
 * update -> atualiza um usuário = PUT(substitui todo o objeto)/PATCH(Altera so um valor)
 */
