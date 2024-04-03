/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Socket } from "./socket";
import Long = require("long");

export const protobufPackage = "zorro";

/** List of all the possible tools */
export enum ToolType {
  COMMAND = 0,
  ACTION = 1,
  WIDGET = 2,
  HOOK = 3,
  UNRECOGNIZED = -1,
}

export function toolTypeFromJSON(object: any): ToolType {
  switch (object) {
    case 0:
    case "COMMAND":
      return ToolType.COMMAND;
    case 1:
    case "ACTION":
      return ToolType.ACTION;
    case 2:
    case "WIDGET":
      return ToolType.WIDGET;
    case 3:
    case "HOOK":
      return ToolType.HOOK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ToolType.UNRECOGNIZED;
  }
}

export function toolTypeToJSON(object: ToolType): string {
  switch (object) {
    case ToolType.COMMAND:
      return "COMMAND";
    case ToolType.ACTION:
      return "ACTION";
    case ToolType.WIDGET:
      return "WIDGET";
    case ToolType.HOOK:
      return "HOOK";
    case ToolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Various states a tool can have, they are ordered by importance */
export enum ToolStatus {
  INITIALIZING = 0,
  INITIALIZED = 1,
  RUNNING = 2,
  PAUSED = 3,
  ERROR = 4,
  INVALID = 5,
  UNRECOGNIZED = -1,
}

export function toolStatusFromJSON(object: any): ToolStatus {
  switch (object) {
    case 0:
    case "INITIALIZING":
      return ToolStatus.INITIALIZING;
    case 1:
    case "INITIALIZED":
      return ToolStatus.INITIALIZED;
    case 2:
    case "RUNNING":
      return ToolStatus.RUNNING;
    case 3:
    case "PAUSED":
      return ToolStatus.PAUSED;
    case 4:
    case "ERROR":
      return ToolStatus.ERROR;
    case 5:
    case "INVALID":
      return ToolStatus.INVALID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ToolStatus.UNRECOGNIZED;
  }
}

export function toolStatusToJSON(object: ToolStatus): string {
  switch (object) {
    case ToolStatus.INITIALIZING:
      return "INITIALIZING";
    case ToolStatus.INITIALIZED:
      return "INITIALIZED";
    case ToolStatus.RUNNING:
      return "RUNNING";
    case ToolStatus.PAUSED:
      return "PAUSED";
    case ToolStatus.ERROR:
      return "ERROR";
    case ToolStatus.INVALID:
      return "INVALID";
    case ToolStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A tool expose functionalities to the user. There is multiple types of tools,
 * like actions, or commands. Almost all the fields are optional because we
 * might receive tool patches
 */
export interface ToolBase {
  /** The Id is the only required field since it is used to differentiate tools */
  id: string;
  /** The name should be unique and be as simple as possible */
  name?:
    | string
    | undefined;
  /**
   * This helps defining the type of tool definition to use when
   * deserializing the protobuf
   */
  type?:
    | ToolType
    | undefined;
  /** User friently version of the name without all its contraints */
  label?:
    | string
    | undefined;
  /** The status is only used for user feedback */
  status?:
    | ToolStatus
    | undefined;
  /** Inputs and outputs */
  input?: Socket | undefined;
  output?:
    | Socket
    | undefined;
  /** The tooltip is only for the user */
  tooltip?:
    | string
    | undefined;
  /** Logs can be heavy, only the last ones are usually sent */
  logs: { [key: number]: string };
}

export interface ToolBase_LogsEntry {
  key: number;
  value: string;
}

/** An abstract tool representation */
export interface Tool {
  /** All tools are composed of this field that contains required infos */
  base: ToolBase | undefined;
}

function createBaseToolBase(): ToolBase {
  return {
    id: "",
    name: undefined,
    type: undefined,
    label: undefined,
    status: undefined,
    input: undefined,
    output: undefined,
    tooltip: undefined,
    logs: {},
  };
}

export const ToolBase = {
  encode(message: ToolBase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== undefined) {
      writer.uint32(24).int32(message.type);
    }
    if (message.label !== undefined) {
      writer.uint32(34).string(message.label);
    }
    if (message.status !== undefined) {
      writer.uint32(40).int32(message.status);
    }
    if (message.input !== undefined) {
      Socket.encode(message.input, writer.uint32(50).fork()).ldelim();
    }
    if (message.output !== undefined) {
      Socket.encode(message.output, writer.uint32(58).fork()).ldelim();
    }
    if (message.tooltip !== undefined) {
      writer.uint32(66).string(message.tooltip);
    }
    Object.entries(message.logs).forEach(([key, value]) => {
      ToolBase_LogsEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolBase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToolBase();
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
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.label = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.input = Socket.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.output = Socket.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tooltip = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = ToolBase_LogsEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.logs[entry9.key] = entry9.value;
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

  fromJSON(object: any): ToolBase {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      type: isSet(object.type) ? toolTypeFromJSON(object.type) : undefined,
      label: isSet(object.label) ? globalThis.String(object.label) : undefined,
      status: isSet(object.status) ? toolStatusFromJSON(object.status) : undefined,
      input: isSet(object.input) ? Socket.fromJSON(object.input) : undefined,
      output: isSet(object.output) ? Socket.fromJSON(object.output) : undefined,
      tooltip: isSet(object.tooltip) ? globalThis.String(object.tooltip) : undefined,
      logs: isObject(object.logs)
        ? Object.entries(object.logs).reduce<{ [key: number]: string }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ToolBase): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.type !== undefined) {
      obj.type = toolTypeToJSON(message.type);
    }
    if (message.label !== undefined) {
      obj.label = message.label;
    }
    if (message.status !== undefined) {
      obj.status = toolStatusToJSON(message.status);
    }
    if (message.input !== undefined) {
      obj.input = Socket.toJSON(message.input);
    }
    if (message.output !== undefined) {
      obj.output = Socket.toJSON(message.output);
    }
    if (message.tooltip !== undefined) {
      obj.tooltip = message.tooltip;
    }
    if (message.logs) {
      const entries = Object.entries(message.logs);
      if (entries.length > 0) {
        obj.logs = {};
        entries.forEach(([k, v]) => {
          obj.logs[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ToolBase>, I>>(base?: I): ToolBase {
    return ToolBase.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ToolBase>, I>>(object: I): ToolBase {
    const message = createBaseToolBase();
    message.id = object.id ?? "";
    message.name = object.name ?? undefined;
    message.type = object.type ?? undefined;
    message.label = object.label ?? undefined;
    message.status = object.status ?? undefined;
    message.input = (object.input !== undefined && object.input !== null)
      ? Socket.fromPartial(object.input)
      : undefined;
    message.output = (object.output !== undefined && object.output !== null)
      ? Socket.fromPartial(object.output)
      : undefined;
    message.tooltip = object.tooltip ?? undefined;
    message.logs = Object.entries(object.logs ?? {}).reduce<{ [key: number]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseToolBase_LogsEntry(): ToolBase_LogsEntry {
  return { key: 0, value: "" };
}

export const ToolBase_LogsEntry = {
  encode(message: ToolBase_LogsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolBase_LogsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToolBase_LogsEntry();
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

  fromJSON(object: any): ToolBase_LogsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ToolBase_LogsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ToolBase_LogsEntry>, I>>(base?: I): ToolBase_LogsEntry {
    return ToolBase_LogsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ToolBase_LogsEntry>, I>>(object: I): ToolBase_LogsEntry {
    const message = createBaseToolBase_LogsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTool(): Tool {
  return { base: undefined };
}

export const Tool = {
  encode(message: Tool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      ToolBase.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.base = ToolBase.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tool {
    return { base: isSet(object.base) ? ToolBase.fromJSON(object.base) : undefined };
  },

  toJSON(message: Tool): unknown {
    const obj: any = {};
    if (message.base !== undefined) {
      obj.base = ToolBase.toJSON(message.base);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Tool>, I>>(base?: I): Tool {
    return Tool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Tool>, I>>(object: I): Tool {
    const message = createBaseTool();
    message.base = (object.base !== undefined && object.base !== null) ? ToolBase.fromPartial(object.base) : undefined;
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
