// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__10493__auto__ = (((spec == null))?null:spec);
var m__10494__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__10493__auto__)]);
if(!((m__10494__auto__ == null))){
return m__10494__auto__.call(null,spec,x);
} else {
var m__10494__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__10494__auto____$1 == null))){
return m__10494__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__10493__auto__ = (((spec == null))?null:spec);
var m__10494__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__10493__auto__)]);
if(!((m__10494__auto__ == null))){
return m__10494__auto__.call(null,spec,y);
} else {
var m__10494__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__10494__auto____$1 == null))){
return m__10494__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__10493__auto__ = (((spec == null))?null:spec);
var m__10494__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__10493__auto__)]);
if(!((m__10494__auto__ == null))){
return m__10494__auto__.call(null,spec,path,via,in$,x);
} else {
var m__10494__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__10494__auto____$1 == null))){
return m__10494__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__10493__auto__ = (((spec == null))?null:spec);
var m__10494__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__10493__auto__)]);
if(!((m__10494__auto__ == null))){
return m__10494__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__10494__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__10494__auto____$1 == null))){
return m__10494__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__10493__auto__ = (((spec == null))?null:spec);
var m__10494__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__10493__auto__)]);
if(!((m__10494__auto__ == null))){
return m__10494__auto__.call(null,spec,gfn);
} else {
var m__10494__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__10494__auto____$1 == null))){
return m__10494__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__10493__auto__ = (((spec == null))?null:spec);
var m__10494__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__10493__auto__)]);
if(!((m__10494__auto__ == null))){
return m__10494__auto__.call(null,spec);
} else {
var m__10494__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__10494__auto____$1 == null))){
return m__10494__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.deep_resolve = (function cljs$spec$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
var G__12198 = cljs.core.get.call(null,reg,spec);
spec = G__12198;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if(!(cljs.core.ident_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.spec.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__9825__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__9813__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__9813__auto__)){
return x;
} else {
return and__9813__auto__;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
} else {
return null;
}
}
}
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__9825__auto__ = (function (){var and__9813__auto__ = cljs.core.ident_QMARK_.call(null,spec_or_k);
if(and__9813__auto__){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__9813__auto__;
}
})();
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
var or__9825__auto____$1 = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__9825__auto____$1)){
return or__9825__auto____$1;
} else {
var or__9825__auto____$2 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__9825__auto____$2)){
return or__9825__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__9825__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.Specize = function(){};

cljs.spec.specize_STAR_ = (function cljs$spec$specize_STAR_(var_args){
var args12205 = [];
var len__10938__auto___12208 = arguments.length;
var i__10939__auto___12209 = (0);
while(true){
if((i__10939__auto___12209 < len__10938__auto___12208)){
args12205.push((arguments[i__10939__auto___12209]));

var G__12210 = (i__10939__auto___12209 + (1));
i__10939__auto___12209 = G__12210;
continue;
} else {
}
break;
}

var G__12207 = args12205.length;
switch (G__12207) {
case 1:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12205.length)].join('')));

}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$1(_);
} else {
var x__10493__auto__ = (((_ == null))?null:_);
var m__10494__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__10493__auto__)]);
if(!((m__10494__auto__ == null))){
return m__10494__auto__.call(null,_);
} else {
var m__10494__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__10494__auto____$1 == null))){
return m__10494__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__10493__auto__ = (((_ == null))?null:_);
var m__10494__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__10493__auto__)]);
if(!((m__10494__auto__ == null))){
return m__10494__auto__.call(null,_,form);
} else {
var m__10494__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__10494__auto____$1 == null))){
return m__10494__auto____$1.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,s__$1));
});

(cljs.spec.Specize["_"] = true);

(cljs.spec.specize_STAR_["_"] = (function() {
var G__12212 = null;
var G__12212__1 = (function (o){
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),o,null,null);
});
var G__12212__2 = (function (o,form){
return cljs.spec.spec_impl.call(null,form,o,null,null);
});
G__12212 = function(o,form){
switch(arguments.length){
case 1:
return G__12212__1.call(this,o);
case 2:
return G__12212__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12212.cljs$core$IFn$_invoke$arity$1 = G__12212__1;
G__12212.cljs$core$IFn$_invoke$arity$2 = G__12212__2;
return G__12212;
})()
);
cljs.spec.specize = (function cljs$spec$specize(var_args){
var args12213 = [];
var len__10938__auto___12216 = arguments.length;
var i__10939__auto___12217 = (0);
while(true){
if((i__10939__auto___12217 < len__10938__auto___12216)){
args12213.push((arguments[i__10939__auto___12217]));

var G__12218 = (i__10939__auto___12217 + (1));
i__10939__auto___12217 = G__12218;
continue;
} else {
}
break;
}

var G__12215 = args12213.length;
switch (G__12215) {
case 1:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12213.length)].join('')));

}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__9825__auto__ = cljs.spec.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return cljs.spec.specize_STAR_.call(null,s);
}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__9825__auto__ = cljs.spec.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return cljs.spec.specize_STAR_.call(null,s,form);
}
});

cljs.spec.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.invalid_QMARK_ = (function cljs$spec$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret);
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__9813__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__9813__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__9813__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__9813__auto__ = (form instanceof cljs.core.Symbol);
if(and__9813__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__9813__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.explain_printer = (function cljs$spec$explain_printer(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__10819__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12260_12300 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12261_12301 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12260_12300,_STAR_print_fn_STAR_12261_12301,sb__10819__auto__){
return (function (x__10820__auto__){
return sb__10819__auto__.append(x__10820__auto__);
});})(_STAR_print_newline_STAR_12260_12300,_STAR_print_fn_STAR_12261_12301,sb__10819__auto__))
;

try{var seq__12262_12302 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__12263_12303 = null;
var count__12264_12304 = (0);
var i__12265_12305 = (0);
while(true){
if((i__12265_12305 < count__12264_12304)){
var map__12266_12306 = cljs.core._nth.call(null,chunk__12263_12303,i__12265_12305);
var map__12266_12307__$1 = ((((!((map__12266_12306 == null)))?((((map__12266_12306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12266_12306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12266_12306):map__12266_12306);
var prob_12308 = map__12266_12307__$1;
var path_12309 = cljs.core.get.call(null,map__12266_12307__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_12310 = cljs.core.get.call(null,map__12266_12307__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_12311 = cljs.core.get.call(null,map__12266_12307__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_12312 = cljs.core.get.call(null,map__12266_12307__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_12313 = cljs.core.get.call(null,map__12266_12307__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_12314 = cljs.core.get.call(null,map__12266_12307__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_12314)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_12314),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_12311);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_12313)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_12313)));
}

if(cljs.core.empty_QMARK_.call(null,path_12309)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_12309));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_12310));

if(cljs.core.truth_(reason_12312)){
cljs.core.print.call(null,", ",reason_12312);
} else {
}

var seq__12268_12315 = cljs.core.seq.call(null,prob_12308);
var chunk__12269_12316 = null;
var count__12270_12317 = (0);
var i__12271_12318 = (0);
while(true){
if((i__12271_12318 < count__12270_12317)){
var vec__12272_12319 = cljs.core._nth.call(null,chunk__12269_12316,i__12271_12318);
var k_12320 = cljs.core.nth.call(null,vec__12272_12319,(0),null);
var v_12321 = cljs.core.nth.call(null,vec__12272_12319,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12320))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12320)," ");

cljs.core.pr.call(null,v_12321);
}

var G__12322 = seq__12268_12315;
var G__12323 = chunk__12269_12316;
var G__12324 = count__12270_12317;
var G__12325 = (i__12271_12318 + (1));
seq__12268_12315 = G__12322;
chunk__12269_12316 = G__12323;
count__12270_12317 = G__12324;
i__12271_12318 = G__12325;
continue;
} else {
var temp__4657__auto___12326 = cljs.core.seq.call(null,seq__12268_12315);
if(temp__4657__auto___12326){
var seq__12268_12327__$1 = temp__4657__auto___12326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12268_12327__$1)){
var c__10644__auto___12328 = cljs.core.chunk_first.call(null,seq__12268_12327__$1);
var G__12329 = cljs.core.chunk_rest.call(null,seq__12268_12327__$1);
var G__12330 = c__10644__auto___12328;
var G__12331 = cljs.core.count.call(null,c__10644__auto___12328);
var G__12332 = (0);
seq__12268_12315 = G__12329;
chunk__12269_12316 = G__12330;
count__12270_12317 = G__12331;
i__12271_12318 = G__12332;
continue;
} else {
var vec__12275_12333 = cljs.core.first.call(null,seq__12268_12327__$1);
var k_12334 = cljs.core.nth.call(null,vec__12275_12333,(0),null);
var v_12335 = cljs.core.nth.call(null,vec__12275_12333,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12334))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12334)," ");

cljs.core.pr.call(null,v_12335);
}

