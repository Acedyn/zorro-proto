// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.24.2
// source: zorroprotos/plugin/plugin_tools.proto

package plugin

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

// Specify where to look for commands of a category
type CommandsDeclaration struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Paths     []string `protobuf:"bytes,1,rep,name=paths,proto3" json:"paths,omitempty"`
	Category  string   `protobuf:"bytes,2,opt,name=category,proto3" json:"category,omitempty"`
	Processor string   `protobuf:"bytes,3,opt,name=processor,proto3" json:"processor,omitempty"`
}

func (x *CommandsDeclaration) Reset() {
	*x = CommandsDeclaration{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zorroprotos_plugin_plugin_tools_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CommandsDeclaration) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CommandsDeclaration) ProtoMessage() {}

func (x *CommandsDeclaration) ProtoReflect() protoreflect.Message {
	mi := &file_zorroprotos_plugin_plugin_tools_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CommandsDeclaration.ProtoReflect.Descriptor instead.
func (*CommandsDeclaration) Descriptor() ([]byte, []int) {
	return file_zorroprotos_plugin_plugin_tools_proto_rawDescGZIP(), []int{0}
}

func (x *CommandsDeclaration) GetPaths() []string {
	if x != nil {
		return x.Paths
	}
	return nil
}

func (x *CommandsDeclaration) GetCategory() string {
	if x != nil {
		return x.Category
	}
	return ""
}

func (x *CommandsDeclaration) GetProcessor() string {
	if x != nil {
		return x.Processor
	}
	return ""
}

// Specify where to look for tools of a category
type GenericToolsDeclaration struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Paths    []string `protobuf:"bytes,1,rep,name=paths,proto3" json:"paths,omitempty"`
	Category string   `protobuf:"bytes,2,opt,name=category,proto3" json:"category,omitempty"`
}

func (x *GenericToolsDeclaration) Reset() {
	*x = GenericToolsDeclaration{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zorroprotos_plugin_plugin_tools_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GenericToolsDeclaration) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GenericToolsDeclaration) ProtoMessage() {}

func (x *GenericToolsDeclaration) ProtoReflect() protoreflect.Message {
	mi := &file_zorroprotos_plugin_plugin_tools_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GenericToolsDeclaration.ProtoReflect.Descriptor instead.
func (*GenericToolsDeclaration) Descriptor() ([]byte, []int) {
	return file_zorroprotos_plugin_plugin_tools_proto_rawDescGZIP(), []int{1}
}

func (x *GenericToolsDeclaration) GetPaths() []string {
	if x != nil {
		return x.Paths
	}
	return nil
}

func (x *GenericToolsDeclaration) GetCategory() string {
	if x != nil {
		return x.Category
	}
	return ""
}

// Where to look for tool declarations
type PluginTools struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Commands []*CommandsDeclaration     `protobuf:"bytes,1,rep,name=commands,proto3" json:"commands,omitempty"`
	Actions  []*GenericToolsDeclaration `protobuf:"bytes,2,rep,name=actions,proto3" json:"actions,omitempty"`
	Hooks    []*GenericToolsDeclaration `protobuf:"bytes,3,rep,name=hooks,proto3" json:"hooks,omitempty"`
	Widgets  []*GenericToolsDeclaration `protobuf:"bytes,4,rep,name=widgets,proto3" json:"widgets,omitempty"`
}

func (x *PluginTools) Reset() {
	*x = PluginTools{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zorroprotos_plugin_plugin_tools_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PluginTools) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PluginTools) ProtoMessage() {}

