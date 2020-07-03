// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13134 = arguments.length;
var i__10939__auto___13135 = (0);
while(true){
if((i__10939__auto___13135 < len__10938__auto___13134)){
args__10945__auto__.push((arguments[i__10939__auto___13135]));

var G__13136 = (i__10939__auto___13135 + (1));
i__10939__auto___13135 = G__13136;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq13133){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13133));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13138 = arguments.length;
var i__10939__auto___13139 = (0);
while(true){
if((i__10939__auto___13139 < len__10938__auto___13138)){
args__10945__auto__.push((arguments[i__10939__auto___13139]));

var G__13140 = (i__10939__auto___13139 + (1));
i__10939__auto___13139 = G__13140;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq13137){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13137));
});

var g_QMARK__13141 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_13142 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13141){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13141))
,null));
var mkg_13143 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13141,g_13142){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13141,g_13142))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__13141,g_13142,mkg_13143){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13141).call(null,x);
});})(g_QMARK__13141,g_13142,mkg_13143))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__13141,g_13142,mkg_13143){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_13143).call(null,gfn);
});})(g_QMARK__13141,g_13142,mkg_13143))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__13141,g_13142,mkg_13143){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_13142).call(null,generator);
});})(g_QMARK__13141,g_13142,mkg_13143))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__11030__auto___13163 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__11030__auto___13163){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13164 = arguments.length;
var i__10939__auto___13165 = (0);
while(true){
if((i__10939__auto___13165 < len__10938__auto___13164)){
args__10945__auto__.push((arguments[i__10939__auto___13165]));

var G__13166 = (i__10939__auto___13165 + (1));
i__10939__auto___13165 = G__13166;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13163))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13163){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13163),args);
});})(g__11030__auto___13163))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__11030__auto___13163){
return (function (seq13144){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13144));
});})(g__11030__auto___13163))
;


var g__11030__auto___13167 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__11030__auto___13167){
return (function cljs$spec$impl$gen$list(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13168 = arguments.length;
var i__10939__auto___13169 = (0);
while(true){
if((i__10939__auto___13169 < len__10938__auto___13168)){
args__10945__auto__.push((arguments[i__10939__auto___13169]));

var G__13170 = (i__10939__auto___13169 + (1));
i__10939__auto___13169 = G__13170;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13167))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13167){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13167),args);
});})(g__11030__auto___13167))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__11030__auto___13167){
return (function (seq13145){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13145));
});})(g__11030__auto___13167))
;


var g__11030__auto___13171 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__11030__auto___13171){
return (function cljs$spec$impl$gen$map(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13172 = arguments.length;
var i__10939__auto___13173 = (0);
while(true){
if((i__10939__auto___13173 < len__10938__auto___13172)){
args__10945__auto__.push((arguments[i__10939__auto___13173]));

var G__13174 = (i__10939__auto___13173 + (1));
i__10939__auto___13173 = G__13174;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13171))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13171){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13171),args);
});})(g__11030__auto___13171))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__11030__auto___13171){
return (function (seq13146){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13146));
});})(g__11030__auto___13171))
;


var g__11030__auto___13175 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__11030__auto___13175){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13176 = arguments.length;
var i__10939__auto___13177 = (0);
while(true){
if((i__10939__auto___13177 < len__10938__auto___13176)){
args__10945__auto__.push((arguments[i__10939__auto___13177]));

var G__13178 = (i__10939__auto___13177 + (1));
i__10939__auto___13177 = G__13178;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13175))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13175){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13175),args);
});})(g__11030__auto___13175))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__11030__auto___13175){
return (function (seq13147){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13147));
});})(g__11030__auto___13175))
;


var g__11030__auto___13179 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__11030__auto___13179){
return (function cljs$spec$impl$gen$set(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13180 = arguments.length;
var i__10939__auto___13181 = (0);
while(true){
if((i__10939__auto___13181 < len__10938__auto___13180)){
args__10945__auto__.push((arguments[i__10939__auto___13181]));

var G__13182 = (i__10939__auto___13181 + (1));
i__10939__auto___13181 = G__13182;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13179))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13179){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13179),args);
});})(g__11030__auto___13179))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__11030__auto___13179){
return (function (seq13148){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13148));
});})(g__11030__auto___13179))
;