var G__12336 = cljs.core.next.call(null,seq__12268_12327__$1);
var G__12337 = null;
var G__12338 = (0);
var G__12339 = (0);
seq__12268_12315 = G__12336;
chunk__12269_12316 = G__12337;
count__12270_12317 = G__12338;
i__12271_12318 = G__12339;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__12340 = seq__12262_12302;
var G__12341 = chunk__12263_12303;
var G__12342 = count__12264_12304;
var G__12343 = (i__12265_12305 + (1));
seq__12262_12302 = G__12340;
chunk__12263_12303 = G__12341;
count__12264_12304 = G__12342;
i__12265_12305 = G__12343;
continue;
} else {
var temp__4657__auto___12344 = cljs.core.seq.call(null,seq__12262_12302);
if(temp__4657__auto___12344){
var seq__12262_12345__$1 = temp__4657__auto___12344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12262_12345__$1)){
var c__10644__auto___12346 = cljs.core.chunk_first.call(null,seq__12262_12345__$1);
var G__12347 = cljs.core.chunk_rest.call(null,seq__12262_12345__$1);
var G__12348 = c__10644__auto___12346;
var G__12349 = cljs.core.count.call(null,c__10644__auto___12346);
var G__12350 = (0);
seq__12262_12302 = G__12347;
chunk__12263_12303 = G__12348;
count__12264_12304 = G__12349;
i__12265_12305 = G__12350;
continue;
} else {
var map__12278_12351 = cljs.core.first.call(null,seq__12262_12345__$1);
var map__12278_12352__$1 = ((((!((map__12278_12351 == null)))?((((map__12278_12351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12278_12351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12278_12351):map__12278_12351);
var prob_12353 = map__12278_12352__$1;
var path_12354 = cljs.core.get.call(null,map__12278_12352__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_12355 = cljs.core.get.call(null,map__12278_12352__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_12356 = cljs.core.get.call(null,map__12278_12352__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_12357 = cljs.core.get.call(null,map__12278_12352__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_12358 = cljs.core.get.call(null,map__12278_12352__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_12359 = cljs.core.get.call(null,map__12278_12352__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_12359)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_12359),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_12356);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_12358)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_12358)));
}

if(cljs.core.empty_QMARK_.call(null,path_12354)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_12354));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_12355));

if(cljs.core.truth_(reason_12357)){
cljs.core.print.call(null,", ",reason_12357);
} else {
}

var seq__12280_12360 = cljs.core.seq.call(null,prob_12353);
var chunk__12281_12361 = null;
var count__12282_12362 = (0);
var i__12283_12363 = (0);
while(true){
if((i__12283_12363 < count__12282_12362)){
var vec__12284_12364 = cljs.core._nth.call(null,chunk__12281_12361,i__12283_12363);
var k_12365 = cljs.core.nth.call(null,vec__12284_12364,(0),null);
var v_12366 = cljs.core.nth.call(null,vec__12284_12364,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12365))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12365)," ");

cljs.core.pr.call(null,v_12366);
}

var G__12367 = seq__12280_12360;
var G__12368 = chunk__12281_12361;
var G__12369 = count__12282_12362;
var G__12370 = (i__12283_12363 + (1));
seq__12280_12360 = G__12367;
chunk__12281_12361 = G__12368;
count__12282_12362 = G__12369;
i__12283_12363 = G__12370;
continue;
} else {
var temp__4657__auto___12371__$1 = cljs.core.seq.call(null,seq__12280_12360);
if(temp__4657__auto___12371__$1){
var seq__12280_12372__$1 = temp__4657__auto___12371__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12280_12372__$1)){
var c__10644__auto___12373 = cljs.core.chunk_first.call(null,seq__12280_12372__$1);
var G__12374 = cljs.core.chunk_rest.call(null,seq__12280_12372__$1);
var G__12375 = c__10644__auto___12373;
var G__12376 = cljs.core.count.call(null,c__10644__auto___12373);
var G__12377 = (0);
seq__12280_12360 = G__12374;
chunk__12281_12361 = G__12375;
count__12282_12362 = G__12376;
i__12283_12363 = G__12377;
continue;
} else {
var vec__12287_12378 = cljs.core.first.call(null,seq__12280_12372__$1);
var k_12379 = cljs.core.nth.call(null,vec__12287_12378,(0),null);
var v_12380 = cljs.core.nth.call(null,vec__12287_12378,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12379))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12379)," ");

cljs.core.pr.call(null,v_12380);
}

var G__12381 = cljs.core.next.call(null,seq__12280_12372__$1);
var G__12382 = null;
var G__12383 = (0);
var G__12384 = (0);
seq__12280_12360 = G__12381;
chunk__12281_12361 = G__12382;
count__12282_12362 = G__12383;
i__12283_12363 = G__12384;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__12385 = cljs.core.next.call(null,seq__12262_12345__$1);
var G__12386 = null;
var G__12387 = (0);
var G__12388 = (0);
seq__12262_12302 = G__12385;
chunk__12263_12303 = G__12386;
count__12264_12304 = G__12387;
i__12265_12305 = G__12388;
continue;
}
} else {
}
}
break;
}

var seq__12290_12389 = cljs.core.seq.call(null,ed);
var chunk__12291_12390 = null;
var count__12292_12391 = (0);
var i__12293_12392 = (0);
while(true){
if((i__12293_12392 < count__12292_12391)){
var vec__12294_12393 = cljs.core._nth.call(null,chunk__12291_12390,i__12293_12392);
var k_12394 = cljs.core.nth.call(null,vec__12294_12393,(0),null);
var v_12395 = cljs.core.nth.call(null,vec__12294_12393,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_12394))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_12394)," ");

cljs.core.pr.call(null,v_12395);

cljs.core.newline.call(null);
}

var G__12396 = seq__12290_12389;
var G__12397 = chunk__12291_12390;
var G__12398 = count__12292_12391;
var G__12399 = (i__12293_12392 + (1));
seq__12290_12389 = G__12396;
chunk__12291_12390 = G__12397;
count__12292_12391 = G__12398;
i__12293_12392 = G__12399;
continue;
} else {
var temp__4657__auto___12400 = cljs.core.seq.call(null,seq__12290_12389);
if(temp__4657__auto___12400){
var seq__12290_12401__$1 = temp__4657__auto___12400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12290_12401__$1)){
var c__10644__auto___12402 = cljs.core.chunk_first.call(null,seq__12290_12401__$1);
var G__12403 = cljs.core.chunk_rest.call(null,seq__12290_12401__$1);
var G__12404 = c__10644__auto___12402;
var G__12405 = cljs.core.count.call(null,c__10644__auto___12402);
var G__12406 = (0);
seq__12290_12389 = G__12403;
chunk__12291_12390 = G__12404;
count__12292_12391 = G__12405;
i__12293_12392 = G__12406;
continue;
} else {
var vec__12297_12407 = cljs.core.first.call(null,seq__12290_12401__$1);
var k_12408 = cljs.core.nth.call(null,vec__12297_12407,(0),null);
var v_12409 = cljs.core.nth.call(null,vec__12297_12407,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_12408))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_12408)," ");

cljs.core.pr.call(null,v_12409);

cljs.core.newline.call(null);
}

var G__12410 = cljs.core.next.call(null,seq__12290_12401__$1);
var G__12411 = null;
var G__12412 = (0);
var G__12413 = (0);
seq__12290_12389 = G__12410;
chunk__12291_12390 = G__12411;
count__12292_12391 = G__12412;
i__12293_12392 = G__12413;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12261_12301;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12260_12300;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10819__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec._STAR_explain_out_STAR_ = cljs.spec.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
return cljs.spec._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__10819__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12416_12418 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12417_12419 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12416_12418,_STAR_print_fn_STAR_12417_12419,sb__10819__auto__){
return (function (x__10820__auto__){
return sb__10819__auto__.append(x__10820__auto__);
});})(_STAR_print_newline_STAR_12416_12418,_STAR_print_fn_STAR_12417_12419,sb__10819__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12417_12419;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12416_12418;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10819__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__4655__auto__ = (function (){var or__9825__auto__ = (function (){var temp__4657__auto__ = (function (){var or__9825__auto__ = cljs.core.get.call(null,overrides,(function (){var or__9825__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var gfn = temp__4657__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__4655__auto__,spec__$1){
return (function (p1__12420_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__12420_SHARP_);
});})(g,temp__4655__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to construct gen at: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args12421 = [];
var len__10938__auto___12424 = arguments.length;
var i__10939__auto___12425 = (0);
while(true){
if((i__10939__auto___12425 < len__10938__auto___12424)){
args12421.push((arguments[i__10939__auto___12425]));

var G__12426 = (i__10939__auto___12425 + (1));
i__10939__auto___12425 = G__12426;
continue;
} else {
}
break;
}

var G__12423 = args12421.length;
switch (G__12423) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12421.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__9813__auto__ = cljs.core.ident_QMARK_.call(null,k);
if(and__9813__auto__){
return cljs.core.namespace.call(null,k);
} else {
return and__9813__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("k must be namespaced keyword or resolveable symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c/and (ident? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__9825__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
var or__9825__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__9825__auto____$1)){
return or__9825__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,cljs.spec.with_name.call(null,spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__4657__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4657__auto__)){
var arg_spec = temp__4657__auto__;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform.call(null,arg_spec,args)))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Call to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.__GT_sym.call(null,v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" did not conform to spec:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__10819__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12430_12432 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12431_12433 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12430_12432,_STAR_print_fn_STAR_12431_12433,sb__10819__auto__,ed,arg_spec,temp__4657__auto__,specs){
return (function (x__10820__auto__){
return sb__10819__auto__.append(x__10820__auto__);
});})(_STAR_print_newline_STAR_12430_12432,_STAR_print_fn_STAR_12431_12433,sb__10819__auto__,ed,arg_spec,temp__4657__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12431_12433;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12430_12432;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10819__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__9825__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args12434 = [];
var len__10938__auto___12437 = arguments.length;
var i__10939__auto___12438 = (0);
while(true){
if((i__10939__auto___12438 < len__10938__auto___12437)){
args12434.push((arguments[i__10939__auto___12438]));

var G__12439 = (i__10939__auto___12438 + (1));
i__10939__auto___12438 = G__12439;
continue;
} else {
}
break;
}

var G__12436 = args12434.length;
switch (G__12436) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12434.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,form)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args12441 = [];
var len__10938__auto___12444 = arguments.length;
var i__10939__auto___12445 = (0);
while(true){
if((i__10939__auto___12445 < len__10938__auto___12444)){
args12441.push((arguments[i__10939__auto___12445]));

var G__12446 = (i__10939__auto___12445 + (1));
i__10939__auto___12445 = G__12446;
continue;
} else {
}
break;
}

var G__12443 = args12441.length;
switch (G__12443) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12441.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.specize.call(null,spec);
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.specize.call(null,spec,form);
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.pvalid_QMARK_ = (function cljs$spec$pvalid_QMARK_(var_args){
var args12448 = [];
var len__10938__auto___12451 = arguments.length;
var i__10939__auto___12452 = (0);
while(true){
if((i__10939__auto___12452 < len__10938__auto___12451)){
args12448.push((arguments[i__10939__auto___12452]));

var G__12453 = (i__10939__auto___12452 + (1));
i__10939__auto___12452 = G__12453;
continue;
} else {
}
break;
}

var G__12450 = args12448.length;
switch (G__12450) {
case 2:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12448.length)].join('')));

}
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,pred,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582))));
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,pred,x,form)));
});

