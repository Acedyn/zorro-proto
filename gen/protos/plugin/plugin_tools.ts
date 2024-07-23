/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.2
 * source: protos/plugin/plugin_tools.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace zorro {
    export class ToolsDeclaration extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            path?: string;
            category?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("path" in data && data.path != undefined) {
                    this.path = data.path;
                }
                if ("category" in data && data.category != undefined) {
                    this.category = data.category;
                }
            }
        }
        get path() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set path(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get category() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set category(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            path?: string;
            category?: string;
        }): ToolsDeclaration {
            const message = new ToolsDeclaration({});
            if (data.path != null) {
                message.path = data.path;
            }
            if (data.category != null) {
                message.category = data.category;
            }
            return message;
        }
        toObject() {
            const data: {
                path?: string;
                category?: string;
            } = {};
            if (this.path != null) {
                data.path = this.path;
            }
            if (this.category != null) {
                data.category = this.category;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.path.length)
                writer.writeString(1, this.path);
            if (this.category.length)
                writer.writeString(2, this.category);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ToolsDeclaration {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ToolsDeclaration();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.path = reader.readString();
                        break;
                    case 2:
                        message.category = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ToolsDeclaration {
            return ToolsDeclaration.deserialize(bytes);
        }
    }
    export class PluginTools extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            commands?: ToolsDeclaration[];
            actions?: ToolsDeclaration[];
            hooks?: ToolsDeclaration[];
            widgets?: ToolsDeclaration[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 3, 4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("commands" in data && data.commands != undefined) {
                    this.commands = data.commands;
                }
                if ("actions" in data && data.actions != undefined) {
                    this.actions = data.actions;
                }
                if ("hooks" in data && data.hooks != undefined) {
                    this.hooks = data.hooks;
                }
                if ("widgets" in data && data.widgets != undefined) {
                    this.widgets = data.widgets;
                }
            }
        }
        get commands() {
            return pb_1.Message.getRepeatedWrapperField(this, ToolsDeclaration, 1) as ToolsDeclaration[];
        }
        set commands(value: ToolsDeclaration[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get actions() {
            return pb_1.Message.getRepeatedWrapperField(this, ToolsDeclaration, 2) as ToolsDeclaration[];
        }
        set actions(value: ToolsDeclaration[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get hooks() {
            return pb_1.Message.getRepeatedWrapperField(this, ToolsDeclaration, 3) as ToolsDeclaration[];
        }
        set hooks(value: ToolsDeclaration[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get widgets() {
            return pb_1.Message.getRepeatedWrapperField(this, ToolsDeclaration, 4) as ToolsDeclaration[];
        }
        set widgets(value: ToolsDeclaration[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        static fromObject(data: {
            commands?: ReturnType<typeof ToolsDeclaration.prototype.toObject>[];
            actions?: ReturnType<typeof ToolsDeclaration.prototype.toObject>[];
            hooks?: ReturnType<typeof ToolsDeclaration.prototype.toObject>[];
            widgets?: ReturnType<typeof ToolsDeclaration.prototype.toObject>[];
        }): PluginTools {
            const message = new PluginTools({});
            if (data.commands != null) {
                message.commands = data.commands.map(item => ToolsDeclaration.fromObject(item));
            }
            if (data.actions != null) {
                message.actions = data.actions.map(item => ToolsDeclaration.fromObject(item));
            }
            if (data.hooks != null) {
                message.hooks = data.hooks.map(item => ToolsDeclaration.fromObject(item));
            }
            if (data.widgets != null) {
                message.widgets = data.widgets.map(item => ToolsDeclaration.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                commands?: ReturnType<typeof ToolsDeclaration.prototype.toObject>[];
                actions?: ReturnType<typeof ToolsDeclaration.prototype.toObject>[];
                hooks?: ReturnType<typeof ToolsDeclaration.prototype.toObject>[];
                widgets?: ReturnType<typeof ToolsDeclaration.prototype.toObject>[];
            } = {};
            if (this.commands != null) {
                data.commands = this.commands.map((item: ToolsDeclaration) => item.toObject());
            }
            if (this.actions != null) {
                data.actions = this.actions.map((item: ToolsDeclaration) => item.toObject());
            }
            if (this.hooks != null) {
                data.hooks = this.hooks.map((item: ToolsDeclaration) => item.toObject());
            }
            if (this.widgets != null) {
                data.widgets = this.widgets.map((item: ToolsDeclaration) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.commands.length)
                writer.writeRepeatedMessage(1, this.commands, (item: ToolsDeclaration) => item.serialize(writer));
            if (this.actions.length)
                writer.writeRepeatedMessage(2, this.actions, (item: ToolsDeclaration) => item.serialize(writer));
            if (this.hooks.length)
                writer.writeRepeatedMessage(3, this.hooks, (item: ToolsDeclaration) => item.serialize(writer));
            if (this.widgets.length)
                writer.writeRepeatedMessage(4, this.widgets, (item: ToolsDeclaration) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PluginTools {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PluginTools();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.commands, () => pb_1.Message.addToRepeatedWrapperField(message, 1, ToolsDeclaration.deserialize(reader), ToolsDeclaration));
                        break;
                    case 2:
                        reader.readMessage(message.actions, () => pb_1.Message.addToRepeatedWrapperField(message, 2, ToolsDeclaration.deserialize(reader), ToolsDeclaration));
                        break;
                    case 3:
                        reader.readMessage(message.hooks, () => pb_1.Message.addToRepeatedWrapperField(message, 3, ToolsDeclaration.deserialize(reader), ToolsDeclaration));
                        break;
                    case 4:
                        reader.readMessage(message.widgets, () => pb_1.Message.addToRepeatedWrapperField(message, 4, ToolsDeclaration.deserialize(reader), ToolsDeclaration));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PluginTools {
            return PluginTools.deserialize(bytes);
        }
    }
}
