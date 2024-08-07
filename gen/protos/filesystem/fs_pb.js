// source: protos/filesystem/fs.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.zorro.FileSystemSettings', null, global);
goog.exportSymbol('proto.zorro.FileSystemSettings.FileSystemSettingsCase', null, global);
goog.exportSymbol('proto.zorro.FileSystemType', null, global);
goog.exportSymbol('proto.zorro.IndexedDbFsSettings', null, global);
goog.exportSymbol('proto.zorro.MemoryFsSettings', null, global);
goog.exportSymbol('proto.zorro.OsFsSettings', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zorro.OsFsSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zorro.OsFsSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zorro.OsFsSettings.displayName = 'proto.zorro.OsFsSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zorro.IndexedDbFsSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zorro.IndexedDbFsSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zorro.IndexedDbFsSettings.displayName = 'proto.zorro.IndexedDbFsSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zorro.MemoryFsSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zorro.MemoryFsSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zorro.MemoryFsSettings.displayName = 'proto.zorro.MemoryFsSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zorro.FileSystemSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zorro.FileSystemSettings.oneofGroups_);
};
goog.inherits(proto.zorro.FileSystemSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zorro.FileSystemSettings.displayName = 'proto.zorro.FileSystemSettings';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zorro.OsFsSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.zorro.OsFsSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zorro.OsFsSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.OsFsSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    directory: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zorro.OsFsSettings}
 */
proto.zorro.OsFsSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zorro.OsFsSettings;
  return proto.zorro.OsFsSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zorro.OsFsSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zorro.OsFsSettings}
 */
proto.zorro.OsFsSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirectory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zorro.OsFsSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zorro.OsFsSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zorro.OsFsSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.OsFsSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirectory();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string directory = 1;
 * @return {string}
 */
proto.zorro.OsFsSettings.prototype.getDirectory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zorro.OsFsSettings} returns this
 */
proto.zorro.OsFsSettings.prototype.setDirectory = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zorro.IndexedDbFsSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.zorro.IndexedDbFsSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zorro.IndexedDbFsSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.IndexedDbFsSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zorro.IndexedDbFsSettings}
 */
proto.zorro.IndexedDbFsSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zorro.IndexedDbFsSettings;
  return proto.zorro.IndexedDbFsSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zorro.IndexedDbFsSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zorro.IndexedDbFsSettings}
 */
proto.zorro.IndexedDbFsSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zorro.IndexedDbFsSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zorro.IndexedDbFsSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zorro.IndexedDbFsSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.IndexedDbFsSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.zorro.IndexedDbFsSettings.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zorro.IndexedDbFsSettings} returns this
 */
proto.zorro.IndexedDbFsSettings.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zorro.MemoryFsSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.zorro.MemoryFsSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zorro.MemoryFsSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.MemoryFsSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zorro.MemoryFsSettings}
 */
proto.zorro.MemoryFsSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zorro.MemoryFsSettings;
  return proto.zorro.MemoryFsSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zorro.MemoryFsSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zorro.MemoryFsSettings}
 */
proto.zorro.MemoryFsSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zorro.MemoryFsSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zorro.MemoryFsSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zorro.MemoryFsSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.MemoryFsSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.zorro.MemoryFsSettings.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zorro.MemoryFsSettings} returns this
 */
proto.zorro.MemoryFsSettings.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zorro.FileSystemSettings.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.zorro.FileSystemSettings.FileSystemSettingsCase = {
  FILE_SYSTEM_SETTINGS_NOT_SET: 0,
  OS: 1,
  INDEXEDDB: 2,
  MEMORY: 3
};

/**
 * @return {proto.zorro.FileSystemSettings.FileSystemSettingsCase}
 */