cljs.spec.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__12458){
var map__12498 = p__12458;
var map__12498__$1 = ((((!((map__12498 == null)))?((((map__12498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12498):map__12498);
var argm = map__12498__$1;
var opt = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__12498__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__12455_SHARP_){
var or__9825__auto__ = k__GT_s.call(null,p1__12455_SHARP_);
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return p1__12455_SHARP_;
}
});})(k__GT_s,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec12500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12500 = (function (p__12458,keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,req_keys,opt_specs,k__GT_s,map__12498,pred_forms,meta12501){
this.p__12458 = p__12458;
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.map__12498 = map__12498;
this.pred_forms = pred_forms;
this.meta12501 = meta12501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_12502,meta12501__$1){
var self__ = this;
var _12502__$1 = this;
return (new cljs.spec.t_cljs$spec12500(self__.p__12458,self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.map__12498,self__.pred_forms,meta12501__$1));
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12500.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_12502){
var self__ = this;
var _12502__$1 = this;
return self__.meta12501;
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12500.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12500.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12500.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12500.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12500.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__12509 = m;
var vec__12510 = G__12509;
var seq__12511 = cljs.core.seq.call(null,vec__12510);
var first__12512 = cljs.core.first.call(null,seq__12511);
var seq__12511__$1 = cljs.core.next.call(null,seq__12511);
var vec__12513 = first__12512;
var k = cljs.core.nth.call(null,vec__12513,(0),null);
var v = cljs.core.nth.call(null,vec__12513,(1),null);
var ks = seq__12511__$1;
var keys = vec__12510;
var ret__$1 = ret;
var G__12509__$1 = G__12509;
while(true){
var ret__$2 = ret__$1;
var vec__12516 = G__12509__$1;
var seq__12517 = cljs.core.seq.call(null,vec__12516);
var first__12518 = cljs.core.first.call(null,seq__12517);
var seq__12517__$1 = cljs.core.next.call(null,seq__12517);
var vec__12519 = first__12518;
var k__$1 = cljs.core.nth.call(null,vec__12519,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__12519,(1),null);
var ks__$1 = seq__12517__$1;
var keys__$1 = vec__12516;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__4655__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
var cv = cljs.spec.conform.call(null,s,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12537 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__12538 = ks__$1;
ret__$1 = G__12537;
G__12509__$1 = G__12538;
continue;
}
} else {
var G__12539 = ret__$2;
var G__12540 = ks__$1;
ret__$1 = G__12539;
G__12509__$1 = G__12540;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12500.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__12525 = cljs.core.keys.call(null,m);
var vec__12526 = G__12525;
var seq__12527 = cljs.core.seq.call(null,vec__12526);
var first__12528 = cljs.core.first.call(null,seq__12527);
var seq__12527__$1 = cljs.core.next.call(null,seq__12527);
var k = first__12528;
var ks = seq__12527__$1;
var keys = vec__12526;
var ret__$1 = ret;
var G__12525__$1 = G__12525;
while(true){
var ret__$2 = ret__$1;
var vec__12529 = G__12525__$1;
var seq__12530 = cljs.core.seq.call(null,vec__12529);
var first__12531 = cljs.core.first.call(null,seq__12530);
var seq__12530__$1 = cljs.core.next.call(null,seq__12530);
var k__$1 = first__12531;
var ks__$1 = seq__12530__$1;
var keys__$1 = vec__12529;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__12541 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__12542 = ks__$1;
ret__$1 = G__12541;
G__12525__$1 = G__12542;
continue;
} else {
var G__12543 = ret__$2;
var G__12544 = ks__$1;
ret__$1 = G__12543;
G__12525__$1 = G__12544;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12500.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.map.call(null,((function (probs,temp__4657__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__12456_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__12456_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__4657__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__12532){
var vec__12533 = p__12532;
var k = cljs.core.nth.call(null,vec__12533,(0),null);
var v = cljs.core.nth.call(null,vec__12533,(1),null);
if(cljs.core.truth_((function (){var or__9825__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k)));
if(or__9825__auto__){
return or__9825__auto__;
} else {
return cljs.spec.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12500.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__12457_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__12457_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12500.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12500.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__12536 = cljs.core.PersistentVector.EMPTY;
var G__12536__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__12536,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__12536);
var G__12536__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__12536__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__12536__$1);
var G__12536__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__12536__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__12536__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__12536__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__12536__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12500.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__12458","p__12458",-1624250493,null),new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"map__12498","map__12498",-226331329,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta12501","meta12501",-1470241073,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12500.cljs$lang$type = true;

cljs.spec.t_cljs$spec12500.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12500";

cljs.spec.t_cljs$spec12500.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec12500");
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec12500 = ((function (k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec12500(p__12458__$1,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,map__12498__$2,pred_forms__$1,meta12501){
return (new cljs.spec.t_cljs$spec12500(p__12458__$1,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,map__12498__$2,pred_forms__$1,meta12501));
});})(k__GT_s,keys__GT_specnames,id,map__12498,map__12498__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec12500(p__12458,keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,req_keys,opt_specs,k__GT_s,map__12498__$1,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args12545 = [];
var len__10938__auto___12553 = arguments.length;
var i__10939__auto___12554 = (0);
while(true){
if((i__10939__auto___12554 < len__10938__auto___12553)){
args12545.push((arguments[i__10939__auto___12554]));

var G__12555 = (i__10939__auto___12554 + (1));
i__10939__auto___12554 = G__12555;
continue;
} else {
}
break;
}

var G__12547 = args12545.length;
switch (G__12547) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12545.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__12548 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__12548,gfn);
} else {
return G__12548;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__12549 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__12549,gfn);
} else {
return G__12549;
}
} else {
if(typeof cljs.spec.t_cljs$spec12550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12550 = (function (form,pred,gfn,cpred_QMARK_,unc,meta12551){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta12551 = meta12551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12552,meta12551__$1){
var self__ = this;
var _12552__$1 = this;
return (new cljs.spec.t_cljs$spec12550(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta12551__$1));
});

cljs.spec.t_cljs$spec12550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12552){
var self__ = this;
var _12552__$1 = this;
return self__.meta12551;
});

cljs.spec.t_cljs$spec12550.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12550.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12550.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12550.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12550.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
});

cljs.spec.t_cljs$spec12550.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec12550.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec12550.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec12550.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec12550.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec12550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta12551","meta12551",2123883001,null)], null);
});

cljs.spec.t_cljs$spec12550.cljs$lang$type = true;

cljs.spec.t_cljs$spec12550.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12550";

cljs.spec.t_cljs$spec12550.cljs$lang$ctorPrWriter = (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec12550");
});

cljs.spec.__GT_t_cljs$spec12550 = (function cljs$spec$__GT_t_cljs$spec12550(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta12551){
return (new cljs.spec.t_cljs$spec12550(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta12551));
});

}

return (new cljs.spec.t_cljs$spec12550(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args12562 = [];
var len__10938__auto___12576 = arguments.length;
var i__10939__auto___12577 = (0);
while(true){
if((i__10939__auto___12577 < len__10938__auto___12576)){
args12562.push((arguments[i__10939__auto___12577]));

var G__12578 = (i__10939__auto___12577 + (1));
i__10939__auto___12577 = G__12578;
continue;
} else {
}
break;
}

var G__12564 = args12562.length;
switch (G__12564) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12562.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__12557_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__9813__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__12557_SHARP_));
if(cljs.core.truth_(and__9813__auto__)){
return mm.call(null,p1__12557_SHARP_);
} else {
return and__9813__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__12558_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__12558_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__12559_SHARP_,p2__12560_SHARP_){
return cljs.core.assoc.call(null,p1__12559_SHARP_,retag,p2__12560_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec12565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12565 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta12566){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta12566 = meta12566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_12567,meta12566__$1){
var self__ = this;
var _12567__$1 = this;
return (new cljs.spec.t_cljs$spec12565(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta12566__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_12567){
var self__ = this;
var _12567__$1 = this;
return self__.meta12566;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No method of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for dispatch value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__12568){
var vec__12569 = p__12568;
var k = cljs.core.nth.call(null,vec__12569,(0),null);
var f = cljs.core.nth.call(null,vec__12569,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__12569,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__12569,k,f,___$1,id,predx,dval,tag){
return (function (p1__12561_SHARP_){
return self__.tag.call(null,p1__12561_SHARP_,k);
});})(rmap__$1,p,vec__12569,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__10667__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__10667__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto____$1);
})(),x__10667__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__12569,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__12572){
var vec__12573 = p__12572;
var k = cljs.core.nth.call(null,vec__12573,(0),null);
return cljs.spec.invalid_QMARK_.call(null,k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__10667__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})(),(function (){var x__10667__auto__ = self__.retag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12565.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta12566","meta12566",1040976311,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12565.cljs$lang$type = true;

cljs.spec.t_cljs$spec12565.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12565";

cljs.spec.t_cljs$spec12565.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec12565");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec12565 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec12565(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta12566){
return (new cljs.spec.t_cljs$spec12565(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta12566));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec12565(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args12580 = [];
var len__10938__auto___12586 = arguments.length;
var i__10939__auto___12587 = (0);
while(true){
if((i__10939__auto___12587 < len__10938__auto___12586)){
args12580.push((arguments[i__10939__auto___12587]));

var G__12588 = (i__10939__auto___12587 + (1));
i__10939__auto___12587 = G__12588;
continue;
} else {
}
break;
}

var G__12582 = args12580.length;
switch (G__12582) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12580.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
if(typeof cljs.spec.t_cljs$spec12583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12583 = (function (forms,preds,gfn,specs,cnt,meta12584){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta12584 = meta12584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_12585,meta12584__$1){
var self__ = this;
var _12585__$1 = this;
return (new cljs.spec.t_cljs$spec12583(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta12584__$1));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_12585){
var self__ = this;
var _12585__$1 = this;
return self__.meta12584;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12583.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12583.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12583.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12583.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12583.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt)))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12590 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__12591 = (i + (1));
ret = G__12590;
i = G__12591;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12583.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__12592 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__12593 = (i + (1));
ret = G__12592;
i = G__12593;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12583.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__10667__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})(),(function (){var x__10667__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12583.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12583.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12583.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12583.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta12584","meta12584",-2045174615,null)], null);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12583.cljs$lang$type = true;

cljs.spec.t_cljs$spec12583.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12583";

cljs.spec.t_cljs$spec12583.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec12583");
});})(specs,cnt))
;

