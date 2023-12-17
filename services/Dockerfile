FROM swaggerapi/swagger-ui:latest

COPY /documentation/openapi.json /

ENV API_KEY="**None**" \
    SWAGGER_JSON="/openapi.json" \
    PORT=3002 \
    PORT_IPV6="" \
    BASE_URL="/health" \
    SWAGGER_JSON_URL=""

EXPOSE 3002