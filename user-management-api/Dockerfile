FROM node:18.18.0-slim

WORKDIR /app

COPY ./user-management-api/package*.json ./
RUN npm install

COPY ./user-management-api .

EXPOSE 4000
CMD [ "npm", "run", "start" ]
