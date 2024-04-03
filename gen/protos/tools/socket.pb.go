// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.24.2
// source: protos/tools/socket.proto

package tools

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// A socket acts as a payload for the input/output between two tools
type Socket struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Human representation of the expected datatype
	Kind string `protobuf:"bytes,1,opt,name=kind,proto3" json:"kind,omitempty"`
	// The value can take two forms
	//
	// Types that are assignable to Value:
	//
	//	*Socket_Link
	//	*Socket_Raw
	Value isSocket_Value `protobuf_oneof:"value"`
	// The human readable value in json
	Json []byte `protobuf:"bytes,4,opt,name=json,proto3" json:"json,omitempty"`
	// Nested values can be linked or set individually
	Fields map[string]*Socket `protobuf:"bytes,5,rep,name=fields,proto3" json:"fields,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Socket) Reset() {
	*x = Socket{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_tools_socket_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Socket) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Socket) ProtoMessage() {}

func (x *Socket) ProtoReflect() protoreflect.Message {
	mi := &file_protos_tools_socket_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Socket.ProtoReflect.Descriptor instead.
func (*Socket) Descriptor() ([]byte, []int) {
	return file_protos_tools_socket_proto_rawDescGZIP(), []int{0}
}

func (x *Socket) GetKind() string {
	if x != nil {
		return x.Kind
	}
	return ""
}

func (m *Socket) GetValue() isSocket_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (x *Socket) GetLink() string {
	if x, ok := x.GetValue().(*Socket_Link); ok {
		return x.Link
	}
	return ""
}

func (x *Socket) GetRaw() []byte {
	if x, ok := x.GetValue().(*Socket_Raw); ok {
		return x.Raw
	}
	return nil
}

func (x *Socket) GetJson() []byte {
	if x != nil {
		return x.Json
	}
	return nil
}

func (x *Socket) GetFields() map[string]*Socket {
	if x != nil {
		return x.Fields
	}
	return nil
}

type isSocket_Value interface {
	isSocket_Value()
}

type Socket_Link struct {
	// A socket can reference an other
	Link string `protobuf:"bytes,2,opt,name=link,proto3,oneof"`
}

type Socket_Raw struct {
	// The raw data is a raw value that output from the command
	Raw []byte `protobuf:"bytes,3,opt,name=raw,proto3,oneof"`
}

func (*Socket_Link) isSocket_Value() {}

func (*Socket_Raw) isSocket_Value() {}

var File_protos_tools_socket_proto protoreflect.FileDescriptor

var file_protos_tools_socket_proto_rawDesc = []byte{
	0x0a, 0x19, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x74, 0x6f, 0x6f, 0x6c, 0x73, 0x2f, 0x73,
	0x6f, 0x63, 0x6b, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x7a, 0x6f, 0x72,
	0x72, 0x6f, 0x22, 0xe0, 0x01, 0x0a, 0x06, 0x53, 0x6f, 0x63, 0x6b, 0x65, 0x74, 0x12, 0x12, 0x0a,
	0x04, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6b, 0x69, 0x6e,
	0x64, 0x12, 0x14, 0x0a, 0x04, 0x6c, 0x69, 0x6e, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48,
	0x00, 0x52, 0x04, 0x6c, 0x69, 0x6e, 0x6b, 0x12, 0x12, 0x0a, 0x03, 0x72, 0x61, 0x77, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x0c, 0x48, 0x00, 0x52, 0x03, 0x72, 0x61, 0x77, 0x12, 0x12, 0x0a, 0x04, 0x6a,
	0x73, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x6a, 0x73, 0x6f, 0x6e, 0x12,
	0x31, 0x0a, 0x06, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x19, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e, 0x53, 0x6f, 0x63, 0x6b, 0x65, 0x74, 0x2e, 0x46,
	0x69, 0x65, 0x6c, 0x64, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x66, 0x69, 0x65, 0x6c,
	0x64, 0x73, 0x1a, 0x48, 0x0a, 0x0b, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03,
	0x6b, 0x65, 0x79, 0x12, 0x23, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e, 0x53, 0x6f, 0x63, 0x6b, 0x65,
	0x74, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x07, 0x0a, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x30, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x41, 0x63, 0x65, 0x64, 0x79, 0x6e, 0x2f, 0x7a, 0x6f, 0x72, 0x72, 0x6f,
	0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2f, 0x74, 0x6f, 0x6f, 0x6c, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_protos_tools_socket_proto_rawDescOnce sync.Once
	file_protos_tools_socket_proto_rawDescData = file_protos_tools_socket_proto_rawDesc
)

func file_protos_tools_socket_proto_rawDescGZIP() []byte {
	file_protos_tools_socket_proto_rawDescOnce.Do(func() {
		file_protos_tools_socket_proto_rawDescData = protoimpl.X.CompressGZIP(file_protos_tools_socket_proto_rawDescData)
	})
	return file_protos_tools_socket_proto_rawDescData
}

var file_protos_tools_socket_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_protos_tools_socket_proto_goTypes = []interface{}{
	(*Socket)(nil), // 0: zorro.Socket
	nil,            // 1: zorro.Socket.FieldsEntry
}
var file_protos_tools_socket_proto_depIdxs = []int32{
	1, // 0: zorro.Socket.fields:type_name -> zorro.Socket.FieldsEntry
	0, // 1: zorro.Socket.FieldsEntry.value:type_name -> zorro.Socket
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_protos_tools_socket_proto_init() }
func file_protos_tools_socket_proto_init() {
	if File_protos_tools_socket_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_protos_tools_socket_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Socket); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_protos_tools_socket_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*Socket_Link)(nil),
		(*Socket_Raw)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protos_tools_socket_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_protos_tools_socket_proto_goTypes,
		DependencyIndexes: file_protos_tools_socket_proto_depIdxs,
		MessageInfos:      file_protos_tools_socket_proto_msgTypes,
	}.Build()
	File_protos_tools_socket_proto = out.File
	file_protos_tools_socket_proto_rawDesc = nil
	file_protos_tools_socket_proto_goTypes = nil
	file_protos_tools_socket_proto_depIdxs = nil
}
