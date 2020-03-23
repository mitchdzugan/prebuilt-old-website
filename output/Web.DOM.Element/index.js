// Generated by purs version 0.13.6
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var prefix = function ($0) {
    return Data_Nullable.toMaybe($foreign["_prefix"]($0));
};
var namespaceURI = function ($1) {
    return Data_Nullable.toMaybe($foreign["_namespaceURI"]($1));
};
var getElementsByTagNameNS = function ($2) {
    return $foreign["_getElementsByTagNameNS"](Data_Nullable.toNullable($2));
};
var getAttribute = function (attr) {
    var $3 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    var $4 = $foreign["_getAttribute"](attr);
    return function ($5) {
        return $3($4($5));
    };
};
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("Element");
module.exports = {
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromParentNode: fromParentNode,
    fromEventTarget: fromEventTarget,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toParentNode: toParentNode,
    toEventTarget: toEventTarget,
    namespaceURI: namespaceURI,
    prefix: prefix,
    getElementsByTagNameNS: getElementsByTagNameNS,
    getAttribute: getAttribute,
    localName: $foreign.localName,
    tagName: $foreign.tagName,
    id: $foreign.id,
    setId: $foreign.setId,
    className: $foreign.className,
    classList: $foreign.classList,
    setClassName: $foreign.setClassName,
    getElementsByTagName: $foreign.getElementsByTagName,
    getElementsByClassName: $foreign.getElementsByClassName,
    setAttribute: $foreign.setAttribute,
    hasAttribute: $foreign.hasAttribute,
    removeAttribute: $foreign.removeAttribute,
    scrollTop: $foreign.scrollTop,
    setScrollTop: $foreign.setScrollTop,
    scrollLeft: $foreign.scrollLeft,
    setScrollLeft: $foreign.setScrollLeft,
    scrollWidth: $foreign.scrollWidth,
    scrollHeight: $foreign.scrollHeight,
    clientTop: $foreign.clientTop,
    clientLeft: $foreign.clientLeft,
    clientWidth: $foreign.clientWidth,
    clientHeight: $foreign.clientHeight
};
