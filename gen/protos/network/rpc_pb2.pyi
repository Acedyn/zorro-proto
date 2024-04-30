from google.protobuf import duration_pb2 as _duration_pb2
from google.protobuf import any_pb2 as _any_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Status(_message.Message):
    __slots__ = ["code", "message", "details"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DETAILS_FIELD_NUMBER: _ClassVar[int]
    code: int
    message: str
    details: _containers.RepeatedCompositeFieldContainer[_any_pb2.Any]
    def __init__(self, code: _Optional[int] = ..., message: _Optional[str] = ..., details: _Optional[_Iterable[_Union[_any_pb2.Any, _Mapping]]] = ...) -> None: ...

class PacketMessage(_message.Message):
    __slots__ = ["data", "eom"]
    DATA_FIELD_NUMBER: _ClassVar[int]
    EOM_FIELD_NUMBER: _ClassVar[int]
    data: bytes
    eom: bool
    def __init__(self, data: _Optional[bytes] = ..., eom: bool = ...) -> None: ...

class Stream(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: int
    def __init__(self, id: _Optional[int] = ...) -> None: ...

class Request(_message.Message):
    __slots__ = ["stream", "headers", "message", "rst_stream"]
    STREAM_FIELD_NUMBER: _ClassVar[int]
    HEADERS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    RST_STREAM_FIELD_NUMBER: _ClassVar[int]
    stream: Stream
    headers: RequestHeaders
    message: RequestMessage
    rst_stream: bool
    def __init__(self, stream: _Optional[_Union[Stream, _Mapping]] = ..., headers: _Optional[_Union[RequestHeaders, _Mapping]] = ..., message: _Optional[_Union[RequestMessage, _Mapping]] = ..., rst_stream: bool = ...) -> None: ...

class RequestHeaders(_message.Message):
    __slots__ = ["method", "metadata", "timeout"]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    method: str
    metadata: Metadata
    timeout: _duration_pb2.Duration
    def __init__(self, method: _Optional[str] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ..., timeout: _Optional[_Union[_duration_pb2.Duration, _Mapping]] = ...) -> None: ...

class RequestMessage(_message.Message):
    __slots__ = ["has_message", "packet_message", "eos"]
    HAS_MESSAGE_FIELD_NUMBER: _ClassVar[int]
    PACKET_MESSAGE_FIELD_NUMBER: _ClassVar[int]
    EOS_FIELD_NUMBER: _ClassVar[int]
    has_message: bool
    packet_message: PacketMessage
    eos: bool
    def __init__(self, has_message: bool = ..., packet_message: _Optional[_Union[PacketMessage, _Mapping]] = ..., eos: bool = ...) -> None: ...

class Response(_message.Message):
    __slots__ = ["stream", "headers", "message", "trailers"]
    STREAM_FIELD_NUMBER: _ClassVar[int]
    HEADERS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    TRAILERS_FIELD_NUMBER: _ClassVar[int]
    stream: Stream
    headers: ResponseHeaders
    message: ResponseMessage
    trailers: ResponseTrailers
    def __init__(self, stream: _Optional[_Union[Stream, _Mapping]] = ..., headers: _Optional[_Union[ResponseHeaders, _Mapping]] = ..., message: _Optional[_Union[ResponseMessage, _Mapping]] = ..., trailers: _Optional[_Union[ResponseTrailers, _Mapping]] = ...) -> None: ...

class ResponseHeaders(_message.Message):
    __slots__ = ["metadata"]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    metadata: Metadata
    def __init__(self, metadata: _Optional[_Union[Metadata, _Mapping]] = ...) -> None: ...

class ResponseMessage(_message.Message):
    __slots__ = ["packet_message"]
    PACKET_MESSAGE_FIELD_NUMBER: _ClassVar[int]
    packet_message: PacketMessage
    def __init__(self, packet_message: _Optional[_Union[PacketMessage, _Mapping]] = ...) -> None: ...

class ResponseTrailers(_message.Message):
    __slots__ = ["status", "metadata"]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    status: Status
    metadata: Metadata
    def __init__(self, status: _Optional[_Union[Status, _Mapping]] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ...) -> None: ...

class Strings(_message.Message):
    __slots__ = ["values"]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, values: _Optional[_Iterable[str]] = ...) -> None: ...

class Metadata(_message.Message):
    __slots__ = ["md"]
    class MdEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Strings
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Strings, _Mapping]] = ...) -> None: ...
    MD_FIELD_NUMBER: _ClassVar[int]
    md: _containers.MessageMap[str, Strings]
    def __init__(self, md: _Optional[_Mapping[str, Strings]] = ...) -> None: ...