cljs.spec.__GT_t_cljs$spec12583 = ((function (specs,cnt){
return (function cljs$spec$__GT_t_cljs$spec12583(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta12584){
return (new cljs.spec.t_cljs$spec12583(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta12584));
});})(specs,cnt))
;

}

return (new cljs.spec.t_cljs$spec12583(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x12595 = v;
x12595.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x12595.cljs$core$IMapEntry$_key$arity$1 = ((function (x12595){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x12595))
;

x12595.cljs$core$IMapEntry$_val$arity$1 = ((function (x12595){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x12595))
;

return x12595;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__12604 = cljs.core.count.call(null,preds);
switch (G__12604) {
case (2):
return ((function (G__12604,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__12604,id,kps,specs))

break;
case (3):
return ((function (G__12604,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
var ret__$2 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$2))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(2)),ret__$2], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__12604,id,kps,specs))

break;
default:
return ((function (G__12604,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.conform_STAR_.call(null,spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var G__12613 = (i + (1));
i = G__12613;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});
;})(G__12604,id,kps,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec12605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12605 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta12606){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta12606 = meta12606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_12607,meta12606__$1){
var self__ = this;
var _12607__$1 = this;
return (new cljs.spec.t_cljs$spec12605(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta12606__$1));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_12607){
var self__ = this;
var _12607__$1 = this;
return self__.meta12606;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12605.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12605.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12605.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12605.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12605.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12605.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__12608){
var self__ = this;
var vec__12609 = p__12608;
var k = cljs.core.nth.call(null,vec__12609,(0),null);
var x = cljs.core.nth.call(null,vec__12609,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12605.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12605.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12605.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12605.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12605.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta12606","meta12606",-1370667569,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12605.cljs$lang$type = true;

cljs.spec.t_cljs$spec12605.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12605";

cljs.spec.t_cljs$spec12605.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec12605");
});})(id,kps,specs,cform))
;

cljs.spec.__GT_t_cljs$spec12605 = ((function (id,kps,specs,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec12605(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta12606){
return (new cljs.spec.t_cljs$spec12605(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta12606));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.t_cljs$spec12605(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__12640 = preds;
var vec__12642 = G__12640;
var seq__12643 = cljs.core.seq.call(null,vec__12642);
var first__12644 = cljs.core.first.call(null,seq__12643);
var seq__12643__$1 = cljs.core.next.call(null,seq__12643);
var pred = first__12644;
var preds__$1 = seq__12643__$1;
var G__12641 = forms;
var vec__12645 = G__12641;
var seq__12646 = cljs.core.seq.call(null,vec__12645);
var first__12647 = cljs.core.first.call(null,seq__12646);
var seq__12646__$1 = cljs.core.next.call(null,seq__12646);
var form = first__12647;
var forms__$1 = seq__12646__$1;
var ret__$1 = ret;
var G__12640__$1 = G__12640;
var G__12641__$1 = G__12641;
while(true){
var ret__$2 = ret__$1;
var vec__12648 = G__12640__$1;
var seq__12649 = cljs.core.seq.call(null,vec__12648);
var first__12650 = cljs.core.first.call(null,seq__12649);
var seq__12649__$1 = cljs.core.next.call(null,seq__12649);
var pred__$1 = first__12650;
var preds__$2 = seq__12649__$1;
var vec__12651 = G__12641__$1;
var seq__12652 = cljs.core.seq.call(null,vec__12651);
var first__12653 = cljs.core.first.call(null,seq__12652);
var seq__12652__$1 = cljs.core.next.call(null,seq__12652);
var form__$1 = first__12653;
var forms__$2 = seq__12652__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,nret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12654 = nret;
var G__12655 = preds__$2;
var G__12656 = forms__$2;
ret__$1 = G__12654;
G__12640__$1 = G__12655;
G__12641__$1 = G__12656;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__12683 = forms;
var vec__12685 = G__12683;
var seq__12686 = cljs.core.seq.call(null,vec__12685);
var first__12687 = cljs.core.first.call(null,seq__12686);
var seq__12686__$1 = cljs.core.next.call(null,seq__12686);
var form = first__12687;
var forms__$1 = seq__12686__$1;
var G__12684 = preds;
var vec__12688 = G__12684;
var seq__12689 = cljs.core.seq.call(null,vec__12688);
var first__12690 = cljs.core.first.call(null,seq__12689);
var seq__12689__$1 = cljs.core.next.call(null,seq__12689);
var pred = first__12690;
var preds__$1 = seq__12689__$1;
var ret__$1 = ret;
var G__12683__$1 = G__12683;
var G__12684__$1 = G__12684;
while(true){
var ret__$2 = ret__$1;
var vec__12691 = G__12683__$1;
var seq__12692 = cljs.core.seq.call(null,vec__12691);
var first__12693 = cljs.core.first.call(null,seq__12692);
var seq__12692__$1 = cljs.core.next.call(null,seq__12692);
var form__$1 = first__12693;
var forms__$2 = seq__12692__$1;
var vec__12694 = G__12684__$1;
var seq__12695 = cljs.core.seq.call(null,vec__12694);
var first__12696 = cljs.core.first.call(null,seq__12695);
var seq__12695__$1 = cljs.core.next.call(null,seq__12695);
var pred__$1 = first__12696;
var preds__$2 = seq__12695__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,nret))){
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__12697 = nret;
var G__12698 = forms__$2;
var G__12699 = preds__$2;
ret__$1 = G__12697;
G__12683__$1 = G__12698;
G__12684__$1 = G__12699;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
}),null));
var cform = (function (){var G__12706 = cljs.core.count.call(null,preds);
switch (G__12706) {
case (2):
return ((function (G__12706,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
;})(G__12706,specs))

break;
case (3):
return ((function (G__12706,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});
;})(G__12706,specs))

break;
default:
return ((function (G__12706,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12711 = nret;
var G__12712 = (i + (1));
ret = G__12711;
i = G__12712;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__12706,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec12707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12707 = (function (forms,preds,gfn,specs,cform,meta12708){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta12708 = meta12708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_12709,meta12708__$1){
var self__ = this;
var _12709__$1 = this;
return (new cljs.spec.t_cljs$spec12707(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta12708__$1));
});})(specs,cform))
;

cljs.spec.t_cljs$spec12707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_12709){
var self__ = this;
var _12709__$1 = this;
return self__.meta12708;
});})(specs,cform))
;

