FROM node:16-alpine

RUN mkdir /dist
COPY ./dist /dist
COPY ./package.json /dist
WORKDIR /dist
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]
