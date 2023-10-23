import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', AlunoController.index);
router.post('/', loginRequired, AlunoController.store);
router.get('/:id', AlunoController.show);
router.put('/:id', loginRequired, AlunoController.update);
router.delete('/:id', loginRequired, AlunoController.delete);
export default router;
