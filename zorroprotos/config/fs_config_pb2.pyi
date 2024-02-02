from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

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

class FileSystemConfig(_message.Message):
    __slots__ = ["type", "os", "indexedDb", "memory"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    OS_FIELD_NUMBER: _ClassVar[int]
    INDEXEDDB_FIELD_NUMBER: _ClassVar[int]
    MEMORY_FIELD_NUMBER: _ClassVar[int]
    type: FileSystemType
    os: OsFsConfig
    indexedDb: IndexedDbFsConfig
    memory: MemoryFsConfig
    def __init__(self, type: _Optional[_Union[FileSystemType, str]] = ..., os: _Optional[_Union[OsFsConfig, _Mapping]] = ..., indexedDb: _Optional[_Union[IndexedDbFsConfig, _Mapping]] = ..., memory: _Optional[_Union[MemoryFsConfig, _Mapping]] = ...) -> None: ...

class FileSystemsConfig(_message.Message):
    __slots__ = ["file_systems"]
    class FileSystemsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: FileSystemConfig
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[FileSystemConfig, _Mapping]] = ...) -> None: ...
    FILE_SYSTEMS_FIELD_NUMBER: _ClassVar[int]
    file_systems: _containers.MessageMap[str, FileSystemConfig]
    def __init__(self, file_systems: _Optional[_Mapping[str, FileSystemConfig]] = ...) -> None: ...