cljs.spec.t_cljs$spec12707.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12707.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec12707.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec12707.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12707.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12707.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
return (function (p1__12701_SHARP_,p2__12700_SHARP_){
return cljs.spec.unform.call(null,p2__12700_SHARP_,p1__12701_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

cljs.spec.t_cljs$spec12707.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12707.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});})(specs,cform))
;

cljs.spec.t_cljs$spec12707.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12707.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.t_cljs$spec12707.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta12708","meta12708",1301037844,null)], null);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12707.cljs$lang$type = true;

cljs.spec.t_cljs$spec12707.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12707";

cljs.spec.t_cljs$spec12707.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec12707");
});})(specs,cform))
;

cljs.spec.__GT_t_cljs$spec12707 = ((function (specs,cform){
return (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec12707(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta12708){
return (new cljs.spec.t_cljs$spec12707(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta12708));
});})(specs,cform))
;

}

return (new cljs.spec.t_cljs$spec12707(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__9825__auto__ = kfn;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__9825__auto__ = kform;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.pvalid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__9813__auto__ = count;
if(cljs.core.truth_(and__9813__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__9813__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__10667__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})(),(function (){var x__10667__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__9813__auto__ = (function (){var or__9825__auto__ = min_count;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__9813__auto__)){
return !((((function (){var or__9825__auto__ = min_count;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__9825__auto__ = max_count;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__9813__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__10667__auto__ = (function (){var or__9825__auto__ = min_count;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})(),(function (){var x__10667__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})(),(function (){var x__10667__auto__ = (function (){var or__9825__auto__ = max_count;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return cljs.spec.MAX_INT;
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__9813__auto__ = distinct;
if(cljs.core.truth_(and__9813__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__9813__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec12724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12724 = (function (forms,preds,gfn,meta12725){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta12725 = meta12725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12726,meta12725__$1){
var self__ = this;
var _12726__$1 = this;
return (new cljs.spec.t_cljs$spec12724(self__.forms,self__.preds,self__.gfn,meta12725__$1));
});

cljs.spec.t_cljs$spec12724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12726){
var self__ = this;
var _12726__$1 = this;
return self__.meta12725;
});

cljs.spec.t_cljs$spec12724.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12724.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12724.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12724.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12724.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__12713_SHARP_,p2__12714_SHARP_){
return cljs.spec.dt.call(null,p1__12713_SHARP_,x,p2__12714_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec12724.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__12715_SHARP_){
return cljs.spec.unform.call(null,p1__12715_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec12724.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__12716_SHARP_,p2__12717_SHARP_){
return cljs.spec.explain_1.call(null,p1__12716_SHARP_,p2__12717_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec12724.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__12718_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__12718_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__12719_SHARP_,p2__12720_SHARP_){
return cljs.spec.gensub.call(null,p1__12719_SHARP_,overrides,path,rmap,p2__12720_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec12724.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec12724.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec12724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta12725","meta12725",1238574225,null)], null);
});

cljs.spec.t_cljs$spec12724.cljs$lang$type = true;

cljs.spec.t_cljs$spec12724.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12724";

cljs.spec.t_cljs$spec12724.cljs$lang$ctorPrWriter = (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec12724");
});

cljs.spec.__GT_t_cljs$spec12724 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec12724(forms__$1,preds__$1,gfn__$1,meta12725){
return (new cljs.spec.t_cljs$spec12724(forms__$1,preds__$1,gfn__$1,meta12725));
});

}

return (new cljs.spec.t_cljs$spec12724(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args12731 = [];
var len__10938__auto___12766 = arguments.length;
var i__10939__auto___12767 = (0);
while(true){
if((i__10939__auto___12767 < len__10938__auto___12766)){
args12731.push((arguments[i__10939__auto___12767]));

var G__12768 = (i__10939__auto___12767 + (1));
i__10939__auto___12767 = G__12768;
continue;
} else {
}
break;
}

var G__12733 = args12731.length;
switch (G__12733) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12731.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__12734,gfn){
var map__12735 = p__12734;
var map__12735__$1 = ((((!((map__12735 == null)))?((((map__12735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12735):map__12735);
var opts = map__12735__$1;
var max_count = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var distinct = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var cpred = cljs.core.get.call(null,map__12735__$1,new cljs.core.Keyword("cljs.spec","cpred","cljs.spec/cpred",1439199454));
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return cljs.spec.specize.call(null,pred);
});})(conform_into,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12727_SHARP_){
return cljs.spec.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__12727_SHARP_);
});})(conform_into,spec,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var kfn__$1 = (function (){var or__9825__auto__ = kfn;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return ((function (or__9825__auto__,conform_into,spec,check_QMARK_,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
return i;
});
;})(or__9825__auto__,conform_into,spec,check_QMARK_,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var vec__12737 = ((cljs.core.map_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null):((cljs.core.vector_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null):((cljs.core.list_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null)], null):((cljs.core.set_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null)], null)
))));
var kindfn = cljs.core.nth.call(null,vec__12737,(0),null);
var kindform = cljs.core.nth.call(null,vec__12737,(1),null);
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__9813__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__9813__auto__){
var or__9825__auto__ = (function (){var and__9813__auto____$1 = kind;
if(cljs.core.truth_(and__9813__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__9813__auto____$1;
}
})();
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__9813__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || ((cljs.core.not.call(null,conform_into)) && ((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12728_SHARP_){
return cljs.core.empty.call(null,(function (){var or__9825__auto__ = conform_into;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return p1__12728_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
if(typeof cljs.spec.t_cljs$spec12740 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12740 = (function (form,max_count,check_QMARK_,vec__12737,gfn,gen_max,pred,map__12735,cpred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,p__12734,meta12741){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.vec__12737 = vec__12737;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.map__12735 = map__12735;
this.cpred = cpred;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.distinct = distinct;
this.kindfn = kindfn;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.p__12734 = p__12734;
this.meta12741 = meta12741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_12742,meta12741__$1){
var self__ = this;
var _12742__$1 = this;
return (new cljs.spec.t_cljs$spec12740(self__.form,self__.max_count,self__.check_QMARK_,self__.vec__12737,self__.gfn,self__.gen_max,self__.pred,self__.map__12735,self__.cpred,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.distinct,self__.kindfn,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,self__.p__12734,meta12741__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_12742){
var self__ = this;
var _12742__$1 = this;
return self__.meta12741;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12740.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12740.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12740.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12740.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12740.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__12743 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__12743,(0),null);
var add = cljs.core.nth.call(null,vec__12743,(1),null);
var complete = cljs.core.nth.call(null,vec__12743,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__12749 = cljs.core.seq.call(null,x);
var vec__12750 = G__12749;
var seq__12751 = cljs.core.seq.call(null,vec__12750);
var first__12752 = cljs.core.first.call(null,seq__12751);
var seq__12751__$1 = cljs.core.next.call(null,seq__12751);
var v = first__12752;
var vs = seq__12751__$1;
var vseq = vec__12750;
var ret__$1 = ret;
var i__$1 = i;
var G__12749__$1 = G__12749;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__12753 = G__12749__$1;
var seq__12754 = cljs.core.seq.call(null,vec__12753);
var first__12755 = cljs.core.first.call(null,seq__12754);
var seq__12754__$1 = cljs.core.next.call(null,seq__12754);
var v__$1 = first__12755;
var vs__$1 = seq__12754__$1;
var vseq__$1 = vec__12753;
if(vseq__$1){
var cv = cljs.spec.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12770 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__12771 = (i__$2 + (1));
var G__12772 = vs__$1;
ret__$1 = G__12770;
i__$1 = G__12771;
G__12749__$1 = G__12772;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__10161__auto__ = (1);
var y__10162__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__10161__auto__ > y__10162__auto__) ? x__10161__auto__ : y__10162__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i)))){
var G__12773 = (i + step);
i = G__12773;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var limit = cljs.spec._STAR_coll_check_limit_STAR_;
var i = (0);
var G__12759 = cljs.core.seq.call(null,x);
var vec__12760 = G__12759;
var seq__12761 = cljs.core.seq.call(null,vec__12760);
var first__12762 = cljs.core.first.call(null,seq__12761);
var seq__12761__$1 = cljs.core.next.call(null,seq__12761);
var v = first__12762;
var vs = seq__12761__$1;
var vseq = vec__12760;
var i__$1 = i;
var G__12759__$1 = G__12759;
while(true){
var i__$2 = i__$1;
var vec__12763 = G__12759__$1;
var seq__12764 = cljs.core.seq.call(null,vec__12763);
var first__12765 = cljs.core.first.call(null,seq__12764);
var seq__12764__$1 = cljs.core.next.call(null,seq__12764);
var v__$1 = first__12765;
var vs__$1 = seq__12764__$1;
var vseq__$1 = vec__12763;
if(((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec__$1,v__$1))){
var G__12774 = (i__$2 + (1));
var G__12775 = vs__$1;
i__$1 = G__12774;
G__12759__$1 = G__12775;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12740.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12740.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__9825__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__9825__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__9825__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.range.call(null),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12740.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12729_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__12729_SHARP_)){
return p1__12729_SHARP_;
} else {
return cljs.core.empty.call(null,p1__12729_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12730_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__12730_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__12730_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__9825__auto__ = self__.min_count;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__9825__auto__ = self__.max_count;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
var x__10161__auto__ = self__.gen_max;
var y__10162__auto__ = ((2) * (function (){var or__9825__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__9825__auto____$1)){
return or__9825__auto____$1;
} else {
return (0);
}
})());
return ((x__10161__auto__ > y__10162__auto__) ? x__10161__auto__ : y__10162__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__9825__auto__ = self__.min_count;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__9825__auto__ = self__.min_count;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return (0);
}
})(),(function (){var or__9825__auto__ = self__.max_count;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
var x__10161__auto__ = self__.gen_max;
var y__10162__auto__ = ((2) * (function (){var or__9825__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__9825__auto____$1)){
return or__9825__auto____$1;
} else {
return (0);
}
})());
return ((x__10161__auto__ > y__10162__auto__) ? x__10161__auto__ : y__10162__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12740.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12740.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__10667__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12740.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"vec__12737","vec__12737",-976001527,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"map__12735","map__12735",-120894578,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"kindform","kindform",839835536,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kindfn","kindfn",1062796440,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"p__12734","p__12734",-2014106849,null),new cljs.core.Symbol(null,"meta12741","meta12741",1738986856,null)], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12740.cljs$lang$type = true;

cljs.spec.t_cljs$spec12740.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12740";

cljs.spec.t_cljs$spec12740.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec12740");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.__GT_t_cljs$spec12740 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function cljs$spec$__GT_t_cljs$spec12740(form__$1,max_count__$1,check_QMARK___$1,vec__12737__$1,gfn__$1,gen_max__$1,pred__$1,map__12735__$2,cpred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,p__12734__$1,meta12741){
return (new cljs.spec.t_cljs$spec12740(form__$1,max_count__$1,check_QMARK___$1,vec__12737__$1,gfn__$1,gen_max__$1,pred__$1,map__12735__$2,cpred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,p__12734__$1,meta12741));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12737,kindfn,kindform,cfns,map__12735,map__12735__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

}

return (new cljs.spec.t_cljs$spec12740(form,max_count,check_QMARK_,vec__12737,gfn,gen_max,pred,map__12735__$1,cpred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,p__12734,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__12776){
var map__12779 = p__12776;
var map__12779__$1 = ((((!((map__12779 == null)))?((((map__12779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12779):map__12779);
var op = cljs.core.get.call(null,map__12779__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__12781){
var map__12793 = p__12781;
var map__12793__$1 = ((((!((map__12793 == null)))?((((map__12793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12793):map__12793);
var vec__12794 = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12795 = cljs.core.seq.call(null,vec__12794);
var first__12796 = cljs.core.first.call(null,seq__12795);
var seq__12795__$1 = cljs.core.next.call(null,seq__12795);
var p1 = first__12796;
var pr = seq__12795__$1;
var ps = vec__12794;
var vec__12797 = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__12798 = cljs.core.seq.call(null,vec__12797);
var first__12799 = cljs.core.first.call(null,seq__12798);
var seq__12798__$1 = cljs.core.next.call(null,seq__12798);
var k1 = first__12799;
var kr = seq__12798__$1;
var ks = vec__12797;
var vec__12800 = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__12801 = cljs.core.seq.call(null,vec__12800);
var first__12802 = cljs.core.first.call(null,seq__12801);
var seq__12801__$1 = cljs.core.next.call(null,seq__12801);
var f1 = first__12802;
var fr = seq__12801__$1;
var forms = vec__12800;
var ret = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__10945__auto__ = [];
var len__10938__auto___12805 = arguments.length;
var i__10939__auto___12806 = (0);
while(true){
if((i__10939__auto___12806 < len__10938__auto___12805)){
args__10945__auto__.push((arguments[i__10939__auto___12806]));

var G__12807 = (i__10939__auto___12806 + (1));
i__10939__auto___12806 = G__12807;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq12804){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12804));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10667__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})(),(function (){var x__10667__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__10667__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__9825__auto__ = ks;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__12808_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__12808_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__9825__auto__ = cljs.core.seq.call(null,ks);
if(or__9825__auto__){
return or__9825__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__9825__auto__ = cljs.core.seq.call(null,forms);
if(or__9825__auto__){
return or__9825__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__12809_SHARP_){
return cljs.core.nth.call(null,p1__12809_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__12819 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__12822 = cljs.core.nth.call(null,vec__12819,(0),null);
var seq__12823 = cljs.core.seq.call(null,vec__12822);
var first__12824 = cljs.core.first.call(null,seq__12823);
var seq__12823__$1 = cljs.core.next.call(null,seq__12823);
var p1 = first__12824;
var pr = seq__12823__$1;
var ps__$1 = vec__12822;
var vec__12825 = cljs.core.nth.call(null,vec__12819,(1),null);
var k1 = cljs.core.nth.call(null,vec__12825,(0),null);
var ks__$1 = vec__12825;
var forms__$1 = cljs.core.nth.call(null,vec__12819,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__10945__auto__ = [];
var len__10938__auto___12829 = arguments.length;
var i__10939__auto___12830 = (0);
while(true){
if((i__10939__auto___12830 < len__10938__auto___12829)){
args__10945__auto__.push((arguments[i__10939__auto___12830]));

var G__12831 = (i__10939__auto___12830 + (1));
i__10939__auto___12830 = G__12831;
continue;
} else {
}
break;
}

var argseq__10946__auto__ = ((((0) < args__10945__auto__.length))?(new cljs.core.IndexedSeq(args__10945__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__10946__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq12828){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12828));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__9813__auto__ = p1;
if(cljs.core.truth_(and__9813__auto__)){
return p2;
} else {
return and__9813__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__9825__auto__ = p1;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__9825__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__9825__auto__){
return or__9825__auto__;
} else {
var or__9825__auto____$1 = (function (){var and__9813__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__9813__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__9813__auto__;
}
})();
if(cljs.core.truth_(or__9825__auto____$1)){
return or__9825__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__12835 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12835__$1 = ((((!((map__12835 == null)))?((((map__12835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12835):map__12835);
var p__$1 = map__12835__$1;
var op = cljs.core.get.call(null,map__12835__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12835__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__12835__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12835__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__12835__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__12837 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12837)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__12837)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12837)){
var and__9813__auto__ = cljs.spec.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__9813__auto__)){
var or__9825__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,ret));
}
} else {
return and__9813__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12837)){
var or__9825__auto__ = (p1 === p2);
if(or__9825__auto__){
return or__9825__auto__;
} else {
return cljs.spec.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12837)){
return cljs.core.every_QMARK_.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12837)){
return cljs.core.some.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__12856 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12856__$1 = ((((!((map__12856 == null)))?((((map__12856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12856):map__12856);
var p__$1 = map__12856__$1;
var vec__12857 = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12858 = cljs.core.seq.call(null,vec__12857);
var first__12859 = cljs.core.first.call(null,seq__12858);
var seq__12858__$1 = cljs.core.next.call(null,seq__12858);
var p0 = first__12859;
var pr = seq__12858__$1;
var ps = vec__12857;
var vec__12860 = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__12860,(0),null);
var ks = vec__12860;
var op = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__12856__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__12864 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12864)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__12864)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12864)){
var pret = cljs.spec.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12864)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12864)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12864)){
var vec__12865 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__12868 = cljs.core.nth.call(null,vec__12865,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__12868,(0),null);
var vec__12871 = cljs.core.nth.call(null,vec__12865,(1),null);
var k0 = cljs.core.nth.call(null,vec__12871,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs.spec.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__12890 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12890__$1 = ((((!((map__12890 == null)))?((((map__12890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12890):map__12890);
var p__$1 = map__12890__$1;
var vec__12891 = cljs.core.get.call(null,map__12890__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12892 = cljs.core.seq.call(null,vec__12891);
var first__12893 = cljs.core.first.call(null,seq__12892);
var seq__12892__$1 = cljs.core.next.call(null,seq__12892);
var p0 = first__12893;
var pr = seq__12892__$1;
var ps = vec__12891;
var vec__12894 = cljs.core.get.call(null,map__12890__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__12894,(0),null);
var ks = vec__12894;
var op = cljs.core.get.call(null,map__12890__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12890__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__12890__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__12890__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__12890__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__12890__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__12898 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12898)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__12898)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12898)){
var px = cljs.core.reduce.call(null,((function (G__12898,map__12890,map__12890__$1,p__$1,vec__12891,seq__12892,first__12893,seq__12892__$1,p0,pr,ps,vec__12894,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12875_SHARP_,p2__12874_SHARP_){
return cljs.spec.unform.call(null,p2__12874_SHARP_,p1__12875_SHARP_);
});})(G__12898,map__12890,map__12890__$1,p__$1,vec__12891,seq__12892,first__12893,seq__12892__$1,p0,pr,ps,vec__12894,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12898)){
return cljs.core.mapcat.call(null,((function (G__12898,map__12890,map__12890__$1,p__$1,vec__12891,seq__12892,first__12893,seq__12892__$1,p0,pr,ps,vec__12894,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12876_SHARP_){
return cljs.spec.op_unform.call(null,p1,p1__12876_SHARP_);
});})(G__12898,map__12890,map__12890__$1,p__$1,vec__12891,seq__12892,first__12893,seq__12892__$1,p0,pr,ps,vec__12894,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12898)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__12898,map__12890,map__12890__$1,p__$1,vec__12891,seq__12892,first__12893,seq__12892__$1,p0,pr,ps,vec__12894,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12877_SHARP_){
return cljs.spec.op_unform.call(null,p0,p1__12877_SHARP_);
});})(G__12898,map__12890,map__12890__$1,p__$1,vec__12891,seq__12892,first__12893,seq__12892__$1,p0,pr,ps,vec__12894,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__12898,map__12890,map__12890__$1,p__$1,vec__12891,seq__12892,first__12893,seq__12892__$1,p0,pr,ps,vec__12894,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__12898,map__12890,map__12890__$1,p__$1,vec__12891,seq__12892,first__12893,seq__12892__$1,p0,pr,ps,vec__12894,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12898)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__12899 = x;
var k__$1 = cljs.core.nth.call(null,vec__12899,(0),null);
var v = cljs.core.nth.call(null,vec__12899,(1),null);
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__12905 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12905__$1 = ((((!((map__12905 == null)))?((((map__12905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12905):map__12905);
var p__$1 = map__12905__$1;
var op = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__12905,map__12905__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__12905,map__12905__$1,p__$1,op,ps,splice))
;
var G__12907 = op;
if(cljs.core._EQ_.call(null,null,G__12907)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12907)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12907)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12907)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12907)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12907)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__12918 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12918__$1 = ((((!((map__12918 == null)))?((((map__12918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12918):map__12918);
var p__$1 = map__12918__$1;
var vec__12919 = cljs.core.get.call(null,map__12918__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12920 = cljs.core.seq.call(null,vec__12919);
var first__12921 = cljs.core.first.call(null,seq__12920);
var seq__12920__$1 = cljs.core.next.call(null,seq__12920);
var p0 = first__12921;
var pr = seq__12920__$1;
var ps = vec__12919;
var vec__12922 = cljs.core.get.call(null,map__12918__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__12923 = cljs.core.seq.call(null,vec__12922);
var first__12924 = cljs.core.first.call(null,seq__12923);
var seq__12923__$1 = cljs.core.next.call(null,seq__12923);
var k0 = first__12924;
var kr = seq__12923__$1;
var ks = vec__12922;
var op = cljs.core.get.call(null,map__12918__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12918__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12918__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__12918__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__12918__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__12918__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__12926 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12926)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12926)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12926)){
var temp__4657__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12926)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs.spec.deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12926)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__12926,map__12918,map__12918__$1,p__$1,vec__12919,seq__12920,first__12921,seq__12920__$1,p0,pr,ps,vec__12922,seq__12923,first__12924,seq__12923__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__12908_SHARP_){
return cljs.spec.deriv.call(null,p1__12908_SHARP_,x);
});})(G__12926,map__12918,map__12918__$1,p__$1,vec__12919,seq__12920,first__12921,seq__12920__$1,p0,pr,ps,vec__12922,seq__12923,first__12924,seq__12923__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12926)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs.spec.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs.spec.deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__12930 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12930__$1 = ((((!((map__12930 == null)))?((((map__12930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12930):map__12930);
var p__$1 = map__12930__$1;
var op = cljs.core.get.call(null,map__12930__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12930__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__12930__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__12930__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__12930__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__12930__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__12930__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__12930__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__12932 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12932)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12932)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12932)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs.spec.op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12932)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__10667__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__9825__auto__ = cljs.core.seq.call(null,ks);
if(or__9825__auto__){
return or__9825__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12932)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__10667__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12932)){
var x__10667__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__10667__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto____$1);
})(),x__10667__auto__);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__12946 = input;
var x = cljs.core.nth.call(null,vec__12946,(0),null);
var input__$1 = vec__12946;
var map__12949 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12949__$1 = ((((!((map__12949 == null)))?((((map__12949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12949):map__12949);
var p__$1 = map__12949__$1;
var op = cljs.core.get.call(null,map__12949__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12949__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__12949__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__12949__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__12949__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__12949__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12949__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__12946,x,input__$1,map__12949,map__12949__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__12946,x,input__$1,map__12949,map__12949__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__12951 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12951)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12951)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12951)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12951)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__9825__auto__ = cljs.core.seq.call(null,ks);
if(or__9825__auto__){
return or__9825__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__9825__auto__ = cljs.core.seq.call(null,forms);
if(or__9825__auto__){
return or__9825__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__12952 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__12951,vec__12946,x,input__$1,map__12949,map__12949__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__12955){
var vec__12956 = p__12955;
var p__$2 = cljs.core.nth.call(null,vec__12956,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__12951,vec__12946,x,input__$1,map__12949,map__12949__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__12952,(0),null);
var k = cljs.core.nth.call(null,vec__12952,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__12952,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__9825__auto__ = form__$1;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12951)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__12951,vec__12946,x,input__$1,map__12949,map__12949__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.op_explain.call(null,(function (){var or__9825__auto__ = form__$1;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__12951,vec__12946,x,input__$1,map__12949,map__12949__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__9825__auto__ = cljs.core.seq.call(null,ks);
if(or__9825__auto__){
return or__9825__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__9825__auto__ = cljs.core.seq.call(null,forms);
if(or__9825__auto__){
return or__9825__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12951)){
return cljs.spec.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__12965 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12965__$1 = ((((!((map__12965 == null)))?((((map__12965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12965):map__12965);
var p__$1 = map__12965__$1;
var ps = cljs.core.get.call(null,map__12965__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__12965__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__12965__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__12965__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__12965__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__12965__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__12965__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.call(null,map__12965__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.call(null,map__12965__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__12965__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__12965,map__12965__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__12965,map__12965__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__9813__auto__ = rmap__$1;
if(cljs.core.truth_(and__9813__auto__)){
var and__9813__auto____$1 = id;
if(cljs.core.truth_(and__9813__auto____$1)){
var and__9813__auto____$2 = k;
if(cljs.core.truth_(and__9813__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__9813__auto____$2;
}
} else {
return and__9813__auto____$1;
}
} else {
return and__9813__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__12965,map__12965__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__9825__auto__ = f__$1;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return p__$2;
}
})());
});})(map__12965,map__12965__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__9825__auto__ = f__$1;
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__12965,map__12965__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__9825__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__9825__auto__){
return or__9825__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__9825__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__9825__auto__){
return or__9825__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__12965,map__12965__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__9825__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__12968 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__12968)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__12968)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
var or__9825__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__9825__auto____$1)){
return or__9825__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__12969 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12969)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__12969)){
var temp__4657__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12969)){
return cljs.spec.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12969)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12969)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12969)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4657__auto__ = cljs.spec.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__4657__auto__,G__12969,or__9825__auto____$1,or__9825__auto__,map__12965,map__12965__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__12959_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12959_SHARP_);
});})(g,temp__4657__auto__,G__12969,or__9825__auto____$1,or__9825__auto__,map__12965,map__12965__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__12970){
while(true){
var vec__12974 = p__12970;
var seq__12975 = cljs.core.seq.call(null,vec__12974);
var first__12976 = cljs.core.first.call(null,seq__12975);
var seq__12975__$1 = cljs.core.next.call(null,seq__12975);
var x = first__12976;
var xs = seq__12975__$1;
var data = vec__12974;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__12977 = dp;
var G__12978 = xs;
p = G__12977;
p__12970 = G__12978;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__12992 = input;
var vec__12993 = G__12992;
var seq__12994 = cljs.core.seq.call(null,vec__12993);
var first__12995 = cljs.core.first.call(null,seq__12994);
var seq__12994__$1 = cljs.core.next.call(null,seq__12994);
var x = first__12995;
var xs = seq__12994__$1;
var data = vec__12993;
var i = (0);
var p__$1 = p;
var G__12992__$1 = G__12992;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__12996 = G__12992__$1;
var seq__12997 = cljs.core.seq.call(null,vec__12996);
var first__12998 = cljs.core.first.call(null,seq__12997);
var seq__12997__$1 = cljs.core.next.call(null,seq__12997);
var x__$1 = first__12998;
var xs__$1 = seq__12997__$1;
var data__$1 = vec__12996;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__12999 = dp;
var G__13000 = xs__$1;
var G__13001 = (i__$2 + (1));
p__$1 = G__12999;
G__12992__$1 = G__13000;
i__$1 = G__13001;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__9825__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec13005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13005 = (function (re,gfn,meta13006){
this.re = re;
this.gfn = gfn;
this.meta13006 = meta13006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13007,meta13006__$1){
var self__ = this;
var _13007__$1 = this;
return (new cljs.spec.t_cljs$spec13005(self__.re,self__.gfn,meta13006__$1));
});

cljs.spec.t_cljs$spec13005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13007){
var self__ = this;
var _13007__$1 = this;
return self__.meta13006;
});

cljs.spec.t_cljs$spec13005.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13005.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec13005.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec13005.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13005.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec13005.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec13005.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec13005.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec13005.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec13005.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec13005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta13006","meta13006",1612656847,null)], null);
});

cljs.spec.t_cljs$spec13005.cljs$lang$type = true;

cljs.spec.t_cljs$spec13005.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13005";

cljs.spec.t_cljs$spec13005.cljs$lang$ctorPrWriter = (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec13005");
});

cljs.spec.__GT_t_cljs$spec13005 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec13005(re__$1,gfn__$1,meta13006){
return (new cljs.spec.t_cljs$spec13005(re__$1,gfn__$1,meta13006));
});

}

return (new cljs.spec.t_cljs$spec13005(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cargs))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__9813__auto__ = cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cret));
if(and__9813__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.pvalid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__9813__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__13008_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__13008_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__4655__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__13012 = temp__4655__auto__;
var smallest = cljs.core.nth.call(null,vec__13012,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec13021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec13021 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta13022){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta13022 = meta13022;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_13023,meta13022__$1){
var self__ = this;
var _13023__$1 = this;
return (new cljs.spec.t_cljs$spec13021(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta13022__$1));
});})(specs))
;

cljs.spec.t_cljs$spec13021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_13023){
var self__ = this;
var _13023__$1 = this;
return self__.meta13022;
});})(specs))
;

cljs.spec.t_cljs$spec13021.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec13021.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec13021.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13021.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec13021.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec13021.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13021.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec13021.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec13021.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e13024){if((e13024 instanceof Error)){
var t = e13024;
return t;
} else {
throw e13024;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cret))){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec13021.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__13027__delegate = function (args){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__10819__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13025_13028 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13026_13029 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13025_13028,_STAR_print_fn_STAR_13026_13029,sb__10819__auto__,___$3,specs){
return (function (x__10820__auto__){
return sb__10819__auto__.append(x__10820__auto__);
});})(_STAR_print_newline_STAR_13025_13028,_STAR_print_fn_STAR_13026_13029,sb__10819__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13026_13029;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13025_13028;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10819__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(pvalid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__13027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13030__i = 0, G__13030__a = new Array(arguments.length -  0);
while (G__13030__i < G__13030__a.length) {G__13030__a[G__13030__i] = arguments[G__13030__i + 0]; ++G__13030__i;}
  args = new cljs.core.IndexedSeq(G__13030__a,0);
} 
return G__13027__delegate.call(this,args);};
G__13027.cljs$lang$maxFixedArity = 0;
G__13027.cljs$lang$applyTo = (function (arglist__13031){
var args = cljs.core.seq(arglist__13031);
return G__13027__delegate(args);
});
G__13027.cljs$core$IFn$_invoke$arity$variadic = G__13027__delegate;
return G__13027;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec13021.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec13021.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__10667__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__10667__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__10667__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec13021.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta13022","meta13022",-1325212908,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec13021.cljs$lang$type = true;

cljs.spec.t_cljs$spec13021.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13021";

cljs.spec.t_cljs$spec13021.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec13021");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec13021 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec13021(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta13022){
return (new cljs.spec.t_cljs$spec13021(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta13022));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec13021(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13032#","p1__13032#",-1022810989,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__13032#","p1__13032#",-1022810989,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__13032#","p1__13032#",-1022810989,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13033#","p1__13033#",-713812312,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__13033#","p1__13033#",-713812312,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13032#","p1__13032#",-1022810989,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__13032#","p1__13032#",-1022810989,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__13032#","p1__13032#",-1022810989,null)))),(function (p1__13032_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__13032_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__13032_SHARP_));
}),null,true,(function (p1__13033_SHARP_){
return cljs.core.map.call(null,(function (p__13034){
var vec__13035 = p__13034;
var k = cljs.core.nth.call(null,vec__13035,(0),null);
var v = cljs.core.nth.call(null,vec__13035,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__13033_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.nonconforming = (function cljs$spec$nonconforming(spec){
var spec__$1 = cljs.spec.specize.call(null,spec);
if(typeof cljs.spec.t_cljs$spec13041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13041 = (function (spec,meta13042){
this.spec = spec;
this.meta13042 = meta13042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_13043,meta13042__$1){
var self__ = this;
var _13043__$1 = this;
return (new cljs.spec.t_cljs$spec13041(self__.spec,meta13042__$1));
});})(spec__$1))
;

cljs.spec.t_cljs$spec13041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_13043){
var self__ = this;
var _13043__$1 = this;
return self__.meta13042;
});})(spec__$1))
;

cljs.spec.t_cljs$spec13041.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13041.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec13041.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec13041.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13041.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.conform_STAR_.call(null,self__.spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.t_cljs$spec13041.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.unform_STAR_.call(null,self__.spec,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec13041.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_STAR_.call(null,self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec13041.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.gen_STAR_.call(null,self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.t_cljs$spec13041.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.nonconforming.call(null,cljs.spec.with_gen_STAR_.call(null,self__.spec,gfn));
});})(spec__$1))
;

cljs.spec.t_cljs$spec13041.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","nonconforming","cljs.spec/nonconforming",1245350756,null)),(function (){var x__10667__auto__ = cljs.spec.describe_STAR_.call(null,self__.spec);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})())));
});})(spec__$1))
;

cljs.spec.t_cljs$spec13041.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta13042","meta13042",-72432273,null)], null);
});})(spec__$1))
;

