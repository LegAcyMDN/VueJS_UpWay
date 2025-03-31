FROM node:19

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

EXPOSE 8080
CMD ["node", "server.js"]
