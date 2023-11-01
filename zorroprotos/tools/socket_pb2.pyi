from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SocketEntry(_message.Message):
    __slots__ = ["kind", "json"]
    KIND_FIELD_NUMBER: _ClassVar[int]
    JSON_FIELD_NUMBER: _ClassVar[int]
    kind: str
    json: bytes
    def __init__(self, kind: _Optional[str] = ..., json: _Optional[bytes] = ...) -> None: ...

class Socket(_message.Message):
    __slots__ = ["link", "raw", "descriptor", "entries"]
    class EntriesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: SocketEntry
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[SocketEntry, _Mapping]] = ...) -> None: ...
    LINK_FIELD_NUMBER: _ClassVar[int]
    RAW_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTOR_FIELD_NUMBER: _ClassVar[int]
    ENTRIES_FIELD_NUMBER: _ClassVar[int]
    link: str
    raw: bytes
    descriptor: str
    entries: _containers.MessageMap[str, SocketEntry]
    def __init__(self, link: _Optional[str] = ..., raw: _Optional[bytes] = ..., descriptor: _Optional[str] = ..., entries: _Optional[_Mapping[str, SocketEntry]] = ...) -> None: ...
