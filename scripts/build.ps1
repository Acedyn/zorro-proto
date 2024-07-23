if (Test-Path gen)
{
  Remove-Item gen -Recurse -Force -Confirm:$false
}
mkdir gen

protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative --js_out=import_style=commonjs,binary:gen --ts_out=gen .\protos\config\*.proto
protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative --js_out=import_style=commonjs,binary:gen --ts_out=gen .\protos\filesystem\*.proto
protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative --js_out=import_style=commonjs,binary:gen --ts_out=gen .\protos\network\*.proto
protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative --js_out=import_style=commonjs,binary:gen --ts_out=gen .\protos\plugin\*.proto
protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative --js_out=import_style=commonjs,binary:gen --ts_out=gen .\protos\tools\*.proto
protoc --go_out=gen --go_opt=paths=source_relative --go-grpc_out=gen --go-grpc_opt=paths=source_relative --js_out=import_style=commonjs,binary:gen --ts_out=gen .\protos\scheduling\*.proto

python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/config/*.proto
python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/filesystem/*.proto
python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/network/*.proto
python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/plugin/*.proto
python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/tools/*.proto
python -m grpc_tools.protoc -I. --python_out=gen --pyi_out=gen --grpc_python_out=gen ./protos/scheduling/*.proto
