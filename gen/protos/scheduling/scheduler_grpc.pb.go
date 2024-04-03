// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.24.2
// source: protos/scheduling/scheduler.proto

package scheduling

import (
	context "context"
	processor "github.com/Acedyn/zorro-proto/gen/protos/processor"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// SubprocessSchedulingClient is the client API for SubprocessScheduling service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SubprocessSchedulingClient interface {
	// For processors to start running their commands
	RegisterProcessor(ctx context.Context, in *ProcessorRegistration, opts ...grpc.CallOption) (*processor.Processor, error)
}

type subprocessSchedulingClient struct {
	cc grpc.ClientConnInterface
}

func NewSubprocessSchedulingClient(cc grpc.ClientConnInterface) SubprocessSchedulingClient {
	return &subprocessSchedulingClient{cc}
}

func (c *subprocessSchedulingClient) RegisterProcessor(ctx context.Context, in *ProcessorRegistration, opts ...grpc.CallOption) (*processor.Processor, error) {
	out := new(processor.Processor)
	err := c.cc.Invoke(ctx, "/zorro.SubprocessScheduling/RegisterProcessor", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SubprocessSchedulingServer is the server API for SubprocessScheduling service.
// All implementations must embed UnimplementedSubprocessSchedulingServer
// for forward compatibility
type SubprocessSchedulingServer interface {
	// For processors to start running their commands
	RegisterProcessor(context.Context, *ProcessorRegistration) (*processor.Processor, error)
	mustEmbedUnimplementedSubprocessSchedulingServer()
}

// UnimplementedSubprocessSchedulingServer must be embedded to have forward compatible implementations.
type UnimplementedSubprocessSchedulingServer struct {
}

func (UnimplementedSubprocessSchedulingServer) RegisterProcessor(context.Context, *ProcessorRegistration) (*processor.Processor, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RegisterProcessor not implemented")
}
func (UnimplementedSubprocessSchedulingServer) mustEmbedUnimplementedSubprocessSchedulingServer() {}

// UnsafeSubprocessSchedulingServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SubprocessSchedulingServer will
// result in compilation errors.
type UnsafeSubprocessSchedulingServer interface {
	mustEmbedUnimplementedSubprocessSchedulingServer()
}

func RegisterSubprocessSchedulingServer(s grpc.ServiceRegistrar, srv SubprocessSchedulingServer) {
	s.RegisterService(&SubprocessScheduling_ServiceDesc, srv)
}

func _SubprocessScheduling_RegisterProcessor_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProcessorRegistration)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SubprocessSchedulingServer).RegisterProcessor(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/zorro.SubprocessScheduling/RegisterProcessor",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SubprocessSchedulingServer).RegisterProcessor(ctx, req.(*ProcessorRegistration))
	}
	return interceptor(ctx, in, info, handler)
}

// SubprocessScheduling_ServiceDesc is the grpc.ServiceDesc for SubprocessScheduling service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var SubprocessScheduling_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "zorro.SubprocessScheduling",
	HandlerType: (*SubprocessSchedulingServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "RegisterProcessor",
			Handler:    _SubprocessScheduling_RegisterProcessor_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "protos/scheduling/scheduler.proto",
}
