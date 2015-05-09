FROM node:latest

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -yq ruby && npm install -g bower gulp && gem install --no-rdoc --no-ri sass

ENV RUBYOPT=-Eutf-8

VOLUME /cervajs
 
WORKDIR /cervajs

CMD gulp

EXPOSE 3000