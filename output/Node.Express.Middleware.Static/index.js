// Generated by purs version 0.13.6
"use strict";
var $foreign = require("./foreign.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Node_Express_Handler = require("../Node.Express.Handler/index.js");
var $$static = function (root) {
    return Node_Express_Handler.HandlerM(function (req) {
        return function (res) {
            return function (nxt) {
                return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)($foreign["_static"](root)(req, res, nxt));
            };
        };
    });
};
module.exports = {
    "static": $$static
};
