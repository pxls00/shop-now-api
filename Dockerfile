FROM node:16.16.0

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . ./

ENV API_PORT=3000
ENV API_HOST='localhost'
ENV MONGODB_PASSWORD='abu.2006'
ENV API_MARKETPLACE_BASE_URL="/api-marketplace"
ENV API_MAIN_BASE_URL="/api-main"
ENV API_POINT_BASE_URL="/api-point"
ENV API_COMPANY_BASE_URL="/api-company"
ENV API_DOCS_BASE_URL="/docs"
ENV API_DOCS_MARKETPLACE_TITLE="API Marketplace Shop-now docs"
ENV API_DOCS_POINT_ADMIN_TITLE="API Point Admin Shop-now docs"
ENV API_DOCS_COMPANY_ADMIN_TITLE="API Company Admin Shop-now docs"
ENV EMAIL_HOST_PASSWORD="jsvykhgicjlghwmc"
ENV EMAIL_HOST_USER="shopnowhello@gmail.com"

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/main.js"]