// Generated by purs version 0.13.6
"use strict";
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Closed = require("../Data.Profunctor.Closed/index.js");
var Zipping = function (x) {
    return x;
};
var profunctorZipping = new Data_Profunctor.Profunctor(function (f) {
    return function (g) {
        return function (v) {
            return function (a1) {
                return function (a2) {
                    return g(v(f(a1))(f(a2)));
                };
            };
        };
    };
});
var newtypeZipping = new Data_Newtype.Newtype(function (n) {
    return n;
}, Zipping);
var closedZipping = new Data_Profunctor_Closed.Closed(function () {
    return profunctorZipping;
}, function (v) {
    return function (f1) {
        return function (f2) {
            return function (x) {
                return v(f1(x))(f2(x));
            };
        };
    };
});
module.exports = {
    Zipping: Zipping,
    newtypeZipping: newtypeZipping,
    profunctorZipping: profunctorZipping,
    closedZipping: closedZipping
};
