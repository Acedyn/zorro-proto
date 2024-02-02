from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class PluginConfig(_message.Message):
    __slots__ = ["default_require", "repositories", "search_maximum_depht"]
    DEFAULT_REQUIRE_FIELD_NUMBER: _ClassVar[int]
    REPOSITORIES_FIELD_NUMBER: _ClassVar[int]
    SEARCH_MAXIMUM_DEPHT_FIELD_NUMBER: _ClassVar[int]
    default_require: _containers.RepeatedScalarFieldContainer[str]
    repositories: _containers.RepeatedScalarFieldContainer[str]
    search_maximum_depht: int
    def __init__(self, default_require: _Optional[_Iterable[str]] = ..., repositories: _Optional[_Iterable[str]] = ..., search_maximum_depht: _Optional[int] = ...) -> None: ...
