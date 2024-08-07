// source: protos/plugin/plugin_env.proto
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

goog.exportSymbol('proto.zorro.PluginEnv', null, global);
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
proto.zorro.PluginEnv = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zorro.PluginEnv.repeatedFields_, null);
};
goog.inherits(proto.zorro.PluginEnv, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.zorro.PluginEnv.displayName = 'proto.zorro.PluginEnv';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zorro.PluginEnv.repeatedFields_ = [1,2];



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
proto.zorro.PluginEnv.prototype.toObject = function(opt_includeInstance) {
  return proto.zorro.PluginEnv.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zorro.PluginEnv} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.PluginEnv.toObject = function(includeInstance, msg) {
  var f, obj = {
    appendList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    prependList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    set: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.zorro.PluginEnv}
 */
proto.zorro.PluginEnv.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zorro.PluginEnv;
  return proto.zorro.PluginEnv.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zorro.PluginEnv} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zorro.PluginEnv}
 */
proto.zorro.PluginEnv.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAppend(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPrepend(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSet(value);
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
proto.zorro.PluginEnv.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zorro.PluginEnv.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zorro.PluginEnv} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zorro.PluginEnv.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppendList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPrependList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated string append = 1;
 * @return {!Array<string>}
 */
proto.zorro.PluginEnv.prototype.getAppendList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zorro.PluginEnv} returns this
 */
proto.zorro.PluginEnv.prototype.setAppendList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zorro.PluginEnv} returns this
 */
proto.zorro.PluginEnv.prototype.addAppend = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zorro.PluginEnv} returns this
 */
proto.zorro.PluginEnv.prototype.clearAppendList = function() {
  return this.setAppendList([]);
};


/**
 * repeated string prepend = 2;
 * @return {!Array<string>}
 */
proto.zorro.PluginEnv.prototype.getPrependList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.zorro.PluginEnv} returns this
 */
proto.zorro.PluginEnv.prototype.setPrependList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.zorro.PluginEnv} returns this
 */
proto.zorro.PluginEnv.prototype.addPrepend = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.zorro.PluginEnv} returns this
 */
proto.zorro.PluginEnv.prototype.clearPrependList = function() {
  return this.setPrependList([]);
};


/**
 * optional string set = 3;
 * @return {string}
 */
proto.zorro.PluginEnv.prototype.getSet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.zorro.PluginEnv} returns this
 */
proto.zorro.PluginEnv.prototype.setSet = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.zorro.PluginEnv} returns this
 */
proto.zorro.PluginEnv.prototype.clearSet = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.zorro.PluginEnv.prototype.hasSet = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.zorro);
