from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class PluginConfig(_message.Message):
    __slots__ = ["default_require", "plugin_repo_paths"]
    DEFAULT_REQUIRE_FIELD_NUMBER: _ClassVar[int]
    PLUGIN_REPO_PATHS_FIELD_NUMBER: _ClassVar[int]
    default_require: _containers.RepeatedScalarFieldContainer[str]
    plugin_repo_paths: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, default_require: _Optional[_Iterable[str]] = ..., plugin_repo_paths: _Optional[_Iterable[str]] = ...) -> None: ...
