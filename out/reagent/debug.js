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
var G__12237__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12238__i = 0, G__12238__a = new Array(arguments.length -  0);
while (G__12238__i < G__12238__a.length) {G__12238__a[G__12238__i] = arguments[G__12238__i + 0]; ++G__12238__i;}
  args = new cljs.core.IndexedSeq(G__12238__a,0);
} 
return G__12237__delegate.call(this,args);};
G__12237.cljs$lang$maxFixedArity = 0;
G__12237.cljs$lang$applyTo = (function (arglist__12239){
var args = cljs.core.seq(arglist__12239);
return G__12237__delegate(args);
});
G__12237.cljs$core$IFn$_invoke$arity$variadic = G__12237__delegate;
return G__12237;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12240__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12240 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12241__i = 0, G__12241__a = new Array(arguments.length -  0);
while (G__12241__i < G__12241__a.length) {G__12241__a[G__12241__i] = arguments[G__12241__i + 0]; ++G__12241__i;}
  args = new cljs.core.IndexedSeq(G__12241__a,0);
} 
return G__12240__delegate.call(this,args);};
G__12240.cljs$lang$maxFixedArity = 0;
G__12240.cljs$lang$applyTo = (function (arglist__12242){
var args = cljs.core.seq(arglist__12242);
return G__12240__delegate(args);
});
G__12240.cljs$core$IFn$_invoke$arity$variadic = G__12240__delegate;
return G__12240;
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