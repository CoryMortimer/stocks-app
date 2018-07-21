FROM node:9.5.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package* ./
RUN npm install

COPY . .

CMD ["ng", "build", "--prod", "--aot", "--build-optimizer"]
