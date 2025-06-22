FROM node:24.2.0-alpine AS builder

WORKDIR /ui

COPY package*.json .

RUN npm install

RUN npm install -g npm@latest

COPY . .

RUN npm run build

FROM nginx:stable-alpine

EXPOSE 80

COPY --from=builder /ui/dist /usr/share/nginx/html

