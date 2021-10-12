FROM node:16-alpine

RUN mkdir /dist
COPY ./package.json /dist
WORKDIR /dist
RUN npm install

COPY ./dist /dist

EXPOSE 3000
CMD ["node", "index.js"]
