# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: protos/network/rpc.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2
from google.protobuf import any_pb2 as google_dot_protobuf_dot_any__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18protos/network/rpc.proto\x12\x05zorro\x1a\x1egoogle/protobuf/duration.proto\x1a\x19google/protobuf/any.proto\"N\n\x06Status\x12\x0c\n\x04\x63ode\x18\x01 \x01(\x05\x12\x0f\n\x07message\x18\x02 \x01(\t\x12%\n\x07\x64\x65tails\x18\x03 \x03(\x0b\x32\x14.google.protobuf.Any\"*\n\rPacketMessage\x12\x0c\n\x04\x64\x61ta\x18\x01 \x01(\x0c\x12\x0b\n\x03\x65om\x18\x02 \x01(\x08\"\x14\n\x06Stream\x12\n\n\x02id\x18\x01 \x01(\x04\"\x9a\x01\n\x07Request\x12\x1d\n\x06stream\x18\x01 \x01(\x0b\x32\r.zorro.Stream\x12(\n\x07headers\x18\x02 \x01(\x0b\x32\x15.zorro.RequestHeadersH\x00\x12(\n\x07message\x18\x03 \x01(\x0b\x32\x15.zorro.RequestMessageH\x00\x12\x14\n\nrst_stream\x18\x04 \x01(\x08H\x00\x42\x06\n\x04type\"o\n\x0eRequestHeaders\x12\x0e\n\x06method\x18\x01 \x01(\t\x12!\n\x08metadata\x18\x02 \x01(\x0b\x32\x0f.zorro.Metadata\x12*\n\x07timeout\x18\x03 \x01(\x0b\x32\x19.google.protobuf.Duration\"`\n\x0eRequestMessage\x12\x13\n\x0bhas_message\x18\x01 \x01(\x08\x12,\n\x0epacket_message\x18\x02 \x01(\x0b\x32\x14.zorro.PacketMessage\x12\x0b\n\x03\x65os\x18\x03 \x01(\x08\"\xb4\x01\n\x08Response\x12\x1d\n\x06stream\x18\x01 \x01(\x0b\x32\r.zorro.Stream\x12)\n\x07headers\x18\x02 \x01(\x0b\x32\x16.zorro.ResponseHeadersH\x00\x12)\n\x07message\x18\x03 \x01(\x0b\x32\x16.zorro.ResponseMessageH\x00\x12+\n\x08trailers\x18\x04 \x01(\x0b\x32\x17.zorro.ResponseTrailersH\x00\x42\x06\n\x04type\"4\n\x0fResponseHeaders\x12!\n\x08metadata\x18\x01 \x01(\x0b\x32\x0f.zorro.Metadata\"?\n\x0fResponseMessage\x12,\n\x0epacket_message\x18\x01 \x01(\x0b\x32\x14.zorro.PacketMessage\"T\n\x10ResponseTrailers\x12\x1d\n\x06status\x18\x01 \x01(\x0b\x32\r.zorro.Status\x12!\n\x08metadata\x18\x02 \x01(\x0b\x32\x0f.zorro.Metadata\"\x19\n\x07Strings\x12\x0e\n\x06values\x18\x01 \x03(\t\"j\n\x08Metadata\x12#\n\x02md\x18\x01 \x03(\x0b\x32\x17.zorro.Metadata.MdEntry\x1a\x39\n\x07MdEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x1d\n\x05value\x18\x02 \x01(\x0b\x32\x0e.zorro.Strings:\x02\x38\x01\x42\x32Z0github.com/Acedyn/zorro-proto/gen/protos/networkb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'protos.network.rpc_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z0github.com/Acedyn/zorro-proto/gen/protos/network'
  _METADATA_MDENTRY._options = None
  _METADATA_MDENTRY._serialized_options = b'8\001'
  _globals['_STATUS']._serialized_start=94
  _globals['_STATUS']._serialized_end=172
  _globals['_PACKETMESSAGE']._serialized_start=174
  _globals['_PACKETMESSAGE']._serialized_end=216
  _globals['_STREAM']._serialized_start=218
  _globals['_STREAM']._serialized_end=238
  _globals['_REQUEST']._serialized_start=241
  _globals['_REQUEST']._serialized_end=395
  _globals['_REQUESTHEADERS']._serialized_start=397
  _globals['_REQUESTHEADERS']._serialized_end=508
  _globals['_REQUESTMESSAGE']._serialized_start=510
  _globals['_REQUESTMESSAGE']._serialized_end=606
  _globals['_RESPONSE']._serialized_start=609
  _globals['_RESPONSE']._serialized_end=789
  _globals['_RESPONSEHEADERS']._serialized_start=791
  _globals['_RESPONSEHEADERS']._serialized_end=843
  _globals['_RESPONSEMESSAGE']._serialized_start=845
  _globals['_RESPONSEMESSAGE']._serialized_end=908
  _globals['_RESPONSETRAILERS']._serialized_start=910
  _globals['_RESPONSETRAILERS']._serialized_end=994
  _globals['_STRINGS']._serialized_start=996
  _globals['_STRINGS']._serialized_end=1021
  _globals['_METADATA']._serialized_start=1023
  _globals['_METADATA']._serialized_end=1129
  _globals['_METADATA_MDENTRY']._serialized_start=1072
  _globals['_METADATA_MDENTRY']._serialized_end=1129
# @@protoc_insertion_point(module_scope)