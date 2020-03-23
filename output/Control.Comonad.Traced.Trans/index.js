// Generated by purs version 0.13.6
"use strict";
var Control_Comonad = require("../Control.Comonad/index.js");
var Control_Comonad_Trans_Class = require("../Control.Comonad.Trans.Class/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var TracedT = function (x) {
    return x;
};
var runTracedT = function (v) {
    return v;
};
var newtypeTracedT = new Data_Newtype.Newtype(function (n) {
    return n;
}, TracedT);
var functorTracedT = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            return Data_Functor.map(dictFunctor)(function (g) {
                return function (t) {
                    return f(g(t));
                };
            })(v);
        };
    });
};
var extendTracedT = function (dictExtend) {
    return function (dictSemigroup) {
        return new Control_Extend.Extend(function () {
            return functorTracedT(dictExtend.Functor0());
        }, function (f) {
            return function (v) {
                return Control_Extend.extend(dictExtend)(function (w$prime) {
                    return function (t) {
                        return f(Data_Functor.map(dictExtend.Functor0())(function (h) {
                            return function (t$prime) {
                                return h(Data_Semigroup.append(dictSemigroup)(t)(t$prime));
                            };
                        })(w$prime));
                    };
                })(v);
            };
        });
    };
};
var comonadTransTracedT = function (dictMonoid) {
    return new Control_Comonad_Trans_Class.ComonadTrans(function (dictComonad) {
        return function (v) {
            return Data_Functor.map((dictComonad.Extend0()).Functor0())(function (f) {
                return f(Data_Monoid.mempty(dictMonoid));
            })(v);
        };
    });
};
var comonadTracedT = function (dictComonad) {
    return function (dictMonoid) {
        return new Control_Comonad.Comonad(function () {
            return extendTracedT(dictComonad.Extend0())(dictMonoid.Semigroup0());
        }, function (v) {
            return Control_Comonad.extract(dictComonad)(v)(Data_Monoid.mempty(dictMonoid));
        });
    };
};
module.exports = {
    TracedT: TracedT,
    runTracedT: runTracedT,
    newtypeTracedT: newtypeTracedT,
    functorTracedT: functorTracedT,
    extendTracedT: extendTracedT,
    comonadTracedT: comonadTracedT,
    comonadTransTracedT: comonadTransTracedT
};
