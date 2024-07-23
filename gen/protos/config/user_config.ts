/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.2
 * source: protos/config/user_config.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace zorro {
    export enum Language {
        English = 0,
        French = 1,
        Spanish = 2,
        Dutch = 3
    }
    export class UserConfig extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            language?: Language;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("language" in data && data.language != undefined) {
                    this.language = data.language;
                }
            }
        }
        get language() {
            return pb_1.Message.getFieldWithDefault(this, 1, Language.English) as Language;
        }
        set language(value: Language) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            language?: Language;
        }): UserConfig {
            const message = new UserConfig({});
            if (data.language != null) {
                message.language = data.language;
            }
            return message;
        }
        toObject() {
            const data: {
                language?: Language;
            } = {};
            if (this.language != null) {
                data.language = this.language;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.language != Language.English)
                writer.writeEnum(1, this.language);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UserConfig {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new UserConfig();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.language = reader.readEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): UserConfig {
            return UserConfig.deserialize(bytes);
        }
    }
}
