// Compiled by ClojureScript 1.9.473 {}
goog.provide('valip.core');
goog.require('cljs.core');
/**
 * Performs a validation on a key in a map using the supplied predicate
 *   function. A {key [error]} map is returned if the predicate returns false;
 *   nil is returned if the predicate returns true.
 */
valip.core.validation_on = (function valip$core$validation_on(key,pred_QMARK_,error){
return (function (value_map){
var value = value_map.call(null,key);
if(cljs.core.not.call(null,pred_QMARK_.call(null,value))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error], null)]);
} else {
return null;
}
});
});
/**
 * Merge error maps returned by from the validation-on function.
 */
valip.core.merge_errors = (function valip$core$merge_errors(var_args){
var args__8235__auto__ = [];
var len__8228__auto___8283 = arguments.length;
var i__8229__auto___8284 = (0);
while(true){
if((i__8229__auto___8284 < len__8228__auto___8283)){
args__8235__auto__.push((arguments[i__8229__auto___8284]));

var G__8285 = (i__8229__auto___8284 + (1));
i__8229__auto___8284 = G__8285;
continue;
} else {
}
break;
}

var argseq__8236__auto__ = ((((0) < args__8235__auto__.length))?(new cljs.core.IndexedSeq(args__8235__auto__.slice((0)),(0),null)):null);
return valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic(argseq__8236__auto__);
});

valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic = (function (error_maps){
return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.into,error_maps);
});

valip.core.merge_errors.cljs$lang$maxFixedArity = (0);

valip.core.merge_errors.cljs$lang$applyTo = (function (seq8282){
return valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8282));
});

/**
 * Validate a map of values using the supplied validations. Each validation
 *   is represented as a vector containing [key predicate? error] values. A map
 *   is returned for all the keys that failed their predicates, in the form:
 *   {key [errors]}. If no predicates return false, nil is returned.
 */
valip.core.validate = (function valip$core$validate(var_args){
var args__8235__auto__ = [];
var len__8228__auto___8288 = arguments.length;
var i__8229__auto___8289 = (0);
while(true){
if((i__8229__auto___8289 < len__8228__auto___8288)){
args__8235__auto__.push((arguments[i__8229__auto___8289]));

var G__8290 = (i__8229__auto___8289 + (1));
i__8229__auto___8289 = G__8290;
continue;
} else {
}
break;
}

var argseq__8236__auto__ = ((((1) < args__8235__auto__.length))?(new cljs.core.IndexedSeq(args__8235__auto__.slice((1)),(0),null)):null);
return valip.core.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8236__auto__);
});

valip.core.validate.cljs$core$IFn$_invoke$arity$variadic = (function (value_map,validations){
return cljs.core.apply.call(null,valip.core.merge_errors,cljs.core.map.call(null,(function (f){
return f.call(null,value_map);
}),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,valip.core.validation_on),validations)));
});

valip.core.validate.cljs$lang$maxFixedArity = (1);

valip.core.validate.cljs$lang$applyTo = (function (seq8286){
var G__8287 = cljs.core.first.call(null,seq8286);
var seq8286__$1 = cljs.core.next.call(null,seq8286);
return valip.core.validate.cljs$core$IFn$_invoke$arity$variadic(G__8287,seq8286__$1);
});


//# sourceMappingURL=core.js.map