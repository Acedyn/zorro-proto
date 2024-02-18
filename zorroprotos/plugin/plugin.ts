/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { RepositoryConfig } from "../config/plugin_config";
import { Processor } from "../processor/processor";
import { PluginEnv } from "./plugin_env";
import { PluginTools } from "./plugin_tools";

export const protobufPackage = "zorro";

/**
 * Plugins register a set of tools, environment variables and processors.
 * A set of tools will define what interactions are available or not.
 */
export interface Plugin {
  /** The name should be unique and be as simple as possible */
  name: string;
  /** The version is composed of multiple subversions separated with a dot */
  version: string;
  /** User friently version of the name without all its contraints */
  label: string;
  /** The path to the plugin definition */
  path: string;
  /** A list of plugin request that needs to be resolved for this plugin */
  require: string[];
  /** Each plugins will alter the environment generated */
  env: { [key: string]: PluginEnv };
  /** Each plugins will alter the environment generated */
  tools:
    | PluginTools
    | undefined;
  /** List of processors to register as available processors to launch */
  processors: Processor[];
  /** The config of the repository this plugin is comming from */
  repository: RepositoryConfig | undefined;
}

export interface Plugin_EnvEntry {
  key: string;
  value: PluginEnv | undefined;
}

function createBasePlugin(): Plugin {
  return {
    name: "",
    version: "",
    label: "",
    path: "",
    require: [],
    env: {},
    tools: undefined,
    processors: [],
    repository: undefined,
  };
}

export const Plugin = {
  encode(message: Plugin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    if (message.path !== "") {
      writer.uint32(34).string(message.path);
    }
    for (const v of message.require) {
      writer.uint32(42).string(v!);
    }
    Object.entries(message.env).forEach(([key, value]) => {
      Plugin_EnvEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.tools !== undefined) {
      PluginTools.encode(message.tools, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.processors) {
      Processor.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.repository !== undefined) {
      RepositoryConfig.encode(message.repository, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Plugin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlugin();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.label = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.path = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.require.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = Plugin_EnvEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.env[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tools = PluginTools.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.processors.push(Processor.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.repository = RepositoryConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Plugin {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      require: globalThis.Array.isArray(object?.require) ? object.require.map((e: any) => globalThis.String(e)) : [],
      env: isObject(object.env)
        ? Object.entries(object.env).reduce<{ [key: string]: PluginEnv }>((acc, [key, value]) => {
          acc[key] = PluginEnv.fromJSON(value);
          return acc;
        }, {})
        : {},
      tools: isSet(object.tools) ? PluginTools.fromJSON(object.tools) : undefined,
      processors: globalThis.Array.isArray(object?.processors)
        ? object.processors.map((e: any) => Processor.fromJSON(e))
        : [],
      repository: isSet(object.repository) ? RepositoryConfig.fromJSON(object.repository) : undefined,
    };
  },

  toJSON(message: Plugin): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.require?.length) {
      obj.require = message.require;
    }
    if (message.env) {
      const entries = Object.entries(message.env);
      if (entries.length > 0) {
        obj.env = {};
        entries.forEach(([k, v]) => {
          obj.env[k] = PluginEnv.toJSON(v);
        });
      }
    }
    if (message.tools !== undefined) {
      obj.tools = PluginTools.toJSON(message.tools);
    }
    if (message.processors?.length) {
      obj.processors = message.processors.map((e) => Processor.toJSON(e));
    }
    if (message.repository !== undefined) {
      obj.repository = RepositoryConfig.toJSON(message.repository);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Plugin>, I>>(base?: I): Plugin {
    return Plugin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Plugin>, I>>(object: I): Plugin {
    const message = createBasePlugin();
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    message.label = object.label ?? "";
    message.path = object.path ?? "";
    message.require = object.require?.map((e) => e) || [];
    message.env = Object.entries(object.env ?? {}).reduce<{ [key: string]: PluginEnv }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = PluginEnv.fromPartial(value);
      }
      return acc;
    }, {});
    message.tools = (object.tools !== undefined && object.tools !== null)
      ? PluginTools.fromPartial(object.tools)
      : undefined;
    message.processors = object.processors?.map((e) => Processor.fromPartial(e)) || [];
    message.repository = (object.repository !== undefined && object.repository !== null)
      ? RepositoryConfig.fromPartial(object.repository)
      : undefined;
    return message;
  },
};

function createBasePlugin_EnvEntry(): Plugin_EnvEntry {
  return { key: "", value: undefined };
}

export const Plugin_EnvEntry = {
  encode(message: Plugin_EnvEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PluginEnv.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Plugin_EnvEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlugin_EnvEntry();
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

          message.value = PluginEnv.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Plugin_EnvEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? PluginEnv.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Plugin_EnvEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = PluginEnv.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Plugin_EnvEntry>, I>>(base?: I): Plugin_EnvEntry {
    return Plugin_EnvEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Plugin_EnvEntry>, I>>(object: I): Plugin_EnvEntry {
    const message = createBasePlugin_EnvEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PluginEnv.fromPartial(object.value)
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
