// Generated by purs version 0.13.6
"use strict";
var Control_MonadZero = require("../Control.MonadZero/index.js");
var MonadPlus = function (MonadZero0) {
    this.MonadZero0 = MonadZero0;
};
var monadPlusArray = new MonadPlus(function () {
    return Control_MonadZero.monadZeroArray;
});
module.exports = {
    MonadPlus: MonadPlus,
    monadPlusArray: monadPlusArray
};
