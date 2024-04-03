/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Command } from "./command";
import { ToolBase } from "./tool";

export const protobufPackage = "zorro";

/**
 * An action can be composed of different types of tools
 * They are linked together via the upstream key
 */
export interface ActionChild {
  command?: Command | undefined;
  action?:
    | Action
    | undefined;
  /** Defines the dependency of this action child */
  upstream: string[];
}

/**
 * An action holds groups of subactions and commands.
 * It allows to chain and organize multiple commands into a dependency graph
 */
export interface Action {
  /** All tools are composed of this field that contains required infos */
  base:
    | ToolBase
    | undefined;
  /** The children form like a sub graph */
  children: { [key: string]: ActionChild };
}

export interface Action_ChildrenEntry {
  key: string;
  value: ActionChild | undefined;
}

function createBaseActionChild(): ActionChild {
  return { command: undefined, action: undefined, upstream: [] };
}

export const ActionChild = {
  encode(message: ActionChild, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.command !== undefined) {
      Command.encode(message.command, writer.uint32(10).fork()).ldelim();
    }
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.upstream) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionChild {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionChild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.command = Command.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.action = Action.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.upstream.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActionChild {
    return {
      command: isSet(object.command) ? Command.fromJSON(object.command) : undefined,
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined,
      upstream: globalThis.Array.isArray(object?.upstream) ? object.upstream.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ActionChild): unknown {
    const obj: any = {};
    if (message.command !== undefined) {
      obj.command = Command.toJSON(message.command);
    }
    if (message.action !== undefined) {
      obj.action = Action.toJSON(message.action);
    }
    if (message.upstream?.length) {
      obj.upstream = message.upstream;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActionChild>, I>>(base?: I): ActionChild {
    return ActionChild.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActionChild>, I>>(object: I): ActionChild {
    const message = createBaseActionChild();
    message.command = (object.command !== undefined && object.command !== null)
      ? Command.fromPartial(object.command)
      : undefined;
    message.action = (object.action !== undefined && object.action !== null)
      ? Action.fromPartial(object.action)
      : undefined;
    message.upstream = object.upstream?.map((e) => e) || [];
    return message;
  },
};

function createBaseAction(): Action {
  return { base: undefined, children: {} };
}

export const Action = {
  encode(message: Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      ToolBase.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.children).forEach(([key, value]) => {
      Action_ChildrenEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.base = ToolBase.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = Action_ChildrenEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.children[entry2.key] = entry2.value;
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

  fromJSON(object: any): Action {
    return {
      base: isSet(object.base) ? ToolBase.fromJSON(object.base) : undefined,
      children: isObject(object.children)
        ? Object.entries(object.children).reduce<{ [key: string]: ActionChild }>((acc, [key, value]) => {
          acc[key] = ActionChild.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Action): unknown {
    const obj: any = {};
    if (message.base !== undefined) {
      obj.base = ToolBase.toJSON(message.base);
    }
    if (message.children) {
      const entries = Object.entries(message.children);
      if (entries.length > 0) {
        obj.children = {};
        entries.forEach(([k, v]) => {
          obj.children[k] = ActionChild.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Action>, I>>(base?: I): Action {
    return Action.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Action>, I>>(object: I): Action {
    const message = createBaseAction();
    message.base = (object.base !== undefined && object.base !== null) ? ToolBase.fromPartial(object.base) : undefined;
    message.children = Object.entries(object.children ?? {}).reduce<{ [key: string]: ActionChild }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ActionChild.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseAction_ChildrenEntry(): Action_ChildrenEntry {
  return { key: "", value: undefined };
}

export const Action_ChildrenEntry = {
  encode(message: Action_ChildrenEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ActionChild.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_ChildrenEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_ChildrenEntry();
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

          message.value = ActionChild.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_ChildrenEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? ActionChild.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Action_ChildrenEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ActionChild.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_ChildrenEntry>, I>>(base?: I): Action_ChildrenEntry {
    return Action_ChildrenEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Action_ChildrenEntry>, I>>(object: I): Action_ChildrenEntry {
    const message = createBaseAction_ChildrenEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ActionChild.fromPartial(object.value)
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
