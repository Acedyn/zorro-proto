/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ProcessorQuery } from "../scheduling/processor_query";
import { ToolBase } from "./tool";

export const protobufPackage = "zorro";

/** A command is a task that will be sent to a processor to be executed. */
export interface Command {
  /** All tools are composed of this field that contains required infos */
  base:
    | ToolBase
    | undefined;
  /** Query to select a running processor or to start a new one */
  processorQuery: ProcessorQuery | undefined;
}

function createBaseCommand(): Command {
  return { base: undefined, processorQuery: undefined };
}

export const Command = {
  encode(message: Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      ToolBase.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.processorQuery !== undefined) {
      ProcessorQuery.encode(message.processorQuery, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Command {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommand();
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

          message.processorQuery = ProcessorQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Command {
    return {
      base: isSet(object.base) ? ToolBase.fromJSON(object.base) : undefined,
      processorQuery: isSet(object.processorQuery) ? ProcessorQuery.fromJSON(object.processorQuery) : undefined,
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    if (message.base !== undefined) {
      obj.base = ToolBase.toJSON(message.base);
    }
    if (message.processorQuery !== undefined) {
      obj.processorQuery = ProcessorQuery.toJSON(message.processorQuery);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Command>, I>>(base?: I): Command {
    return Command.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
    message.base = (object.base !== undefined && object.base !== null) ? ToolBase.fromPartial(object.base) : undefined;
    message.processorQuery = (object.processorQuery !== undefined && object.processorQuery !== null)
      ? ProcessorQuery.fromPartial(object.processorQuery)
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
