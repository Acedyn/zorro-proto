# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: protos/scheduling/processor_query.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\'protos/scheduling/processor_query.proto\x12\x05zorro\"\xce\x01\n\x0eProcessorQuery\x12\x11\n\x04name\x18\x01 \x01(\tH\x00\x88\x01\x01\x12\x14\n\x07version\x18\x02 \x01(\tH\x01\x88\x01\x01\x12\x0f\n\x02id\x18\x04 \x01(\tH\x02\x88\x01\x01\x12\x35\n\x08metadata\x18\x05 \x03(\x0b\x32#.zorro.ProcessorQuery.MetadataEntry\x1a/\n\rMetadataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x42\x07\n\x05_nameB\n\n\x08_versionB\x05\n\x03_idB5Z3github.com/Acedyn/zorro-proto/gen/protos/schedulingb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'protos.scheduling.processor_query_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z3github.com/Acedyn/zorro-proto/gen/protos/scheduling'
  _PROCESSORQUERY_METADATAENTRY._options = None
  _PROCESSORQUERY_METADATAENTRY._serialized_options = b'8\001'
  _globals['_PROCESSORQUERY']._serialized_start=51
  _globals['_PROCESSORQUERY']._serialized_end=257
  _globals['_PROCESSORQUERY_METADATAENTRY']._serialized_start=182
  _globals['_PROCESSORQUERY_METADATAENTRY']._serialized_end=229
# @@protoc_insertion_point(module_scope)
