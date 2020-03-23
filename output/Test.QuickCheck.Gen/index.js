// Generated by purs version 0.13.6
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Gen_Class = require("../Control.Monad.Gen.Class/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Control_Monad_State = require("../Control.Monad.State/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Control_Monad_State_Trans = require("../Control.Monad.State.Trans/index.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Bounded = require("../Data.Bounded/index.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Int = require("../Data.Int/index.js");
var Data_List = require("../Data.List/index.js");
var Data_List_Types = require("../Data.List.Types/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid_Additive = require("../Data.Monoid.Additive/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var $$Math = require("../Math/index.js");
var Random_LCG = require("../Random.LCG/index.js");
var Gen = function (x) {
    return x;
};
var unGen = function (v) {
    return v;
};
var runGen = function ($56) {
    return Control_Monad_State.runState(unGen($56));
};
var stateful = function (f) {
    return Gen(Control_Monad_State_Class.state(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function (s) {
        return runGen(f(s))(s);
    }));
};
var sized = function (f) {
    return stateful(function (s) {
        return f(s.size);
    });
};
var variant = function (n) {
    return function (g) {
        return Gen(Control_Monad_State_Class.state(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function (s) {
            return runGen(g)({
                newSeed: n,
                size: s.size
            });
        }));
    };
};
var resize = function (sz) {
    return function (g) {
        return Gen(Control_Monad_State_Class.state(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function (v) {
            return Data_Functor.map(Data_Tuple.functorTuple)(function (v1) {
                return {
                    size: v.size,
                    newSeed: v1.newSeed
                };
            })(runGen(g)({
                newSeed: v.newSeed,
                size: sz
            }));
        }));
    };
};
var replicateMRec = function (dictMonadRec) {
    return function (k) {
        return function (v) {
            if (k <= 0) {
                return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(Data_List_Types.Nil.value);
            };
            var go = function (v1) {
                if (v1.value1 === 0) {
                    return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())(new Control_Monad_Rec_Class.Done(v1.value0));
                };
                return Data_Functor.mapFlipped((((dictMonadRec.Monad0()).Bind1()).Apply0()).Functor0())(v)(function (x) {
                    return new Control_Monad_Rec_Class.Loop(new Data_Tuple.Tuple(new Data_List_Types.Cons(x, v1.value0), v1.value1 - 1 | 0));
                });
            };
            return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(go)(new Data_Tuple.Tuple(Data_List_Types.Nil.value, k));
        };
    };
};
var repeatable = function (f) {
    return Gen(Control_Monad_State_Class.state(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function (s) {
        return new Data_Tuple.Tuple(function (a) {
            return Data_Tuple.fst(runGen(f(a))(s));
        }, {
            newSeed: Random_LCG.lcgNext(s.newSeed),
            size: s.size
        });
    }));
};
var perturbGen = function (n) {
    return function (gen) {
        return Control_Bind.discard(Control_Bind.discardUnit)(Control_Monad_State_Trans.bindStateT(Data_Identity.monadIdentity))(Data_Functor["void"](Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function (s) {
            var $29 = {};
            for (var $30 in s) {
                if ({}.hasOwnProperty.call(s, $30)) {
                    $29[$30] = s[$30];
                };
            };
            $29.newSeed = Random_LCG.lcgPerturb(Data_Int.toNumber($foreign.float32ToInt32(n)))(s.newSeed);
            return $29;
        })))(function () {
            return unGen(gen);
        });
    };
};
var monadRecGen = Control_Monad_State_Trans.monadRecStateT(Control_Monad_Rec_Class.monadRecIdentity);
var monadGen = Control_Monad_State_Trans.monadStateT(Data_Identity.monadIdentity);
var listOf = replicateMRec(monadRecGen);
var lcgStep = (function () {
    var f = function (s) {
        return new Data_Tuple.Tuple(Random_LCG.unSeed(s.newSeed), (function () {
            var $32 = {};
            for (var $33 in s) {
                if ({}.hasOwnProperty.call(s, $33)) {
                    $32[$33] = s[$33];
                };
            };
            $32.newSeed = Random_LCG.lcgNext(s.newSeed);
            return $32;
        })());
    };
    return Gen(Control_Monad_State_Class.state(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(f));
})();
var lazyGen = Control_Monad_State_Trans.lazyStateT;
var functorGen = Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity);
var uniform = Data_Functor.map(functorGen)(function (n) {
    return Data_Int.toNumber(n) / Data_Int.toNumber(Random_LCG.lcgM);
})(lcgStep);
var vectorOf = function (k) {
    return function (g) {
        return Data_Functor.map(functorGen)(Data_List.toUnfoldable(Data_Unfoldable.unfoldableArray))(listOf(k)(g));
    };
};
var evalGen = function ($57) {
    return Control_Monad_State.evalState(unGen($57));
};
var sample = function (seed) {
    return function (sz) {
        return function (g) {
            return evalGen(vectorOf(sz)(g))({
                newSeed: seed,
                size: sz
            });
        };
    };
};
var randomSample$prime = function (n) {
    return function (g) {
        return function __do() {
            var seed = Random_LCG.randomSeed();
            return sample(seed)(n)(g);
        };
    };
};
var randomSample = randomSample$prime(10);
var choose = function (a) {
    return function (b) {
        var min$prime = Data_Ord.min(Data_Ord.ordNumber)(a)(b);
        var max$prime = Data_Ord.max(Data_Ord.ordNumber)(a)(b);
        return Data_Functor.map(functorGen)((function () {
            var $58 = Data_Semiring.add(Data_Semiring.semiringNumber)(min$prime);
            var $59 = Data_Semiring.mul(Data_Semiring.semiringNumber)(max$prime - min$prime);
            return function ($60) {
                return $58($59($60));
            };
        })())(uniform);
    };
};
var bindGen = Control_Monad_State_Trans.bindStateT(Data_Identity.monadIdentity);
var frequency = function (v) {
    var xxs = new Data_List_Types.Cons(v.value0, v.value1);
    var total = Data_Newtype.unwrap(Data_Newtype.newtypeAdditive)(Data_Foldable.fold(Data_List_Types.foldableList)(Data_Monoid_Additive.monoidAdditive(Data_Semiring.semiringNumber))(Data_Functor.map(Data_List_Types.functorList)(function ($61) {
        return Data_Monoid_Additive.Additive(Data_Tuple.fst($61));
    })(xxs)));
    var pick = function ($copy_n) {
        return function ($copy_d) {
            return function ($copy_v1) {
                var $tco_var_n = $copy_n;
                var $tco_var_d = $copy_d;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(n, d, v1) {
                    if (v1 instanceof Data_List_Types.Nil) {
                        $tco_done = true;
                        return d;
                    };
                    if (v1 instanceof Data_List_Types.Cons) {
                        var $39 = n <= v1.value0.value0;
                        if ($39) {
                            $tco_done = true;
                            return v1.value0.value1;
                        };
                        $tco_var_n = n - v1.value0.value0;
                        $tco_var_d = d;
                        $copy_v1 = v1.value1;
                        return;
                    };
                    throw new Error("Failed pattern match at Test.QuickCheck.Gen (line 162, column 5 - line 162, column 21): " + [ n.constructor.name, d.constructor.name, v1.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_n, $tco_var_d, $copy_v1);
                };
                return $tco_result;
            };
        };
    };
    return Control_Bind.bind(bindGen)(choose(0)(total))(function (n) {
        return pick(n)(Data_Tuple.snd(v.value0))(xxs);
    });
};
var applyGen = Control_Monad_State_Trans.applyStateT(Data_Identity.monadIdentity);
var chooseInt$prime = function (a) {
    return function (b) {
        var numB = Data_Int.toNumber(b);
        var numA = Data_Int.toNumber(a);
        var clamp = function (x) {
            return numA + $$Math.remainder(x)((numB - numA) + 1);
        };
        var choose31BitPosNumber = Data_Functor.map(functorGen)(Data_Int.toNumber)(lcgStep);
        var choose32BitPosNumber = Control_Apply.apply(applyGen)(Data_Functor.map(functorGen)(Data_Semiring.add(Data_Semiring.semiringNumber))(choose31BitPosNumber))(Data_Functor.map(functorGen)(Data_Semiring.mul(Data_Semiring.semiringNumber)(2.0))(choose31BitPosNumber));
        return Data_Functor.map(functorGen)(function ($62) {
            return Data_Int.floor(clamp($62));
        })(choose32BitPosNumber);
    };
};
var chooseInt = function (a) {
    return function (b) {
        var $46 = a <= b;
        if ($46) {
            return chooseInt$prime(a)(b);
        };
        return chooseInt$prime(b)(a);
    };
};
var arrayOf = function (g) {
    return sized(function (n) {
        return Control_Bind.bind(bindGen)(chooseInt(0)(n))(function (k) {
            return vectorOf(k)(g);
        });
    });
};
var monadGenGen = new Control_Monad_Gen_Class.MonadGen(function () {
    return monadGen;
}, Data_Functor.map(functorGen)(function (v) {
    return v < 0.5;
})(uniform), choose, chooseInt, function (f) {
    return function (g) {
        return sized(function (s) {
            return resize(f(s))(g);
        });
    };
}, sized);
var oneOf = function (v) {
    return Control_Bind.bind(bindGen)(chooseInt(0)(Data_Array.length(v.value1)))(function (n) {
        var $48 = n < 1;
        if ($48) {
            return v.value0;
        };
        return Data_Maybe.fromMaybe(v.value0)(Data_Array.index(v.value1)(n - 1 | 0));
    });
};
var applicativeGen = Control_Monad_State_Trans.applicativeStateT(Data_Identity.monadIdentity);
var arrayOf1 = function (g) {
    return sized(function (n) {
        return Control_Bind.bind(bindGen)(chooseInt(0)(n))(function (k) {
            return Control_Bind.bind(bindGen)(g)(function (x) {
                return Control_Bind.bind(bindGen)(vectorOf(k - 1 | 0)(g))(function (xs) {
                    return Control_Applicative.pure(applicativeGen)(new Data_NonEmpty.NonEmpty(x, xs));
                });
            });
        });
    });
};
var elements = function (v) {
    return Control_Bind.bind(bindGen)(chooseInt(0)(Data_Array.length(v.value1)))(function (n) {
        return Control_Applicative.pure(applicativeGen)((function () {
            var $52 = n === 0;
            if ($52) {
                return v.value0;
            };
            return Data_Maybe.fromMaybe(v.value0)(Data_Array.index(v.value1)(n - 1 | 0));
        })());
    });
};
var $$enum = function (dictBoundedEnum) {
    return Control_Bind.bind(bindGen)(chooseInt(Data_Enum.fromEnum(dictBoundedEnum)(Data_Bounded.bottom(dictBoundedEnum.Bounded0())))(Data_Enum.fromEnum(dictBoundedEnum)(Data_Bounded.top(dictBoundedEnum.Bounded0()))))(function (i) {
        return Control_Applicative.pure(applicativeGen)(Data_Maybe.fromJust()(Data_Enum.toEnum(dictBoundedEnum)(i)));
    });
};
var shuffle = function (xs) {
    return Control_Bind.bind(bindGen)(vectorOf(Data_Array.length(xs))(chooseInt(0)(Data_Bounded.top(Data_Bounded.boundedInt))))(function (ns) {
        return Control_Applicative.pure(applicativeGen)(Data_Functor.map(Data_Functor.functorArray)(Data_Tuple.snd)(Data_Array.sortBy(Data_Ord.comparing(Data_Ord.ordInt)(Data_Tuple.fst))(Data_Array.zip(ns)(xs))));
    });
};
var suchThat = function (gen) {
    return function (pred) {
        var go = function (v) {
            return Control_Bind.bind(bindGen)(gen)(function (a) {
                return Control_Applicative.pure(applicativeGen)((function () {
                    var $55 = pred(a);
                    if ($55) {
                        return new Control_Monad_Rec_Class.Done(a);
                    };
                    return new Control_Monad_Rec_Class.Loop(Data_Unit.unit);
                })());
            });
        };
        return Control_Monad_Rec_Class.tailRecM(monadRecGen)(go)(Data_Unit.unit);
    };
};
var altGen = Control_Monad_State_Trans.altStateT(Data_Identity.monadIdentity)(Data_Identity.altIdentity);
module.exports = {
    unGen: unGen,
    repeatable: repeatable,
    stateful: stateful,
    variant: variant,
    suchThat: suchThat,
    sized: sized,
    resize: resize,
    choose: choose,
    chooseInt: chooseInt,
    oneOf: oneOf,
    frequency: frequency,
    arrayOf: arrayOf,
    arrayOf1: arrayOf1,
    listOf: listOf,
    vectorOf: vectorOf,
    elements: elements,
    shuffle: shuffle,
    runGen: runGen,
    evalGen: evalGen,
    perturbGen: perturbGen,
    uniform: uniform,
    sample: sample,
    randomSample: randomSample,
    "randomSample'": randomSample$prime,
    functorGen: functorGen,
    applyGen: applyGen,
    applicativeGen: applicativeGen,
    bindGen: bindGen,
    monadGen: monadGen,
    altGen: altGen,
    monadRecGen: monadRecGen,
    lazyGen: lazyGen,
    monadGenGen: monadGenGen
};