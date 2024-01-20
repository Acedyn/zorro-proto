/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "zorro";

/** Config related to the plugins */
export interface PluginConfig {
  /** The list of plugins that will be required all the time */
  defaultRequire: string[];
  /** List of plugin repository addresses */
  repos: string[];
}

function createBasePluginConfig(): PluginConfig {
  return { defaultRequire: [], repos: [] };
}

export const PluginConfig = {
  encode(message: PluginConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.defaultRequire) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.repos) {
      writer.uint32(18).string(v!);
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

          message.repos.push(reader.string());
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
      repos: globalThis.Array.isArray(object?.repos) ? object.repos.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: PluginConfig): unknown {
    const obj: any = {};
    if (message.defaultRequire?.length) {
      obj.defaultRequire = message.defaultRequire;
    }
    if (message.repos?.length) {
      obj.repos = message.repos;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginConfig>, I>>(base?: I): PluginConfig {
    return PluginConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginConfig>, I>>(object: I): PluginConfig {
    const message = createBasePluginConfig();
    message.defaultRequire = object.defaultRequire?.map((e) => e) || [];
    message.repos = object.repos?.map((e) => e) || [];
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
