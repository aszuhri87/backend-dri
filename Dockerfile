FROM node:16.14.2-slim

WORKDIR /app

COPY ./package.json .
RUN npm cache clean --force
RUN npm install
COPY . .

EXPOSE 8080

CMD ["node","index.js","0.0.0.0","--port","8080"]

