FROM node:16.16.0-alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 3000

CMD ["yarn", "prod"]