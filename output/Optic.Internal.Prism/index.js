// Generated by purs version 0.13.6
"use strict";
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice/index.js");
var Market = (function () {
    function Market(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Market.create = function (value0) {
        return function (value1) {
            return new Market(value0, value1);
        };
    };
    return Market;
})();
var profunctorMarket = new Data_Profunctor.Profunctor(function (s2r) {
    return function (t2u) {
        return function (v) {
            return new Market(function ($25) {
                return t2u(v.value0($25));
            }, (function () {
                var $26 = Data_Either.either(function ($28) {
                    return Data_Either.Left.create(t2u($28));
                })(Data_Either.Right.create);
                return function ($27) {
                    return $26(v.value1(s2r($27)));
                };
            })());
        };
    };
});
var functorMarket = new Data_Functor.Functor(function (t2u) {
    return function (v) {
        return new Market(function ($29) {
            return t2u(v.value0($29));
        }, (function () {
            var $30 = Data_Either.either(function ($32) {
                return Data_Either.Left.create(t2u($32));
            })(Data_Either.Right.create);
            return function ($31) {
                return $30(v.value1($31));
            };
        })());
    };
});
var choiceMarket = new Data_Profunctor_Choice.Choice(function () {
    return profunctorMarket;
}, function (v) {
    return new Market(function ($33) {
        return Data_Either.Left.create(v.value0($33));
    }, function (thing) {
        if (thing instanceof Data_Either.Left) {
            return Data_Either.either(function ($34) {
                return Data_Either.Left.create(Data_Either.Left.create($34));
            })(Data_Either.Right.create)(v.value1(thing.value0));
        };
        if (thing instanceof Data_Either.Right) {
            return Data_Either.Left.create(new Data_Either.Right(thing.value0));
        };
        throw new Error("Failed pattern match at Optic.Internal.Prism (line 24, column 63 - line 26, column 32): " + [ thing.constructor.name ]);
    });
}, function (v) {
    return new Market(function ($35) {
        return Data_Either.Right.create(v.value0($35));
    }, function (thing) {
        if (thing instanceof Data_Either.Left) {
            return Data_Either.Left.create(new Data_Either.Left(thing.value0));
        };
        if (thing instanceof Data_Either.Right) {
            return Data_Either.either(function ($36) {
                return Data_Either.Left.create(Data_Either.Right.create($36));
            })(Data_Either.Right.create)(v.value1(thing.value0));
        };
        throw new Error("Failed pattern match at Optic.Internal.Prism (line 28, column 65 - line 30, column 57): " + [ thing.constructor.name ]);
    });
});
module.exports = {
    Market: Market,
    functorMarket: functorMarket,
    profunctorMarket: profunctorMarket,
    choiceMarket: choiceMarket
};
