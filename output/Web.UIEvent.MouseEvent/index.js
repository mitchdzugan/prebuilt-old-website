// Generated by purs version 0.13.6
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toUIEvent = Unsafe_Coerce.unsafeCoerce;
var toEvent = Unsafe_Coerce.unsafeCoerce;
var relatedTarget = Data_Functor.map(Data_Functor.functorFn)(Data_Nullable.toMaybe)($foreign["_relatedTarget"]);
var fromUIEvent = Web_Internal_FFI.unsafeReadProtoTagged("MouseEvent");
var fromEvent = Web_Internal_FFI.unsafeReadProtoTagged("MouseEvent");
module.exports = {
    fromUIEvent: fromUIEvent,
    fromEvent: fromEvent,
    toUIEvent: toUIEvent,
    toEvent: toEvent,
    relatedTarget: relatedTarget,
    screenX: $foreign.screenX,
    screenY: $foreign.screenY,
    clientX: $foreign.clientX,
    clientY: $foreign.clientY,
    pageX: $foreign.pageX,
    pageY: $foreign.pageY,
    ctrlKey: $foreign.ctrlKey,
    shiftKey: $foreign.shiftKey,
    altKey: $foreign.altKey,
    metaKey: $foreign.metaKey,
    button: $foreign.button,
    buttons: $foreign.buttons,
    getModifierState: $foreign.getModifierState
};
