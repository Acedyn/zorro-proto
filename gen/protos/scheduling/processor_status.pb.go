// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.24.2
// source: protos/scheduling/processor_status.proto

package scheduling

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

type ProcessorStatus int32

const (
	ProcessorStatus_STARTING       ProcessorStatus = 0 // The program is starting
	ProcessorStatus_IDLE           ProcessorStatus = 1 // The program is running but not executing any commands
	ProcessorStatus_PROCESSING     ProcessorStatus = 2 // The program is running and executing commands
	ProcessorStatus_SHUTTING_DOWN  ProcessorStatus = 3 // The program received a shutting down command
	ProcessorStatus_SHUT_DOWN      ProcessorStatus = 4 // The program is now off
	ProcessorStatus_NOT_RESPONDING ProcessorStatus = 5 // No ping received from the processor
)

// Enum value maps for ProcessorStatus.
var (
	ProcessorStatus_name = map[int32]string{
		0: "STARTING",
		1: "IDLE",
		2: "PROCESSING",
		3: "SHUTTING_DOWN",
		4: "SHUT_DOWN",
		5: "NOT_RESPONDING",
	}
	ProcessorStatus_value = map[string]int32{
		"STARTING":       0,
		"IDLE":           1,
		"PROCESSING":     2,
		"SHUTTING_DOWN":  3,
		"SHUT_DOWN":      4,
		"NOT_RESPONDING": 5,
	}
)

func (x ProcessorStatus) Enum() *ProcessorStatus {
	p := new(ProcessorStatus)
	*p = x
	return p
}

func (x ProcessorStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ProcessorStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_protos_scheduling_processor_status_proto_enumTypes[0].Descriptor()
}

func (ProcessorStatus) Type() protoreflect.EnumType {
	return &file_protos_scheduling_processor_status_proto_enumTypes[0]
}

func (x ProcessorStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ProcessorStatus.Descriptor instead.
func (ProcessorStatus) EnumDescriptor() ([]byte, []int) {
	return file_protos_scheduling_processor_status_proto_rawDescGZIP(), []int{0}
}

var File_protos_scheduling_processor_status_proto protoreflect.FileDescriptor

var file_protos_scheduling_processor_status_proto_rawDesc = []byte{
	0x0a, 0x28, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x73, 0x63, 0x68, 0x65, 0x64, 0x75, 0x6c,
	0x69, 0x6e, 0x67, 0x2f, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x5f, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x7a, 0x6f, 0x72, 0x72,
	0x6f, 0x2a, 0x6f, 0x0a, 0x0f, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x6f, 0x72, 0x53, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x12, 0x0c, 0x0a, 0x08, 0x53, 0x54, 0x41, 0x52, 0x54, 0x49, 0x4e, 0x47,
	0x10, 0x00, 0x12, 0x08, 0x0a, 0x04, 0x49, 0x44, 0x4c, 0x45, 0x10, 0x01, 0x12, 0x0e, 0x0a, 0x0a,
	0x50, 0x52, 0x4f, 0x43, 0x45, 0x53, 0x53, 0x49, 0x4e, 0x47, 0x10, 0x02, 0x12, 0x11, 0x0a, 0x0d,
	0x53, 0x48, 0x55, 0x54, 0x54, 0x49, 0x4e, 0x47, 0x5f, 0x44, 0x4f, 0x57, 0x4e, 0x10, 0x03, 0x12,
	0x0d, 0x0a, 0x09, 0x53, 0x48, 0x55, 0x54, 0x5f, 0x44, 0x4f, 0x57, 0x4e, 0x10, 0x04, 0x12, 0x12,
	0x0a, 0x0e, 0x4e, 0x4f, 0x54, 0x5f, 0x52, 0x45, 0x53, 0x50, 0x4f, 0x4e, 0x44, 0x49, 0x4e, 0x47,
	0x10, 0x05, 0x42, 0x35, 0x5a, 0x33, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x41, 0x63, 0x65, 0x64, 0x79, 0x6e, 0x2f, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2d, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x73,
	0x63, 0x68, 0x65, 0x64, 0x75, 0x6c, 0x69, 0x6e, 0x67, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_protos_scheduling_processor_status_proto_rawDescOnce sync.Once
	file_protos_scheduling_processor_status_proto_rawDescData = file_protos_scheduling_processor_status_proto_rawDesc
)

func file_protos_scheduling_processor_status_proto_rawDescGZIP() []byte {
	file_protos_scheduling_processor_status_proto_rawDescOnce.Do(func() {
		file_protos_scheduling_processor_status_proto_rawDescData = protoimpl.X.CompressGZIP(file_protos_scheduling_processor_status_proto_rawDescData)
	})
	return file_protos_scheduling_processor_status_proto_rawDescData
}

var file_protos_scheduling_processor_status_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_protos_scheduling_processor_status_proto_goTypes = []interface{}{
	(ProcessorStatus)(0), // 0: zorro.ProcessorStatus
}
var file_protos_scheduling_processor_status_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_protos_scheduling_processor_status_proto_init() }
func file_protos_scheduling_processor_status_proto_init() {
	if File_protos_scheduling_processor_status_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protos_scheduling_processor_status_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_protos_scheduling_processor_status_proto_goTypes,
		DependencyIndexes: file_protos_scheduling_processor_status_proto_depIdxs,
		EnumInfos:         file_protos_scheduling_processor_status_proto_enumTypes,
	}.Build()
	File_protos_scheduling_processor_status_proto = out.File
	file_protos_scheduling_processor_status_proto_rawDesc = nil
	file_protos_scheduling_processor_status_proto_goTypes = nil
	file_protos_scheduling_processor_status_proto_depIdxs = nil
}
