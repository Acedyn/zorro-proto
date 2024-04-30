from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SocketFields(_message.Message):
    __slots__ = ["fields"]
    class FieldsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Socket
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Socket, _Mapping]] = ...) -> None: ...
    FIELDS_FIELD_NUMBER: _ClassVar[int]
    fields: _containers.MessageMap[str, Socket]
    def __init__(self, fields: _Optional[_Mapping[str, Socket]] = ...) -> None: ...

class Socket(_message.Message):
    __slots__ = ["kind", "link", "raw", "fields", "json"]
    KIND_FIELD_NUMBER: _ClassVar[int]
    LINK_FIELD_NUMBER: _ClassVar[int]
    RAW_FIELD_NUMBER: _ClassVar[int]
    FIELDS_FIELD_NUMBER: _ClassVar[int]
    JSON_FIELD_NUMBER: _ClassVar[int]
    kind: str
    link: str
    raw: bytes
    fields: SocketFields
    json: bytes
    def __init__(self, kind: _Optional[str] = ..., link: _Optional[str] = ..., raw: _Optional[bytes] = ..., fields: _Optional[_Union[SocketFields, _Mapping]] = ..., json: _Optional[bytes] = ...) -> None: ...