cljs.spec.t_cljs$spec13041.cljs$lang$type = true;

cljs.spec.t_cljs$spec13041.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13041";

cljs.spec.t_cljs$spec13041.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec13041");
});})(spec__$1))
;

cljs.spec.__GT_t_cljs$spec13041 = ((function (spec__$1){
return (function cljs$spec$nonconforming_$___GT_t_cljs$spec13041(spec__$2,meta13042){
return (new cljs.spec.t_cljs$spec13041(spec__$2,meta13042));
});})(spec__$1))
;

}

return (new cljs.spec.t_cljs$spec13041(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.nilable_impl = (function cljs$spec$nilable_impl(form,pred,gfn){
var spec = cljs.spec.specize.call(null,pred,form);
if(typeof cljs.spec.t_cljs$spec13047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13047 = (function (form,pred,gfn,spec,meta13048){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta13048 = meta13048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_13049,meta13048__$1){
var self__ = this;
var _13049__$1 = this;
return (new cljs.spec.t_cljs$spec13047(self__.form,self__.pred,self__.gfn,self__.spec,meta13048__$1));
});})(spec))
;

cljs.spec.t_cljs$spec13047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_13049){
var self__ = this;
var _13049__$1 = this;
return self__.meta13048;
});})(spec))
;