var g__11030__auto___13183 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__11030__auto___13183){
return (function cljs$spec$impl$gen$vector(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13184 = arguments.length;
var i__10939__auto___13185 = (0);
while(true){
if((i__10939__auto___13185 < len__10938__auto___13184)){
args__10945__auto__.push((arguments[i__10939__auto___13185]));

var G__13186 = (i__10939__auto___13185 + (1));
i__10939__auto___13185 = G__13186;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13183))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13183){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13183),args);
});})(g__11030__auto___13183))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__11030__auto___13183){
return (function (seq13149){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13149));
});})(g__11030__auto___13183))
;


var g__11030__auto___13187 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__11030__auto___13187){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13188 = arguments.length;
var i__10939__auto___13189 = (0);
while(true){
if((i__10939__auto___13189 < len__10938__auto___13188)){
args__10945__auto__.push((arguments[i__10939__auto___13189]));

var G__13190 = (i__10939__auto___13189 + (1));
i__10939__auto___13189 = G__13190;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13187))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13187){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13187),args);
});})(g__11030__auto___13187))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__11030__auto___13187){
return (function (seq13150){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13150));
});})(g__11030__auto___13187))
;


var g__11030__auto___13191 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__11030__auto___13191){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13192 = arguments.length;
var i__10939__auto___13193 = (0);
while(true){
if((i__10939__auto___13193 < len__10938__auto___13192)){
args__10945__auto__.push((arguments[i__10939__auto___13193]));

var G__13194 = (i__10939__auto___13193 + (1));
i__10939__auto___13193 = G__13194;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13191))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13191){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13191),args);
});})(g__11030__auto___13191))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__11030__auto___13191){
return (function (seq13151){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13151));
});})(g__11030__auto___13191))
;


var g__11030__auto___13195 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__11030__auto___13195){
return (function cljs$spec$impl$gen$elements(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13196 = arguments.length;
var i__10939__auto___13197 = (0);
while(true){
if((i__10939__auto___13197 < len__10938__auto___13196)){
args__10945__auto__.push((arguments[i__10939__auto___13197]));

var G__13198 = (i__10939__auto___13197 + (1));
i__10939__auto___13197 = G__13198;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13195))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13195){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13195),args);
});})(g__11030__auto___13195))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__11030__auto___13195){
return (function (seq13152){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13152));
});})(g__11030__auto___13195))
;


var g__11030__auto___13199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__11030__auto___13199){
return (function cljs$spec$impl$gen$bind(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13200 = arguments.length;
var i__10939__auto___13201 = (0);
while(true){
if((i__10939__auto___13201 < len__10938__auto___13200)){
args__10945__auto__.push((arguments[i__10939__auto___13201]));

var G__13202 = (i__10939__auto___13201 + (1));
i__10939__auto___13201 = G__13202;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13199))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13199),args);
});})(g__11030__auto___13199))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__11030__auto___13199){
return (function (seq13153){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13153));
});})(g__11030__auto___13199))
;


var g__11030__auto___13203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__11030__auto___13203){
return (function cljs$spec$impl$gen$choose(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13204 = arguments.length;
var i__10939__auto___13205 = (0);
while(true){
if((i__10939__auto___13205 < len__10938__auto___13204)){
args__10945__auto__.push((arguments[i__10939__auto___13205]));

var G__13206 = (i__10939__auto___13205 + (1));
i__10939__auto___13205 = G__13206;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13203))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13203),args);
});})(g__11030__auto___13203))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__11030__auto___13203){
return (function (seq13154){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13154));
});})(g__11030__auto___13203))
;


var g__11030__auto___13207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__11030__auto___13207){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13208 = arguments.length;
var i__10939__auto___13209 = (0);
while(true){
if((i__10939__auto___13209 < len__10938__auto___13208)){
args__10945__auto__.push((arguments[i__10939__auto___13209]));

var G__13210 = (i__10939__auto___13209 + (1));
i__10939__auto___13209 = G__13210;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13207))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13207),args);
});})(g__11030__auto___13207))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__11030__auto___13207){
return (function (seq13155){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13155));
});})(g__11030__auto___13207))
;


