import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorlogger, logger } from './shared/logger';

const { port, database_url } = config;

const run = async () => {
  try {
    await mongoose
      .connect(database_url as string)
      .then(() => logger.info('database connected successfully'));

    app.listen(port, () => {
      logger.info(`server is running on port ${port}`);
    });
  } catch (error) {
    errorlogger.error(error);
  }
};
run().catch(error => errorlogger.error(error));
