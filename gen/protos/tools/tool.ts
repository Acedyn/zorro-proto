/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.2
 * source: protos/tools/tool.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./socket";
import * as pb_1 from "google-protobuf";
export namespace zorro {
    export enum ToolType {
        COMMAND = 0,
        ACTION = 1,
        WIDGET = 2,
        HOOK = 3
    }
    export enum ToolStatus {
        INITIALIZING = 0,
        INITIALIZED = 1,
        RUNNING = 2,
        PAUSED = 3,
        ERROR = 4,
        INVALID = 5
    }
    export class ToolBase extends pb_1.Message {
        #one_of_decls: number[][] = [[2], [3], [4], [5], [6], [7], [8]];
        constructor(data?: any[] | ({
            id?: string;
            logs?: Map<number, string>;
        } & (({
            name?: string;
        }) | ({
            type?: ToolType;
        }) | ({
            label?: string;
        }) | ({
            status?: ToolStatus;
        }) | ({
            input?: dependency_1.zorro.Socket;
        }) | ({
            output?: dependency_1.zorro.Socket;
        }) | ({
            tooltip?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
                if ("label" in data && data.label != undefined) {
                    this.label = data.label;
                }
                if ("status" in data && data.status != undefined) {
                    this.status = data.status;
                }
                if ("input" in data && data.input != undefined) {
                    this.input = data.input;
                }
                if ("output" in data && data.output != undefined) {
                    this.output = data.output;
                }
                if ("tooltip" in data && data.tooltip != undefined) {
                    this.tooltip = data.tooltip;
                }
                if ("logs" in data && data.logs != undefined) {
                    this.logs = data.logs;
                }
            }
            if (!this.logs)
                this.logs = new Map();
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setOneofField(this, 2, this.#one_of_decls[0], value);
        }
        get has_name() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get type() {
            return pb_1.Message.getFieldWithDefault(this, 3, ToolType.COMMAND) as ToolType;
        }
        set type(value: ToolType) {
            pb_1.Message.setOneofField(this, 3, this.#one_of_decls[1], value);
        }
        get has_type() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get label() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set label(value: string) {
            pb_1.Message.setOneofField(this, 4, this.#one_of_decls[2], value);
        }
        get has_label() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get status() {
            return pb_1.Message.getFieldWithDefault(this, 5, ToolStatus.INITIALIZING) as ToolStatus;
        }
        set status(value: ToolStatus) {
            pb_1.Message.setOneofField(this, 5, this.#one_of_decls[3], value);
        }
        get has_status() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get input() {
            return pb_1.Message.getWrapperField(this, dependency_1.zorro.Socket, 6) as dependency_1.zorro.Socket;
        }
        set input(value: dependency_1.zorro.Socket) {
            pb_1.Message.setOneofWrapperField(this, 6, this.#one_of_decls[4], value);
        }
        get has_input() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get output() {
            return pb_1.Message.getWrapperField(this, dependency_1.zorro.Socket, 7) as dependency_1.zorro.Socket;
        }
        set output(value: dependency_1.zorro.Socket) {
            pb_1.Message.setOneofWrapperField(this, 7, this.#one_of_decls[5], value);
        }
        get has_output() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get tooltip() {
            return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
        }
        set tooltip(value: string) {
            pb_1.Message.setOneofField(this, 8, this.#one_of_decls[6], value);
        }
        get has_tooltip() {
            return pb_1.Message.getField(this, 8) != null;
        }
        get logs() {
            return pb_1.Message.getField(this, 9) as any as Map<number, string>;
        }
        set logs(value: Map<number, string>) {
            pb_1.Message.setField(this, 9, value as any);
        }
        get _name() {
            const cases: {
                [index: number]: "none" | "name";
            } = {
                0: "none",
                2: "name"
            };
            return cases[pb_1.Message.computeOneofCase(this, [2])];
        }
        get _type() {
            const cases: {
                [index: number]: "none" | "type";
            } = {
                0: "none",
                3: "type"
            };
            return cases[pb_1.Message.computeOneofCase(this, [3])];
        }
        get _label() {
            const cases: {
                [index: number]: "none" | "label";
            } = {
                0: "none",
                4: "label"
            };
            return cases[pb_1.Message.computeOneofCase(this, [4])];
        }
        get _status() {
            const cases: {
                [index: number]: "none" | "status";
            } = {
                0: "none",
                5: "status"
            };
            return cases[pb_1.Message.computeOneofCase(this, [5])];
        }
        get _input() {
            const cases: {
                [index: number]: "none" | "input";
            } = {
                0: "none",
                6: "input"
            };
            return cases[pb_1.Message.computeOneofCase(this, [6])];
        }
        get _output() {
            const cases: {
                [index: number]: "none" | "output";
            } = {
                0: "none",
                7: "output"
            };
            return cases[pb_1.Message.computeOneofCase(this, [7])];
        }
        get _tooltip() {
            const cases: {
                [index: number]: "none" | "tooltip";
            } = {
                0: "none",
                8: "tooltip"
            };
            return cases[pb_1.Message.computeOneofCase(this, [8])];
        }
        static fromObject(data: {
            id?: string;
            name?: string;
            type?: ToolType;
            label?: string;
            status?: ToolStatus;
            input?: ReturnType<typeof dependency_1.zorro.Socket.prototype.toObject>;
            output?: ReturnType<typeof dependency_1.zorro.Socket.prototype.toObject>;
            tooltip?: string;
            logs?: {
                [key: number]: string;
            };
        }): ToolBase {
            const message = new ToolBase({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.type != null) {
                message.type = data.type;
            }
            if (data.label != null) {
                message.label = data.label;
            }
            if (data.status != null) {
                message.status = data.status;
            }
            if (data.input != null) {
                message.input = dependency_1.zorro.Socket.fromObject(data.input);
            }
            if (data.output != null) {
                message.output = dependency_1.zorro.Socket.fromObject(data.output);
            }
            if (data.tooltip != null) {
                message.tooltip = data.tooltip;
            }
            if (typeof data.logs == "object") {
                message.logs = new Map(Object.entries(data.logs).map(([key, value]) => [Number(key), value]));
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                name?: string;
                type?: ToolType;
                label?: string;
                status?: ToolStatus;
                input?: ReturnType<typeof dependency_1.zorro.Socket.prototype.toObject>;
                output?: ReturnType<typeof dependency_1.zorro.Socket.prototype.toObject>;
                tooltip?: string;
                logs?: {
                    [key: number]: string;
                };
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.type != null) {
                data.type = this.type;
            }
            if (this.label != null) {
                data.label = this.label;
            }
            if (this.status != null) {
                data.status = this.status;
            }
            if (this.input != null) {
                data.input = this.input.toObject();
            }
            if (this.output != null) {
                data.output = this.output.toObject();
            }
            if (this.tooltip != null) {
                data.tooltip = this.tooltip;
            }
            if (this.logs != null) {
                data.logs = (Object.fromEntries)(this.logs);
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.has_name)
                writer.writeString(2, this.name);
            if (this.has_type)
                writer.writeEnum(3, this.type);
            if (this.has_label)
                writer.writeString(4, this.label);
            if (this.has_status)
                writer.writeEnum(5, this.status);
            if (this.has_input)
                writer.writeMessage(6, this.input, () => this.input.serialize(writer));
            if (this.has_output)
                writer.writeMessage(7, this.output, () => this.output.serialize(writer));
            if (this.has_tooltip)
                writer.writeString(8, this.tooltip);
            for (const [key, value] of this.logs) {
                writer.writeMessage(9, this.logs, () => {
                    writer.writeInt64(1, key);
                    writer.writeString(2, value);
                });
            }
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ToolBase {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ToolBase();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        message.type = reader.readEnum();
                        break;
                    case 4:
                        message.label = reader.readString();
                        break;
                    case 5:
                        message.status = reader.readEnum();
                        break;
                    case 6:
                        reader.readMessage(message.input, () => message.input = dependency_1.zorro.Socket.deserialize(reader));
                        break;
                    case 7:
                        reader.readMessage(message.output, () => message.output = dependency_1.zorro.Socket.deserialize(reader));
                        break;
                    case 8:
                        message.tooltip = reader.readString();
                        break;
                    case 9:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.logs as any, reader, reader.readInt64, reader.readString));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ToolBase {
            return ToolBase.deserialize(bytes);
        }
    }
    export class Tool extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            base?: ToolBase;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("base" in data && data.base != undefined) {
                    this.base = data.base;
                }
            }
        }
        get base() {
            return pb_1.Message.getWrapperField(this, ToolBase, 1) as ToolBase;
        }
        set base(value: ToolBase) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_base() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            base?: ReturnType<typeof ToolBase.prototype.toObject>;
        }): Tool {
            const message = new Tool({});
            if (data.base != null) {
                message.base = ToolBase.fromObject(data.base);
            }
            return message;
        }
        toObject() {
            const data: {
                base?: ReturnType<typeof ToolBase.prototype.toObject>;
            } = {};
            if (this.base != null) {
                data.base = this.base.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_base)
                writer.writeMessage(1, this.base, () => this.base.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Tool {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Tool();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.base, () => message.base = ToolBase.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Tool {
            return Tool.deserialize(bytes);
        }
    }
}
