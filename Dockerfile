FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install
ADD . /usr/src/app

RUN npm run build

COPY . /usr/src/app

EXPOSE 4000
CMD [ "npm", "start" ]