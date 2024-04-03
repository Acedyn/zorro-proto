/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { NetworkConfig } from "./network_config";
import { PluginConfig } from "./plugin_config";
import { UserConfig } from "./user_config";

export const protobufPackage = "zorro";

/** Global config of the application */
export interface Config {
  userPreferences: UserConfig | undefined;
  pluginConfig: PluginConfig | undefined;
  networkConfig: NetworkConfig | undefined;
}

function createBaseConfig(): Config {
  return { userPreferences: undefined, pluginConfig: undefined, networkConfig: undefined };
}

export const Config = {
  encode(message: Config, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userPreferences !== undefined) {
      UserConfig.encode(message.userPreferences, writer.uint32(10).fork()).ldelim();
    }
    if (message.pluginConfig !== undefined) {
      PluginConfig.encode(message.pluginConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.networkConfig !== undefined) {
      NetworkConfig.encode(message.networkConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Config {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userPreferences = UserConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pluginConfig = PluginConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.networkConfig = NetworkConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Config {
    return {
      userPreferences: isSet(object.userPreferences) ? UserConfig.fromJSON(object.userPreferences) : undefined,
      pluginConfig: isSet(object.pluginConfig) ? PluginConfig.fromJSON(object.pluginConfig) : undefined,
      networkConfig: isSet(object.networkConfig) ? NetworkConfig.fromJSON(object.networkConfig) : undefined,
    };
  },

  toJSON(message: Config): unknown {
    const obj: any = {};
    if (message.userPreferences !== undefined) {
      obj.userPreferences = UserConfig.toJSON(message.userPreferences);
    }
    if (message.pluginConfig !== undefined) {
      obj.pluginConfig = PluginConfig.toJSON(message.pluginConfig);
    }
    if (message.networkConfig !== undefined) {
      obj.networkConfig = NetworkConfig.toJSON(message.networkConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Config>, I>>(base?: I): Config {
    return Config.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Config>, I>>(object: I): Config {
    const message = createBaseConfig();
    message.userPreferences = (object.userPreferences !== undefined && object.userPreferences !== null)
      ? UserConfig.fromPartial(object.userPreferences)
      : undefined;
    message.pluginConfig = (object.pluginConfig !== undefined && object.pluginConfig !== null)
      ? PluginConfig.fromPartial(object.pluginConfig)
      : undefined;
    message.networkConfig = (object.networkConfig !== undefined && object.networkConfig !== null)
      ? NetworkConfig.fromPartial(object.networkConfig)
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
