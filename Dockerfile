# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=24.2.0

FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /ui

COPY package*.json .

RUN npm install
RUN npm install -g npm@latest

COPY . .

RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /ui/dist /usr/share/nginx/html

