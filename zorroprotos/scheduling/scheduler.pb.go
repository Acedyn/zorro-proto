// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.24.3
// source: zorroprotos/scheduling/scheduler.proto

package scheduling

import (
	processor "github.com/Acedyn/zorro-proto/zorroprotos/processor"
	tools "github.com/Acedyn/zorro-proto/zorroprotos/tools"
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

// Multiple values can be exchanged with the processor
type ProcessorCommunication struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CommandUpdate   *tools.Command       `protobuf:"bytes,1,opt,name=command_update,json=commandUpdate,proto3,oneof" json:"command_update,omitempty"`
	ProcessorUpdate *processor.Processor `protobuf:"bytes,2,opt,name=processor_update,json=processorUpdate,proto3,oneof" json:"processor_update,omitempty"`
}

func (x *ProcessorCommunication) Reset() {
	*x = ProcessorCommunication{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zorroprotos_scheduling_scheduler_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProcessorCommunication) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessorCommunication) ProtoMessage() {}

func (x *ProcessorCommunication) ProtoReflect() protoreflect.Message {
	mi := &file_zorroprotos_scheduling_scheduler_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessorCommunication.ProtoReflect.Descriptor instead.
func (*ProcessorCommunication) Descriptor() ([]byte, []int) {
	return file_zorroprotos_scheduling_scheduler_proto_rawDescGZIP(), []int{0}
}

func (x *ProcessorCommunication) GetCommandUpdate() *tools.Command {
	if x != nil {
		return x.CommandUpdate
	}
	return nil
}

func (x *ProcessorCommunication) GetProcessorUpdate() *processor.Processor {
	if x != nil {
		return x.ProcessorUpdate
	}
	return nil
}

var File_zorroprotos_scheduling_scheduler_proto protoreflect.FileDescriptor

var file_zorroprotos_scheduling_scheduler_proto_rawDesc = []byte{
	0x0a, 0x26, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x73, 0x63,
	0x68, 0x65, 0x64, 0x75, 0x6c, 0x69, 0x6e, 0x67, 0x2f, 0x73, 0x63, 0x68, 0x65, 0x64, 0x75, 0x6c,
	0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x1a,
	0x1f, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x74, 0x6f, 0x6f,
	0x6c, 0x73, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x25, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x70, 0x72,
	0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f,
	0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xbe, 0x01, 0x0a, 0x16, 0x70, 0x72, 0x6f, 0x63,
	0x65, 0x73, 0x73, 0x6f, 0x72, 0x43, 0x6f, 0x6d, 0x6d, 0x75, 0x6e, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x3a, 0x0a, 0x0e, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x5f, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x7a, 0x6f, 0x72,
	0x72, 0x6f, 0x2e, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x48, 0x00, 0x52, 0x0d, 0x63, 0x6f,
	0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x88, 0x01, 0x01, 0x12, 0x40,
	0x0a, 0x10, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x5f, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f,
	0x2e, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x48, 0x01, 0x52, 0x0f, 0x70, 0x72,
	0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x88, 0x01, 0x01,
	0x42, 0x11, 0x0a, 0x0f, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x5f, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x42, 0x13, 0x0a, 0x11, 0x5f, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f,
	0x72, 0x5f, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x32, 0x45, 0x0a, 0x0a, 0x53, 0x63, 0x68, 0x65,
	0x64, 0x75, 0x6c, 0x69, 0x6e, 0x67, 0x12, 0x37, 0x0a, 0x11, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74,
	0x65, 0x72, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x12, 0x10, 0x2e, 0x7a, 0x6f,
	0x72, 0x72, 0x6f, 0x2e, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x1a, 0x10, 0x2e,
	0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x42,
	0x36, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x41, 0x63,
	0x65, 0x64, 0x79, 0x6e, 0x2f, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2f, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x68,
	0x65, 0x64, 0x75, 0x6c, 0x69, 0x6e, 0x67, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_zorroprotos_scheduling_scheduler_proto_rawDescOnce sync.Once
	file_zorroprotos_scheduling_scheduler_proto_rawDescData = file_zorroprotos_scheduling_scheduler_proto_rawDesc
)

func file_zorroprotos_scheduling_scheduler_proto_rawDescGZIP() []byte {
	file_zorroprotos_scheduling_scheduler_proto_rawDescOnce.Do(func() {
		file_zorroprotos_scheduling_scheduler_proto_rawDescData = protoimpl.X.CompressGZIP(file_zorroprotos_scheduling_scheduler_proto_rawDescData)
	})
	return file_zorroprotos_scheduling_scheduler_proto_rawDescData
}

var file_zorroprotos_scheduling_scheduler_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_zorroprotos_scheduling_scheduler_proto_goTypes = []interface{}{
	(*ProcessorCommunication)(nil), // 0: zorro.processorCommunication
	(*tools.Command)(nil),          // 1: zorro.Command
	(*processor.Processor)(nil),    // 2: zorro.Processor
}
var file_zorroprotos_scheduling_scheduler_proto_depIdxs = []int32{
	1, // 0: zorro.processorCommunication.command_update:type_name -> zorro.Command
	2, // 1: zorro.processorCommunication.processor_update:type_name -> zorro.Processor
	2, // 2: zorro.Scheduling.RegisterProcessor:input_type -> zorro.Processor
	2, // 3: zorro.Scheduling.RegisterProcessor:output_type -> zorro.Processor
	3, // [3:4] is the sub-list for method output_type
	2, // [2:3] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_zorroprotos_scheduling_scheduler_proto_init() }
func file_zorroprotos_scheduling_scheduler_proto_init() {
	if File_zorroprotos_scheduling_scheduler_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_zorroprotos_scheduling_scheduler_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProcessorCommunication); i {
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
	file_zorroprotos_scheduling_scheduler_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_zorroprotos_scheduling_scheduler_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_zorroprotos_scheduling_scheduler_proto_goTypes,
		DependencyIndexes: file_zorroprotos_scheduling_scheduler_proto_depIdxs,
		MessageInfos:      file_zorroprotos_scheduling_scheduler_proto_msgTypes,
	}.Build()
	File_zorroprotos_scheduling_scheduler_proto = out.File
	file_zorroprotos_scheduling_scheduler_proto_rawDesc = nil
	file_zorroprotos_scheduling_scheduler_proto_goTypes = nil
	file_zorroprotos_scheduling_scheduler_proto_depIdxs = nil
}
