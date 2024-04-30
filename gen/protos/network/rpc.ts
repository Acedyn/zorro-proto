/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
import { Duration } from "../../google/protobuf/duration";
import Long = require("long");

export const protobufPackage = "zorro";

/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 *
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export interface Status {
  /**
   * The status code, which should be an enum value of
   * [google.rpc.Code][google.rpc.Code].
   */
  code: number;
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * [google.rpc.Status.details][google.rpc.Status.details] field, or localized
   * by the client.
   */
  message: string;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: Any[];
}

/**
 * A PacketMessage is used to packetize large messages (> 64KiB) to be able to safely
 * transmit over WebRTC data channels.
 */
export interface PacketMessage {
  data: Uint8Array;
  eom: boolean;
}

/**
 * A Stream represents an instance of a gRPC stream between
 * a client and a server.
 */
export interface Stream {
  id: number;
}

/**
 * A Request is a frame coming from a client. It is always
 * associated with a stream where the client assigns the stream
 * identifier. Servers will drop frames where the stream identifier
 * has no association (if a non-header frames are sent).
 */
export interface Request {
  stream: Stream | undefined;
  headers?: RequestHeaders | undefined;
  message?: RequestMessage | undefined;
  rstStream?: boolean | undefined;
}

/** RequestHeaders describe the unary or streaming call to make. */
export interface RequestHeaders {
  method: string;
  metadata: Metadata | undefined;
  timeout: Duration | undefined;
}

/**
 * A RequestMessage contains individual gRPC messages and a potential
 * end-of-stream (EOS) marker.
 */
export interface RequestMessage {
  hasMessage: boolean;
  packetMessage: PacketMessage | undefined;
  eos: boolean;
}

/**
 * A Response is a frame coming from a server. It is always
 * associated with a stream where the client assigns the stream
 * identifier. Clients will drop frames where the stream identifier
 * has no association.
 */
export interface Response {
  stream: Stream | undefined;
  headers?: ResponseHeaders | undefined;
  message?: ResponseMessage | undefined;
  trailers?: ResponseTrailers | undefined;
}

/**
 * ResponseHeaders contain custom metadata that are sent to the client
 * before any message or trailers (unless only trailers are sent).
 */
export interface ResponseHeaders {
  metadata: Metadata | undefined;
}

/** ResponseMessage contains the data of a response to a call. */
export interface ResponseMessage {
  packetMessage: PacketMessage | undefined;
}

/** ResponseTrailers contain the status of a response and any custom metadata. */
export interface ResponseTrailers {
  status: Status | undefined;
  metadata: Metadata | undefined;
}

/** Strings are a series of values. */
export interface Strings {
  values: string[];
}

/**
 * Metadata is for custom key values provided by a client or server
 * during a stream.
 */
export interface Metadata {
  md: { [key: string]: Strings };
}

export interface Metadata_MdEntry {
  key: string;
  value: Strings | undefined;
}

function createBaseStatus(): Status {
  return { code: 0, message: "", details: [] };
}