proto.zorro.FileSystemSettings.prototype.getFileSystemSettingsCase = function() {
  return /** @type {proto.zorro.FileSystemSettings.FileSystemSettingsCase} */(jspb.Message.computeOneofCase(this, proto.zorro.FileSystemSettings.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zorro.FileSystemSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.zorro.FileSystemSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zorro.FileSystemSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.FileSystemSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    os: (f = msg.getOs()) && proto.zorro.OsFsSettings.toObject(includeInstance, f),
    indexeddb: (f = msg.getIndexeddb()) && proto.zorro.IndexedDbFsSettings.toObject(includeInstance, f),
    memory: (f = msg.getMemory()) && proto.zorro.MemoryFsSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zorro.FileSystemSettings}
 */
proto.zorro.FileSystemSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zorro.FileSystemSettings;
  return proto.zorro.FileSystemSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zorro.FileSystemSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zorro.FileSystemSettings}
 */
proto.zorro.FileSystemSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zorro.OsFsSettings;
      reader.readMessage(value,proto.zorro.OsFsSettings.deserializeBinaryFromReader);
      msg.setOs(value);
      break;
    case 2:
      var value = new proto.zorro.IndexedDbFsSettings;
      reader.readMessage(value,proto.zorro.IndexedDbFsSettings.deserializeBinaryFromReader);
      msg.setIndexeddb(value);
      break;
    case 3:
      var value = new proto.zorro.MemoryFsSettings;
      reader.readMessage(value,proto.zorro.MemoryFsSettings.deserializeBinaryFromReader);
      msg.setMemory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zorro.FileSystemSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zorro.FileSystemSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zorro.FileSystemSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.FileSystemSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOs();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zorro.OsFsSettings.serializeBinaryToWriter
    );
  }
  f = message.getIndexeddb();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zorro.IndexedDbFsSettings.serializeBinaryToWriter
    );
  }
  f = message.getMemory();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zorro.MemoryFsSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional OsFsSettings os = 1;
 * @return {?proto.zorro.OsFsSettings}
 */
proto.zorro.FileSystemSettings.prototype.getOs = function() {
  return /** @type{?proto.zorro.OsFsSettings} */ (
    jspb.Message.getWrapperField(this, proto.zorro.OsFsSettings, 1));
};


/**
 * @param {?proto.zorro.OsFsSettings|undefined} value
 * @return {!proto.zorro.FileSystemSettings} returns this
*/
proto.zorro.FileSystemSettings.prototype.setOs = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.zorro.FileSystemSettings.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zorro.FileSystemSettings} returns this
 */
proto.zorro.FileSystemSettings.prototype.clearOs = function() {
  return this.setOs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.FileSystemSettings.prototype.hasOs = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IndexedDbFsSettings indexedDb = 2;
 * @return {?proto.zorro.IndexedDbFsSettings}
 */
proto.zorro.FileSystemSettings.prototype.getIndexeddb = function() {
  return /** @type{?proto.zorro.IndexedDbFsSettings} */ (
    jspb.Message.getWrapperField(this, proto.zorro.IndexedDbFsSettings, 2));
};


/**
 * @param {?proto.zorro.IndexedDbFsSettings|undefined} value
 * @return {!proto.zorro.FileSystemSettings} returns this
*/
proto.zorro.FileSystemSettings.prototype.setIndexeddb = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.zorro.FileSystemSettings.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zorro.FileSystemSettings} returns this
 */
proto.zorro.FileSystemSettings.prototype.clearIndexeddb = function() {
  return this.setIndexeddb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.FileSystemSettings.prototype.hasIndexeddb = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MemoryFsSettings memory = 3;
 * @return {?proto.zorro.MemoryFsSettings}
 */
proto.zorro.FileSystemSettings.prototype.getMemory = function() {
  return /** @type{?proto.zorro.MemoryFsSettings} */ (
    jspb.Message.getWrapperField(this, proto.zorro.MemoryFsSettings, 3));
};


/**
 * @param {?proto.zorro.MemoryFsSettings|undefined} value
 * @return {!proto.zorro.FileSystemSettings} returns this
*/
proto.zorro.FileSystemSettings.prototype.setMemory = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.zorro.FileSystemSettings.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zorro.FileSystemSettings} returns this
 */
proto.zorro.FileSystemSettings.prototype.clearMemory = function() {
  return this.setMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.FileSystemSettings.prototype.hasMemory = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * @enum {number}
 */
proto.zorro.FileSystemType = {
  OS: 0,
  INDEXEDDB: 1,
  MEMORY: 2
};

goog.object.extend(exports, proto.zorro);
