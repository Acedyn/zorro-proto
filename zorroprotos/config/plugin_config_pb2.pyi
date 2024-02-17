from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class FileSystemType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    Os: _ClassVar[FileSystemType]
    IndexedDb: _ClassVar[FileSystemType]
    Memory: _ClassVar[FileSystemType]
Os: FileSystemType
IndexedDb: FileSystemType
Memory: FileSystemType

class OsFsConfig(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class IndexedDbFsConfig(_message.Message):
    __slots__ = ["name"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...

class MemoryFsConfig(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class RepositoryConfig(_message.Message):
    __slots__ = ["fs_type", "os", "indexedDb", "memory", "path"]
    FS_TYPE_FIELD_NUMBER: _ClassVar[int]
    OS_FIELD_NUMBER: _ClassVar[int]
    INDEXEDDB_FIELD_NUMBER: _ClassVar[int]
    MEMORY_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    fs_type: FileSystemType
    os: OsFsConfig
    indexedDb: IndexedDbFsConfig
    memory: MemoryFsConfig
    path: str
    def __init__(self, fs_type: _Optional[_Union[FileSystemType, str]] = ..., os: _Optional[_Union[OsFsConfig, _Mapping]] = ..., indexedDb: _Optional[_Union[IndexedDbFsConfig, _Mapping]] = ..., memory: _Optional[_Union[MemoryFsConfig, _Mapping]] = ..., path: _Optional[str] = ...) -> None: ...

class PluginConfig(_message.Message):
    __slots__ = ["default_require", "repositories", "search_maximum_depht"]
    DEFAULT_REQUIRE_FIELD_NUMBER: _ClassVar[int]
    REPOSITORIES_FIELD_NUMBER: _ClassVar[int]
    SEARCH_MAXIMUM_DEPHT_FIELD_NUMBER: _ClassVar[int]
    default_require: _containers.RepeatedScalarFieldContainer[str]
    repositories: _containers.RepeatedCompositeFieldContainer[RepositoryConfig]
    search_maximum_depht: int
    def __init__(self, default_require: _Optional[_Iterable[str]] = ..., repositories: _Optional[_Iterable[_Union[RepositoryConfig, _Mapping]]] = ..., search_maximum_depht: _Optional[int] = ...) -> None: ...
