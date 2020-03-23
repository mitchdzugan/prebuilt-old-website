// Generated by purs version 0.13.6
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Lens_Internal_Indexed = require("../Data.Lens.Internal.Indexed/index.js");
var Data_Lens_Internal_Shop = require("../Data.Lens.Internal.Shop/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Strong = require("../Data.Profunctor.Strong/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var withLens = function (l) {
    return function (f) {
        var v = l(new Data_Lens_Internal_Shop.Shop(Control_Category.identity(Control_Category.categoryFn), function (v1) {
            return function (b) {
                return b;
            };
        }));
        return f(v.value0)(v.value1);
    };
};
var withIndexedLens = function (l) {
    return function (f) {
        var v = l(new Data_Lens_Internal_Shop.Shop(Control_Category.identity(Control_Category.categoryFn), function (v1) {
            return function (b) {
                return b;
            };
        }));
        return f(v.value0)(v.value1);
    };
};
var lens$prime = function (to) {
    return function (dictStrong) {
        return function (pab) {
            return Data_Profunctor.dimap(dictStrong.Profunctor0())(to)(function (v) {
                return v.value1(v.value0);
            })(Data_Profunctor_Strong.first(dictStrong)(pab));
        };
    };
};
var lens = function (get) {
    return function (set) {
        return function (dictStrong) {
            return lens$prime(function (s) {
                return new Data_Tuple.Tuple(get(s), function (b) {
                    return set(s)(b);
                });
            })(dictStrong);
        };
    };
};
var ilens$prime = function (to) {
    return function (dictStrong) {
        return function (pab) {
            return Data_Profunctor.dimap(dictStrong.Profunctor0())(to)(function (v) {
                return v.value1(v.value0);
            })(Data_Profunctor_Strong.first(dictStrong)(Data_Newtype.un(Data_Lens_Internal_Indexed.newtypeIndexed)(Data_Lens_Internal_Indexed.Indexed)(pab)));
        };
    };
};
var ilens = function (get) {
    return function (set) {
        return function (dictStrong) {
            return ilens$prime(function (s) {
                return new Data_Tuple.Tuple(get(s), function (b) {
                    return set(s)(b);
                });
            })(dictStrong);
        };
    };
};
var cloneLens = function (l) {
    return function (dictStrong) {
        return withLens(l)(function (x) {
            return function (y) {
                return function (p) {
                    return lens(x)(y)(dictStrong)(p);
                };
            };
        });
    };
};
var cloneIndexedLens = function (l) {
    return function (dictStrong) {
        return withIndexedLens(l)(function (x) {
            return function (y) {
                return function (p) {
                    return ilens(x)(y)(dictStrong)(p);
                };
            };
        });
    };
};
module.exports = {
    lens: lens,
    "lens'": lens$prime,
    withLens: withLens,
    cloneLens: cloneLens,
    ilens: ilens,
    "ilens'": ilens$prime,
    withIndexedLens: withIndexedLens,
    cloneIndexedLens: cloneIndexedLens
};
