from zorroprotos.context import context_pb2 as _context_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProcessorQuery(_message.Message):
    __slots__ = ["name", "version", "id", "metadata", "context"]
    class MetadataEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    CONTEXT_FIELD_NUMBER: _ClassVar[int]
    name: str
    version: str
    id: str
    metadata: _containers.ScalarMap[str, str]
    context: _context_pb2.Context
    def __init__(self, name: _Optional[str] = ..., version: _Optional[str] = ..., id: _Optional[str] = ..., metadata: _Optional[_Mapping[str, str]] = ..., context: _Optional[_Union[_context_pb2.Context, _Mapping]] = ...) -> None: ...
