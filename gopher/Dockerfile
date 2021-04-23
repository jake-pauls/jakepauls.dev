FROM golang:1.16.3-alpine3.12 AS build-stage
WORKDIR /server/src

COPY . .

# Hot Reload Daemon for Go
RUN go get github.com/githubnemo/CompileDaemon

# Set Daemon as the Entrypoint
ENTRYPOINT CompileDaemon -log-prefix=false -build="go build -o build/app" -command="./build/app"