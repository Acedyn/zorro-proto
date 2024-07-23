from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class IpcPacket(_message.Message):
    __slots__ = ["initPacket", "sdpExchange", "wrtcForward"]
    INITPACKET_FIELD_NUMBER: _ClassVar[int]
    SDPEXCHANGE_FIELD_NUMBER: _ClassVar[int]
    WRTCFORWARD_FIELD_NUMBER: _ClassVar[int]
    initPacket: InitPacket
    sdpExchange: SdpExchange
    wrtcForward: WrtcForward
    def __init__(self, initPacket: _Optional[_Union[InitPacket, _Mapping]] = ..., sdpExchange: _Optional[_Union[SdpExchange, _Mapping]] = ..., wrtcForward: _Optional[_Union[WrtcForward, _Mapping]] = ...) -> None: ...

class InitPacket(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class SdpExchange(_message.Message):
    __slots__ = ["offer", "answer"]
    OFFER_FIELD_NUMBER: _ClassVar[int]
    ANSWER_FIELD_NUMBER: _ClassVar[int]
    offer: str
    answer: str
    def __init__(self, offer: _Optional[str] = ..., answer: _Optional[str] = ...) -> None: ...

class WrtcForward(_message.Message):
    __slots__ = ["data"]
    DATA_FIELD_NUMBER: _ClassVar[int]
    data: bytes
    def __init__(self, data: _Optional[bytes] = ...) -> None: ...
