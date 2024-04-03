# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: protos/plugin/plugin.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from protos.processor import processor_pb2 as protos_dot_processor_dot_processor__pb2
from protos.filesystem import fs_pb2 as protos_dot_filesystem_dot_fs__pb2
from protos.plugin import plugin_env_pb2 as protos_dot_plugin_dot_plugin__env__pb2
from protos.plugin import plugin_tools_pb2 as protos_dot_plugin_dot_plugin__tools__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1aprotos/plugin/plugin.proto\x12\x05zorro\x1a protos/processor/processor.proto\x1a\x1aprotos/filesystem/fs.proto\x1a\x1eprotos/plugin/plugin_env.proto\x1a protos/plugin/plugin_tools.proto\"\xb0\x02\n\x06Plugin\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0f\n\x07version\x18\x02 \x01(\t\x12\r\n\x05label\x18\x03 \x01(\t\x12\x0c\n\x04path\x18\x04 \x01(\t\x12\x0f\n\x07require\x18\x05 \x03(\t\x12#\n\x03\x65nv\x18\x06 \x03(\x0b\x32\x16.zorro.Plugin.EnvEntry\x12!\n\x05tools\x18\x07 \x01(\x0b\x32\x12.zorro.PluginTools\x12$\n\nprocessors\x18\x08 \x03(\x0b\x32\x10.zorro.Processor\x12-\n\nrepository\x18\t \x01(\x0b\x32\x19.zorro.FileSystemSettings\x1a<\n\x08\x45nvEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x1f\n\x05value\x18\x02 \x01(\x0b\x32\x10.zorro.PluginEnv:\x02\x38\x01\x42\x32Z0github.com/Acedyn/zorro-proto/zorroprotos/pluginb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'protos.plugin.plugin_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z0github.com/Acedyn/zorro-proto/zorroprotos/plugin'
  _PLUGIN_ENVENTRY._options = None
  _PLUGIN_ENVENTRY._serialized_options = b'8\001'
  _globals['_PLUGIN']._serialized_start=166
  _globals['_PLUGIN']._serialized_end=470
  _globals['_PLUGIN_ENVENTRY']._serialized_start=410
  _globals['_PLUGIN_ENVENTRY']._serialized_end=470
# @@protoc_insertion_point(module_scope)
