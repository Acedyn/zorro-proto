if (Test-Path dist)
{
  Remove-Item dist -Recurse -Force -Confirm:$false
}
mkdir dist

protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=dist --go-grpc_opt=paths=source_relative ./zorroprotos/config/*.proto
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=dist --go-grpc_opt=paths=source_relative ./zorroprotos/context/*.proto
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=dist --go-grpc_opt=paths=source_relative ./zorroprotos/plugin/*.proto
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=dist --go-grpc_opt=paths=source_relative ./zorroprotos/processor/*.proto
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=dist --go-grpc_opt=paths=source_relative ./zorroprotos/scheduling/*.proto
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=dist --go-grpc_opt=paths=source_relative ./zorroprotos/tools/*.proto

python -m grpc_tools.protoc -I. --python_out=dist --pyi_out=dist --grpc_python_out=. ./zorroprotos/config/*.proto
python -m grpc_tools.protoc -I. --python_out=dist --pyi_out=dist --grpc_python_out=. ./zorroprotos/context/*.proto
python -m grpc_tools.protoc -I. --python_out=dist --pyi_out=dist --grpc_python_out=. ./zorroprotos/plugin/*.proto
python -m grpc_tools.protoc -I. --python_out=dist --pyi_out=dist --grpc_python_out=. ./zorroprotos/processor/*.proto
python -m grpc_tools.protoc -I. --python_out=dist --pyi_out=dist --grpc_python_out=. ./zorroprotos/scheduling/*.proto
python -m grpc_tools.protoc -I. --python_out=dist --pyi_out=dist --grpc_python_out=. ./zorroprotos/tools/*.proto

protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=dist .\zorroprotos\config\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=dist .\zorroprotos\context\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=dist .\zorroprotos\plugin\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=dist .\zorroprotos\processor\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=dist .\zorroprotos\scheduling\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=dist .\zorroprotos\tools\*.proto
