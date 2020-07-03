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
var args9207 = [];
var len__8228__auto___9213 = arguments.length;
var i__8229__auto___9214 = (0);
while(true){
if((i__8229__auto___9214 < len__8228__auto___9213)){
args9207.push((arguments[i__8229__auto___9214]));

var G__9215 = (i__8229__auto___9214 + (1));
i__8229__auto___9214 = G__9215;
continue;
} else {
}
break;
}

var G__9209 = args9207.length;
switch (G__9209) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9207.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t_domina$css9210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {domina.core.DomContent}
 * @implements {cljs.core.IWithMeta}
*/
domina.css.t_domina$css9210 = (function (base,expr,meta9211){
this.base = base;
this.expr = expr;
this.meta9211 = meta9211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.css.t_domina$css9210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9212,meta9211__$1){
var self__ = this;
var _9212__$1 = this;
return (new domina.css.t_domina$css9210(self__.base,self__.expr,meta9211__$1));
});

domina.css.t_domina$css9210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9212){
var self__ = this;
var _9212__$1 = this;
return self__.meta9211;
});

domina.css.t_domina$css9210.prototype.domina$core$DomContent$ = cljs.core.PROTOCOL_SENTINEL;

domina.css.t_domina$css9210.prototype.domina$core$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__9205_SHARP_){
return domina.core.normalize_seq.call(null,goog.dom.query(self__.expr,p1__9205_SHARP_));
});})(___$1))
,domina.core.nodes.call(null,self__.base));
});

domina.css.t_domina$css9210.prototype.domina$core$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__9206_SHARP_){
return domina.core.normalize_seq.call(null,goog.dom.query(self__.expr,p1__9206_SHARP_));
});})(___$1))
,domina.core.nodes.call(null,self__.base))));
});

domina.css.t_domina$css9210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta9211","meta9211",1822091231,null)], null);
});

domina.css.t_domina$css9210.cljs$lang$type = true;

domina.css.t_domina$css9210.cljs$lang$ctorStr = "domina.css/t_domina$css9210";

domina.css.t_domina$css9210.cljs$lang$ctorPrWriter = (function (this__7726__auto__,writer__7727__auto__,opt__7728__auto__){
return cljs.core._write.call(null,writer__7727__auto__,"domina.css/t_domina$css9210");
});

domina.css.__GT_t_domina$css9210 = (function domina$css$__GT_t_domina$css9210(base__$1,expr__$1,meta9211){
return (new domina.css.t_domina$css9210(base__$1,expr__$1,meta9211));
});

}

return (new domina.css.t_domina$css9210(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=css.js.map