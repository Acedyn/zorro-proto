from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ToolsDeclaration(_message.Message):
    __slots__ = ["path", "category"]
    PATH_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    path: str
    category: str
    def __init__(self, path: _Optional[str] = ..., category: _Optional[str] = ...) -> None: ...

class PluginTools(_message.Message):
    __slots__ = ["commands", "actions", "hooks", "widgets"]
    COMMANDS_FIELD_NUMBER: _ClassVar[int]
    ACTIONS_FIELD_NUMBER: _ClassVar[int]
    HOOKS_FIELD_NUMBER: _ClassVar[int]
    WIDGETS_FIELD_NUMBER: _ClassVar[int]
    commands: _containers.RepeatedCompositeFieldContainer[ToolsDeclaration]
    actions: _containers.RepeatedCompositeFieldContainer[ToolsDeclaration]
    hooks: _containers.RepeatedCompositeFieldContainer[ToolsDeclaration]
    widgets: _containers.RepeatedCompositeFieldContainer[ToolsDeclaration]
    def __init__(self, commands: _Optional[_Iterable[_Union[ToolsDeclaration, _Mapping]]] = ..., actions: _Optional[_Iterable[_Union[ToolsDeclaration, _Mapping]]] = ..., hooks: _Optional[_Iterable[_Union[ToolsDeclaration, _Mapping]]] = ..., widgets: _Optional[_Iterable[_Union[ToolsDeclaration, _Mapping]]] = ...) -> None: ...
