FROM node:20-buster-slim

WORKDIR /build

COPY . /build

RUN npm install

RUN npm run build && mkdir /app && cp -r ./build /app

WORKDIR /app

RUN npm install -g serve

CMD serve -s ./build