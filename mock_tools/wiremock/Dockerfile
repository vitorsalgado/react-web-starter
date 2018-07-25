FROM java:alpine

WORKDIR /wiremock
COPY wiremock*.jar ./
VOLUME /wiremock/data

EXPOSE ${WIREMOCK_PORT}

CMD java -jar wiremock-standalone-2.18.0.jar --root-dir=data --port=${WIREMOCK_PORT} --verbose
