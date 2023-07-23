FROM node:16.16.0-alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . ./

ENV API_PORT=3000
ENV API_HOST='localhost'
ENV MONGODB_PASSWORD='abu.2006'
ENV API_BASE_URL="/api"
ENV API_DOCS_URL="/docs"
ENV EMAIL_HOST_PASSWORD="jsvykhgicjlghwmc"
ENV EMAIL_HOST_USER="shopnowhello@gmail.com"

RUN yarn build

EXPOSE 3000

CMD ["yarn", "prod"]