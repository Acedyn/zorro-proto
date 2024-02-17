protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ./zorroprotos/config/*.proto
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ./zorroprotos/context/*.proto
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ./zorroprotos/plugin/*.proto
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ./zorroprotos/processor/*.proto
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ./zorroprotos/scheduling/*.proto
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ./zorroprotos/tools/*.proto

python -m grpc_tools.protoc -I. --python_out=. --pyi_out=. --grpc_python_out=. ./zorroprotos/config/*.proto
python -m grpc_tools.protoc -I. --python_out=. --pyi_out=. --grpc_python_out=. ./zorroprotos/context/*.proto
python -m grpc_tools.protoc -I. --python_out=. --pyi_out=. --grpc_python_out=. ./zorroprotos/plugin/*.proto
python -m grpc_tools.protoc -I. --python_out=. --pyi_out=. --grpc_python_out=. ./zorroprotos/processor/*.proto
python -m grpc_tools.protoc -I. --python_out=. --pyi_out=. --grpc_python_out=. ./zorroprotos/scheduling/*.proto
python -m grpc_tools.protoc -I. --python_out=. --pyi_out=. --grpc_python_out=. ./zorroprotos/tools/*.proto

protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=. .\zorroprotos\config\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=. .\zorroprotos\context\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=. .\zorroprotos\plugin\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=. .\zorroprotos\processor\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=. .\zorroprotos\scheduling\*.proto
protoc --plugin=protoc-gen-ts_proto.cmd --ts_proto_out=. .\zorroprotos\tools\*.proto
