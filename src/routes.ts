import { Router } from 'express';
import MonitorController from './app/controllers/ModeloController'

const router = Router();

router.post('/cadastrar', MonitorController.cadastrar);    
router.get('/listar', MonitorController.listar);    
router.delete('/deletar/:id', MonitorController.deletar);    
router.put('/editar/:id', MonitorController.editar);    

export default router;
