FROM node:alpine

WORKDIR /opt/app

COPY ./package.json .

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]