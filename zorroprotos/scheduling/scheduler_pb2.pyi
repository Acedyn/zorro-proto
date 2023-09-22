from zorroprotos.tools import command_pb2 as _command_pb2
from zorroprotos.processor import processor_pb2 as _processor_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class processorCommunication(_message.Message):
    __slots__ = ["command_update", "processor_update"]
    COMMAND_UPDATE_FIELD_NUMBER: _ClassVar[int]
    PROCESSOR_UPDATE_FIELD_NUMBER: _ClassVar[int]
    command_update: _command_pb2.Command
    processor_update: _processor_pb2.Processor
    def __init__(self, command_update: _Optional[_Union[_command_pb2.Command, _Mapping]] = ..., processor_update: _Optional[_Union[_processor_pb2.Processor, _Mapping]] = ...) -> None: ...
