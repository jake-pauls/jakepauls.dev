FROM golang:1.16.3-alpine3.12 AS build-stage
WORKDIR /server/src

COPY . .
RUN go build -o build/app

FROM alpine:latest AS server-env
WORKDIR /bin

COPY --from=build-stage /server/src/build .

EXPOSE 4040
CMD ["./app"]