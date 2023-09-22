// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.24.3
// source: zorroprotos/processor/processor.proto

package processor

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

// Processors are responsible for executing commands
type Processor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The Id is used to differentiate processor instances
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// The name of the executable
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	// Used to differentiate two same processors with a different version
	Version *string `protobuf:"bytes,3,opt,name=version,proto3,oneof" json:"version,omitempty"`
	// User friently version of the name without all its contraints
	Label *string `protobuf:"bytes,4,opt,name=label,proto3,oneof" json:"label,omitempty"`
	// Paths where we should look for the executable
	Paths []string `protobuf:"bytes,5,rep,name=paths,proto3" json:"paths,omitempty"`
	// Defines if this processor can be used as a substitute for other processors
	Subsets []string `protobuf:"bytes,6,rep,name=subsets,proto3" json:"subsets,omitempty"`
	// Template to run the program without the processor running
	StartProgramTemplate *string `protobuf:"bytes,7,opt,name=start_program_template,json=startProgramTemplate,proto3,oneof" json:"start_program_template,omitempty"`
	// Template to run the program with the processor running
	StartProcessorTemplate *string `protobuf:"bytes,8,opt,name=start_processor_template,json=startProcessorTemplate,proto3,oneof" json:"start_processor_template,omitempty"`
	// Help knowing at which state is the processor
	Status *ProcessorStatus `protobuf:"varint,9,opt,name=status,proto3,enum=zorro.ProcessorStatus,oneof" json:"status,omitempty"`
	// PID of the underlying running process
	Pid *int32 `protobuf:"varint,10,opt,name=pid,proto3,oneof" json:"pid,omitempty"`
	// Extra data used mainly for filters
	Metadata map[string]string `protobuf:"bytes,11,rep,name=metadata,proto3" json:"metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Used to list the output logs
	Stdout map[int32]string `protobuf:"bytes,12,rep,name=stdout,proto3" json:"stdout,omitempty" protobuf_key:"varint,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Stderr map[int32]string `protobuf:"bytes,13,rep,name=stderr,proto3" json:"stderr,omitempty" protobuf_key:"varint,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Processor) Reset() {
	*x = Processor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zorroprotos_processor_processor_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Processor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Processor) ProtoMessage() {}

func (x *Processor) ProtoReflect() protoreflect.Message {
	mi := &file_zorroprotos_processor_processor_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Processor.ProtoReflect.Descriptor instead.
func (*Processor) Descriptor() ([]byte, []int) {
	return file_zorroprotos_processor_processor_proto_rawDescGZIP(), []int{0}
}

func (x *Processor) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Processor) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Processor) GetVersion() string {
	if x != nil && x.Version != nil {
		return *x.Version
	}
	return ""
}

func (x *Processor) GetLabel() string {
	if x != nil && x.Label != nil {
		return *x.Label
	}
	return ""
}

func (x *Processor) GetPaths() []string {
	if x != nil {
		return x.Paths
	}
	return nil
}

func (x *Processor) GetSubsets() []string {
	if x != nil {
		return x.Subsets
	}
	return nil
}

func (x *Processor) GetStartProgramTemplate() string {
	if x != nil && x.StartProgramTemplate != nil {
		return *x.StartProgramTemplate
	}
	return ""
}

func (x *Processor) GetStartProcessorTemplate() string {
	if x != nil && x.StartProcessorTemplate != nil {
		return *x.StartProcessorTemplate
	}
	return ""
}

func (x *Processor) GetStatus() ProcessorStatus {
	if x != nil && x.Status != nil {
		return *x.Status
	}
	return ProcessorStatus_STARTING
}

func (x *Processor) GetPid() int32 {
	if x != nil && x.Pid != nil {
		return *x.Pid
	}
	return 0
}

func (x *Processor) GetMetadata() map[string]string {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *Processor) GetStdout() map[int32]string {
	if x != nil {
		return x.Stdout
	}
	return nil
}

func (x *Processor) GetStderr() map[int32]string {
	if x != nil {
		return x.Stderr
	}
	return nil
}

var File_zorroprotos_processor_processor_proto protoreflect.FileDescriptor

