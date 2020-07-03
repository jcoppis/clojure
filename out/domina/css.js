// Compiled by ClojureScript 1.9.473 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('goog.dom');
goog.require('goog.dom.query');
domina.css.root_element = (function domina$css$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.css.sel = (function domina$css$sel(var_args){
var args12037 = [];
var len__11525__auto___12043 = arguments.length;
var i__11526__auto___12044 = (0);
while(true){
if((i__11526__auto___12044 < len__11525__auto___12043)){
args12037.push((arguments[i__11526__auto___12044]));

var G__12045 = (i__11526__auto___12044 + (1));
i__11526__auto___12044 = G__12045;
continue;
} else {
}
break;
}

var G__12039 = args12037.length;
switch (G__12039) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12037.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t_domina$css12040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {domina.core.DomContent}
 * @implements {cljs.core.IWithMeta}
*/
domina.css.t_domina$css12040 = (function (base,expr,meta12041){
this.base = base;
this.expr = expr;
this.meta12041 = meta12041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.css.t_domina$css12040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12042,meta12041__$1){
var self__ = this;
var _12042__$1 = this;
return (new domina.css.t_domina$css12040(self__.base,self__.expr,meta12041__$1));
});

domina.css.t_domina$css12040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12042){
var self__ = this;
var _12042__$1 = this;
return self__.meta12041;
});

domina.css.t_domina$css12040.prototype.domina$core$DomContent$ = cljs.core.PROTOCOL_SENTINEL;

domina.css.t_domina$css12040.prototype.domina$core$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__12035_SHARP_){
return domina.core.normalize_seq.call(null,goog.dom.query(self__.expr,p1__12035_SHARP_));
});})(___$1))
,domina.core.nodes.call(null,self__.base));
});

domina.css.t_domina$css12040.prototype.domina$core$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__12036_SHARP_){
return domina.core.normalize_seq.call(null,goog.dom.query(self__.expr,p1__12036_SHARP_));
});})(___$1))
,domina.core.nodes.call(null,self__.base))));
});

domina.css.t_domina$css12040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta12041","meta12041",1962997499,null)], null);
});

domina.css.t_domina$css12040.cljs$lang$type = true;

domina.css.t_domina$css12040.cljs$lang$ctorStr = "domina.css/t_domina$css12040";

domina.css.t_domina$css12040.cljs$lang$ctorPrWriter = (function (this__11023__auto__,writer__11024__auto__,opt__11025__auto__){
return cljs.core._write.call(null,writer__11024__auto__,"domina.css/t_domina$css12040");
});

domina.css.__GT_t_domina$css12040 = (function domina$css$__GT_t_domina$css12040(base__$1,expr__$1,meta12041){
return (new domina.css.t_domina$css12040(base__$1,expr__$1,meta12041));
});

}

return (new domina.css.t_domina$css12040(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=css.js.map