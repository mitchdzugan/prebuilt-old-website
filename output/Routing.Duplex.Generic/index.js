// Generated by purs version 0.13.6
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Generic_Rep = require("../Data.Generic.Rep/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Record = require("../Record/index.js");
var Routing_Duplex = require("../Routing.Duplex/index.js");
var Routing_Duplex_Parser = require("../Routing.Duplex.Parser/index.js");
var Routing_Duplex_Printer = require("../Routing.Duplex.Printer/index.js");
var GRouteDuplexCtr = function (gRouteDuplexCtr) {
    this.gRouteDuplexCtr = gRouteDuplexCtr;
};
var GRouteDuplex = function (gRouteDuplex) {
    this.gRouteDuplex = gRouteDuplex;
};
var noArgs = Control_Applicative.pure(Routing_Duplex.applicativeRouteDuplex)(Data_Generic_Rep.NoArguments.value);
var gRouteProduct = new GRouteDuplexCtr(Control_Category.identity(Control_Category.categoryFn));
var gRouteNoArguments = new GRouteDuplexCtr(Control_Category.identity(Control_Category.categoryFn));
var gRouteDuplexCtr = function (dict) {
    return dict.gRouteDuplexCtr;
};
var product = function (dictGRouteDuplexCtr) {
    return function (v) {
        return function (l) {
            var v1 = gRouteDuplexCtr(dictGRouteDuplexCtr)(l);
            var enc = function (v2) {
                return Data_Semigroup.append(Routing_Duplex_Printer.semigroupRoutePrinter)(v.value0(v2.value0))(v1.value0(v2.value1));
            };
            var dec = Control_Apply.apply(Routing_Duplex_Parser.applyRouteParser)(Data_Functor.map(Routing_Duplex_Parser.functorRouteParser)(Data_Generic_Rep.Product.create)(Data_Functor.map(Routing_Duplex_Parser.functorRouteParser)(Data_Generic_Rep.Argument)(v.value1)))(v1.value1);
            return new Routing_Duplex.RouteDuplex(enc, dec);
        };
    };
};
var gRouteDuplex = function (dict) {
    return dict.gRouteDuplex;
};
var gRouteSum = function (dictGRouteDuplex) {
    return function (dictGRouteDuplex1) {
        return new GRouteDuplex(function (r) {
            var v = gRouteDuplex(dictGRouteDuplex)(r);
            var v1 = gRouteDuplex(dictGRouteDuplex1)(r);
            var enc = function (v2) {
                if (v2 instanceof Data_Generic_Rep.Inl) {
                    return v.value0(v2.value0);
                };
                if (v2 instanceof Data_Generic_Rep.Inr) {
                    return v1.value0(v2.value0);
                };
                throw new Error("Failed pattern match at Routing.Duplex.Generic (line 32, column 11 - line 34, column 22): " + [ v2.constructor.name ]);
            };
            var dec = Control_Alt.alt(Routing_Duplex_Parser.altRouteParser)(Data_Functor.map(Routing_Duplex_Parser.functorRouteParser)(Data_Generic_Rep.Inl.create)(v.value1))(Data_Functor.map(Routing_Duplex_Parser.functorRouteParser)(Data_Generic_Rep.Inr.create)(v1.value1));
            return new Routing_Duplex.RouteDuplex(enc, dec);
        });
    };
};
var sum = function (dictGeneric) {
    return function (dictGRouteDuplex) {
        var $48 = Data_Profunctor.dimap(Routing_Duplex.profunctorRouteDuplex)(Data_Generic_Rep.from(dictGeneric))(Data_Generic_Rep.to(dictGeneric));
        var $49 = gRouteDuplex(dictGRouteDuplex);
        return function ($50) {
            return $48($49($50));
        };
    };
};
var gRouteConstructor = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictGRouteDuplexCtr) {
            return new GRouteDuplex(function (r) {
                var v = Routing_Duplex.end(gRouteDuplexCtr(dictGRouteDuplexCtr)(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(r)));
                var enc = function (v1) {
                    return v.value0(v1);
                };
                var dec = Data_Functor.map(Routing_Duplex_Parser.functorRouteParser)(Data_Generic_Rep.Constructor)(v.value1);
                return new Routing_Duplex.RouteDuplex(enc, dec);
            });
        };
    };
};
var gRouteArgument = new GRouteDuplexCtr(Control_Category.identity(Control_Category.categoryFn));
var gRouteAll = new GRouteDuplexCtr(function (v) {
    return new Routing_Duplex.RouteDuplex(function (v1) {
        return v.value0(v1);
    }, Data_Functor.map(Routing_Duplex_Parser.functorRouteParser)(Data_Generic_Rep.Argument)(v.value1));
});
module.exports = {
    gRouteDuplex: gRouteDuplex,
    gRouteDuplexCtr: gRouteDuplexCtr,
    sum: sum,
    GRouteDuplex: GRouteDuplex,
    GRouteDuplexCtr: GRouteDuplexCtr,
    product: product,
    noArgs: noArgs,
    gRouteSum: gRouteSum,
    gRouteConstructor: gRouteConstructor,
    gRouteProduct: gRouteProduct,
    gRouteNoArguments: gRouteNoArguments,
    gRouteArgument: gRouteArgument,
    gRouteAll: gRouteAll
};
