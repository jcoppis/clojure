// Compiled by ClojureScript 1.9.473 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__7115__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__7115__auto__)){
return or__7115__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_12573 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_12573){
return (function (){
var _STAR_always_update_STAR_12574 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12574;
}});})(_STAR_always_update_STAR_12573))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12573;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args12575 = [];
var len__8228__auto___12578 = arguments.length;
var i__8229__auto___12579 = (0);
while(true){
if((i__8229__auto___12579 < len__8228__auto___12578)){
args12575.push((arguments[i__8229__auto___12579]));

var G__12580 = (i__8229__auto___12579 + (1));
i__8229__auto___12579 = G__12580;
continue;
} else {
}
break;
}

var G__12577 = args12575.length;
switch (G__12577) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12575.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__12586_12590 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__12587_12591 = null;
var count__12588_12592 = (0);
var i__12589_12593 = (0);
while(true){
if((i__12589_12593 < count__12588_12592)){
var v_12594 = cljs.core._nth.call(null,chunk__12587_12591,i__12589_12593);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12594);

var G__12595 = seq__12586_12590;
var G__12596 = chunk__12587_12591;
var G__12597 = count__12588_12592;
var G__12598 = (i__12589_12593 + (1));
seq__12586_12590 = G__12595;
chunk__12587_12591 = G__12596;
count__12588_12592 = G__12597;
i__12589_12593 = G__12598;
continue;
} else {
var temp__4657__auto___12599 = cljs.core.seq.call(null,seq__12586_12590);
if(temp__4657__auto___12599){
var seq__12586_12600__$1 = temp__4657__auto___12599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12586_12600__$1)){
var c__7934__auto___12601 = cljs.core.chunk_first.call(null,seq__12586_12600__$1);
var G__12602 = cljs.core.chunk_rest.call(null,seq__12586_12600__$1);
var G__12603 = c__7934__auto___12601;
var G__12604 = cljs.core.count.call(null,c__7934__auto___12601);
var G__12605 = (0);
seq__12586_12590 = G__12602;
chunk__12587_12591 = G__12603;
count__12588_12592 = G__12604;
i__12589_12593 = G__12605;
continue;
} else {
var v_12606 = cljs.core.first.call(null,seq__12586_12600__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12606);

var G__12607 = cljs.core.next.call(null,seq__12586_12600__$1);
var G__12608 = null;
var G__12609 = (0);
var G__12610 = (0);
seq__12586_12590 = G__12607;
chunk__12587_12591 = G__12608;
count__12588_12592 = G__12609;
i__12589_12593 = G__12610;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map