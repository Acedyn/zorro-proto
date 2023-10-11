from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CommandsDeclaration(_message.Message):
    __slots__ = ["paths", "category", "processor"]
    PATHS_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    PROCESSOR_FIELD_NUMBER: _ClassVar[int]
    paths: _containers.RepeatedScalarFieldContainer[str]
    category: str
    processor: str
    def __init__(self, paths: _Optional[_Iterable[str]] = ..., category: _Optional[str] = ..., processor: _Optional[str] = ...) -> None: ...

class GenericToolsDeclaration(_message.Message):
    __slots__ = ["paths", "category"]
    PATHS_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    paths: _containers.RepeatedScalarFieldContainer[str]
    category: str
    def __init__(self, paths: _Optional[_Iterable[str]] = ..., category: _Optional[str] = ...) -> None: ...

class PluginTools(_message.Message):
    __slots__ = ["commands", "actions", "hooks", "widgets"]
    COMMANDS_FIELD_NUMBER: _ClassVar[int]
    ACTIONS_FIELD_NUMBER: _ClassVar[int]
    HOOKS_FIELD_NUMBER: _ClassVar[int]
    WIDGETS_FIELD_NUMBER: _ClassVar[int]
    commands: _containers.RepeatedCompositeFieldContainer[CommandsDeclaration]
    actions: _containers.RepeatedCompositeFieldContainer[GenericToolsDeclaration]
    hooks: _containers.RepeatedCompositeFieldContainer[GenericToolsDeclaration]
    widgets: _containers.RepeatedCompositeFieldContainer[GenericToolsDeclaration]
    def __init__(self, commands: _Optional[_Iterable[_Union[CommandsDeclaration, _Mapping]]] = ..., actions: _Optional[_Iterable[_Union[GenericToolsDeclaration, _Mapping]]] = ..., hooks: _Optional[_Iterable[_Union[GenericToolsDeclaration, _Mapping]]] = ..., widgets: _Optional[_Iterable[_Union[GenericToolsDeclaration, _Mapping]]] = ...) -> None: ...
