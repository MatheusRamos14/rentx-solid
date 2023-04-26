FROM node

WORKDIR /usr/rentx

ENV NODE_OPTIONS=--max_old_space_size=2048

COPY package.json package.json

RUN npm install

EXPOSE 3333

COPY . .

CMD ["npm", "run", "dev"]