func (x *PluginTools) ProtoReflect() protoreflect.Message {
	mi := &file_zorroprotos_plugin_plugin_tools_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PluginTools.ProtoReflect.Descriptor instead.
func (*PluginTools) Descriptor() ([]byte, []int) {
	return file_zorroprotos_plugin_plugin_tools_proto_rawDescGZIP(), []int{2}
}

func (x *PluginTools) GetCommands() []*CommandsDeclaration {
	if x != nil {
		return x.Commands
	}
	return nil
}

func (x *PluginTools) GetActions() []*GenericToolsDeclaration {
	if x != nil {
		return x.Actions
	}
	return nil
}

func (x *PluginTools) GetHooks() []*GenericToolsDeclaration {
	if x != nil {
		return x.Hooks
	}
	return nil
}

func (x *PluginTools) GetWidgets() []*GenericToolsDeclaration {
	if x != nil {
		return x.Widgets
	}
	return nil
}

var File_zorroprotos_plugin_plugin_tools_proto protoreflect.FileDescriptor

var file_zorroprotos_plugin_plugin_tools_proto_rawDesc = []byte{
	0x0a, 0x25, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x70, 0x6c,
	0x75, 0x67, 0x69, 0x6e, 0x2f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x5f, 0x74, 0x6f, 0x6f, 0x6c,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x22, 0x65,
	0x0a, 0x13, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x44, 0x65, 0x63, 0x6c, 0x61, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x61, 0x74, 0x68, 0x73, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x70, 0x61, 0x74, 0x68, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x63,
	0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63,
	0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x12, 0x1c, 0x0a, 0x09, 0x70, 0x72, 0x6f, 0x63, 0x65,
	0x73, 0x73, 0x6f, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x63,
	0x65, 0x73, 0x73, 0x6f, 0x72, 0x22, 0x4b, 0x0a, 0x17, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x69, 0x63,
	0x54, 0x6f, 0x6f, 0x6c, 0x73, 0x44, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x14, 0x0a, 0x05, 0x70, 0x61, 0x74, 0x68, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52,
	0x05, 0x70, 0x61, 0x74, 0x68, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f,
	0x72, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f,
	0x72, 0x79, 0x22, 0xef, 0x01, 0x0a, 0x0b, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x54, 0x6f, 0x6f,
	0x6c, 0x73, 0x12, 0x36, 0x0a, 0x08, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e, 0x43, 0x6f, 0x6d,
	0x6d, 0x61, 0x6e, 0x64, 0x73, 0x44, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x08, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x12, 0x38, 0x0a, 0x07, 0x61, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x7a, 0x6f,
	0x72, 0x72, 0x6f, 0x2e, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x69, 0x63, 0x54, 0x6f, 0x6f, 0x6c, 0x73,
	0x44, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x07, 0x61, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x12, 0x34, 0x0a, 0x05, 0x68, 0x6f, 0x6f, 0x6b, 0x73, 0x18, 0x03, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e, 0x47, 0x65, 0x6e, 0x65,
	0x72, 0x69, 0x63, 0x54, 0x6f, 0x6f, 0x6c, 0x73, 0x44, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x05, 0x68, 0x6f, 0x6f, 0x6b, 0x73, 0x12, 0x38, 0x0a, 0x07, 0x77, 0x69,
	0x64, 0x67, 0x65, 0x74, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x7a, 0x6f,
	0x72, 0x72, 0x6f, 0x2e, 0x47, 0x65, 0x6e, 0x65, 0x72, 0x69, 0x63, 0x54, 0x6f, 0x6f, 0x6c, 0x73,
	0x44, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x07, 0x77, 0x69, 0x64,
	0x67, 0x65, 0x74, 0x73, 0x42, 0x32, 0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x41, 0x63, 0x65, 0x64, 0x79, 0x6e, 0x2f, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2d,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_zorroprotos_plugin_plugin_tools_proto_rawDescOnce sync.Once
	file_zorroprotos_plugin_plugin_tools_proto_rawDescData = file_zorroprotos_plugin_plugin_tools_proto_rawDesc
)

func file_zorroprotos_plugin_plugin_tools_proto_rawDescGZIP() []byte {
	file_zorroprotos_plugin_plugin_tools_proto_rawDescOnce.Do(func() {
		file_zorroprotos_plugin_plugin_tools_proto_rawDescData = protoimpl.X.CompressGZIP(file_zorroprotos_plugin_plugin_tools_proto_rawDescData)
	})
	return file_zorroprotos_plugin_plugin_tools_proto_rawDescData
}

var file_zorroprotos_plugin_plugin_tools_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_zorroprotos_plugin_plugin_tools_proto_goTypes = []interface{}{
	(*CommandsDeclaration)(nil),     // 0: zorro.CommandsDeclaration
	(*GenericToolsDeclaration)(nil), // 1: zorro.GenericToolsDeclaration
	(*PluginTools)(nil),             // 2: zorro.PluginTools
}
var file_zorroprotos_plugin_plugin_tools_proto_depIdxs = []int32{
	0, // 0: zorro.PluginTools.commands:type_name -> zorro.CommandsDeclaration
	1, // 1: zorro.PluginTools.actions:type_name -> zorro.GenericToolsDeclaration
	1, // 2: zorro.PluginTools.hooks:type_name -> zorro.GenericToolsDeclaration
	1, // 3: zorro.PluginTools.widgets:type_name -> zorro.GenericToolsDeclaration
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_zorroprotos_plugin_plugin_tools_proto_init() }
func file_zorroprotos_plugin_plugin_tools_proto_init() {
	if File_zorroprotos_plugin_plugin_tools_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_zorroprotos_plugin_plugin_tools_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CommandsDeclaration); i {
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
		file_zorroprotos_plugin_plugin_tools_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GenericToolsDeclaration); i {
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
		file_zorroprotos_plugin_plugin_tools_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PluginTools); i {
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
			RawDescriptor: file_zorroprotos_plugin_plugin_tools_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_zorroprotos_plugin_plugin_tools_proto_goTypes,
		DependencyIndexes: file_zorroprotos_plugin_plugin_tools_proto_depIdxs,
		MessageInfos:      file_zorroprotos_plugin_plugin_tools_proto_msgTypes,
	}.Build()
	File_zorroprotos_plugin_plugin_tools_proto = out.File
	file_zorroprotos_plugin_plugin_tools_proto_rawDesc = nil
	file_zorroprotos_plugin_plugin_tools_proto_goTypes = nil
	file_zorroprotos_plugin_plugin_tools_proto_depIdxs = nil
}