var g__11030__auto___13211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__11030__auto___13211){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13212 = arguments.length;
var i__10939__auto___13213 = (0);
while(true){
if((i__10939__auto___13213 < len__10938__auto___13212)){
args__10945__auto__.push((arguments[i__10939__auto___13213]));

var G__13214 = (i__10939__auto___13213 + (1));
i__10939__auto___13213 = G__13214;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13211))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13211),args);
});})(g__11030__auto___13211))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__11030__auto___13211){
return (function (seq13156){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13156));
});})(g__11030__auto___13211))
;


var g__11030__auto___13215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__11030__auto___13215){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13216 = arguments.length;
var i__10939__auto___13217 = (0);
while(true){
if((i__10939__auto___13217 < len__10938__auto___13216)){
args__10945__auto__.push((arguments[i__10939__auto___13217]));

var G__13218 = (i__10939__auto___13217 + (1));
i__10939__auto___13217 = G__13218;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13215))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13215){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13215),args);
});})(g__11030__auto___13215))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__11030__auto___13215){
return (function (seq13157){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13157));
});})(g__11030__auto___13215))
;


var g__11030__auto___13219 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__11030__auto___13219){
return (function cljs$spec$impl$gen$sample(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13220 = arguments.length;
var i__10939__auto___13221 = (0);
while(true){
if((i__10939__auto___13221 < len__10938__auto___13220)){
args__10945__auto__.push((arguments[i__10939__auto___13221]));

var G__13222 = (i__10939__auto___13221 + (1));
i__10939__auto___13221 = G__13222;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13219))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13219){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13219),args);
});})(g__11030__auto___13219))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__11030__auto___13219){
return (function (seq13158){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13158));
});})(g__11030__auto___13219))
;


var g__11030__auto___13223 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__11030__auto___13223){
return (function cljs$spec$impl$gen$return(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13224 = arguments.length;
var i__10939__auto___13225 = (0);
while(true){
if((i__10939__auto___13225 < len__10938__auto___13224)){
args__10945__auto__.push((arguments[i__10939__auto___13225]));

var G__13226 = (i__10939__auto___13225 + (1));
i__10939__auto___13225 = G__13226;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13223))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13223){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13223),args);
});})(g__11030__auto___13223))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__11030__auto___13223){
return (function (seq13159){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13159));
});})(g__11030__auto___13223))
;


var g__11030__auto___13227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__11030__auto___13227){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13228 = arguments.length;
var i__10939__auto___13229 = (0);
while(true){
if((i__10939__auto___13229 < len__10938__auto___13228)){
args__10945__auto__.push((arguments[i__10939__auto___13229]));

var G__13230 = (i__10939__auto___13229 + (1));
i__10939__auto___13229 = G__13230;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13227))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13227),args);
});})(g__11030__auto___13227))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11030__auto___13227){
return (function (seq13160){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13160));
});})(g__11030__auto___13227))
;


var g__11030__auto___13231 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__11030__auto___13231){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13232 = arguments.length;
var i__10939__auto___13233 = (0);
while(true){
if((i__10939__auto___13233 < len__10938__auto___13232)){
args__10945__auto__.push((arguments[i__10939__auto___13233]));

var G__13234 = (i__10939__auto___13233 + (1));
i__10939__auto___13233 = G__13234;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13231))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13231){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13231),args);
});})(g__11030__auto___13231))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__11030__auto___13231){
return (function (seq13161){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13161));
});})(g__11030__auto___13231))
;


var g__11030__auto___13235 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__11030__auto___13235){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13236 = arguments.length;
var i__10939__auto___13237 = (0);
while(true){
if((i__10939__auto___13237 < len__10938__auto___13236)){
args__10945__auto__.push((arguments[i__10939__auto___13237]));

var G__13238 = (i__10939__auto___13237 + (1));
i__10939__auto___13237 = G__13238;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11030__auto___13235))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11030__auto___13235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11030__auto___13235),args);
});})(g__11030__auto___13235))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__11030__auto___13235){
return (function (seq13162){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13162));
});})(g__11030__auto___13235))
;

