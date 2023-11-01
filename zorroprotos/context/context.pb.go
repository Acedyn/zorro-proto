// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.24.2
// source: zorroprotos/context/context.proto

package context

import (
	plugin "github.com/Acedyn/zorro-proto/zorroprotos/plugin"
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

// Contexts represent the users's selection and all operations depends on it
type Context struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The Id helps differentiate different contexts
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// List all the available plugins in the current context
	Plugins []*plugin.Plugin `protobuf:"bytes,2,rep,name=plugins,proto3" json:"plugins,omitempty"`
}

func (x *Context) Reset() {
	*x = Context{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zorroprotos_context_context_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Context) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Context) ProtoMessage() {}

func (x *Context) ProtoReflect() protoreflect.Message {
	mi := &file_zorroprotos_context_context_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Context.ProtoReflect.Descriptor instead.
func (*Context) Descriptor() ([]byte, []int) {
	return file_zorroprotos_context_context_proto_rawDescGZIP(), []int{0}
}

func (x *Context) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Context) GetPlugins() []*plugin.Plugin {
	if x != nil {
		return x.Plugins
	}
	return nil
}

var File_zorroprotos_context_context_proto protoreflect.FileDescriptor

var file_zorroprotos_context_context_proto_rawDesc = []byte{
	0x0a, 0x21, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x63, 0x6f,
	0x6e, 0x74, 0x65, 0x78, 0x74, 0x2f, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x05, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x1a, 0x1f, 0x7a, 0x6f, 0x72, 0x72,
	0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x2f, 0x70,
	0x6c, 0x75, 0x67, 0x69, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x42, 0x0a, 0x07, 0x43,
	0x6f, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x27, 0x0a, 0x07, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e,
	0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e,
	0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x52, 0x07, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x42,
	0x33, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x41, 0x63,
	0x65, 0x64, 0x79, 0x6e, 0x2f, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2f, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x63, 0x6f, 0x6e,
	0x74, 0x65, 0x78, 0x74, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_zorroprotos_context_context_proto_rawDescOnce sync.Once
	file_zorroprotos_context_context_proto_rawDescData = file_zorroprotos_context_context_proto_rawDesc
)

func file_zorroprotos_context_context_proto_rawDescGZIP() []byte {
	file_zorroprotos_context_context_proto_rawDescOnce.Do(func() {
		file_zorroprotos_context_context_proto_rawDescData = protoimpl.X.CompressGZIP(file_zorroprotos_context_context_proto_rawDescData)
	})
	return file_zorroprotos_context_context_proto_rawDescData
}

var file_zorroprotos_context_context_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_zorroprotos_context_context_proto_goTypes = []interface{}{
	(*Context)(nil),       // 0: zorro.Context
	(*plugin.Plugin)(nil), // 1: zorro.Plugin
}
var file_zorroprotos_context_context_proto_depIdxs = []int32{
	1, // 0: zorro.Context.plugins:type_name -> zorro.Plugin
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_zorroprotos_context_context_proto_init() }
func file_zorroprotos_context_context_proto_init() {
	if File_zorroprotos_context_context_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_zorroprotos_context_context_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Context); i {
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
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_zorroprotos_context_context_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_zorroprotos_context_context_proto_goTypes,
		DependencyIndexes: file_zorroprotos_context_context_proto_depIdxs,
		MessageInfos:      file_zorroprotos_context_context_proto_msgTypes,
	}.Build()
	File_zorroprotos_context_context_proto = out.File
	file_zorroprotos_context_context_proto_rawDesc = nil
	file_zorroprotos_context_context_proto_goTypes = nil
	file_zorroprotos_context_context_proto_depIdxs = nil
}
