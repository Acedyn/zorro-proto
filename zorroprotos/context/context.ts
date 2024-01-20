/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Plugin } from "../plugin/plugin";

export const protobufPackage = "zorro";

/** Contexts represent the users's selection and all operations depends on it */
export interface Context {
  /** The Id helps differentiate different contexts */
  id: string;
  /** List all the available plugins in the current context */
  plugins: Plugin[];
}

function createBaseContext(): Context {
  return { id: "", plugins: [] };
}

export const Context = {
  encode(message: Context, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.plugins) {
      Plugin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Context {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContext();
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

          message.plugins.push(Plugin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Context {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      plugins: globalThis.Array.isArray(object?.plugins) ? object.plugins.map((e: any) => Plugin.fromJSON(e)) : [],
    };
  },

  toJSON(message: Context): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.plugins?.length) {
      obj.plugins = message.plugins.map((e) => Plugin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Context>, I>>(base?: I): Context {
    return Context.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Context>, I>>(object: I): Context {
    const message = createBaseContext();
    message.id = object.id ?? "";
    message.plugins = object.plugins?.map((e) => Plugin.fromPartial(e)) || [];
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
