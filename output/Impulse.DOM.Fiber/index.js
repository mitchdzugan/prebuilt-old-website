// Generated by purs version 0.13.6
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Reader_Trans = require("../Control.Monad.Reader.Trans/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Lens_Getter = require("../Data.Lens.Getter/index.js");
var Data_Lens_Internal_Forget = require("../Data.Lens.Internal.Forget/index.js");
var Data_Lens_Setter = require("../Data.Lens.Setter/index.js");
var Data_Profunctor_Strong = require("../Data.Profunctor.Strong/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect = require("../Effect/index.js");
var Impulse_DOM_API = require("../Impulse.DOM.API/index.js");
var Impulse_DOM_Util = require("../Impulse.DOM.Util/index.js");
var Impulse_FRP_Event = require("../Impulse.FRP.Event/index.js");
var Impulse_FRP_Signal = require("../Impulse.FRP.Signal/index.js");
var Fiber = function (x) {
    return x;
};
var mkFiber_ = function (dictIsSymbol) {
    return function (dictLacks) {
        return function (dictCons) {
            return function (dictCons1) {
                return function (dictUnion) {
                    return function (p) {
                        return function (init) {
                            return function (inner) {
                                var event = Impulse_FRP_Event.mkEvent(function (v) {
                                    return Control_Applicative.pure(Effect.applicativeEffect)(Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit));
                                });
                                var sb = Impulse_FRP_Signal.s_from(event)(init);
                                return Control_Bind.bind(Control_Monad_Reader_Trans.bindReaderT(Data_Identity.bindIdentity))(Impulse_DOM_API.s_use(sb))(function (signal) {
                                    return Impulse_DOM_Util.upsertEnv(dictIsSymbol)()()()()(p)({
                                        signal: signal,
                                        event: event
                                    })(inner);
                                });
                            };
                        };
                    };
                };
            };
        };
    };
};
var mkFiber = function (dictIsSymbol) {
    return function (dictLacks) {
        return function (dictCons) {
            return function (dictCons1) {
                return function (dictUnion) {
                    return function (dictCons2) {
                        return function (dictCons3) {
                            return function (dictUnion1) {
                                return function (p) {
                                    return function (init) {
                                        return function (reducer) {
                                            return function (inner) {
                                                var event = Impulse_FRP_Event.mkEvent(function (v) {
                                                    return Control_Applicative.pure(Effect.applicativeEffect)(Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit));
                                                });
                                                var sb = Impulse_FRP_Signal.s_from(event)(init);
                                                return Control_Bind.bind(Control_Monad_Reader_Trans.bindReaderT(Data_Identity.bindIdentity))(Impulse_DOM_API.s_use(sb))(function (signal) {
                                                    return Impulse_DOM_Util.upsertEnv(dictIsSymbol)()()()()(p)({
                                                        signal: signal,
                                                        event: event
                                                    })(Impulse_DOM_API.e_collect(dictIsSymbol)()()()()(p)(function (e_action) {
                                                        return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Reader_Trans.bindReaderT(Data_Identity.bindIdentity))(Data_Function.flip(Impulse_DOM_API.e_consume)(e_action)(function (b) {
                                                            return function __do() {
                                                                var curr = Impulse_FRP_Signal.s_inst(signal)();
                                                                var next = reducer(curr)(b);
                                                                return Impulse_FRP_Event.push(next)(event)();
                                                            };
                                                        }))(function () {
                                                            return inner;
                                                        });
                                                    }));
                                                });
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
var f_view = function (dictIsSymbol) {
    return function (dictIsSymbol1) {
        return function (dictLacks) {
            return function (dictCons) {
                return function (dictCons1) {
                    return function (dictUnion) {
                        return function (dictCons2) {
                            return function (p_out) {
                                return function (p_in) {
                                    return function (lens) {
                                        return function (inner) {
                                            return Control_Bind.bind(Control_Monad_Reader_Trans.bindReaderT(Data_Identity.bindIdentity))(Impulse_DOM_Util.getEnv(dictIsSymbol)()(p_out))(function (v) {
                                                return Control_Bind.bind(Control_Monad_Reader_Trans.bindReaderT(Data_Identity.bindIdentity))(Impulse_DOM_API.s_use(Impulse_FRP_Signal.s_fmap(Data_Lens_Getter.view(lens(Data_Lens_Internal_Forget.strongForget)))(v.signal)))(function (s_in) {
                                                    return Impulse_DOM_Util.upsertEnv(dictIsSymbol1)()()()()(p_in)({
                                                        event: Impulse_FRP_Signal.s_changed(s_in),
                                                        signal: s_in
                                                    })(inner);
                                                });
                                            });
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
var f_getSignal = function (dictIsSymbol) {
    return function (dictCons) {
        return function (p) {
            return Control_Bind.bind(Control_Monad_Reader_Trans.bindReaderT(Data_Identity.bindIdentity))(Impulse_DOM_Util.getEnv(dictIsSymbol)()(p))(function (v) {
                return Control_Applicative.pure(Control_Monad_Reader_Trans.applicativeReaderT(Data_Identity.applicativeIdentity))(v.signal);
            });
        };
    };
};
var f_focus = function (dictIsSymbol) {
    return function (dictIsSymbol1) {
        return function (dictLacks) {
            return function (dictCons) {
                return function (dictCons1) {
                    return function (dictUnion) {
                        return function (dictCons2) {
                            return function (dictCons3) {
                                return function (dictUnion1) {
                                    return function (dictCons4) {
                                        return function (p_out) {
                                            return function (p_in) {
                                                return function (lens) {
                                                    return function (reducer) {
                                                        return function (inner) {
                                                            return Control_Bind.bind(Control_Monad_Reader_Trans.bindReaderT(Data_Identity.bindIdentity))(Impulse_DOM_Util.getEnv(dictIsSymbol)()(p_out))(function (v) {
                                                                return Control_Bind.bind(Control_Monad_Reader_Trans.bindReaderT(Data_Identity.bindIdentity))(Impulse_DOM_API.s_use(Impulse_FRP_Signal.s_fmap(Data_Lens_Getter.view(lens(Data_Lens_Internal_Forget.strongForget)))(v.signal)))(function (s_in) {
                                                                    return Impulse_DOM_Util.upsertEnv(dictIsSymbol1)()()()()(p_in)({
                                                                        event: Impulse_FRP_Signal.s_changed(s_in),
                                                                        signal: s_in
                                                                    })(Impulse_DOM_API.e_collect(dictIsSymbol1)()()()()(p_in)(function (e_in) {
                                                                        return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_Reader_Trans.bindReaderT(Data_Identity.bindIdentity))(Data_Function.flip(Impulse_DOM_API.e_consume)(e_in)(function (c) {
                                                                            return function __do() {
                                                                                var curr_out = Impulse_FRP_Signal.s_inst(v.signal)();
                                                                                var curr_in = Impulse_FRP_Signal.s_inst(s_in)();
                                                                                var next = Data_Lens_Setter.set(lens(Data_Profunctor_Strong.strongFn))(reducer(curr_in)(c))(curr_out);
                                                                                return Impulse_FRP_Event.push(next)(v.event)();
                                                                            };
                                                                        }))(function () {
                                                                            return inner;
                                                                        });
                                                                    }));
                                                                });
                                                            });
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
        };
    };
};
module.exports = {
    mkFiber: mkFiber,
    mkFiber_: mkFiber_,
    f_focus: f_focus,
    f_view: f_view,
    f_getSignal: f_getSignal
};
