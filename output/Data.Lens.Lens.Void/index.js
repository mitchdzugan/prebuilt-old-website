// Generated by purs version 0.13.6
"use strict";
var Data_Function = require("../Data.Function/index.js");
var Data_Lens_Lens = require("../Data.Lens.Lens/index.js");
var Data_Void = require("../Data.Void/index.js");
var devoid = function (dictStrong) {
    return Data_Lens_Lens.lens(Data_Void.absurd)(Data_Function["const"])(dictStrong);
};
module.exports = {
    devoid: devoid
};
