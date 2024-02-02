/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Processor } from "../processor/processor";

export const protobufPackage = "zorro";

/** Parameters for processor registration */
export interface ProcessorRegistration {
  processor: Processor | undefined;
  host: string;
}

function createBaseProcessorRegistration(): ProcessorRegistration {
  return { processor: undefined, host: "" };
}

export const ProcessorRegistration = {
  encode(message: ProcessorRegistration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.processor !== undefined) {
      Processor.encode(message.processor, writer.uint32(10).fork()).ldelim();
    }
    if (message.host !== "") {
      writer.uint32(18).string(message.host);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessorRegistration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessorRegistration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.processor = Processor.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.host = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProcessorRegistration {
    return {
      processor: isSet(object.processor) ? Processor.fromJSON(object.processor) : undefined,
      host: isSet(object.host) ? globalThis.String(object.host) : "",
    };
  },

  toJSON(message: ProcessorRegistration): unknown {
    const obj: any = {};
    if (message.processor !== undefined) {
      obj.processor = Processor.toJSON(message.processor);
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessorRegistration>, I>>(base?: I): ProcessorRegistration {
    return ProcessorRegistration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProcessorRegistration>, I>>(object: I): ProcessorRegistration {
    const message = createBaseProcessorRegistration();
    message.processor = (object.processor !== undefined && object.processor !== null)
      ? Processor.fromPartial(object.processor)
      : undefined;
    message.host = object.host ?? "";
    return message;
  },
};

export interface SubprocessScheduling {
  /** For processors to start running their commands */
  RegisterProcessor(request: ProcessorRegistration): Promise<Processor>;
}

export const SubprocessSchedulingServiceName = "zorro.SubprocessScheduling";
export class SubprocessSchedulingClientImpl implements SubprocessScheduling {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || SubprocessSchedulingServiceName;
    this.rpc = rpc;
    this.RegisterProcessor = this.RegisterProcessor.bind(this);
  }
  RegisterProcessor(request: ProcessorRegistration): Promise<Processor> {
    const data = ProcessorRegistration.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterProcessor", data);
    return promise.then((data) => Processor.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
