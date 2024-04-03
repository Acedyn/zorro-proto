from protos.plugin import plugin_pb2 as _plugin_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Context(_message.Message):
    __slots__ = ["id", "plugins"]
    ID_FIELD_NUMBER: _ClassVar[int]
    PLUGINS_FIELD_NUMBER: _ClassVar[int]
    id: str
    plugins: _containers.RepeatedCompositeFieldContainer[_plugin_pb2.Plugin]
    def __init__(self, id: _Optional[str] = ..., plugins: _Optional[_Iterable[_Union[_plugin_pb2.Plugin, _Mapping]]] = ...) -> None: ...
