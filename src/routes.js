import { Router } from 'express';

const routes = new Router();

import Sc7010Controller from './app/controllers/Sc7010Controller';

// rota de teste
routes.get('/sc7010', Sc7010Controller.index);
