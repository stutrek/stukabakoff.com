FROM node:12-alpine

RUN npm install -g yarn

# Create app directory
WORKDIR /app

RUN yarn install

COPY . ./

RUN yarn install
RUN yarn build

EXPOSE 80

CMD yarn dokku
