if (Test-Path gen)
{
  Remove-Item gen -Recurse -Force -Confirm:$false
}
mkdir gen

protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative ./protos/config/*.proto
protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative ./protos/filesystem/*.proto
protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative ./protos/plugin/*.proto
protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative ./protos/tools/*.proto
protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative ./protos/scheduling/*.proto

python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/config/*.proto
python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/filesystem/*.proto
python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/plugin/*.proto
python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/tools/*.proto
python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/scheduling/*.proto

protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=gen .\protos\config\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=gen .\protos\filesystem\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=gen .\protos\plugin\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=gen .\protos\tools\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=gen .\protos\scheduling\*.proto
