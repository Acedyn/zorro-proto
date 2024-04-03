/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "zorro";

/** List all the available languages */
export enum Language {
  English = 0,
  French = 1,
  Spanish = 2,
  Dutch = 3,
  UNRECOGNIZED = -1,
}

export function languageFromJSON(object: any): Language {
  switch (object) {
    case 0:
    case "English":
      return Language.English;
    case 1:
    case "French":
      return Language.French;
    case 2:
    case "Spanish":
      return Language.Spanish;
    case 3:
    case "Dutch":
      return Language.Dutch;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Language.UNRECOGNIZED;
  }
}

export function languageToJSON(object: Language): string {
  switch (object) {
    case Language.English:
      return "English";
    case Language.French:
      return "French";
    case Language.Spanish:
      return "Spanish";
    case Language.Dutch:
      return "Dutch";
    case Language.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Config related to the user's preferences */
export interface UserConfig {
  language: Language;
}

function createBaseUserConfig(): UserConfig {
  return { language: 0 };
}

export const UserConfig = {
  encode(message: UserConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== 0) {
      writer.uint32(8).int32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.language = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserConfig {
    return { language: isSet(object.language) ? languageFromJSON(object.language) : 0 };
  },

  toJSON(message: UserConfig): unknown {
    const obj: any = {};
    if (message.language !== 0) {
      obj.language = languageToJSON(message.language);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserConfig>, I>>(base?: I): UserConfig {
    return UserConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserConfig>, I>>(object: I): UserConfig {
    const message = createBaseUserConfig();
    message.language = object.language ?? 0;
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
