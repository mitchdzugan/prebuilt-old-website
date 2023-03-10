// Generated by purs version 0.13.6
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans/index.js");
var Control_Monad_Free = require("../Control.Monad.Free/index.js");
var Control_Monad_Maybe_Trans = require("../Control.Monad.Maybe.Trans/index.js");
var Control_Monad_Reader_Trans = require("../Control.Monad.Reader.Trans/index.js");
var Control_Monad_State_Trans = require("../Control.Monad.State.Trans/index.js");
var Control_Monad_Writer_Trans = require("../Control.Monad.Writer.Trans/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var MonadFree = function (Monad0, wrapFree) {
    this.Monad0 = Monad0;
    this.wrapFree = wrapFree;
};
var wrapFree = function (dict) {
    return dict.wrapFree;
};
var monadFreeWriterT = function (dictFunctor) {
    return function (dictMonadFree) {
        return function (dictMonoid) {
            return new MonadFree(function () {
                return Control_Monad_Writer_Trans.monadWriterT(dictMonoid)(dictMonadFree.Monad0());
            }, function (f) {
                return wrapFree(dictMonadFree)(Data_Functor.map(dictFunctor)(Control_Monad_Writer_Trans.runWriterT)(f));
            });
        };
    };
};
var monadFreeStateT = function (dictFunctor) {
    return function (dictMonadFree) {
        return new MonadFree(function () {
            return Control_Monad_State_Trans.monadStateT(dictMonadFree.Monad0());
        }, function (f) {
            return function (s) {
                return wrapFree(dictMonadFree)(Data_Functor.map(dictFunctor)(function (st) {
                    return Control_Monad_State_Trans.runStateT(st)(s);
                })(f));
            };
        });
    };
};
var monadFreeReaderT = function (dictFunctor) {
    return function (dictMonadFree) {
        return new MonadFree(function () {
            return Control_Monad_Reader_Trans.monadReaderT(dictMonadFree.Monad0());
        }, function (f) {
            return function (r) {
                return wrapFree(dictMonadFree)(Data_Functor.map(dictFunctor)(function (rt) {
                    return Control_Monad_Reader_Trans.runReaderT(rt)(r);
                })(f));
            };
        });
    };
};
var monadFreeMaybeT = function (dictFunctor) {
    return function (dictMonadFree) {
        return new MonadFree(function () {
            return Control_Monad_Maybe_Trans.monadMaybeT(dictMonadFree.Monad0());
        }, function (f) {
            return wrapFree(dictMonadFree)(Data_Functor.map(dictFunctor)(Control_Monad_Maybe_Trans.runMaybeT)(f));
        });
    };
};
var monadFreeFree = new MonadFree(function () {
    return Control_Monad_Free.freeMonad;
}, (function () {
    var $11 = Control_Bind.join(Control_Monad_Free.freeBind);
    return function ($12) {
        return $11(Control_Monad_Free.liftF($12));
    };
})());
var monadFreeExceptT = function (dictFunctor) {
    return function (dictMonadFree) {
        return new MonadFree(function () {
            return Control_Monad_Except_Trans.monadExceptT(dictMonadFree.Monad0());
        }, function (f) {
            return wrapFree(dictMonadFree)(Data_Functor.map(dictFunctor)(Control_Monad_Except_Trans.runExceptT)(f));
        });
    };
};
module.exports = {
    MonadFree: MonadFree,
    wrapFree: wrapFree,
    monadFreeFree: monadFreeFree,
    monadFreeReaderT: monadFreeReaderT,
    monadFreeStateT: monadFreeStateT,
    monadFreeWriterT: monadFreeWriterT,
    monadFreeMaybeT: monadFreeMaybeT,
    monadFreeExceptT: monadFreeExceptT
};
