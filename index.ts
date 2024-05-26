import winston from "winston";

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });

logger.error(`I meant to log this!!!`);

const childLogger = logger.child({ requestId: '451', foo: 'bar' });

childLogger.error(`I meant to log this!!!`);
