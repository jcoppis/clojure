// Compiled by ClojureScript 1.9.473 {}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_12747 = "ws://localhost:54780";
if(cljs.core.truth_((function (){var and__7103__auto__ = repl_conn_12747;
if(cljs.core.truth_(and__7103__auto__)){
return cljs.core.not.call(null,weasel.repl.alive_QMARK_.call(null));
} else {
return and__7103__auto__;
}
})())){
weasel.repl.connect.call(null,"ws://localhost:54780");
} else {
}

//# sourceMappingURL=boot_cljs_repl.js.map