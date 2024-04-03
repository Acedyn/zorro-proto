from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class NetworkConfig(_message.Message):
    __slots__ = ["GRPC_port", "GRPC_host"]
    GRPC_PORT_FIELD_NUMBER: _ClassVar[int]
    GRPC_HOST_FIELD_NUMBER: _ClassVar[int]
    GRPC_port: int
    GRPC_host: str
    def __init__(self, GRPC_port: _Optional[int] = ..., GRPC_host: _Optional[str] = ...) -> None: ...
