FROM node:18-alpine AS builder
RUN apk add alpine-sdk
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
COPY .next ./.next
CMD ["npm", "run", "start"]



