// Generated by purs version 0.13.6
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_List_Types = require("../Data.List.Types/index.js");
var Effect_Exception = require("../Effect.Exception/index.js");
var Effect_Uncurried = require("../Effect.Uncurried/index.js");
var Effect_Unsafe = require("../Effect.Unsafe/index.js");
var Foreign = require("../Foreign/index.js");
var parseJSON = (function () {
    var $0 = Data_Bifunctor.lmap(Data_Either.bifunctorEither)((function () {
        var $3 = Control_Applicative.pure(Data_List_Types.applicativeNonEmptyList);
        return function ($4) {
            return $3(Foreign.ForeignError.create(Effect_Exception.message($4)));
        };
    })());
    var $1 = Effect_Uncurried.runEffectFn1($foreign.parseJSONImpl);
    return function ($2) {
        return Control_Monad_Except_Trans.ExceptT(Data_Identity.Identity($0(Effect_Unsafe.unsafePerformEffect(Effect_Exception["try"]($1($2))))));
    };
})();
var decodeJSONWith = function (f) {
    return Control_Bind.composeKleisliFlipped(Control_Monad_Except_Trans.bindExceptT(Data_Identity.monadIdentity))(f)(parseJSON);
};
module.exports = {
    parseJSON: parseJSON,
    decodeJSONWith: decodeJSONWith
};