var g__11043__auto___13260 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__11043__auto___13260){
return (function cljs$spec$impl$gen$any(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13261 = arguments.length;
var i__10939__auto___13262 = (0);
while(true){
if((i__10939__auto___13262 < len__10938__auto___13261)){
args__10945__auto__.push((arguments[i__10939__auto___13262]));

var G__13263 = (i__10939__auto___13262 + (1));
i__10939__auto___13262 = G__13263;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13260))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13260){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13260);
});})(g__11043__auto___13260))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__11043__auto___13260){
return (function (seq13239){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13239));
});})(g__11043__auto___13260))
;


var g__11043__auto___13264 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__11043__auto___13264){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13265 = arguments.length;
var i__10939__auto___13266 = (0);
while(true){
if((i__10939__auto___13266 < len__10938__auto___13265)){
args__10945__auto__.push((arguments[i__10939__auto___13266]));

var G__13267 = (i__10939__auto___13266 + (1));
i__10939__auto___13266 = G__13267;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13264))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13264){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13264);
});})(g__11043__auto___13264))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__11043__auto___13264){
return (function (seq13240){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13240));
});})(g__11043__auto___13264))
;


var g__11043__auto___13268 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__11043__auto___13268){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13269 = arguments.length;
var i__10939__auto___13270 = (0);
while(true){
if((i__10939__auto___13270 < len__10938__auto___13269)){
args__10945__auto__.push((arguments[i__10939__auto___13270]));

var G__13271 = (i__10939__auto___13270 + (1));
i__10939__auto___13270 = G__13271;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13268))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13268){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13268);
});})(g__11043__auto___13268))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__11043__auto___13268){
return (function (seq13241){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13241));
});})(g__11043__auto___13268))
;


var g__11043__auto___13272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__11043__auto___13272){
return (function cljs$spec$impl$gen$char(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13273 = arguments.length;
var i__10939__auto___13274 = (0);
while(true){
if((i__10939__auto___13274 < len__10938__auto___13273)){
args__10945__auto__.push((arguments[i__10939__auto___13274]));

var G__13275 = (i__10939__auto___13274 + (1));
i__10939__auto___13274 = G__13275;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13272))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13272){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13272);
});})(g__11043__auto___13272))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__11043__auto___13272){
return (function (seq13242){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13242));
});})(g__11043__auto___13272))
;


var g__11043__auto___13276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__11043__auto___13276){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13277 = arguments.length;
var i__10939__auto___13278 = (0);
while(true){
if((i__10939__auto___13278 < len__10938__auto___13277)){
args__10945__auto__.push((arguments[i__10939__auto___13278]));

var G__13279 = (i__10939__auto___13278 + (1));
i__10939__auto___13278 = G__13279;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13276))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13276){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13276);
});})(g__11043__auto___13276))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__11043__auto___13276){
return (function (seq13243){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13243));
});})(g__11043__auto___13276))
;


var g__11043__auto___13280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__11043__auto___13280){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13281 = arguments.length;
var i__10939__auto___13282 = (0);
while(true){
if((i__10939__auto___13282 < len__10938__auto___13281)){
args__10945__auto__.push((arguments[i__10939__auto___13282]));

var G__13283 = (i__10939__auto___13282 + (1));
i__10939__auto___13282 = G__13283;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13280))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13280){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13280);
});})(g__11043__auto___13280))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__11043__auto___13280){
return (function (seq13244){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13244));
});})(g__11043__auto___13280))
;


var g__11043__auto___13284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__11043__auto___13284){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13285 = arguments.length;
var i__10939__auto___13286 = (0);
while(true){
if((i__10939__auto___13286 < len__10938__auto___13285)){
args__10945__auto__.push((arguments[i__10939__auto___13286]));

var G__13287 = (i__10939__auto___13286 + (1));
i__10939__auto___13286 = G__13287;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13284))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13284){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13284);
});})(g__11043__auto___13284))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__11043__auto___13284){
return (function (seq13245){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13245));
});})(g__11043__auto___13284))
;


