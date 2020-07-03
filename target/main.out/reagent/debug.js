// Compiled by ClojureScript 1.9.473 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8487__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8488__i = 0, G__8488__a = new Array(arguments.length -  0);
while (G__8488__i < G__8488__a.length) {G__8488__a[G__8488__i] = arguments[G__8488__i + 0]; ++G__8488__i;}
  args = new cljs.core.IndexedSeq(G__8488__a,0);
} 
return G__8487__delegate.call(this,args);};
G__8487.cljs$lang$maxFixedArity = 0;
G__8487.cljs$lang$applyTo = (function (arglist__8489){
var args = cljs.core.seq(arglist__8489);
return G__8487__delegate(args);
});
G__8487.cljs$core$IFn$_invoke$arity$variadic = G__8487__delegate;
return G__8487;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8490__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8491__i = 0, G__8491__a = new Array(arguments.length -  0);
while (G__8491__i < G__8491__a.length) {G__8491__a[G__8491__i] = arguments[G__8491__i + 0]; ++G__8491__i;}
  args = new cljs.core.IndexedSeq(G__8491__a,0);
} 
return G__8490__delegate.call(this,args);};
G__8490.cljs$lang$maxFixedArity = 0;
G__8490.cljs$lang$applyTo = (function (arglist__8492){
var args = cljs.core.seq(arglist__8492);
return G__8490__delegate(args);
});
G__8490.cljs$core$IFn$_invoke$arity$variadic = G__8490__delegate;
return G__8490;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map