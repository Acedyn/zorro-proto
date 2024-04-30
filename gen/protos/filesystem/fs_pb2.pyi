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

class OsFsSettings(_message.Message):
    __slots__ = ["directory"]
    DIRECTORY_FIELD_NUMBER: _ClassVar[int]
    directory: str
    def __init__(self, directory: _Optional[str] = ...) -> None: ...

class IndexedDbFsSettings(_message.Message):
    __slots__ = ["name"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...

class MemoryFsSettings(_message.Message):
    __slots__ = ["name"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...

class FileSystemSettings(_message.Message):
    __slots__ = ["os", "indexedDb", "memory"]
    OS_FIELD_NUMBER: _ClassVar[int]
    INDEXEDDB_FIELD_NUMBER: _ClassVar[int]
    MEMORY_FIELD_NUMBER: _ClassVar[int]
    os: OsFsSettings
    indexedDb: IndexedDbFsSettings
    memory: MemoryFsSettings
    def __init__(self, os: _Optional[_Union[OsFsSettings, _Mapping]] = ..., indexedDb: _Optional[_Union[IndexedDbFsSettings, _Mapping]] = ..., memory: _Optional[_Union[MemoryFsSettings, _Mapping]] = ...) -> None: ...
