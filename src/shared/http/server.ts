import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import AppError from '@shared/errors/AppError';
import '../typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/** Middleware de Error */
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error.',
    });
  }
);

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server is running on port ${port} 🤠`);
});
