/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "zorro";

/** Filters used to select a processor from a processor pool */
export interface ProcessorQuery {
  /** Match the processor by name or specify which processor to start */
  name?:
    | string
    | undefined;
  /** Match the processor by version or specify which version to start */
  version?:
    | string
    | undefined;
  /** Match the processor by id */
  id?:
    | string
    | undefined;
  /** Match the processor by metadata or used as argument to start new processor */
  metadata: { [key: string]: string };
}

export interface ProcessorQuery_MetadataEntry {
  key: string;
  value: string;
}

function createBaseProcessorQuery(): ProcessorQuery {
  return { name: undefined, version: undefined, id: undefined, metadata: {} };
}

export const ProcessorQuery = {
  encode(message: ProcessorQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.version !== undefined) {
      writer.uint32(18).string(message.version);
    }
    if (message.id !== undefined) {
      writer.uint32(34).string(message.id);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      ProcessorQuery_MetadataEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessorQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessorQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.id = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = ProcessorQuery_MetadataEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.metadata[entry5.key] = entry5.value;
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

  fromJSON(object: any): ProcessorQuery {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      version: isSet(object.version) ? globalThis.String(object.version) : undefined,
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ProcessorQuery): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.version !== undefined) {
      obj.version = message.version;
    }
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.metadata) {
      const entries = Object.entries(message.metadata);
      if (entries.length > 0) {
        obj.metadata = {};
        entries.forEach(([k, v]) => {
          obj.metadata[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessorQuery>, I>>(base?: I): ProcessorQuery {
    return ProcessorQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProcessorQuery>, I>>(object: I): ProcessorQuery {
    const message = createBaseProcessorQuery();
    message.name = object.name ?? undefined;
    message.version = object.version ?? undefined;
    message.id = object.id ?? undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseProcessorQuery_MetadataEntry(): ProcessorQuery_MetadataEntry {
  return { key: "", value: "" };
}

export const ProcessorQuery_MetadataEntry = {
  encode(message: ProcessorQuery_MetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessorQuery_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessorQuery_MetadataEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProcessorQuery_MetadataEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ProcessorQuery_MetadataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessorQuery_MetadataEntry>, I>>(base?: I): ProcessorQuery_MetadataEntry {
    return ProcessorQuery_MetadataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProcessorQuery_MetadataEntry>, I>>(object: I): ProcessorQuery_MetadataEntry {
    const message = createBaseProcessorQuery_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

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
