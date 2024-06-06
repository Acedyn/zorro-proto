/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileSystemSettings } from "../filesystem/fs";
import { ProcessorStatus, processorStatusFromJSON, processorStatusToJSON } from "./processor_status";
import Long = require("long");

export const protobufPackage = "zorro";

/** Information to locate the processor */
export interface ProcessorPath {
  /** The file system in wich we can find the processor */
  fileSystem:
    | FileSystemSettings
    | undefined;
  /** Template to run the program without the processor running */
  startProgramTemplate: string;
  /** Template to run the program with the processor running */
  startProcessorTemplate: string;
}

/** Processors are responsible for executing commands */
export interface Processor {
  /** The Id is used to differentiate processor instances */
  id: string;
  /** The name of the executable */
  name: string;
  /** Used to differentiate two same processors with a different version */
  version: string;
  /** User friently version of the name without all its contraints */
  label: string;
  /** Defines if this processor can be used as a substitute for other processors */
  subsets: string[];
  /** List of paths to search in to start the processor */
  paths: ProcessorPath[];
  /** Help knowing at which state is the processor */
  status: ProcessorStatus;
  /** Extra data used mainly for filters */
  metadata: { [key: string]: string };
  /** Used to list the output logs by timestamps */
  stdout: { [key: number]: string };
  stderr: { [key: number]: string };
}

export interface Processor_MetadataEntry {
  key: string;
  value: string;
}

export interface Processor_StdoutEntry {
  key: number;
  value: string;
}

export interface Processor_StderrEntry {
  key: number;
  value: string;
}

function createBaseProcessorPath(): ProcessorPath {
  return { fileSystem: undefined, startProgramTemplate: "", startProcessorTemplate: "" };
}

