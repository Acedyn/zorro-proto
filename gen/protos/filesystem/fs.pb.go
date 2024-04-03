// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.24.2
// source: protos/filesystem/fs.proto

package filesystem

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

// List all the available file systems
type FileSystemType int32

const (
	FileSystemType_Os        FileSystemType = 0
	FileSystemType_IndexedDb FileSystemType = 1
	FileSystemType_Memory    FileSystemType = 2
)

// Enum value maps for FileSystemType.
var (
	FileSystemType_name = map[int32]string{
		0: "Os",
		1: "IndexedDb",
		2: "Memory",
	}
	FileSystemType_value = map[string]int32{
		"Os":        0,
		"IndexedDb": 1,
		"Memory":    2,
	}
)

func (x FileSystemType) Enum() *FileSystemType {
	p := new(FileSystemType)
	*p = x
	return p
}

func (x FileSystemType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (FileSystemType) Descriptor() protoreflect.EnumDescriptor {
	return file_protos_filesystem_fs_proto_enumTypes[0].Descriptor()
}

func (FileSystemType) Type() protoreflect.EnumType {
	return &file_protos_filesystem_fs_proto_enumTypes[0]
}

func (x FileSystemType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use FileSystemType.Descriptor instead.
func (FileSystemType) EnumDescriptor() ([]byte, []int) {
	return file_protos_filesystem_fs_proto_rawDescGZIP(), []int{0}
}

// Settings for the OS file systems
type OsFsSettings struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Directory string `protobuf:"bytes,1,opt,name=directory,proto3" json:"directory,omitempty"`
}

func (x *OsFsSettings) Reset() {
	*x = OsFsSettings{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_filesystem_fs_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OsFsSettings) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OsFsSettings) ProtoMessage() {}

func (x *OsFsSettings) ProtoReflect() protoreflect.Message {
	mi := &file_protos_filesystem_fs_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OsFsSettings.ProtoReflect.Descriptor instead.
func (*OsFsSettings) Descriptor() ([]byte, []int) {
	return file_protos_filesystem_fs_proto_rawDescGZIP(), []int{0}
}

func (x *OsFsSettings) GetDirectory() string {
	if x != nil {
		return x.Directory
	}
	return ""
}

// Settings for the indexed DB file systems
type IndexedDbFsSettings struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *IndexedDbFsSettings) Reset() {
	*x = IndexedDbFsSettings{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_filesystem_fs_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IndexedDbFsSettings) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IndexedDbFsSettings) ProtoMessage() {}

func (x *IndexedDbFsSettings) ProtoReflect() protoreflect.Message {
	mi := &file_protos_filesystem_fs_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IndexedDbFsSettings.ProtoReflect.Descriptor instead.
func (*IndexedDbFsSettings) Descriptor() ([]byte, []int) {
	return file_protos_filesystem_fs_proto_rawDescGZIP(), []int{1}
}

func (x *IndexedDbFsSettings) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// Settings for the in memory file systems
type MemoryFsSettings struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *MemoryFsSettings) Reset() {
	*x = MemoryFsSettings{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_filesystem_fs_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MemoryFsSettings) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MemoryFsSettings) ProtoMessage() {}

func (x *MemoryFsSettings) ProtoReflect() protoreflect.Message {
	mi := &file_protos_filesystem_fs_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MemoryFsSettings.ProtoReflect.Descriptor instead.
func (*MemoryFsSettings) Descriptor() ([]byte, []int) {
	return file_protos_filesystem_fs_proto_rawDescGZIP(), []int{2}
}

func (x *MemoryFsSettings) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

// Settings for a selected file system
type FileSystemSettings struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FileSystemType FileSystemType `protobuf:"varint,1,opt,name=file_system_type,json=fileSystemType,proto3,enum=zorro.FileSystemType" json:"file_system_type,omitempty"`
	// Types that are assignable to FileSystemSettings:
	//
	//	*FileSystemSettings_Os
	//	*FileSystemSettings_IndexedDb
	//	*FileSystemSettings_Memory
	FileSystemSettings isFileSystemSettings_FileSystemSettings `protobuf_oneof:"file_system_settings"`
}

func (x *FileSystemSettings) Reset() {
	*x = FileSystemSettings{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_filesystem_fs_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FileSystemSettings) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FileSystemSettings) ProtoMessage() {}

func (x *FileSystemSettings) ProtoReflect() protoreflect.Message {
	mi := &file_protos_filesystem_fs_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FileSystemSettings.ProtoReflect.Descriptor instead.
func (*FileSystemSettings) Descriptor() ([]byte, []int) {
	return file_protos_filesystem_fs_proto_rawDescGZIP(), []int{3}
}

func (x *FileSystemSettings) GetFileSystemType() FileSystemType {
	if x != nil {
		return x.FileSystemType
	}
	return FileSystemType_Os
}

func (m *FileSystemSettings) GetFileSystemSettings() isFileSystemSettings_FileSystemSettings {
	if m != nil {
		return m.FileSystemSettings
	}
	return nil
}

func (x *FileSystemSettings) GetOs() *OsFsSettings {
	if x, ok := x.GetFileSystemSettings().(*FileSystemSettings_Os); ok {
		return x.Os
	}
	return nil
}

func (x *FileSystemSettings) GetIndexedDb() *IndexedDbFsSettings {
	if x, ok := x.GetFileSystemSettings().(*FileSystemSettings_IndexedDb); ok {
		return x.IndexedDb
	}
	return nil
}

func (x *FileSystemSettings) GetMemory() *MemoryFsSettings {
	if x, ok := x.GetFileSystemSettings().(*FileSystemSettings_Memory); ok {
		return x.Memory
	}
	return nil
}

type isFileSystemSettings_FileSystemSettings interface {
	isFileSystemSettings_FileSystemSettings()
}

type FileSystemSettings_Os struct {
	Os *OsFsSettings `protobuf:"bytes,2,opt,name=os,proto3,oneof"`
}

type FileSystemSettings_IndexedDb struct {
	IndexedDb *IndexedDbFsSettings `protobuf:"bytes,3,opt,name=indexedDb,proto3,oneof"`
}

type FileSystemSettings_Memory struct {
	Memory *MemoryFsSettings `protobuf:"bytes,4,opt,name=memory,proto3,oneof"`
}

func (*FileSystemSettings_Os) isFileSystemSettings_FileSystemSettings() {}

func (*FileSystemSettings_IndexedDb) isFileSystemSettings_FileSystemSettings() {}

func (*FileSystemSettings_Memory) isFileSystemSettings_FileSystemSettings() {}

var File_protos_filesystem_fs_proto protoreflect.FileDescriptor

var file_protos_filesystem_fs_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x79, 0x73,
	0x74, 0x65, 0x6d, 0x2f, 0x66, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x7a, 0x6f,
	0x72, 0x72, 0x6f, 0x22, 0x2c, 0x0a, 0x0c, 0x4f, 0x73, 0x46, 0x73, 0x53, 0x65, 0x74, 0x74, 0x69,
	0x6e, 0x67, 0x73, 0x12, 0x1c, 0x0a, 0x09, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x6f, 0x72,
	0x79, 0x22, 0x29, 0x0a, 0x13, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x65, 0x64, 0x44, 0x62, 0x46, 0x73,
	0x53, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x26, 0x0a, 0x10,
	0x4d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x46, 0x73, 0x53, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x22, 0x83, 0x02, 0x0a, 0x12, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x79, 0x73,
	0x74, 0x65, 0x6d, 0x53, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x12, 0x3f, 0x0a, 0x10, 0x66,
	0x69, 0x6c, 0x65, 0x5f, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x15, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e, 0x46, 0x69,
	0x6c, 0x65, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x54, 0x79, 0x70, 0x65, 0x52, 0x0e, 0x66, 0x69,
	0x6c, 0x65, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x54, 0x79, 0x70, 0x65, 0x12, 0x25, 0x0a, 0x02,
	0x6f, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f,
	0x2e, 0x4f, 0x73, 0x46, 0x73, 0x53, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x48, 0x00, 0x52,
	0x02, 0x6f, 0x73, 0x12, 0x3a, 0x0a, 0x09, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x65, 0x64, 0x44, 0x62,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e, 0x49,
	0x6e, 0x64, 0x65, 0x78, 0x65, 0x64, 0x44, 0x62, 0x46, 0x73, 0x53, 0x65, 0x74, 0x74, 0x69, 0x6e,
	0x67, 0x73, 0x48, 0x00, 0x52, 0x09, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x65, 0x64, 0x44, 0x62, 0x12,
	0x31, 0x0a, 0x06, 0x6d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x17, 0x2e, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2e, 0x4d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x46, 0x73,
	0x53, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x48, 0x00, 0x52, 0x06, 0x6d, 0x65, 0x6d, 0x6f,
	0x72, 0x79, 0x42, 0x16, 0x0a, 0x14, 0x66, 0x69, 0x6c, 0x65, 0x5f, 0x73, 0x79, 0x73, 0x74, 0x65,
	0x6d, 0x5f, 0x73, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x2a, 0x33, 0x0a, 0x0e, 0x46, 0x69,
	0x6c, 0x65, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x54, 0x79, 0x70, 0x65, 0x12, 0x06, 0x0a, 0x02,
	0x4f, 0x73, 0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x65, 0x64, 0x44,
	0x62, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x4d, 0x65, 0x6d, 0x6f, 0x72, 0x79, 0x10, 0x02, 0x42,
	0x36, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x41, 0x63,
	0x65, 0x64, 0x79, 0x6e, 0x2f, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2f, 0x7a, 0x6f, 0x72, 0x72, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x66, 0x69, 0x6c,
	0x65, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_protos_filesystem_fs_proto_rawDescOnce sync.Once
	file_protos_filesystem_fs_proto_rawDescData = file_protos_filesystem_fs_proto_rawDesc
)

func file_protos_filesystem_fs_proto_rawDescGZIP() []byte {
	file_protos_filesystem_fs_proto_rawDescOnce.Do(func() {
		file_protos_filesystem_fs_proto_rawDescData = protoimpl.X.CompressGZIP(file_protos_filesystem_fs_proto_rawDescData)
	})
	return file_protos_filesystem_fs_proto_rawDescData
}

var file_protos_filesystem_fs_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_protos_filesystem_fs_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_protos_filesystem_fs_proto_goTypes = []interface{}{
	(FileSystemType)(0),         // 0: zorro.FileSystemType
	(*OsFsSettings)(nil),        // 1: zorro.OsFsSettings
	(*IndexedDbFsSettings)(nil), // 2: zorro.IndexedDbFsSettings
	(*MemoryFsSettings)(nil),    // 3: zorro.MemoryFsSettings
	(*FileSystemSettings)(nil),  // 4: zorro.FileSystemSettings
}
var file_protos_filesystem_fs_proto_depIdxs = []int32{
	0, // 0: zorro.FileSystemSettings.file_system_type:type_name -> zorro.FileSystemType
	1, // 1: zorro.FileSystemSettings.os:type_name -> zorro.OsFsSettings
	2, // 2: zorro.FileSystemSettings.indexedDb:type_name -> zorro.IndexedDbFsSettings
	3, // 3: zorro.FileSystemSettings.memory:type_name -> zorro.MemoryFsSettings
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_protos_filesystem_fs_proto_init() }
func file_protos_filesystem_fs_proto_init() {
	if File_protos_filesystem_fs_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_protos_filesystem_fs_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OsFsSettings); i {
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
		file_protos_filesystem_fs_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IndexedDbFsSettings); i {
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
		file_protos_filesystem_fs_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MemoryFsSettings); i {
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
		file_protos_filesystem_fs_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FileSystemSettings); i {
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
	file_protos_filesystem_fs_proto_msgTypes[3].OneofWrappers = []interface{}{
		(*FileSystemSettings_Os)(nil),
		(*FileSystemSettings_IndexedDb)(nil),
		(*FileSystemSettings_Memory)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protos_filesystem_fs_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_protos_filesystem_fs_proto_goTypes,
		DependencyIndexes: file_protos_filesystem_fs_proto_depIdxs,
		EnumInfos:         file_protos_filesystem_fs_proto_enumTypes,
		MessageInfos:      file_protos_filesystem_fs_proto_msgTypes,
	}.Build()
	File_protos_filesystem_fs_proto = out.File
	file_protos_filesystem_fs_proto_rawDesc = nil
	file_protos_filesystem_fs_proto_goTypes = nil
	file_protos_filesystem_fs_proto_depIdxs = nil
}
