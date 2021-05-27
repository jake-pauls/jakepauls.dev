FROM golang:1.16.3-alpine3.12 AS gopher-build
WORKDIR /gopher

COPY ./gopher .

# Install deps and build gopher
RUN go mod download
RUN CGO_ENABLED=0 go build -ldflags "-w" -a -o /gopher .

FROM alpine:latest
RUN apk --no-cache add ca-certificates

# Copy packages
COPY --from=gopher-build /gopher/gopher .

# Run gopher
RUN chmod +x ./gopher
CMD ./gopher
