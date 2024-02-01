import express from 'express';

import authentication from './authentication';
import users from './users';
import healthcheck from './healthcheck';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  healthcheck(router);
  return router;
};
