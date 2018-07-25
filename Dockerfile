FROM node:8.11.3

WORKDIR /app
VOLUME /app

EXPOSE 3000

CMD npm start
