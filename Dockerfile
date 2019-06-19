FROM node:11-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY index.js .

EXPOSE 3000
CMD [ "npm", "start" ]
