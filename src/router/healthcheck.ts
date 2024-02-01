import express from 'express';

import { healthCheck } from '../controllers/';

export default (router: express.Router) => {
  router.get('/healthcheck', healthCheck);
};
