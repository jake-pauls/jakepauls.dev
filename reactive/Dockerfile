FROM node:15.12.0-alpine3.10
WORKDIR /client

COPY package.json .

RUN yarn install

COPY . .

CMD ["yarn", "start:dev"]