export const ProcessorPath = {
  encode(message: ProcessorPath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileSystem !== undefined) {
      FileSystemSettings.encode(message.fileSystem, writer.uint32(10).fork()).ldelim();
    }
    if (message.startProgramTemplate !== "") {
      writer.uint32(18).string(message.startProgramTemplate);
    }
    if (message.startProcessorTemplate !== "") {
      writer.uint32(26).string(message.startProcessorTemplate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessorPath {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessorPath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fileSystem = FileSystemSettings.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.startProgramTemplate = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.startProcessorTemplate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProcessorPath {
    return {
      fileSystem: isSet(object.fileSystem) ? FileSystemSettings.fromJSON(object.fileSystem) : undefined,
      startProgramTemplate: isSet(object.startProgramTemplate) ? globalThis.String(object.startProgramTemplate) : "",
      startProcessorTemplate: isSet(object.startProcessorTemplate)
        ? globalThis.String(object.startProcessorTemplate)
        : "",
    };
  },

  toJSON(message: ProcessorPath): unknown {
    const obj: any = {};
    if (message.fileSystem !== undefined) {
      obj.fileSystem = FileSystemSettings.toJSON(message.fileSystem);
    }
    if (message.startProgramTemplate !== "") {
      obj.startProgramTemplate = message.startProgramTemplate;
    }
    if (message.startProcessorTemplate !== "") {
      obj.startProcessorTemplate = message.startProcessorTemplate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessorPath>, I>>(base?: I): ProcessorPath {
    return ProcessorPath.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProcessorPath>, I>>(object: I): ProcessorPath {
    const message = createBaseProcessorPath();
    message.fileSystem = (object.fileSystem !== undefined && object.fileSystem !== null)
      ? FileSystemSettings.fromPartial(object.fileSystem)
      : undefined;
    message.startProgramTemplate = object.startProgramTemplate ?? "";
    message.startProcessorTemplate = object.startProcessorTemplate ?? "";
    return message;
  },
};

function createBaseProcessor(): Processor {
  return {
    id: "",
    name: "",
    version: "",
    label: "",
    subsets: [],
    paths: [],
    status: 0,
    metadata: {},
    stdout: {},
    stderr: {},
  };
}

export const Processor = {
  encode(message: Processor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    for (const v of message.subsets) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.paths) {
      ProcessorPath.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      Processor_MetadataEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    Object.entries(message.stdout).forEach(([key, value]) => {
      Processor_StdoutEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).ldelim();
    });
    Object.entries(message.stderr).forEach(([key, value]) => {
      Processor_StderrEntry.encode({ key: key as any, value }, writer.uint32(82).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Processor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.label = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subsets.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.paths.push(ProcessorPath.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = Processor_MetadataEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.metadata[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = Processor_StdoutEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.stdout[entry9.key] = entry9.value;
          }
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          const entry10 = Processor_StderrEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.stderr[entry10.key] = entry10.value;
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

  fromJSON(object: any): Processor {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      subsets: globalThis.Array.isArray(object?.subsets) ? object.subsets.map((e: any) => globalThis.String(e)) : [],
      paths: globalThis.Array.isArray(object?.paths) ? object.paths.map((e: any) => ProcessorPath.fromJSON(e)) : [],
      status: isSet(object.status) ? processorStatusFromJSON(object.status) : 0,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      stdout: isObject(object.stdout)
        ? Object.entries(object.stdout).reduce<{ [key: number]: string }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = String(value);
          return acc;
        }, {})
        : {},
      stderr: isObject(object.stderr)
        ? Object.entries(object.stderr).reduce<{ [key: number]: string }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Processor): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.subsets?.length) {
      obj.subsets = message.subsets;
    }
    if (message.paths?.length) {
      obj.paths = message.paths.map((e) => ProcessorPath.toJSON(e));
    }
    if (message.status !== 0) {
      obj.status = processorStatusToJSON(message.status);
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
    if (message.stdout) {
      const entries = Object.entries(message.stdout);
      if (entries.length > 0) {
        obj.stdout = {};
        entries.forEach(([k, v]) => {
          obj.stdout[k] = v;
        });
      }
    }
    if (message.stderr) {
      const entries = Object.entries(message.stderr);
      if (entries.length > 0) {
        obj.stderr = {};
        entries.forEach(([k, v]) => {
          obj.stderr[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Processor>, I>>(base?: I): Processor {
    return Processor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Processor>, I>>(object: I): Processor {
    const message = createBaseProcessor();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    message.label = object.label ?? "";
    message.subsets = object.subsets?.map((e) => e) || [];
    message.paths = object.paths?.map((e) => ProcessorPath.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.stdout = Object.entries(object.stdout ?? {}).reduce<{ [key: number]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.stderr = Object.entries(object.stderr ?? {}).reduce<{ [key: number]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseProcessor_MetadataEntry(): Processor_MetadataEntry {
  return { key: "", value: "" };
}

export const Processor_MetadataEntry = {
  encode(message: Processor_MetadataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Processor_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessor_MetadataEntry();
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

  fromJSON(object: any): Processor_MetadataEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Processor_MetadataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Processor_MetadataEntry>, I>>(base?: I): Processor_MetadataEntry {
    return Processor_MetadataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Processor_MetadataEntry>, I>>(object: I): Processor_MetadataEntry {
    const message = createBaseProcessor_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProcessor_StdoutEntry(): Processor_StdoutEntry {
  return { key: 0, value: "" };
}

export const Processor_StdoutEntry = {
  encode(message: Processor_StdoutEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Processor_StdoutEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessor_StdoutEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): Processor_StdoutEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Processor_StdoutEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Processor_StdoutEntry>, I>>(base?: I): Processor_StdoutEntry {
    return Processor_StdoutEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Processor_StdoutEntry>, I>>(object: I): Processor_StdoutEntry {
    const message = createBaseProcessor_StdoutEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProcessor_StderrEntry(): Processor_StderrEntry {
  return { key: 0, value: "" };
}

export const Processor_StderrEntry = {
  encode(message: Processor_StderrEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Processor_StderrEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessor_StderrEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): Processor_StderrEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Processor_StderrEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Processor_StderrEntry>, I>>(base?: I): Processor_StderrEntry {
    return Processor_StderrEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Processor_StderrEntry>, I>>(object: I): Processor_StderrEntry {
    const message = createBaseProcessor_StderrEntry();
    message.key = object.key ?? 0;
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
