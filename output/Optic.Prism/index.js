// Generated by purs version 0.13.6
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Optic_Internal_Prism = require("../Optic.Internal.Prism/index.js");
var withPrism = function (stab) {
    return function (f) {
        var v = stab(new Optic_Internal_Prism.Market(Data_Identity.Identity, Data_Either.Right.create));
        return f((function () {
            var $18 = Data_Newtype.unwrap(Data_Identity.newtypeIdentity);
            return function ($19) {
                return $18(v.value0($19));
            };
        })())((function () {
            var $20 = Data_Either.either((function () {
                var $22 = Data_Newtype.unwrap(Data_Identity.newtypeIdentity);
                return function ($23) {
                    return Data_Either.Left.create($22($23));
                };
            })())(Data_Either.Right.create);
            return function ($21) {
                return $20(v.value1($21));
            };
        })());
    };
};
var prism = function (dictApplicative) {
    return function (dictChoice) {
        return function (b2t) {
            return function (s2Eta) {
                return function (pafb) {
                    return Data_Profunctor.dimap(dictChoice.Profunctor0())(s2Eta)(Data_Either.either(Control_Applicative.pure(dictApplicative))(Data_Functor.map((dictApplicative.Apply0()).Functor0())(b2t)))(Data_Profunctor_Choice.right(dictChoice)(pafb));
                };
            };
        };
    };
};
var prism$prime = function (b2s) {
    return function (s2Ma) {
        return function (dictApplicative) {
            return function (dictChoice) {
                return prism(dictApplicative)(dictChoice)(b2s)(function (s) {
                    return Data_Maybe.maybe(new Data_Either.Left(s))(Data_Either.Right.create)(s2Ma(s));
                });
            };
        };
    };
};
var nearly = function (x) {
    return function (p) {
        return function (dictApplicative) {
            return function (dictChoice) {
                var guard = function (v) {
                    if (v) {
                        return new Data_Maybe.Just(Data_Unit.unit);
                    };
                    if (!v) {
                        return Data_Maybe.Nothing.value;
                    };
                    throw new Error("Failed pattern match at Optic.Prism (line 44, column 7 - line 44, column 37): " + [ v.constructor.name ]);
                };
                return prism$prime(Data_Function["const"](x))(function ($24) {
                    return guard(p($24));
                })(dictApplicative)(dictChoice);
            };
        };
    };
};
var only = function (dictEq) {
    return function (x) {
        return function (dictApplicative) {
            return function (dictChoice) {
                return nearly(x)(Data_Eq.eq(dictEq)(x))(dictApplicative)(dictChoice);
            };
        };
    };
};
var matching = function (stab) {
    return withPrism(stab)(function (v) {
        return function (s) {
            return s;
        };
    });
};
var is = function (stab) {
    return function (s) {
        return Data_Either.either(Data_Function["const"](false))(Data_Function["const"](true))(matching(stab)(s));
    };
};
var isn$primet = function (stab) {
    return function (s) {
        return !is(stab)(s);
    };
};
var clonePrism = function (dictApplicative) {
    return function (dictChoice) {
        return function (stab) {
            return withPrism(stab)(prism(dictApplicative)(dictChoice));
        };
    };
};
module.exports = {
    clonePrism: clonePrism,
    is: is,
    "isn't": isn$primet,
    matching: matching,
    nearly: nearly,
    only: only,
    prism: prism,
    "prism'": prism$prime,
    withPrism: withPrism
};
