// Generated by purs version 0.13.6
"use strict";
var Data_Functor = require("../Data.Functor/index.js");
var lens = function (s2a) {
    return function (s2b2t) {
        return function (dictFunctor) {
            return function (a2fb) {
                return function (s) {
                    return Data_Functor.map(dictFunctor)(s2b2t(s))(a2fb(s2a(s)));
                };
            };
        };
    };
};
var flip$prime = function (dictFunctor) {
    return function (ff) {
        return function (x) {
            return Data_Functor.map(dictFunctor)(function (f) {
                return f(x);
            })(ff);
        };
    };
};
module.exports = {
    lens: lens,
    "flip'": flip$prime
};
