# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: zorroprotos/scheduling/processor_query.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from zorroprotos.context import context_pb2 as zorroprotos_dot_context_dot_context__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n,zorroprotos/scheduling/processor_query.proto\x12\x05zorro\x1a!zorroprotos/context/context.proto\"\xef\x01\n\x0eProcessorQuery\x12\x11\n\x04name\x18\x01 \x01(\tH\x00\x88\x01\x01\x12\x14\n\x07version\x18\x02 \x01(\tH\x01\x88\x01\x01\x12\x0f\n\x02id\x18\x04 \x01(\tH\x02\x88\x01\x01\x12\x35\n\x08metadata\x18\x05 \x03(\x0b\x32#.zorro.ProcessorQuery.MetadataEntry\x12\x1f\n\x07\x63ontext\x18\x06 \x01(\x0b\x32\x0e.zorro.Context\x1a/\n\rMetadataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x42\x07\n\x05_nameB\n\n\x08_versionB\x05\n\x03_idB6Z4github.com/Acedyn/zorro-proto/zorroprotos/schedulingb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'zorroprotos.scheduling.processor_query_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z4github.com/Acedyn/zorro-proto/zorroprotos/scheduling'
  _PROCESSORQUERY_METADATAENTRY._options = None
  _PROCESSORQUERY_METADATAENTRY._serialized_options = b'8\001'
  _globals['_PROCESSORQUERY']._serialized_start=91
  _globals['_PROCESSORQUERY']._serialized_end=330
  _globals['_PROCESSORQUERY_METADATAENTRY']._serialized_start=255
  _globals['_PROCESSORQUERY_METADATAENTRY']._serialized_end=302
# @@protoc_insertion_point(module_scope)