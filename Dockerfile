FROM node:12

WORKDIR /app

COPY ./package.json .
RUN npm cache clean --force
RUN npm install
COPY . .

EXPOSE 8080

CMD ["node","server.js","--prefix","master","--host","0.0.0.0","--port","8080"]
