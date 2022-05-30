FROM node:alpine

WORKDIR /opt/express_server

COPY package.json .

RUN npm i

COPY . .

ENV PORT=5000

CMD ["node", "index"]