/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "zorro";

/** Modifications for a environment variabme by a plugins */
export interface PluginEnv {
  /** Paths to append to the existing paths for path environment variable */
  append: string[];
  /** Paths to prepend to the existing paths for path environment variable */
  prepend: string[];
  /** For regular environment variable, the value to set */
  set?: string | undefined;
}

function createBasePluginEnv(): PluginEnv {
  return { append: [], prepend: [], set: undefined };
}

export const PluginEnv = {
  encode(message: PluginEnv, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.append) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.prepend) {
      writer.uint32(18).string(v!);
    }
    if (message.set !== undefined) {
      writer.uint32(26).string(message.set);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginEnv {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginEnv();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.append.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prepend.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.set = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginEnv {
    return {
      append: globalThis.Array.isArray(object?.append) ? object.append.map((e: any) => globalThis.String(e)) : [],
      prepend: globalThis.Array.isArray(object?.prepend) ? object.prepend.map((e: any) => globalThis.String(e)) : [],
      set: isSet(object.set) ? globalThis.String(object.set) : undefined,
    };
  },

  toJSON(message: PluginEnv): unknown {
    const obj: any = {};
    if (message.append?.length) {
      obj.append = message.append;
    }
    if (message.prepend?.length) {
      obj.prepend = message.prepend;
    }
    if (message.set !== undefined) {
      obj.set = message.set;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginEnv>, I>>(base?: I): PluginEnv {
    return PluginEnv.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginEnv>, I>>(object: I): PluginEnv {
    const message = createBasePluginEnv();
    message.append = object.append?.map((e) => e) || [];
    message.prepend = object.prepend?.map((e) => e) || [];
    message.set = object.set ?? undefined;
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
