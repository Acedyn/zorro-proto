from zorroprotos.config import user_config_pb2 as _user_config_pb2
from zorroprotos.config import plugin_config_pb2 as _plugin_config_pb2
from zorroprotos.config import network_config_pb2 as _network_config_pb2
from zorroprotos.config import fs_config_pb2 as _fs_config_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Config(_message.Message):
    __slots__ = ["user_preferences", "plugin_config", "network_config", "file_systems_config"]
    USER_PREFERENCES_FIELD_NUMBER: _ClassVar[int]
    PLUGIN_CONFIG_FIELD_NUMBER: _ClassVar[int]
    NETWORK_CONFIG_FIELD_NUMBER: _ClassVar[int]
    FILE_SYSTEMS_CONFIG_FIELD_NUMBER: _ClassVar[int]
    user_preferences: _user_config_pb2.UserConfig
    plugin_config: _plugin_config_pb2.PluginConfig
    network_config: _network_config_pb2.NetworkConfig
    file_systems_config: _fs_config_pb2.FileSystemsConfig
    def __init__(self, user_preferences: _Optional[_Union[_user_config_pb2.UserConfig, _Mapping]] = ..., plugin_config: _Optional[_Union[_plugin_config_pb2.PluginConfig, _Mapping]] = ..., network_config: _Optional[_Union[_network_config_pb2.NetworkConfig, _Mapping]] = ..., file_systems_config: _Optional[_Union[_fs_config_pb2.FileSystemsConfig, _Mapping]] = ...) -> None: ...
