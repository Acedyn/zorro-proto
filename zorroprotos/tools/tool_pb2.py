# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: zorroprotos/tools/tool.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from zorroprotos.tools import socket_pb2 as zorroprotos_dot_tools_dot_socket__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1czorroprotos/tools/tool.proto\x12\x05zorro\x1a\x1ezorroprotos/tools/socket.proto\"\x84\x03\n\x08ToolBase\x12\n\n\x02id\x18\x01 \x01(\t\x12\x11\n\x04name\x18\x02 \x01(\tH\x00\x88\x01\x01\x12\"\n\x04type\x18\x03 \x01(\x0e\x32\x0f.zorro.ToolTypeH\x01\x88\x01\x01\x12\x12\n\x05label\x18\x04 \x01(\tH\x02\x88\x01\x01\x12&\n\x06status\x18\x05 \x01(\x0e\x32\x11.zorro.ToolStatusH\x03\x88\x01\x01\x12!\n\x05input\x18\x06 \x01(\x0b\x32\r.zorro.SocketH\x04\x88\x01\x01\x12\"\n\x06output\x18\x07 \x01(\x0b\x32\r.zorro.SocketH\x05\x88\x01\x01\x12\x14\n\x07tooltip\x18\x08 \x01(\tH\x06\x88\x01\x01\x12\'\n\x04logs\x18\t \x03(\x0b\x32\x19.zorro.ToolBase.LogsEntry\x1a+\n\tLogsEntry\x12\x0b\n\x03key\x18\x01 \x01(\x03\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x42\x07\n\x05_nameB\x07\n\x05_typeB\x08\n\x06_labelB\t\n\x07_statusB\x08\n\x06_inputB\t\n\x07_outputB\n\n\x08_tooltip\"%\n\x04Tool\x12\x1d\n\x04\x62\x61se\x18\x01 \x01(\x0b\x32\x0f.zorro.ToolBase*9\n\x08ToolType\x12\x0b\n\x07\x43OMMAND\x10\x00\x12\n\n\x06\x41\x43TION\x10\x01\x12\n\n\x06WIDGET\x10\x02\x12\x08\n\x04HOOK\x10\x03*`\n\nToolStatus\x12\x10\n\x0cINITIALIZING\x10\x00\x12\x0f\n\x0bINITIALIZED\x10\x01\x12\x0b\n\x07RUNNING\x10\x02\x12\n\n\x06PAUSED\x10\x03\x12\t\n\x05\x45RROR\x10\x04\x12\x0b\n\x07INVALID\x10\x05\x42\x31Z/github.com/Acedyn/zorro-proto/zorroprotos/toolsb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'zorroprotos.tools.tool_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z/github.com/Acedyn/zorro-proto/zorroprotos/tools'
  _TOOLBASE_LOGSENTRY._options = None
  _TOOLBASE_LOGSENTRY._serialized_options = b'8\001'
  _globals['_TOOLTYPE']._serialized_start=501
  _globals['_TOOLTYPE']._serialized_end=558
  _globals['_TOOLSTATUS']._serialized_start=560
  _globals['_TOOLSTATUS']._serialized_end=656
  _globals['_TOOLBASE']._serialized_start=72
  _globals['_TOOLBASE']._serialized_end=460
  _globals['_TOOLBASE_LOGSENTRY']._serialized_start=345
  _globals['_TOOLBASE_LOGSENTRY']._serialized_end=388
  _globals['_TOOL']._serialized_start=462
  _globals['_TOOL']._serialized_end=499
# @@protoc_insertion_point(module_scope)
