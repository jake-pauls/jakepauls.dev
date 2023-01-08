FROM node:16.11.0-buster-slim
WORKDIR /client

COPY package.json .

RUN yarn install

COPY . .

CMD ["yarn", "start:dev"]
