FROM node:15.14.0-buster-slim
WORKDIR /client

COPY package.json .

RUN npm rebuild node-sass
RUN yarn install

COPY . .

CMD ["yarn", "start:dev"]
