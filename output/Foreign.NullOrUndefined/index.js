// Generated by purs version 0.13.6
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Foreign = require("../Foreign/index.js");
var readNullOrUndefined = function (v) {
    return function (value) {
        if (Foreign.isNull(value) || Foreign.isUndefined(value)) {
            return Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(Data_Identity.monadIdentity))(Data_Maybe.Nothing.value);
        };
        return Data_Functor.map(Control_Monad_Except_Trans.functorExceptT(Data_Identity.functorIdentity))(Data_Maybe.Just.create)(v(value));
    };
};
module.exports = {
    readNullOrUndefined: readNullOrUndefined,
    "undefined": $foreign["undefined"]
};
