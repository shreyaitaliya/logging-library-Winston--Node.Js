const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(), // Include timestamp
    winston.format.json(),
    winston.format.splat(),
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log', level: 'info' }),
  ],
});
   
//one way to log the message
logger.log({
  level: 'info',                    // Level of the logging message
  message: 'Hey! Log something?' // Descriptive message being logged.
});

//two way to log the message
logger.info('%s', 'hello winston')



logger.error('something went wrong', {
  error: new Error("something went wrong")
});