var file_zorroprotos_processor_processor_proto_rawDesc = []byte{
	0x0a, 0x25, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x70, 0x72,
	0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f,
	0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x1a, 0x2c,
	0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x63,
	0x65, 0x73, 0x73, 0x6f, 0x72, 0x2f, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x5f,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x9b, 0x06, 0x0a,
	0x09, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1d,
	0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48,
	0x00, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x88, 0x01, 0x01, 0x12, 0x19, 0x0a,
	0x05, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x05,
	0x6c, 0x61, 0x62, 0x65, 0x6c, 0x88, 0x01, 0x01, 0x12, 0x14, 0x0a, 0x05, 0x70, 0x61, 0x74, 0x68,
	0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x70, 0x61, 0x74, 0x68, 0x73, 0x12, 0x18,
	0x0a, 0x07, 0x73, 0x75, 0x62, 0x73, 0x65, 0x74, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x09, 0x52,
	0x07, 0x73, 0x75, 0x62, 0x73, 0x65, 0x74, 0x73, 0x12, 0x39, 0x0a, 0x16, 0x73, 0x74, 0x61, 0x72,
	0x74, 0x5f, 0x70, 0x72, 0x6f, 0x67, 0x72, 0x61, 0x6d, 0x5f, 0x74, 0x65, 0x6d, 0x70, 0x6c, 0x61,
	0x74, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x14, 0x73, 0x74, 0x61, 0x72,
	0x74, 0x50, 0x72, 0x6f, 0x67, 0x72, 0x61, 0x6d, 0x54, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65,
	0x88, 0x01, 0x01, 0x12, 0x3d, 0x0a, 0x18, 0x73, 0x74, 0x61, 0x72, 0x74, 0x5f, 0x70, 0x72, 0x6f,
	0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x5f, 0x74, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x18,
	0x08, 0x20, 0x01, 0x28, 0x09, 0x48, 0x03, 0x52, 0x16, 0x73, 0x74, 0x61, 0x72, 0x74, 0x50, 0x72,
	0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x54, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x88,
	0x01, 0x01, 0x12, 0x33, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x09, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x16, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e, 0x50, 0x72, 0x6f, 0x63, 0x65,
	0x73, 0x73, 0x6f, 0x72, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x48, 0x04, 0x52, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x88, 0x01, 0x01, 0x12, 0x15, 0x0a, 0x03, 0x70, 0x69, 0x64, 0x18, 0x0a,
	0x20, 0x01, 0x28, 0x05, 0x48, 0x05, 0x52, 0x03, 0x70, 0x69, 0x64, 0x88, 0x01, 0x01, 0x12, 0x3a,
	0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x0b, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x1e, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73,
	0x6f, 0x72, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x34, 0x0a, 0x06, 0x73, 0x74,
	0x64, 0x6f, 0x75, 0x74, 0x18, 0x0c, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x7a, 0x6f, 0x72,
	0x72, 0x6f, 0x2e, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x2e, 0x53, 0x74, 0x64,
	0x6f, 0x75, 0x74, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x73, 0x74, 0x64, 0x6f, 0x75, 0x74,
	0x12, 0x34, 0x0a, 0x06, 0x73, 0x74, 0x64, 0x65, 0x72, 0x72, 0x18, 0x0d, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x1c, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73,
	0x6f, 0x72, 0x2e, 0x53, 0x74, 0x64, 0x65, 0x72, 0x72, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06,
	0x73, 0x74, 0x64, 0x65, 0x72, 0x72, 0x1a, 0x3b, 0x0a, 0x0d, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a,
	0x02, 0x38, 0x01, 0x1a, 0x39, 0x0a, 0x0b, 0x53, 0x74, 0x64, 0x6f, 0x75, 0x74, 0x45, 0x6e, 0x74,
	0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x39,
	0x0a, 0x0b, 0x53, 0x74, 0x64, 0x65, 0x72, 0x72, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a,
	0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12,
	0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x76, 0x65,
	0x72, 0x73, 0x69, 0x6f, 0x6e, 0x42, 0x08, 0x0a, 0x06, 0x5f, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x42,
	0x19, 0x0a, 0x17, 0x5f, 0x73, 0x74, 0x61, 0x72, 0x74, 0x5f, 0x70, 0x72, 0x6f, 0x67, 0x72, 0x61,
	0x6d, 0x5f, 0x74, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x42, 0x1b, 0x0a, 0x19, 0x5f, 0x73,
	0x74, 0x61, 0x72, 0x74, 0x5f, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x5f, 0x74,
	0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x42, 0x09, 0x0a, 0x07, 0x5f, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x42, 0x06, 0x0a, 0x04, 0x5f, 0x70, 0x69, 0x64, 0x42, 0x35, 0x5a, 0x33, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x41, 0x63, 0x65, 0x64, 0x79, 0x6e, 0x2f,
	0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x7a, 0x6f, 0x72, 0x72,
	0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f,
	0x72, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_zorroprotos_processor_processor_proto_rawDescOnce sync.Once
	file_zorroprotos_processor_processor_proto_rawDescData = file_zorroprotos_processor_processor_proto_rawDesc
)

func file_zorroprotos_processor_processor_proto_rawDescGZIP() []byte {
	file_zorroprotos_processor_processor_proto_rawDescOnce.Do(func() {
		file_zorroprotos_processor_processor_proto_rawDescData = protoimpl.X.CompressGZIP(file_zorroprotos_processor_processor_proto_rawDescData)
	})
	return file_zorroprotos_processor_processor_proto_rawDescData
}

var file_zorroprotos_processor_processor_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_zorroprotos_processor_processor_proto_goTypes = []interface{}{
	(*Processor)(nil),    // 0: zorro.Processor
	nil,                  // 1: zorro.Processor.MetadataEntry
	nil,                  // 2: zorro.Processor.StdoutEntry
	nil,                  // 3: zorro.Processor.StderrEntry
	(ProcessorStatus)(0), // 4: zorro.ProcessorStatus
}
var file_zorroprotos_processor_processor_proto_depIdxs = []int32{
	4, // 0: zorro.Processor.status:type_name -> zorro.ProcessorStatus
	1, // 1: zorro.Processor.metadata:type_name -> zorro.Processor.MetadataEntry
	2, // 2: zorro.Processor.stdout:type_name -> zorro.Processor.StdoutEntry
	3, // 3: zorro.Processor.stderr:type_name -> zorro.Processor.StderrEntry
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_zorroprotos_processor_processor_proto_init() }
func file_zorroprotos_processor_processor_proto_init() {
	if File_zorroprotos_processor_processor_proto != nil {
		return
	}
	file_zorroprotos_processor_processor_status_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_zorroprotos_processor_processor_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Processor); i {
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
	file_zorroprotos_processor_processor_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_zorroprotos_processor_processor_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_zorroprotos_processor_processor_proto_goTypes,
		DependencyIndexes: file_zorroprotos_processor_processor_proto_depIdxs,
		MessageInfos:      file_zorroprotos_processor_processor_proto_msgTypes,
	}.Build()
	File_zorroprotos_processor_processor_proto = out.File
	file_zorroprotos_processor_processor_proto_rawDesc = nil
	file_zorroprotos_processor_processor_proto_goTypes = nil
	file_zorroprotos_processor_processor_proto_depIdxs = nil
}
