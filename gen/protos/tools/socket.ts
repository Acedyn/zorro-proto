/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "zorro";

/** Since protobuf does not allows maps in oneofs we must create a message for it */
export interface SocketFields {
  fields: { [key: string]: Socket };
}

export interface SocketFields_FieldsEntry {
  key: string;
  value: Socket | undefined;
}

/** A socket acts as a payload for the input/output between two tools */
export interface Socket {
  /** Human representation of the expected datatype */
  kind: string;
  /** A socket can reference an other */
  link?:
    | string
    | undefined;
  /** The raw data is a raw value that output from the command */
  raw?:
    | Uint8Array
    | undefined;
  /** Nested values can be linked or set individually */
  fields?:
    | SocketFields
    | undefined;
  /** The human readable value in json */
  json: Uint8Array;
}

function createBaseSocketFields(): SocketFields {
  return { fields: {} };
}

export const SocketFields = {
  encode(message: SocketFields, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      SocketFields_FieldsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SocketFields {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocketFields();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SocketFields_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
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

  fromJSON(object: any): SocketFields {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{ [key: string]: Socket }>((acc, [key, value]) => {
          acc[key] = Socket.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SocketFields): unknown {
    const obj: any = {};
    if (message.fields) {
      const entries = Object.entries(message.fields);
      if (entries.length > 0) {
        obj.fields = {};
        entries.forEach(([k, v]) => {
          obj.fields[k] = Socket.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SocketFields>, I>>(base?: I): SocketFields {
    return SocketFields.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SocketFields>, I>>(object: I): SocketFields {
    const message = createBaseSocketFields();
    message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: Socket }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Socket.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseSocketFields_FieldsEntry(): SocketFields_FieldsEntry {
  return { key: "", value: undefined };
}

export const SocketFields_FieldsEntry = {
  encode(message: SocketFields_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Socket.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SocketFields_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocketFields_FieldsEntry();
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

          message.value = Socket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SocketFields_FieldsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Socket.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SocketFields_FieldsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Socket.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SocketFields_FieldsEntry>, I>>(base?: I): SocketFields_FieldsEntry {
    return SocketFields_FieldsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SocketFields_FieldsEntry>, I>>(object: I): SocketFields_FieldsEntry {
    const message = createBaseSocketFields_FieldsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Socket.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSocket(): Socket {
  return { kind: "", link: undefined, raw: undefined, fields: undefined, json: new Uint8Array(0) };
}

export const Socket = {
  encode(message: Socket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.link !== undefined) {
      writer.uint32(18).string(message.link);
    }
    if (message.raw !== undefined) {
      writer.uint32(26).bytes(message.raw);
    }
    if (message.fields !== undefined) {
      SocketFields.encode(message.fields, writer.uint32(34).fork()).ldelim();
    }
    if (message.json.length !== 0) {
      writer.uint32(42).bytes(message.json);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Socket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.link = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.raw = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fields = SocketFields.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.json = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Socket {
    return {
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      link: isSet(object.link) ? globalThis.String(object.link) : undefined,
      raw: isSet(object.raw) ? bytesFromBase64(object.raw) : undefined,
      fields: isSet(object.fields) ? SocketFields.fromJSON(object.fields) : undefined,
      json: isSet(object.json) ? bytesFromBase64(object.json) : new Uint8Array(0),
    };
  },

  toJSON(message: Socket): unknown {
    const obj: any = {};
    if (message.kind !== "") {
      obj.kind = message.kind;
    }
    if (message.link !== undefined) {
      obj.link = message.link;
    }
    if (message.raw !== undefined) {
      obj.raw = base64FromBytes(message.raw);
    }
    if (message.fields !== undefined) {
      obj.fields = SocketFields.toJSON(message.fields);
    }
    if (message.json.length !== 0) {
      obj.json = base64FromBytes(message.json);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Socket>, I>>(base?: I): Socket {
    return Socket.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Socket>, I>>(object: I): Socket {
    const message = createBaseSocket();
    message.kind = object.kind ?? "";
    message.link = object.link ?? undefined;
    message.raw = object.raw ?? undefined;
    message.fields = (object.fields !== undefined && object.fields !== null)
      ? SocketFields.fromPartial(object.fields)
      : undefined;
    message.json = object.json ?? new Uint8Array(0);
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