export const Status = {
  encode(message: Status, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.details) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Status {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.details.push(Any.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Status {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      details: globalThis.Array.isArray(object?.details) ? object.details.map((e: any) => Any.fromJSON(e)) : [],
    };
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.details?.length) {
      obj.details = message.details.map((e) => Any.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Status>, I>>(base?: I): Status {
    return Status.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Status>, I>>(object: I): Status {
    const message = createBaseStatus();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.details = object.details?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

function createBasePacketMessage(): PacketMessage {
  return { data: new Uint8Array(0), eom: false };
}

export const PacketMessage = {
  encode(message: PacketMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.eom === true) {
      writer.uint32(16).bool(message.eom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.eom = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PacketMessage {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      eom: isSet(object.eom) ? globalThis.Boolean(object.eom) : false,
    };
  },

  toJSON(message: PacketMessage): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.eom === true) {
      obj.eom = message.eom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PacketMessage>, I>>(base?: I): PacketMessage {
    return PacketMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PacketMessage>, I>>(object: I): PacketMessage {
    const message = createBasePacketMessage();
    message.data = object.data ?? new Uint8Array(0);
    message.eom = object.eom ?? false;
    return message;
  },
};

function createBaseStream(): Stream {
  return { id: 0 };
}

export const Stream = {
  encode(message: Stream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stream {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Stream {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: Stream): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Stream>, I>>(base?: I): Stream {
    return Stream.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Stream>, I>>(object: I): Stream {
    const message = createBaseStream();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseRequest(): Request {
  return { stream: undefined, headers: undefined, message: undefined, rstStream: undefined };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stream !== undefined) {
      Stream.encode(message.stream, writer.uint32(10).fork()).ldelim();
    }
    if (message.headers !== undefined) {
      RequestHeaders.encode(message.headers, writer.uint32(18).fork()).ldelim();
    }
    if (message.message !== undefined) {
      RequestMessage.encode(message.message, writer.uint32(26).fork()).ldelim();
    }
    if (message.rstStream !== undefined) {
      writer.uint32(32).bool(message.rstStream);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stream = Stream.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.headers = RequestHeaders.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = RequestMessage.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.rstStream = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      stream: isSet(object.stream) ? Stream.fromJSON(object.stream) : undefined,
      headers: isSet(object.headers) ? RequestHeaders.fromJSON(object.headers) : undefined,
      message: isSet(object.message) ? RequestMessage.fromJSON(object.message) : undefined,
      rstStream: isSet(object.rstStream) ? globalThis.Boolean(object.rstStream) : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    if (message.stream !== undefined) {
      obj.stream = Stream.toJSON(message.stream);
    }
    if (message.headers !== undefined) {
      obj.headers = RequestHeaders.toJSON(message.headers);
    }
    if (message.message !== undefined) {
      obj.message = RequestMessage.toJSON(message.message);
    }
    if (message.rstStream !== undefined) {
      obj.rstStream = message.rstStream;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request {
    return Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.stream = (object.stream !== undefined && object.stream !== null)
      ? Stream.fromPartial(object.stream)
      : undefined;
    message.headers = (object.headers !== undefined && object.headers !== null)
      ? RequestHeaders.fromPartial(object.headers)
      : undefined;
    message.message = (object.message !== undefined && object.message !== null)
      ? RequestMessage.fromPartial(object.message)
      : undefined;
    message.rstStream = object.rstStream ?? undefined;
    return message;
  },
};

function createBaseRequestHeaders(): RequestHeaders {
  return { method: "", metadata: undefined, timeout: undefined };
}

export const RequestHeaders = {
  encode(message: RequestHeaders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.method !== "") {
      writer.uint32(10).string(message.method);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestHeaders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestHeaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.method = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timeout = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestHeaders {
    return {
      method: isSet(object.method) ? globalThis.String(object.method) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined,
    };
  },

  toJSON(message: RequestHeaders): unknown {
    const obj: any = {};
    if (message.method !== "") {
      obj.method = message.method;
    }
    if (message.metadata !== undefined) {
      obj.metadata = Metadata.toJSON(message.metadata);
    }
    if (message.timeout !== undefined) {
      obj.timeout = Duration.toJSON(message.timeout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RequestHeaders>, I>>(base?: I): RequestHeaders {
    return RequestHeaders.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RequestHeaders>, I>>(object: I): RequestHeaders {
    const message = createBaseRequestHeaders();
    message.method = object.method ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
      : undefined;
    return message;
  },
};

function createBaseRequestMessage(): RequestMessage {
  return { hasMessage: false, packetMessage: undefined, eos: false };
}

export const RequestMessage = {
  encode(message: RequestMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasMessage === true) {
      writer.uint32(8).bool(message.hasMessage);
    }
    if (message.packetMessage !== undefined) {
      PacketMessage.encode(message.packetMessage, writer.uint32(18).fork()).ldelim();
    }
    if (message.eos === true) {
      writer.uint32(24).bool(message.eos);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hasMessage = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.packetMessage = PacketMessage.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.eos = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestMessage {
    return {
      hasMessage: isSet(object.hasMessage) ? globalThis.Boolean(object.hasMessage) : false,
      packetMessage: isSet(object.packetMessage) ? PacketMessage.fromJSON(object.packetMessage) : undefined,
      eos: isSet(object.eos) ? globalThis.Boolean(object.eos) : false,
    };
  },

  toJSON(message: RequestMessage): unknown {
    const obj: any = {};
    if (message.hasMessage === true) {
      obj.hasMessage = message.hasMessage;
    }
    if (message.packetMessage !== undefined) {
      obj.packetMessage = PacketMessage.toJSON(message.packetMessage);
    }
    if (message.eos === true) {
      obj.eos = message.eos;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RequestMessage>, I>>(base?: I): RequestMessage {
    return RequestMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RequestMessage>, I>>(object: I): RequestMessage {
    const message = createBaseRequestMessage();
    message.hasMessage = object.hasMessage ?? false;
    message.packetMessage = (object.packetMessage !== undefined && object.packetMessage !== null)
      ? PacketMessage.fromPartial(object.packetMessage)
      : undefined;
    message.eos = object.eos ?? false;
    return message;
  },
};

function createBaseResponse(): Response {
  return { stream: undefined, headers: undefined, message: undefined, trailers: undefined };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stream !== undefined) {
      Stream.encode(message.stream, writer.uint32(10).fork()).ldelim();
    }
    if (message.headers !== undefined) {
      ResponseHeaders.encode(message.headers, writer.uint32(18).fork()).ldelim();
    }
    if (message.message !== undefined) {
      ResponseMessage.encode(message.message, writer.uint32(26).fork()).ldelim();
    }
    if (message.trailers !== undefined) {
      ResponseTrailers.encode(message.trailers, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stream = Stream.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.headers = ResponseHeaders.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = ResponseMessage.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.trailers = ResponseTrailers.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      stream: isSet(object.stream) ? Stream.fromJSON(object.stream) : undefined,
      headers: isSet(object.headers) ? ResponseHeaders.fromJSON(object.headers) : undefined,
      message: isSet(object.message) ? ResponseMessage.fromJSON(object.message) : undefined,
      trailers: isSet(object.trailers) ? ResponseTrailers.fromJSON(object.trailers) : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.stream !== undefined) {
      obj.stream = Stream.toJSON(message.stream);
    }
    if (message.headers !== undefined) {
      obj.headers = ResponseHeaders.toJSON(message.headers);
    }
    if (message.message !== undefined) {
      obj.message = ResponseMessage.toJSON(message.message);
    }
    if (message.trailers !== undefined) {
      obj.trailers = ResponseTrailers.toJSON(message.trailers);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.stream = (object.stream !== undefined && object.stream !== null)
      ? Stream.fromPartial(object.stream)
      : undefined;
    message.headers = (object.headers !== undefined && object.headers !== null)
      ? ResponseHeaders.fromPartial(object.headers)
      : undefined;
    message.message = (object.message !== undefined && object.message !== null)
      ? ResponseMessage.fromPartial(object.message)
      : undefined;
    message.trailers = (object.trailers !== undefined && object.trailers !== null)
      ? ResponseTrailers.fromPartial(object.trailers)
      : undefined;
    return message;
  },
};

function createBaseResponseHeaders(): ResponseHeaders {
  return { metadata: undefined };
}

export const ResponseHeaders = {
  encode(message: ResponseHeaders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseHeaders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseHeaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseHeaders {
    return { metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined };
  },

  toJSON(message: ResponseHeaders): unknown {
    const obj: any = {};
    if (message.metadata !== undefined) {
      obj.metadata = Metadata.toJSON(message.metadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResponseHeaders>, I>>(base?: I): ResponseHeaders {
    return ResponseHeaders.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResponseHeaders>, I>>(object: I): ResponseHeaders {
    const message = createBaseResponseHeaders();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseResponseMessage(): ResponseMessage {
  return { packetMessage: undefined };
}

export const ResponseMessage = {
  encode(message: ResponseMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetMessage !== undefined) {
      PacketMessage.encode(message.packetMessage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packetMessage = PacketMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseMessage {
    return { packetMessage: isSet(object.packetMessage) ? PacketMessage.fromJSON(object.packetMessage) : undefined };
  },

  toJSON(message: ResponseMessage): unknown {
    const obj: any = {};
    if (message.packetMessage !== undefined) {
      obj.packetMessage = PacketMessage.toJSON(message.packetMessage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResponseMessage>, I>>(base?: I): ResponseMessage {
    return ResponseMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResponseMessage>, I>>(object: I): ResponseMessage {
    const message = createBaseResponseMessage();
    message.packetMessage = (object.packetMessage !== undefined && object.packetMessage !== null)
      ? PacketMessage.fromPartial(object.packetMessage)
      : undefined;
    return message;
  },
};

function createBaseResponseTrailers(): ResponseTrailers {
  return { status: undefined, metadata: undefined };
}

export const ResponseTrailers = {
  encode(message: ResponseTrailers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseTrailers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseTrailers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseTrailers {
    return {
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: ResponseTrailers): unknown {
    const obj: any = {};
    if (message.status !== undefined) {
      obj.status = Status.toJSON(message.status);
    }
    if (message.metadata !== undefined) {
      obj.metadata = Metadata.toJSON(message.metadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResponseTrailers>, I>>(base?: I): ResponseTrailers {
    return ResponseTrailers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResponseTrailers>, I>>(object: I): ResponseTrailers {
    const message = createBaseResponseTrailers();
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseStrings(): Strings {
  return { values: [] };
}

export const Strings = {
  encode(message: Strings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Strings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStrings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Strings {
    return {
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: Strings): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Strings>, I>>(base?: I): Strings {
    return Strings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Strings>, I>>(object: I): Strings {
    const message = createBaseStrings();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseMetadata(): Metadata {
  return { md: {} };
}

export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.md).forEach(([key, value]) => {
      Metadata_MdEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Metadata_MdEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.md[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      md: isObject(object.md)
        ? Object.entries(object.md).reduce<{ [key: string]: Strings }>((acc, [key, value]) => {
          acc[key] = Strings.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    if (message.md) {
      const entries = Object.entries(message.md);
      if (entries.length > 0) {
        obj.md = {};
        entries.forEach(([k, v]) => {
          obj.md[k] = Strings.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Metadata>, I>>(base?: I): Metadata {
    return Metadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.md = Object.entries(object.md ?? {}).reduce<{ [key: string]: Strings }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Strings.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseMetadata_MdEntry(): Metadata_MdEntry {
  return { key: "", value: undefined };
}

export const Metadata_MdEntry = {
  encode(message: Metadata_MdEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Strings.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata_MdEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata_MdEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Strings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Metadata_MdEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Strings.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Metadata_MdEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Strings.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Metadata_MdEntry>, I>>(base?: I): Metadata_MdEntry {
    return Metadata_MdEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Metadata_MdEntry>, I>>(object: I): Metadata_MdEntry {
    const message = createBaseMetadata_MdEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Strings.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
