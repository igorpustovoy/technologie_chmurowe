FROM node:16.9.0-alpine

WORKDIR /opt/app

COPY ./package.json .

RUN npm i

COPY . .

CMD ["npm", "start"]