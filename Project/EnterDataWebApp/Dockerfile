FROM node:16-alpine

WORKDIR /EnterDataWebApp

ADD package*.json ./

RUN npm install

ADD . .

#expose the port
EXPOSE 3000

#CMD ["node","index.js"]
CMD ["npm","start"]
