// Generated by purs version 0.13.6
"use strict";
var Data_Either = require("../Data.Either/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice/index.js");
var Data_Profunctor_Closed = require("../Data.Profunctor.Closed/index.js");
var Data_Profunctor_Costrong = require("../Data.Profunctor.Costrong/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Tagged = function (x) {
    return x;
};
var taggedProfunctor = new Data_Profunctor.Profunctor(function (v) {
    return function (g) {
        return function (v1) {
            return g(v1);
        };
    };
});
var taggedCostrong = new Data_Profunctor_Costrong.Costrong(function () {
    return taggedProfunctor;
}, function (v) {
    return v.value0;
}, function (v) {
    return v.value1;
});
var taggedClosed = new Data_Profunctor_Closed.Closed(function () {
    return taggedProfunctor;
}, function (v) {
    return Data_Function["const"](v);
});
var taggedChoice = new Data_Profunctor_Choice.Choice(function () {
    return taggedProfunctor;
}, function (v) {
    return new Data_Either.Left(v);
}, function (v) {
    return new Data_Either.Right(v);
});
var newtypeTagged = new Data_Newtype.Newtype(function (n) {
    return n;
}, Tagged);
var functorTagged = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var foldableTagged = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(v);
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return f(b)(v);
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return f(v)(b);
        };
    };
});
var traversableTagged = new Data_Traversable.Traversable(function () {
    return foldableTagged;
}, function () {
    return functorTagged;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Tagged)(v);
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Tagged)(f(v));
        };
    };
});
var eqTagged = function (dictEq) {
    return new Data_Eq.Eq(function (x) {
        return function (y) {
            return Data_Eq.eq(dictEq)(x)(y);
        };
    });
};
var ordTagged = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqTagged(dictOrd.Eq0());
    }, function (x) {
        return function (y) {
            return Data_Ord.compare(dictOrd)(x)(y);
        };
    });
};
var eq1Tagged = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqTagged(dictEq));
});
var ord1Tagged = new Data_Ord.Ord1(function () {
    return eq1Tagged;
}, function (dictOrd) {
    return Data_Ord.compare(ordTagged(dictOrd));
});
module.exports = {
    Tagged: Tagged,
    newtypeTagged: newtypeTagged,
    eqTagged: eqTagged,
    eq1Tagged: eq1Tagged,
    ordTagged: ordTagged,
    ord1Tagged: ord1Tagged,
    functorTagged: functorTagged,
    taggedProfunctor: taggedProfunctor,
    taggedChoice: taggedChoice,
    taggedCostrong: taggedCostrong,
    taggedClosed: taggedClosed,
    foldableTagged: foldableTagged,
    traversableTagged: traversableTagged
};
