# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: zorroprotos/tools/socket.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1ezorroprotos/tools/socket.proto\x12\x05zorro\")\n\x0bSocketEntry\x12\x0c\n\x04kind\x18\x01 \x01(\t\x12\x0c\n\x04json\x18\x02 \x01(\x0c\"\xa8\x01\n\x06Socket\x12\x0c\n\x04link\x18\x01 \x01(\t\x12\x0b\n\x03raw\x18\x02 \x01(\x0c\x12\x12\n\ndescriptor\x18\x03 \x01(\t\x12+\n\x07\x65ntries\x18\x04 \x03(\x0b\x32\x1a.zorro.Socket.EntriesEntry\x1a\x42\n\x0c\x45ntriesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12!\n\x05value\x18\x02 \x01(\x0b\x32\x12.zorro.SocketEntry:\x02\x38\x01\x42\x31Z/github.com/Acedyn/zorro-proto/zorroprotos/toolsb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'zorroprotos.tools.socket_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z/github.com/Acedyn/zorro-proto/zorroprotos/tools'
  _SOCKET_ENTRIESENTRY._options = None
  _SOCKET_ENTRIESENTRY._serialized_options = b'8\001'
  _globals['_SOCKETENTRY']._serialized_start=41
  _globals['_SOCKETENTRY']._serialized_end=82
  _globals['_SOCKET']._serialized_start=85
  _globals['_SOCKET']._serialized_end=253
  _globals['_SOCKET_ENTRIESENTRY']._serialized_start=187
  _globals['_SOCKET_ENTRIESENTRY']._serialized_end=253
# @@protoc_insertion_point(module_scope)
