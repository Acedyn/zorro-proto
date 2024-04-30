/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "zorro";

/** List all the available file systems */
export enum FileSystemType {
  Os = 0,
  IndexedDb = 1,
  Memory = 2,
  UNRECOGNIZED = -1,
}

export function fileSystemTypeFromJSON(object: any): FileSystemType {
  switch (object) {
    case 0:
    case "Os":
      return FileSystemType.Os;
    case 1:
    case "IndexedDb":
      return FileSystemType.IndexedDb;
    case 2:
    case "Memory":
      return FileSystemType.Memory;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileSystemType.UNRECOGNIZED;
  }
}

export function fileSystemTypeToJSON(object: FileSystemType): string {
  switch (object) {
    case FileSystemType.Os:
      return "Os";
    case FileSystemType.IndexedDb:
      return "IndexedDb";
    case FileSystemType.Memory:
      return "Memory";
    case FileSystemType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Settings for the OS file systems */
export interface OsFsSettings {
  directory: string;
}

/** Settings for the indexed DB file systems */
export interface IndexedDbFsSettings {
  name: string;
}

/** Settings for the in memory file systems */
export interface MemoryFsSettings {
  name: string;
}

/** Settings for a selected file system */
export interface FileSystemSettings {
  os?: OsFsSettings | undefined;
  indexedDb?: IndexedDbFsSettings | undefined;
  memory?: MemoryFsSettings | undefined;
}

function createBaseOsFsSettings(): OsFsSettings {
  return { directory: "" };
}

export const OsFsSettings = {
  encode(message: OsFsSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.directory !== "") {
      writer.uint32(10).string(message.directory);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OsFsSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsFsSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.directory = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OsFsSettings {
    return { directory: isSet(object.directory) ? globalThis.String(object.directory) : "" };
  },

  toJSON(message: OsFsSettings): unknown {
    const obj: any = {};
    if (message.directory !== "") {
      obj.directory = message.directory;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OsFsSettings>, I>>(base?: I): OsFsSettings {
    return OsFsSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OsFsSettings>, I>>(object: I): OsFsSettings {
    const message = createBaseOsFsSettings();
    message.directory = object.directory ?? "";
    return message;
  },
};

function createBaseIndexedDbFsSettings(): IndexedDbFsSettings {
  return { name: "" };
}

export const IndexedDbFsSettings = {
  encode(message: IndexedDbFsSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexedDbFsSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexedDbFsSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexedDbFsSettings {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: IndexedDbFsSettings): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexedDbFsSettings>, I>>(base?: I): IndexedDbFsSettings {
    return IndexedDbFsSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexedDbFsSettings>, I>>(object: I): IndexedDbFsSettings {
    const message = createBaseIndexedDbFsSettings();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMemoryFsSettings(): MemoryFsSettings {
  return { name: "" };
}

export const MemoryFsSettings = {
  encode(message: MemoryFsSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemoryFsSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemoryFsSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MemoryFsSettings {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: MemoryFsSettings): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MemoryFsSettings>, I>>(base?: I): MemoryFsSettings {
    return MemoryFsSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MemoryFsSettings>, I>>(object: I): MemoryFsSettings {
    const message = createBaseMemoryFsSettings();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseFileSystemSettings(): FileSystemSettings {
  return { os: undefined, indexedDb: undefined, memory: undefined };
}

export const FileSystemSettings = {
  encode(message: FileSystemSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.os !== undefined) {
      OsFsSettings.encode(message.os, writer.uint32(10).fork()).ldelim();
    }
    if (message.indexedDb !== undefined) {
      IndexedDbFsSettings.encode(message.indexedDb, writer.uint32(18).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      MemoryFsSettings.encode(message.memory, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileSystemSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileSystemSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.os = OsFsSettings.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.indexedDb = IndexedDbFsSettings.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.memory = MemoryFsSettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileSystemSettings {
    return {
      os: isSet(object.os) ? OsFsSettings.fromJSON(object.os) : undefined,
      indexedDb: isSet(object.indexedDb) ? IndexedDbFsSettings.fromJSON(object.indexedDb) : undefined,
      memory: isSet(object.memory) ? MemoryFsSettings.fromJSON(object.memory) : undefined,
    };
  },

  toJSON(message: FileSystemSettings): unknown {
    const obj: any = {};
    if (message.os !== undefined) {
      obj.os = OsFsSettings.toJSON(message.os);
    }
    if (message.indexedDb !== undefined) {
      obj.indexedDb = IndexedDbFsSettings.toJSON(message.indexedDb);
    }
    if (message.memory !== undefined) {
      obj.memory = MemoryFsSettings.toJSON(message.memory);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileSystemSettings>, I>>(base?: I): FileSystemSettings {
    return FileSystemSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileSystemSettings>, I>>(object: I): FileSystemSettings {
    const message = createBaseFileSystemSettings();
    message.os = (object.os !== undefined && object.os !== null) ? OsFsSettings.fromPartial(object.os) : undefined;
    message.indexedDb = (object.indexedDb !== undefined && object.indexedDb !== null)
      ? IndexedDbFsSettings.fromPartial(object.indexedDb)
      : undefined;
    message.memory = (object.memory !== undefined && object.memory !== null)
      ? MemoryFsSettings.fromPartial(object.memory)
      : undefined;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
