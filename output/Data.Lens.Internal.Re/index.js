// Generated by purs version 0.13.6
"use strict";
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice/index.js");
var Data_Profunctor_Cochoice = require("../Data.Profunctor.Cochoice/index.js");
var Data_Profunctor_Costrong = require("../Data.Profunctor.Costrong/index.js");
var Data_Profunctor_Strong = require("../Data.Profunctor.Strong/index.js");
var Re = function (x) {
    return x;
};
var profunctorRe = function (dictProfunctor) {
    return new Data_Profunctor.Profunctor(function (f) {
        return function (g) {
            return function (v) {
                var $28 = Data_Profunctor.dimap(dictProfunctor)(g)(f);
                return function ($29) {
                    return v($28($29));
                };
            };
        };
    });
};
var strongRe = function (dictStrong) {
    return new Data_Profunctor_Costrong.Costrong(function () {
        return profunctorRe(dictStrong.Profunctor0());
    }, function (v) {
        var $30 = Data_Profunctor_Strong.first(dictStrong);
        return function ($31) {
            return v($30($31));
        };
    }, function (v) {
        var $32 = Data_Profunctor_Strong.second(dictStrong);
        return function ($33) {
            return v($32($33));
        };
    });
};
var newtypeRe = new Data_Newtype.Newtype(function (n) {
    return n;
}, Re);
var costrongRe = function (dictCostrong) {
    return new Data_Profunctor_Strong.Strong(function () {
        return profunctorRe(dictCostrong.Profunctor0());
    }, function (v) {
        var $34 = Data_Profunctor_Costrong.unfirst(dictCostrong);
        return function ($35) {
            return v($34($35));
        };
    }, function (v) {
        var $36 = Data_Profunctor_Costrong.unsecond(dictCostrong);
        return function ($37) {
            return v($36($37));
        };
    });
};
var cochoiceRe = function (dictCochoice) {
    return new Data_Profunctor_Choice.Choice(function () {
        return profunctorRe(dictCochoice.Profunctor0());
    }, function (v) {
        var $38 = Data_Profunctor_Cochoice.unleft(dictCochoice);
        return function ($39) {
            return v($38($39));
        };
    }, function (v) {
        var $40 = Data_Profunctor_Cochoice.unright(dictCochoice);
        return function ($41) {
            return v($40($41));
        };
    });
};
var choiceRe = function (dictChoice) {
    return new Data_Profunctor_Cochoice.Cochoice(function () {
        return profunctorRe(dictChoice.Profunctor0());
    }, function (v) {
        var $42 = Data_Profunctor_Choice.left(dictChoice);
        return function ($43) {
            return v($42($43));
        };
    }, function (v) {
        var $44 = Data_Profunctor_Choice.right(dictChoice);
        return function ($45) {
            return v($44($45));
        };
    });
};
module.exports = {
    Re: Re,
    newtypeRe: newtypeRe,
    profunctorRe: profunctorRe,
    choiceRe: choiceRe,
    cochoiceRe: cochoiceRe,
    strongRe: strongRe,
    costrongRe: costrongRe
};