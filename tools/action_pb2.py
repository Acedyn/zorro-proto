# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: tools/action.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from tools import tool_pb2 as tools_dot_tool__pb2
from tools import command_pb2 as tools_dot_command__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x12tools/action.proto\x12\x05zorro\x1a\x10tools/tool.proto\x1a\x13tools/command.proto\"l\n\x0b\x41\x63tionChild\x12!\n\x07\x63ommand\x18\x01 \x01(\x0b\x32\x0e.zorro.CommandH\x00\x12\x1f\n\x06\x61\x63tion\x18\x02 \x01(\x0b\x32\r.zorro.ActionH\x00\x12\x10\n\x08upstream\x18\x03 \x03(\tB\x07\n\x05\x63hild\"\x9b\x01\n\x06\x41\x63tion\x12\x1d\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x0f.zorro.ToolBase\x12-\n\x08\x63hildren\x18\x02 \x03(\x0b\x32\x1b.zorro.Action.ChildrenEntry\x1a\x43\n\rChildrenEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12!\n\x05value\x18\x02 \x01(\x0b\x32\x12.zorro.ActionChild:\x02\x38\x01\x42%Z#github.com/Acedyn/zorro-proto/toolsb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'tools.action_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z#github.com/Acedyn/zorro-proto/tools'
  _ACTION_CHILDRENENTRY._options = None
  _ACTION_CHILDRENENTRY._serialized_options = b'8\001'
  _globals['_ACTIONCHILD']._serialized_start=68
  _globals['_ACTIONCHILD']._serialized_end=176
  _globals['_ACTION']._serialized_start=179
  _globals['_ACTION']._serialized_end=334
  _globals['_ACTION_CHILDRENENTRY']._serialized_start=267
  _globals['_ACTION_CHILDRENENTRY']._serialized_end=334
# @@protoc_insertion_point(module_scope)