cljs.spec.t_cljs$spec13047.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13047.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec13047.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec13047.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13047.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.conform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec13047.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.unform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec13047.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__9825__auto__ = cljs.spec.pvalid_QMARK_.call(null,self__.spec,x);
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
});})(spec))
;

cljs.spec.t_cljs$spec13047.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.impl.gen.return$.call(null,null);
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null));
}
});})(spec))
;

cljs.spec.t_cljs$spec13047.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

cljs.spec.t_cljs$spec13047.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","nilable","cljs.spec/nilable",-139722052,null)),(function (){var x__10667__auto__ = cljs.spec.describe_STAR_.call(null,self__.spec);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10667__auto__);
})())));
});})(spec))
;

cljs.spec.t_cljs$spec13047.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta13048","meta13048",-1407325087,null)], null);
});})(spec))
;

cljs.spec.t_cljs$spec13047.cljs$lang$type = true;

cljs.spec.t_cljs$spec13047.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13047";

cljs.spec.t_cljs$spec13047.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__10436__auto__,writer__10437__auto__,opt__10438__auto__){
return cljs.core._write.call(null,writer__10437__auto__,"cljs.spec/t_cljs$spec13047");
});})(spec))
;

cljs.spec.__GT_t_cljs$spec13047 = ((function (spec){
return (function cljs$spec$nilable_impl_$___GT_t_cljs$spec13047(form__$1,pred__$1,gfn__$1,spec__$1,meta13048){
return (new cljs.spec.t_cljs$spec13047(form__$1,pred__$1,gfn__$1,spec__$1,meta13048));
});})(spec))
;

}

