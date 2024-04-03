/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "zorro";

/** Specify where to look for tools of a category */
export interface ToolsDeclaration {
  path: string;
  category: string;
}

/** Where to look for tool declarations */
export interface PluginTools {
  commands: ToolsDeclaration[];
  actions: ToolsDeclaration[];
  hooks: ToolsDeclaration[];
  widgets: ToolsDeclaration[];
}

function createBaseToolsDeclaration(): ToolsDeclaration {
  return { path: "", category: "" };
}

export const ToolsDeclaration = {
  encode(message: ToolsDeclaration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.category !== "") {
      writer.uint32(18).string(message.category);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ToolsDeclaration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToolsDeclaration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.category = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ToolsDeclaration {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      category: isSet(object.category) ? globalThis.String(object.category) : "",
    };
  },

  toJSON(message: ToolsDeclaration): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.category !== "") {
      obj.category = message.category;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ToolsDeclaration>, I>>(base?: I): ToolsDeclaration {
    return ToolsDeclaration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ToolsDeclaration>, I>>(object: I): ToolsDeclaration {
    const message = createBaseToolsDeclaration();
    message.path = object.path ?? "";
    message.category = object.category ?? "";
    return message;
  },
};

function createBasePluginTools(): PluginTools {
  return { commands: [], actions: [], hooks: [], widgets: [] };
}

export const PluginTools = {
  encode(message: PluginTools, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commands) {
      ToolsDeclaration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.actions) {
      ToolsDeclaration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hooks) {
      ToolsDeclaration.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.widgets) {
      ToolsDeclaration.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginTools {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginTools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commands.push(ToolsDeclaration.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.actions.push(ToolsDeclaration.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hooks.push(ToolsDeclaration.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.widgets.push(ToolsDeclaration.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginTools {
    return {
      commands: globalThis.Array.isArray(object?.commands)
        ? object.commands.map((e: any) => ToolsDeclaration.fromJSON(e))
        : [],
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => ToolsDeclaration.fromJSON(e))
        : [],
      hooks: globalThis.Array.isArray(object?.hooks) ? object.hooks.map((e: any) => ToolsDeclaration.fromJSON(e)) : [],
      widgets: globalThis.Array.isArray(object?.widgets)
        ? object.widgets.map((e: any) => ToolsDeclaration.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PluginTools): unknown {
    const obj: any = {};
    if (message.commands?.length) {
      obj.commands = message.commands.map((e) => ToolsDeclaration.toJSON(e));
    }
    if (message.actions?.length) {
      obj.actions = message.actions.map((e) => ToolsDeclaration.toJSON(e));
    }
    if (message.hooks?.length) {
      obj.hooks = message.hooks.map((e) => ToolsDeclaration.toJSON(e));
    }
    if (message.widgets?.length) {
      obj.widgets = message.widgets.map((e) => ToolsDeclaration.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginTools>, I>>(base?: I): PluginTools {
    return PluginTools.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginTools>, I>>(object: I): PluginTools {
    const message = createBasePluginTools();
    message.commands = object.commands?.map((e) => ToolsDeclaration.fromPartial(e)) || [];
    message.actions = object.actions?.map((e) => ToolsDeclaration.fromPartial(e)) || [];
    message.hooks = object.hooks?.map((e) => ToolsDeclaration.fromPartial(e)) || [];
    message.widgets = object.widgets?.map((e) => ToolsDeclaration.fromPartial(e)) || [];
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
