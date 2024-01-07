FROM node:alpine as builder
WORKDIR /app

COPY ./ui/package*.json ./

RUN npm install
COPY ./ui .

RUN npm run build

FROM nginx:1.16.0-alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=builder app/dist .

COPY ./ui/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]