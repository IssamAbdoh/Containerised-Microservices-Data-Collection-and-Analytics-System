FROM node:16-alpine

WORKDIR /EnterDataWebApp

ADD package*.json ./

RUN npm install

ADD . .

#CMD ["node","index.js"]
CMD ["npm","start"]