return (new cljs.spec.t_cljs$spec13047(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args13051 = [];
var len__10938__auto___13054 = arguments.length;
var i__10939__auto___13055 = (0);
while(true){
if((i__10939__auto___13055 < len__10938__auto___13054)){
args13051.push((arguments[i__10939__auto___13055]));

var G__13056 = (i__10939__auto___13055 + (1));
i__10939__auto___13055 = G__13056;
continue;
} else {
}
break;
}

var G__13053 = args13051.length;
switch (G__13053) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13051.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__13050_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13050_SHARP_,cljs.spec.conform.call(null,spec,p1__13050_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__9813__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__9813__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__9813__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__9813__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__9813__auto__)){
return val.lessThan(end);
} else {
return and__9813__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__9813__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__9813__auto__)){
return val.lessThan(end);
} else {
return and__9813__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Spec assertion failed\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__10819__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13060_13062 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13061_13063 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13060_13062,_STAR_print_fn_STAR_13061_13063,sb__10819__auto__,ed){
return (function (x__10820__auto__){
return sb__10819__auto__.append(x__10820__auto__);
});})(_STAR_print_newline_STAR_13060_13062,_STAR_print_fn_STAR_13061_13063,sb__10819__auto__,ed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13061_13063;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13060_13062;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10819__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=spec.js.map