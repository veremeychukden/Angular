FROM node:latest

MAINTAINER veremeychukden

COPY . /var/www
WORKDIR /var/www

RUN npm install
RUN npm install -g @angular/cli

ENTRYPOINT ["ng","serve","--host","0.0.0.0"]



