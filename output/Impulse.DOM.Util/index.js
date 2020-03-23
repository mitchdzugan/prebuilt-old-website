// Generated by purs version 0.13.6
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Monad_Reader = require("../Control.Monad.Reader/index.js");
var Control_Monad_Reader_Trans = require("../Control.Monad.Reader.Trans/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Show = require("../Data.Show/index.js");
var Impulse_DOM_API = require("../Impulse.DOM.API/index.js");
var Impulse_FRP_Event = require("../Impulse.FRP.Event/index.js");
var Impulse_FRP_Signal = require("../Impulse.FRP.Signal/index.js");
var Record = require("../Record/index.js");
var withEnv = function (newEnv) {
    return Impulse_DOM_API.withAlteredEnv(Data_Function["const"](newEnv));
};
var upsertEnv = function (dictIsSymbol) {
    return function (dictLacks) {
        return function (dictCons) {
            return function (dictCons1) {
                return function (dictUnion) {
                    return function (p) {
                        return function (v) {
                            return Impulse_DOM_API.withAlteredEnv(Record.union()(Record.insert(dictIsSymbol)()()(p)(v)({})));
                        };
                    };
                };
            };
        };
    };
};
var s_extract_ = (function () {
    var $21 = Data_Function.flip(Impulse_DOM_API.s_bindDOM_)(Impulse_DOM_API.d_apply_);
    return function ($22) {
        return Impulse_DOM_API.d_stash($21($22));
    };
})();
var s_extract = (function () {
    var $23 = Data_Function.flip(Impulse_DOM_API.s_bindDOM)(Impulse_DOM_API.d_apply);
    return function ($24) {
        return Impulse_DOM_API.d_stash($23($24));
    };
})();
var s_bindKeyedDOM_ = function (dictShow) {
    return function (signal) {
        return function (inner) {
            return Impulse_DOM_API.s_bindDOM_(signal)(function (val) {
                return Impulse_DOM_API.keyed(Data_Show.show(dictShow)(val))(inner(val));
            });
        };
    };
};
var s_bindKeyedDOM = function (dictShow) {
    return function (signal) {
        return function (inner) {
            return Impulse_DOM_API.s_bindDOM(signal)(function (val) {
                return Impulse_DOM_API.keyed(Data_Show.show(dictShow)(val))(inner(val));
            });
        };
    };
};
var getEnv = function (dictIsSymbol) {
    return function (dictCons) {
        return function (proxy) {
            return Data_Functor.mapFlipped(Control_Monad_Reader_Trans.functorReaderT(Data_Identity.functorIdentity))(Impulse_DOM_API.env)(Record.get(dictIsSymbol)()(proxy));
        };
    };
};
var e_collectAndReduce = function (dictIsSymbol) {
    return function (dictLacks) {
        return function (dictCons) {
            return function (dictCons1) {
                return function (dictUnion) {
                    return function (dictCons2) {
                        return function (dictCons3) {
                            return function (dictUnion1) {
                                return function (proxy) {
                                    return function (reducer) {
                                        return function (init) {
                                            return function (inner) {
                                                var go = function (e_raw) {
                                                    var e = Impulse_FRP_Event.reduce(reducer)(init)(e_raw);
                                                    return Control_Bind.bind(Control_Monad_Reader_Trans.bindReaderT(Data_Identity.bindIdentity))(Impulse_DOM_API.s_use(Impulse_FRP_Signal.s_from(e)(init)))(function (s) {
                                                        return upsertEnv(dictIsSymbol)()()()()(proxy)(s)(inner);
                                                    });
                                                };
                                                return Impulse_DOM_API.e_collect(dictIsSymbol)()()()()(proxy)(go);
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var d_readAs = function (dictIsSymbol) {
    return function (dictCons) {
        return function (sym) {
            return function (f) {
                return function (r) {
                    return Control_Bind.bind(Control_Monad_Reader_Trans.bindReaderT(Data_Identity.bindIdentity))(getEnv(dictIsSymbol)()(sym))((function () {
                        var $25 = Control_Applicative.pure(Control_Monad_Reader_Trans.applicativeReaderT(Data_Identity.applicativeIdentity));
                        var $26 = Control_Monad_Reader.runReader(r);
                        return function ($27) {
                            return $25($26(f($27)));
                        };
                    })());
                };
            };
        };
    };
};
var d_read = function (dictIsSymbol) {
    return function (dictCons) {
        return function (sym) {
            return d_readAs(dictIsSymbol)()(sym)(Control_Category.identity(Control_Category.categoryFn));
        };
    };
};
var d_clone = function ($28) {
    return Impulse_DOM_API.d_stash(Impulse_DOM_API.d_apply($28));
};
module.exports = {
    getEnv: getEnv,
    withEnv: withEnv,
    upsertEnv: upsertEnv,
    e_collectAndReduce: e_collectAndReduce,
    d_clone: d_clone,
    s_extract: s_extract,
    s_extract_: s_extract_,
    d_read: d_read,
    d_readAs: d_readAs,
    s_bindKeyedDOM: s_bindKeyedDOM,
    s_bindKeyedDOM_: s_bindKeyedDOM_
};
