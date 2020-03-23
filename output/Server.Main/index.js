// Generated by purs version 0.13.6
"use strict";
var App = require("../App/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_String_Common = require("../Data.String.Common/index.js");
var Data_String_Regex_Flags = require("../Data.String.Regex.Flags/index.js");
var Data_String_Regex_Unsafe = require("../Data.String.Regex.Unsafe/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Debug_Trace = require("../Debug.Trace/index.js");
var Effect = require("../Effect/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Effect_Aff_Class = require("../Effect.Aff.Class/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Effect_Console = require("../Effect.Console/index.js");
var Entry_Site = require("../Entry.Site/index.js");
var Impulse_DOM_API = require("../Impulse.DOM.API/index.js");
var Impulse_FRP_Signal = require("../Impulse.FRP.Signal/index.js");
var Node_Encoding = require("../Node.Encoding/index.js");
var Node_Express_App = require("../Node.Express.App/index.js");
var Node_Express_Handler = require("../Node.Express.Handler/index.js");
var Node_Express_Middleware_Static = require("../Node.Express.Middleware.Static/index.js");
var Node_Express_Request = require("../Node.Express.Request/index.js");
var Node_Express_Response = require("../Node.Express.Response/index.js");
var Node_FS_Sync = require("../Node.FS.Sync/index.js");
var Route = require("../Route/index.js");
var pushRoute = function (v) {
    return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
};
var app = function (pre) {
    return function (post) {
        return Control_Bind.discard(Control_Bind.discardUnit)(Node_Express_App.bindAppM)(Node_Express_App.get()("/favicon.ico")(Control_Applicative.pure(Node_Express_Handler.applicativeHandlerM)(Data_Unit.unit)))(function () {
            return Control_Bind.discard(Control_Bind.discardUnit)(Node_Express_App.bindAppM)(Node_Express_App.get()(Data_String_Regex_Unsafe.unsafeRegex(".*")(Data_String_Regex_Flags.noFlags))(Control_Bind.bind(Node_Express_Handler.bindHandlerM)(Node_Express_Request.getPath)(function (route) {
                var v = Route.parseRoute(route);
                if (v instanceof Data_Either.Right) {
                    return Control_Bind.bind(Node_Express_Handler.bindHandlerM)(Effect_Class.liftEffect(Node_Express_Handler.monadEffHandlerM)(Impulse_FRP_Signal.eff_sigBuilder(Impulse_FRP_Signal.s_const(v.value0))))(function (sb_route) {
                        return Control_Bind.discard(Control_Bind.discardUnit)(Node_Express_Handler.bindHandlerM)(Debug_Trace.trace()({
                            route: v.value0
                        })(function (v1) {
                            return Control_Applicative.pure(Node_Express_Handler.applicativeHandlerM)(Data_Unit.unit);
                        }))(function () {
                            return Control_Bind.bind(Node_Express_Handler.bindHandlerM)(Effect_Class.liftEffect(Node_Express_Handler.monadEffHandlerM)(Impulse_DOM_API.toMarkup({})(Data_Function.flip(App.mkApp)(Entry_Site.entry)(App.mkAppEnv(sb_route.signal)(pushRoute)))))(function (ssr) {
                                return Control_Bind.bind(Node_Express_Handler.bindHandlerM)(Effect_Aff_Class.liftAff(Node_Express_Handler.monadAffHandlerM)(Effect_Aff.makeAff(function (resolve) {
                                    return function __do() {
                                        Impulse_DOM_API.ssr_then(ssr)(function (markup) {
                                            return function (v1) {
                                                return resolve(new Data_Either.Right(markup));
                                            };
                                        })();
                                        return Effect_Aff.effectCanceler(Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit));
                                    };
                                })))(function (markup) {
                                    return Control_Bind.discard(Control_Bind.discardUnit)(Node_Express_Handler.bindHandlerM)(Effect_Class.liftEffect(Node_Express_Handler.monadEffHandlerM)(sb_route.destroy))(function () {
                                        return Node_Express_Response.send(pre + (markup + post));
                                    });
                                });
                            });
                        });
                    });
                };
                if (v instanceof Data_Either.Left) {
                    return Node_Express_Handler.next;
                };
                throw new Error("Failed pattern match at Server.Main (line 41, column 5 - line 53, column 13): " + [ v.constructor.name ]);
            })))(function () {
                return Control_Bind.discard(Control_Bind.discardUnit)(Node_Express_App.bindAppM)(Node_Express_App.use(Node_Express_Middleware_Static["static"]("./dist")))(function () {
                    return Node_Express_App.get()(Data_String_Regex_Unsafe.unsafeRegex(".*")(Data_String_Regex_Flags.noFlags))(Control_Bind.bind(Node_Express_Handler.bindHandlerM)(Effect_Class.liftEffect(Node_Express_Handler.monadEffHandlerM)(Impulse_FRP_Signal.eff_sigBuilder(Impulse_FRP_Signal.s_const(Route["Error"].value))))(function (sb_route) {
                        return Control_Bind.bind(Node_Express_Handler.bindHandlerM)(Effect_Class.liftEffect(Node_Express_Handler.monadEffHandlerM)(Impulse_DOM_API.toMarkup({})(Data_Function.flip(App.mkApp)(Entry_Site.entry)(App.mkAppEnv(sb_route.signal)(pushRoute)))))(function (ssr) {
                            return Control_Bind.bind(Node_Express_Handler.bindHandlerM)(Effect_Aff_Class.liftAff(Node_Express_Handler.monadAffHandlerM)(Effect_Aff.makeAff(function (resolve) {
                                return function __do() {
                                    Impulse_DOM_API.ssr_then(ssr)(function (markup) {
                                        return function (v) {
                                            return resolve(new Data_Either.Right(markup));
                                        };
                                    })();
                                    return Effect_Aff.effectCanceler(Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit));
                                };
                            })))(function (markup) {
                                return Control_Bind.discard(Control_Bind.discardUnit)(Node_Express_Handler.bindHandlerM)(Effect_Class.liftEffect(Node_Express_Handler.monadEffHandlerM)(sb_route.destroy))(function () {
                                    return Node_Express_Response.send(pre + (markup + post));
                                });
                            });
                        });
                    }));
                });
            });
        });
    };
};
var main = function __do() {
    var indexHtml = Node_FS_Sync.readTextFile(Node_Encoding.UTF8.value)("./dist/index.html")();
    var splits = Data_String_Common.split("__SSR_CONTENT__")(indexHtml);
    var pre = Data_Maybe.fromMaybe("")(Data_Array.index(splits)(0));
    var post = Data_Maybe.fromMaybe("")(Data_Array.index(splits)(1));
    var PORT = process.env.PORT || 5000
    var server = Node_Express_App.listenHttp(app(pre)(post))(PORT)(function (v) {
        return Effect_Console.log("Listening on " + Data_Show.show(Data_Show.showInt)(PORT));
    })();
    return Data_Unit.unit;
};
module.exports = {
    pushRoute: pushRoute,
    app: app,
    main: main
};