var g__11043__auto___13288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__11043__auto___13288){
return (function cljs$spec$impl$gen$double(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13289 = arguments.length;
var i__10939__auto___13290 = (0);
while(true){
if((i__10939__auto___13290 < len__10938__auto___13289)){
args__10945__auto__.push((arguments[i__10939__auto___13290]));

var G__13291 = (i__10939__auto___13290 + (1));
i__10939__auto___13290 = G__13291;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13288))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13288){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13288);
});})(g__11043__auto___13288))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__11043__auto___13288){
return (function (seq13246){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13246));
});})(g__11043__auto___13288))
;


var g__11043__auto___13292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__11043__auto___13292){
return (function cljs$spec$impl$gen$int(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13293 = arguments.length;
var i__10939__auto___13294 = (0);
while(true){
if((i__10939__auto___13294 < len__10938__auto___13293)){
args__10945__auto__.push((arguments[i__10939__auto___13294]));

var G__13295 = (i__10939__auto___13294 + (1));
i__10939__auto___13294 = G__13295;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13292))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13292){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13292);
});})(g__11043__auto___13292))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__11043__auto___13292){
return (function (seq13247){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13247));
});})(g__11043__auto___13292))
;


var g__11043__auto___13296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__11043__auto___13296){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13297 = arguments.length;
var i__10939__auto___13298 = (0);
while(true){
if((i__10939__auto___13298 < len__10938__auto___13297)){
args__10945__auto__.push((arguments[i__10939__auto___13298]));

var G__13299 = (i__10939__auto___13298 + (1));
i__10939__auto___13298 = G__13299;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13296))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13296){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13296);
});})(g__11043__auto___13296))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__11043__auto___13296){
return (function (seq13248){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13248));
});})(g__11043__auto___13296))
;


var g__11043__auto___13300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__11043__auto___13300){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13301 = arguments.length;
var i__10939__auto___13302 = (0);
while(true){
if((i__10939__auto___13302 < len__10938__auto___13301)){
args__10945__auto__.push((arguments[i__10939__auto___13302]));

var G__13303 = (i__10939__auto___13302 + (1));
i__10939__auto___13302 = G__13303;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13300))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13300){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13300);
});})(g__11043__auto___13300))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__11043__auto___13300){
return (function (seq13249){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13249));
});})(g__11043__auto___13300))
;


var g__11043__auto___13304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__11043__auto___13304){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13305 = arguments.length;
var i__10939__auto___13306 = (0);
while(true){
if((i__10939__auto___13306 < len__10938__auto___13305)){
args__10945__auto__.push((arguments[i__10939__auto___13306]));

var G__13307 = (i__10939__auto___13306 + (1));
i__10939__auto___13306 = G__13307;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13304))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13304){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13304);
});})(g__11043__auto___13304))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__11043__auto___13304){
return (function (seq13250){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13250));
});})(g__11043__auto___13304))
;


var g__11043__auto___13308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__11043__auto___13308){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13309 = arguments.length;
var i__10939__auto___13310 = (0);
while(true){
if((i__10939__auto___13310 < len__10938__auto___13309)){
args__10945__auto__.push((arguments[i__10939__auto___13310]));

var G__13311 = (i__10939__auto___13310 + (1));
i__10939__auto___13310 = G__13311;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13308))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13308){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13308);
});})(g__11043__auto___13308))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__11043__auto___13308){
return (function (seq13251){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13251));
});})(g__11043__auto___13308))
;


var g__11043__auto___13312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__11043__auto___13312){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13313 = arguments.length;
var i__10939__auto___13314 = (0);
while(true){
if((i__10939__auto___13314 < len__10938__auto___13313)){
args__10945__auto__.push((arguments[i__10939__auto___13314]));

var G__13315 = (i__10939__auto___13314 + (1));
i__10939__auto___13314 = G__13315;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13312))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13312){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13312);
});})(g__11043__auto___13312))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__11043__auto___13312){
return (function (seq13252){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13252));
});})(g__11043__auto___13312))
;


var g__11043__auto___13316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__11043__auto___13316){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13317 = arguments.length;
var i__10939__auto___13318 = (0);
while(true){
if((i__10939__auto___13318 < len__10938__auto___13317)){
args__10945__auto__.push((arguments[i__10939__auto___13318]));

var G__13319 = (i__10939__auto___13318 + (1));
i__10939__auto___13318 = G__13319;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13316))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13316){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13316);
});})(g__11043__auto___13316))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__11043__auto___13316){
return (function (seq13253){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13253));
});})(g__11043__auto___13316))
;


