/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "zorro";

/** Config related to the network preferences */
export interface NetworkConfig {
  GRPCPort: number;
  GRPCHost: string;
}

function createBaseNetworkConfig(): NetworkConfig {
  return { GRPCPort: 0, GRPCHost: "" };
}

export const NetworkConfig = {
  encode(message: NetworkConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.GRPCPort !== 0) {
      writer.uint32(8).int32(message.GRPCPort);
    }
    if (message.GRPCHost !== "") {
      writer.uint32(18).string(message.GRPCHost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.GRPCPort = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.GRPCHost = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkConfig {
    return {
      GRPCPort: isSet(object.GRPCPort) ? globalThis.Number(object.GRPCPort) : 0,
      GRPCHost: isSet(object.GRPCHost) ? globalThis.String(object.GRPCHost) : "",
    };
  },

  toJSON(message: NetworkConfig): unknown {
    const obj: any = {};
    if (message.GRPCPort !== 0) {
      obj.GRPCPort = Math.round(message.GRPCPort);
    }
    if (message.GRPCHost !== "") {
      obj.GRPCHost = message.GRPCHost;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkConfig>, I>>(base?: I): NetworkConfig {
    return NetworkConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkConfig>, I>>(object: I): NetworkConfig {
    const message = createBaseNetworkConfig();
    message.GRPCPort = object.GRPCPort ?? 0;
    message.GRPCHost = object.GRPCHost ?? "";
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
