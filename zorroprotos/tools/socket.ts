/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "zorro";

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
  /** The human readable value in json */
  json: Uint8Array;
  /** Nested values can be linked or set individually */
  fields: { [key: string]: Socket };
}

export interface Socket_FieldsEntry {
  key: string;
  value: Socket | undefined;
}

function createBaseSocket(): Socket {
  return { kind: "", link: undefined, raw: undefined, json: new Uint8Array(0), fields: {} };
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
    if (message.json.length !== 0) {
      writer.uint32(34).bytes(message.json);
    }
    Object.entries(message.fields).forEach(([key, value]) => {
      Socket_FieldsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
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

          message.json = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = Socket_FieldsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.fields[entry5.key] = entry5.value;
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

  fromJSON(object: any): Socket {
    return {
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      link: isSet(object.link) ? globalThis.String(object.link) : undefined,
      raw: isSet(object.raw) ? bytesFromBase64(object.raw) : undefined,
      json: isSet(object.json) ? bytesFromBase64(object.json) : new Uint8Array(0),
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{ [key: string]: Socket }>((acc, [key, value]) => {
          acc[key] = Socket.fromJSON(value);
          return acc;
        }, {})
        : {},
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
    if (message.json.length !== 0) {
      obj.json = base64FromBytes(message.json);
    }
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

  create<I extends Exact<DeepPartial<Socket>, I>>(base?: I): Socket {
    return Socket.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Socket>, I>>(object: I): Socket {
    const message = createBaseSocket();
    message.kind = object.kind ?? "";
    message.link = object.link ?? undefined;
    message.raw = object.raw ?? undefined;
    message.json = object.json ?? new Uint8Array(0);
    message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: Socket }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Socket.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseSocket_FieldsEntry(): Socket_FieldsEntry {
  return { key: "", value: undefined };
}

export const Socket_FieldsEntry = {
  encode(message: Socket_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Socket.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Socket_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocket_FieldsEntry();
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

  fromJSON(object: any): Socket_FieldsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Socket.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Socket_FieldsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Socket.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Socket_FieldsEntry>, I>>(base?: I): Socket_FieldsEntry {
    return Socket_FieldsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Socket_FieldsEntry>, I>>(object: I): Socket_FieldsEntry {
    const message = createBaseSocket_FieldsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Socket.fromPartial(object.value)
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