var g__11043__auto___13320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__11043__auto___13320){
return (function cljs$spec$impl$gen$string(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13321 = arguments.length;
var i__10939__auto___13322 = (0);
while(true){
if((i__10939__auto___13322 < len__10938__auto___13321)){
args__10945__auto__.push((arguments[i__10939__auto___13322]));

var G__13323 = (i__10939__auto___13322 + (1));
i__10939__auto___13322 = G__13323;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13320))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13320){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13320);
});})(g__11043__auto___13320))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__11043__auto___13320){
return (function (seq13254){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13254));
});})(g__11043__auto___13320))
;


var g__11043__auto___13324 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__11043__auto___13324){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13325 = arguments.length;
var i__10939__auto___13326 = (0);
while(true){
if((i__10939__auto___13326 < len__10938__auto___13325)){
args__10945__auto__.push((arguments[i__10939__auto___13326]));

var G__13327 = (i__10939__auto___13326 + (1));
i__10939__auto___13326 = G__13327;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13324))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13324){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13324);
});})(g__11043__auto___13324))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__11043__auto___13324){
return (function (seq13255){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13255));
});})(g__11043__auto___13324))
;


var g__11043__auto___13328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__11043__auto___13328){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13329 = arguments.length;
var i__10939__auto___13330 = (0);
while(true){
if((i__10939__auto___13330 < len__10938__auto___13329)){
args__10945__auto__.push((arguments[i__10939__auto___13330]));

var G__13331 = (i__10939__auto___13330 + (1));
i__10939__auto___13330 = G__13331;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13328))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13328){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13328);
});})(g__11043__auto___13328))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__11043__auto___13328){
return (function (seq13256){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13256));
});})(g__11043__auto___13328))
;


var g__11043__auto___13332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__11043__auto___13332){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13333 = arguments.length;
var i__10939__auto___13334 = (0);
while(true){
if((i__10939__auto___13334 < len__10938__auto___13333)){
args__10945__auto__.push((arguments[i__10939__auto___13334]));

var G__13335 = (i__10939__auto___13334 + (1));
i__10939__auto___13334 = G__13335;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13332))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13332){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13332);
});})(g__11043__auto___13332))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__11043__auto___13332){
return (function (seq13257){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13257));
});})(g__11043__auto___13332))
;


var g__11043__auto___13336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__11043__auto___13336){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13337 = arguments.length;
var i__10939__auto___13338 = (0);
while(true){
if((i__10939__auto___13338 < len__10938__auto___13337)){
args__10945__auto__.push((arguments[i__10939__auto___13338]));

var G__13339 = (i__10939__auto___13338 + (1));
i__10939__auto___13338 = G__13339;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13336))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13336){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13336);
});})(g__11043__auto___13336))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__11043__auto___13336){
return (function (seq13258){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13258));
});})(g__11043__auto___13336))
;


var g__11043__auto___13340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__11043__auto___13340){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13341 = arguments.length;
var i__10939__auto___13342 = (0);
while(true){
if((i__10939__auto___13342 < len__10938__auto___13341)){
args__10945__auto__.push((arguments[i__10939__auto___13342]));

var G__13343 = (i__10939__auto___13342 + (1));
i__10939__auto___13342 = G__13343;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});})(g__11043__auto___13340))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11043__auto___13340){
return (function (args){
return cljs.core.deref.call(null,g__11043__auto___13340);
});})(g__11043__auto___13340))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__11043__auto___13340){
return (function (seq13259){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13259));
});})(g__11043__auto___13340))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__10945__auto__ = [];
var len__10938__auto___13346 = arguments.length;
var i__10939__auto___13347 = (0);
while(true){
if((i__10939__auto___13347 < len__10938__auto___13346)){
args__10945__auto__.push((arguments[i__10939__auto___13347]));

var G__13348 = (i__10939__auto___13347 + (1));
i__10939__auto___13347 = G__13348;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13344_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13344_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13345){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13345));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13349_SHARP_){
return (new Date(p1__13349_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map