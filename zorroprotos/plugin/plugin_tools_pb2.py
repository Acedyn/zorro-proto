# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: zorroprotos/plugin/plugin_tools.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n%zorroprotos/plugin/plugin_tools.proto\x12\x05zorro\"2\n\x10ToolsDeclaration\x12\x0c\n\x04path\x18\x01 \x01(\t\x12\x10\n\x08\x63\x61tegory\x18\x02 \x01(\t\"\xb4\x01\n\x0bPluginTools\x12)\n\x08\x63ommands\x18\x01 \x03(\x0b\x32\x17.zorro.ToolsDeclaration\x12(\n\x07\x61\x63tions\x18\x02 \x03(\x0b\x32\x17.zorro.ToolsDeclaration\x12&\n\x05hooks\x18\x03 \x03(\x0b\x32\x17.zorro.ToolsDeclaration\x12(\n\x07widgets\x18\x04 \x03(\x0b\x32\x17.zorro.ToolsDeclarationB2Z0github.com/Acedyn/zorro-proto/zorroprotos/pluginb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'zorroprotos.plugin.plugin_tools_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z0github.com/Acedyn/zorro-proto/zorroprotos/plugin'
  _globals['_TOOLSDECLARATION']._serialized_start=48
  _globals['_TOOLSDECLARATION']._serialized_end=98
  _globals['_PLUGINTOOLS']._serialized_start=101
  _globals['_PLUGINTOOLS']._serialized_end=281
# @@protoc_insertion_point(module_scope)
