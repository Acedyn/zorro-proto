// source: protos/tools/tool.proto
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

var protos_tools_socket_pb = require('../../protos/tools/socket_pb.js');
goog.object.extend(proto, protos_tools_socket_pb);
goog.exportSymbol('proto.zorro.Tool', null, global);
goog.exportSymbol('proto.zorro.ToolBase', null, global);
goog.exportSymbol('proto.zorro.ToolStatus', null, global);
goog.exportSymbol('proto.zorro.ToolType', null, global);
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
proto.zorro.ToolBase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zorro.ToolBase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zorro.ToolBase.displayName = 'proto.zorro.ToolBase';
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
proto.zorro.Tool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zorro.Tool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zorro.Tool.displayName = 'proto.zorro.Tool';
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
proto.zorro.ToolBase.prototype.toObject = function(opt_includeInstance) {
  return proto.zorro.ToolBase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zorro.ToolBase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.ToolBase.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    label: jspb.Message.getFieldWithDefault(msg, 4, ""),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    input: (f = msg.getInput()) && protos_tools_socket_pb.Socket.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && protos_tools_socket_pb.Socket.toObject(includeInstance, f),
    tooltip: jspb.Message.getFieldWithDefault(msg, 8, ""),
    logsMap: (f = msg.getLogsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.zorro.ToolBase}
 */
proto.zorro.ToolBase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zorro.ToolBase;
  return proto.zorro.ToolBase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zorro.ToolBase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zorro.ToolBase}
 */
proto.zorro.ToolBase.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.zorro.ToolType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 5:
      var value = /** @type {!proto.zorro.ToolStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = new protos_tools_socket_pb.Socket;
      reader.readMessage(value,protos_tools_socket_pb.Socket.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 7:
      var value = new protos_tools_socket_pb.Socket;
      reader.readMessage(value,protos_tools_socket_pb.Socket.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTooltip(value);
      break;
    case 9:
      var value = msg.getLogsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt64, jspb.BinaryReader.prototype.readString, null, 0, "");
         });
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
proto.zorro.ToolBase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zorro.ToolBase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zorro.ToolBase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.ToolBase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!proto.zorro.ToolType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {!proto.zorro.ToolStatus} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      protos_tools_socket_pb.Socket.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      protos_tools_socket_pb.Socket.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLogsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeInt64, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.zorro.ToolBase.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.zorro.ToolBase.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.ToolBase.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ToolType type = 3;
 * @return {!proto.zorro.ToolType}
 */
proto.zorro.ToolBase.prototype.getType = function() {
  return /** @type {!proto.zorro.ToolType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.zorro.ToolType} value
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.setType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.clearType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.ToolBase.prototype.hasType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string label = 4;
 * @return {string}
 */
proto.zorro.ToolBase.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.setLabel = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.clearLabel = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.ToolBase.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ToolStatus status = 5;
 * @return {!proto.zorro.ToolStatus}
 */
proto.zorro.ToolBase.prototype.getStatus = function() {
  return /** @type {!proto.zorro.ToolStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.zorro.ToolStatus} value
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.ToolBase.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Socket input = 6;
 * @return {?proto.zorro.Socket}
 */
proto.zorro.ToolBase.prototype.getInput = function() {
  return /** @type{?proto.zorro.Socket} */ (
    jspb.Message.getWrapperField(this, protos_tools_socket_pb.Socket, 6));
};


/**
 * @param {?proto.zorro.Socket|undefined} value
 * @return {!proto.zorro.ToolBase} returns this
*/
proto.zorro.ToolBase.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.ToolBase.prototype.hasInput = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Socket output = 7;
 * @return {?proto.zorro.Socket}
 */
proto.zorro.ToolBase.prototype.getOutput = function() {
  return /** @type{?proto.zorro.Socket} */ (
    jspb.Message.getWrapperField(this, protos_tools_socket_pb.Socket, 7));
};


/**
 * @param {?proto.zorro.Socket|undefined} value
 * @return {!proto.zorro.ToolBase} returns this
*/
proto.zorro.ToolBase.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.ToolBase.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string tooltip = 8;
 * @return {string}
 */
proto.zorro.ToolBase.prototype.getTooltip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.setTooltip = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.clearTooltip = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.ToolBase.prototype.hasTooltip = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * map<int64, string> logs = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,string>}
 */
proto.zorro.ToolBase.prototype.getLogsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,string>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.zorro.ToolBase} returns this
 */
proto.zorro.ToolBase.prototype.clearLogsMap = function() {
  this.getLogsMap().clear();
  return this;
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
proto.zorro.Tool.prototype.toObject = function(opt_includeInstance) {
  return proto.zorro.Tool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zorro.Tool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.Tool.toObject = function(includeInstance, msg) {
  var f, obj = {
    base: (f = msg.getBase()) && proto.zorro.ToolBase.toObject(includeInstance, f)
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
 * @return {!proto.zorro.Tool}
 */
proto.zorro.Tool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zorro.Tool;
  return proto.zorro.Tool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zorro.Tool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zorro.Tool}
 */
proto.zorro.Tool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zorro.ToolBase;
      reader.readMessage(value,proto.zorro.ToolBase.deserializeBinaryFromReader);
      msg.setBase(value);
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
proto.zorro.Tool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zorro.Tool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zorro.Tool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.Tool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBase();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zorro.ToolBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional ToolBase base = 1;
 * @return {?proto.zorro.ToolBase}
 */
proto.zorro.Tool.prototype.getBase = function() {
  return /** @type{?proto.zorro.ToolBase} */ (
    jspb.Message.getWrapperField(this, proto.zorro.ToolBase, 1));
};


/**
 * @param {?proto.zorro.ToolBase|undefined} value
 * @return {!proto.zorro.Tool} returns this
*/
proto.zorro.Tool.prototype.setBase = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.zorro.Tool} returns this
 */
proto.zorro.Tool.prototype.clearBase = function() {
  return this.setBase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.Tool.prototype.hasBase = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.zorro.ToolType = {
  COMMAND: 0,
  ACTION: 1,
  WIDGET: 2,
  HOOK: 3
};

/**
 * @enum {number}
 */
proto.zorro.ToolStatus = {
  INITIALIZING: 0,
  INITIALIZED: 1,
  RUNNING: 2,
  PAUSED: 3,
  ERROR: 4,
  INVALID: 5
};

goog.object.extend(exports, proto.zorro);
