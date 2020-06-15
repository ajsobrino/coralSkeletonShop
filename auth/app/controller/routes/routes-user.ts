import {Router,Request,Response} from 'express';
const controller =require('../user-controller');
const bodyParser = require('body-parser');

const router = Router();

router.use(bodyParser.json());
router.get('/user',controller.login);
router.post('/user',controller.create);
router.patch('/user',controller.update);
router.delete('/user',controller.remove);
router.options('/user',controller.option);
router.get('/user/:id/:fuck',controller.login);

//console.log(req.params);
//console.log(req.query);

export default router;