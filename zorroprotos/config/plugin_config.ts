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

/** Config for the OS file system */
export interface OsFsConfig {
}

/** Config for the indexed DB file system */
export interface IndexedDbFsConfig {
  name: string;
}

/** Config for the in memory file system */
export interface MemoryFsConfig {
}

/** Config for a selected file system */
export interface RepositoryConfig {
  fileSystemType: FileSystemType;
  os?: OsFsConfig | undefined;
  indexedDb?: IndexedDbFsConfig | undefined;
  memory?: MemoryFsConfig | undefined;
  path: string;
}

/** Config related to the plugins */
export interface PluginConfig {
  /** The list of plugins that will be required all the time */
  defaultRequire: string[];
  /** List of plugin repository addresses */
  repositories: RepositoryConfig[];
  /** Maximum folder depth when looking for a plugin in a repository */
  searchMaximumDepht: number;
}

function createBaseOsFsConfig(): OsFsConfig {
  return {};
}

export const OsFsConfig = {
  encode(_: OsFsConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OsFsConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsFsConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): OsFsConfig {
    return {};
  },

  toJSON(_: OsFsConfig): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<OsFsConfig>, I>>(base?: I): OsFsConfig {
    return OsFsConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OsFsConfig>, I>>(_: I): OsFsConfig {
    const message = createBaseOsFsConfig();
    return message;
  },
};

function createBaseIndexedDbFsConfig(): IndexedDbFsConfig {
  return { name: "" };
}

export const IndexedDbFsConfig = {
  encode(message: IndexedDbFsConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexedDbFsConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexedDbFsConfig();
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

  fromJSON(object: any): IndexedDbFsConfig {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: IndexedDbFsConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexedDbFsConfig>, I>>(base?: I): IndexedDbFsConfig {
    return IndexedDbFsConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexedDbFsConfig>, I>>(object: I): IndexedDbFsConfig {
    const message = createBaseIndexedDbFsConfig();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMemoryFsConfig(): MemoryFsConfig {
  return {};
}

export const MemoryFsConfig = {
  encode(_: MemoryFsConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemoryFsConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemoryFsConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MemoryFsConfig {
    return {};
  },

  toJSON(_: MemoryFsConfig): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MemoryFsConfig>, I>>(base?: I): MemoryFsConfig {
    return MemoryFsConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MemoryFsConfig>, I>>(_: I): MemoryFsConfig {
    const message = createBaseMemoryFsConfig();
    return message;
  },
};

function createBaseRepositoryConfig(): RepositoryConfig {
  return { fileSystemType: 0, os: undefined, indexedDb: undefined, memory: undefined, path: "" };
}

export const RepositoryConfig = {
  encode(message: RepositoryConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileSystemType !== 0) {
      writer.uint32(8).int32(message.fileSystemType);
    }
    if (message.os !== undefined) {
      OsFsConfig.encode(message.os, writer.uint32(18).fork()).ldelim();
    }
    if (message.indexedDb !== undefined) {
      IndexedDbFsConfig.encode(message.indexedDb, writer.uint32(26).fork()).ldelim();
    }
    if (message.memory !== undefined) {
      MemoryFsConfig.encode(message.memory, writer.uint32(34).fork()).ldelim();
    }
    if (message.path !== "") {
      writer.uint32(42).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepositoryConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepositoryConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.fileSystemType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.os = OsFsConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.indexedDb = IndexedDbFsConfig.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.memory = MemoryFsConfig.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RepositoryConfig {
    return {
      fileSystemType: isSet(object.fileSystemType) ? fileSystemTypeFromJSON(object.fileSystemType) : 0,
      os: isSet(object.os) ? OsFsConfig.fromJSON(object.os) : undefined,
      indexedDb: isSet(object.indexedDb) ? IndexedDbFsConfig.fromJSON(object.indexedDb) : undefined,
      memory: isSet(object.memory) ? MemoryFsConfig.fromJSON(object.memory) : undefined,
      path: isSet(object.path) ? globalThis.String(object.path) : "",
    };
  },

  toJSON(message: RepositoryConfig): unknown {
    const obj: any = {};
    if (message.fileSystemType !== 0) {
      obj.fileSystemType = fileSystemTypeToJSON(message.fileSystemType);
    }
    if (message.os !== undefined) {
      obj.os = OsFsConfig.toJSON(message.os);
    }
    if (message.indexedDb !== undefined) {
      obj.indexedDb = IndexedDbFsConfig.toJSON(message.indexedDb);
    }
    if (message.memory !== undefined) {
      obj.memory = MemoryFsConfig.toJSON(message.memory);
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RepositoryConfig>, I>>(base?: I): RepositoryConfig {
    return RepositoryConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RepositoryConfig>, I>>(object: I): RepositoryConfig {
    const message = createBaseRepositoryConfig();
    message.fileSystemType = object.fileSystemType ?? 0;
    message.os = (object.os !== undefined && object.os !== null) ? OsFsConfig.fromPartial(object.os) : undefined;
    message.indexedDb = (object.indexedDb !== undefined && object.indexedDb !== null)
      ? IndexedDbFsConfig.fromPartial(object.indexedDb)
      : undefined;
    message.memory = (object.memory !== undefined && object.memory !== null)
      ? MemoryFsConfig.fromPartial(object.memory)
      : undefined;
    message.path = object.path ?? "";
    return message;
  },
};

function createBasePluginConfig(): PluginConfig {
  return { defaultRequire: [], repositories: [], searchMaximumDepht: 0 };
}

export const PluginConfig = {
  encode(message: PluginConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.defaultRequire) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.repositories) {
      RepositoryConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.searchMaximumDepht !== 0) {
      writer.uint32(24).int32(message.searchMaximumDepht);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.defaultRequire.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.repositories.push(RepositoryConfig.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.searchMaximumDepht = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginConfig {
    return {
      defaultRequire: globalThis.Array.isArray(object?.defaultRequire)
        ? object.defaultRequire.map((e: any) => globalThis.String(e))
        : [],
      repositories: globalThis.Array.isArray(object?.repositories)
        ? object.repositories.map((e: any) => RepositoryConfig.fromJSON(e))
        : [],
      searchMaximumDepht: isSet(object.searchMaximumDepht) ? globalThis.Number(object.searchMaximumDepht) : 0,
    };
  },

  toJSON(message: PluginConfig): unknown {
    const obj: any = {};
    if (message.defaultRequire?.length) {
      obj.defaultRequire = message.defaultRequire;
    }
    if (message.repositories?.length) {
      obj.repositories = message.repositories.map((e) => RepositoryConfig.toJSON(e));
    }
    if (message.searchMaximumDepht !== 0) {
      obj.searchMaximumDepht = Math.round(message.searchMaximumDepht);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginConfig>, I>>(base?: I): PluginConfig {
    return PluginConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginConfig>, I>>(object: I): PluginConfig {
    const message = createBasePluginConfig();
    message.defaultRequire = object.defaultRequire?.map((e) => e) || [];
    message.repositories = object.repositories?.map((e) => RepositoryConfig.fromPartial(e)) || [];
    message.searchMaximumDepht = object.searchMaximumDepht ?? 0;
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
