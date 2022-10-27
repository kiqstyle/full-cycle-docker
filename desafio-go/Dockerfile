FROM golang:1.19 AS builder

WORKDIR /usr/src/app

RUN go mod init example/hello
RUN go mod download && go mod verify

COPY . .
RUN go build -o /go/bin/hello

FROM scratch

COPY --from=builder /go/bin/hello /go/bin/hello

CMD ["/go/bin/hello"]
