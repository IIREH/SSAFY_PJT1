import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';

const auth = new Router();

auth.post('/register', authCtrl.register);
auth.post('/login', authCtrl.login);
auth.get('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);
auth.delete('/remove/:id', authCtrl.remove);
auth.patch('/update/:id', authCtrl.update);

export default auth;
