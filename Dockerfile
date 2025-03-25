FROM node:19 AS build

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

FROM nginx

WORKDIR /app

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/
