/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.types.ValidatorPublicKeys', null, global);

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
proto.types.ValidatorPublicKeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.types.ValidatorPublicKeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.types.ValidatorPublicKeys.displayName = 'proto.types.ValidatorPublicKeys';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.types.ValidatorPublicKeys.prototype.toObject = function(opt_includeInstance) {
  return proto.types.ValidatorPublicKeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.types.ValidatorPublicKeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.types.ValidatorPublicKeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountAddress: msg.getAccountAddress_asB64(),
    consensusPublicKey: msg.getConsensusPublicKey_asB64(),
    networkSigningPublicKey: msg.getNetworkSigningPublicKey_asB64(),
    networkIdentityPublicKey: msg.getNetworkIdentityPublicKey_asB64()
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
 * @return {!proto.types.ValidatorPublicKeys}
 */
proto.types.ValidatorPublicKeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.types.ValidatorPublicKeys;
  return proto.types.ValidatorPublicKeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.types.ValidatorPublicKeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.types.ValidatorPublicKeys}
 */
proto.types.ValidatorPublicKeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccountAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setConsensusPublicKey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNetworkSigningPublicKey(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNetworkIdentityPublicKey(value);
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
proto.types.ValidatorPublicKeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.types.ValidatorPublicKeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.types.ValidatorPublicKeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.types.ValidatorPublicKeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getConsensusPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getNetworkSigningPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getNetworkIdentityPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional bytes account_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.types.ValidatorPublicKeys.prototype.getAccountAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes account_address = 1;
 * This is a type-conversion wrapper around `getAccountAddress()`
 * @return {string}
 */
proto.types.ValidatorPublicKeys.prototype.getAccountAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccountAddress()));
};


/**
 * optional bytes account_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccountAddress()`
 * @return {!Uint8Array}
 */
proto.types.ValidatorPublicKeys.prototype.getAccountAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccountAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.types.ValidatorPublicKeys.prototype.setAccountAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes consensus_public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.types.ValidatorPublicKeys.prototype.getConsensusPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes consensus_public_key = 2;
 * This is a type-conversion wrapper around `getConsensusPublicKey()`
 * @return {string}
 */
proto.types.ValidatorPublicKeys.prototype.getConsensusPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getConsensusPublicKey()));
};


/**
 * optional bytes consensus_public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConsensusPublicKey()`
 * @return {!Uint8Array}
 */
proto.types.ValidatorPublicKeys.prototype.getConsensusPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getConsensusPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.types.ValidatorPublicKeys.prototype.setConsensusPublicKey = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes network_signing_public_key = 3;
 * @return {!(string|Uint8Array)}
 */
proto.types.ValidatorPublicKeys.prototype.getNetworkSigningPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes network_signing_public_key = 3;
 * This is a type-conversion wrapper around `getNetworkSigningPublicKey()`
 * @return {string}
 */
proto.types.ValidatorPublicKeys.prototype.getNetworkSigningPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNetworkSigningPublicKey()));
};


/**
 * optional bytes network_signing_public_key = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNetworkSigningPublicKey()`
 * @return {!Uint8Array}
 */
proto.types.ValidatorPublicKeys.prototype.getNetworkSigningPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNetworkSigningPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.types.ValidatorPublicKeys.prototype.setNetworkSigningPublicKey = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes network_identity_public_key = 4;
 * @return {!(string|Uint8Array)}
 */
proto.types.ValidatorPublicKeys.prototype.getNetworkIdentityPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes network_identity_public_key = 4;
 * This is a type-conversion wrapper around `getNetworkIdentityPublicKey()`
 * @return {string}
 */
proto.types.ValidatorPublicKeys.prototype.getNetworkIdentityPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNetworkIdentityPublicKey()));
};


/**
 * optional bytes network_identity_public_key = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNetworkIdentityPublicKey()`
 * @return {!Uint8Array}
 */
proto.types.ValidatorPublicKeys.prototype.getNetworkIdentityPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNetworkIdentityPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.types.ValidatorPublicKeys.prototype.setNetworkIdentityPublicKey = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


goog.object.extend(exports, proto.types);
