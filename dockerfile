#node block

FROM node:alpine3.18 as nodework

WORKDIR /url-shortening-app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


#nginx block

FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=nodework /url-shortening-app/build .

ENTRYPOINT [ "nginx","-g","daemon off;" ]