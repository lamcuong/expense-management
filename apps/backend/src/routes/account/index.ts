import container from '@backend/container';
import { AccountController } from '@backend/controllers/account';
import { auth } from '@backend/middleware/auth';
import express from 'express';

const route = express();
const controller = container.get(AccountController);
route.post('/create', auth, controller.create);
route.put('/update/', auth, controller.update);
route.get('/detail/:account_id', auth, controller.detail);
route.delete('/delete/:account_id', auth, controller.delete);
route.get('/list', auth, controller.list);
export default route;
