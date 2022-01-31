FROM node:16-slim as BUILDER

WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node:16-alpine

ARG NODE_ENV
WORKDIR /app
COPY --from=BUILDER /app ./
EXPOSE 3001
CMD [ "npm","start" ]