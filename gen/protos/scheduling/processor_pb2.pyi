from protos.scheduling import processor_status_pb2 as _processor_status_pb2
from protos.filesystem import fs_pb2 as _fs_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProcessorPath(_message.Message):
    __slots__ = ["file_system", "start_program_template", "start_processor_template"]
    FILE_SYSTEM_FIELD_NUMBER: _ClassVar[int]
    START_PROGRAM_TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    START_PROCESSOR_TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    file_system: _fs_pb2.FileSystemSettings
    start_program_template: str
    start_processor_template: str
    def __init__(self, file_system: _Optional[_Union[_fs_pb2.FileSystemSettings, _Mapping]] = ..., start_program_template: _Optional[str] = ..., start_processor_template: _Optional[str] = ...) -> None: ...

class Processor(_message.Message):
    __slots__ = ["id", "name", "version", "label", "subsets", "paths", "status", "metadata", "stdout", "stderr"]
    class MetadataEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    class StdoutEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: int
        value: str
        def __init__(self, key: _Optional[int] = ..., value: _Optional[str] = ...) -> None: ...
    class StderrEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: int
        value: str
        def __init__(self, key: _Optional[int] = ..., value: _Optional[str] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    LABEL_FIELD_NUMBER: _ClassVar[int]
    SUBSETS_FIELD_NUMBER: _ClassVar[int]
    PATHS_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    STDOUT_FIELD_NUMBER: _ClassVar[int]
    STDERR_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    version: str
    label: str
    subsets: _containers.RepeatedScalarFieldContainer[str]
    paths: _containers.RepeatedCompositeFieldContainer[ProcessorPath]
    status: _processor_status_pb2.ProcessorStatus
    metadata: _containers.ScalarMap[str, str]
    stdout: _containers.ScalarMap[int, str]
    stderr: _containers.ScalarMap[int, str]
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., version: _Optional[str] = ..., label: _Optional[str] = ..., subsets: _Optional[_Iterable[str]] = ..., paths: _Optional[_Iterable[_Union[ProcessorPath, _Mapping]]] = ..., status: _Optional[_Union[_processor_status_pb2.ProcessorStatus, str]] = ..., metadata: _Optional[_Mapping[str, str]] = ..., stdout: _Optional[_Mapping[int, str]] = ..., stderr: _Optional[_Mapping[int, str]] = ...) -> None: ...
