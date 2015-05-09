FROM iojs:1.2

ENV DEBIAN_FRONTEND noninteractive

RUN npm install -g gulp

VOLUME /cervajs

WORKDIR /cervajs

ENV DEBUG=cervajs,cervajs:*

CMD gulp

EXPOSE 8082
