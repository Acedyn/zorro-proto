# Zorro - Proto

This repository centralize the proto files used for the zorro application

## Generate the proto files's code

First you must install the [protoc executable](https://protobuf.dev/downloads)


### Golang

- Install the golang protoc generator

```bash
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
```

- Generate the go code

```bash
protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative ./protos/**/*.proto
```

Since go imports are importing from this repository directly, you have to commit and
push your changes to make them usable on the other zorro repositories


### Python

- Install the python protoc generator

```bash
python -m pip install grpcio-tools
```

- Generate the python code

```bash
python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/**/*.proto
```


### Javascript

- Install the javascript protoc generator

```bash
npm install protoc-gen-js -g
```

- Generate the javascript code

```bash
protoc --js_out=import_style=commonjs,binary:gen .\protos\**\*.proto
```

### Global

You can also use the build scripts in the ``scripts`` folder to build for all the languages at once


### Typescript

- Install the typescript protoc generator

```bash
npm install protoc-gen-ts -g
```

- Generate the typescript code

```bash
protoc --ts_out=gen .\protos\**\*.proto
```

### Global

You can also use the build scripts in the ``scripts`` folder to build for all the languages at once
