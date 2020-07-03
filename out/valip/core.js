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
var args__10975__auto__ = [];
var len__10968__auto___11431 = arguments.length;
var i__10969__auto___11432 = (0);
while(true){
if((i__10969__auto___11432 < len__10968__auto___11431)){
args__10975__auto__.push((arguments[i__10969__auto___11432]));

var G__11433 = (i__10969__auto___11432 + (1));
i__10969__auto___11432 = G__11433;
continue;
} else {
}
break;
}

var argseq__10976__auto__ = ((((0) < args__10975__auto__.length))?(new cljs.core.IndexedSeq(args__10975__auto__.slice((0)),(0),null)):null);
return valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic(argseq__10976__auto__);
});

valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic = (function (error_maps){
return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.into,error_maps);
});

valip.core.merge_errors.cljs$lang$maxFixedArity = (0);

valip.core.merge_errors.cljs$lang$applyTo = (function (seq11430){
return valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11430));
});

/**
 * Validate a map of values using the supplied validations. Each validation
 *   is represented as a vector containing [key predicate? error] values. A map
 *   is returned for all the keys that failed their predicates, in the form:
 *   {key [errors]}. If no predicates return false, nil is returned.
 */
valip.core.validate = (function valip$core$validate(var_args){
var args__10975__auto__ = [];
var len__10968__auto___11436 = arguments.length;
var i__10969__auto___11437 = (0);
while(true){
if((i__10969__auto___11437 < len__10968__auto___11436)){
args__10975__auto__.push((arguments[i__10969__auto___11437]));

var G__11438 = (i__10969__auto___11437 + (1));
i__10969__auto___11437 = G__11438;
continue;
} else {
}
break;
}

var argseq__10976__auto__ = ((((1) < args__10975__auto__.length))?(new cljs.core.IndexedSeq(args__10975__auto__.slice((1)),(0),null)):null);
return valip.core.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10976__auto__);
});

valip.core.validate.cljs$core$IFn$_invoke$arity$variadic = (function (value_map,validations){
return cljs.core.apply.call(null,valip.core.merge_errors,cljs.core.map.call(null,(function (f){
return f.call(null,value_map);
}),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,valip.core.validation_on),validations)));
});

valip.core.validate.cljs$lang$maxFixedArity = (1);

valip.core.validate.cljs$lang$applyTo = (function (seq11434){
var G__11435 = cljs.core.first.call(null,seq11434);
var seq11434__$1 = cljs.core.next.call(null,seq11434);
return valip.core.validate.cljs$core$IFn$_invoke$arity$variadic(G__11435,seq11434__$1);
});


//# sourceMappingURL=core.js.map