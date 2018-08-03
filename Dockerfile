FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package-lock.json /usr/src/app/
RUN npm ci && npm cache clean --force
COPY . /usr/src/app

CMD [ "npm", "start" ]