import { Handler } from "express";

export const healthCheck: Handler = (_, res) => {  
  return res.send('API is working!');
};
