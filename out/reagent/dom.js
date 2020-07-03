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
var or__10265__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__10265__auto__)){
return or__10265__auto__;
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
var _STAR_always_update_STAR_12197 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_12197){
return (function (){
var _STAR_always_update_STAR_12198 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12198;
}});})(_STAR_always_update_STAR_12197))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12197;
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
var args12199 = [];
var len__11378__auto___12202 = arguments.length;
var i__11379__auto___12203 = (0);
while(true){
if((i__11379__auto___12203 < len__11378__auto___12202)){
args12199.push((arguments[i__11379__auto___12203]));

var G__12204 = (i__11379__auto___12203 + (1));
i__11379__auto___12203 = G__12204;
continue;
} else {
}
break;
}

var G__12201 = args12199.length;
switch (G__12201) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12199.length)].join('')));

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

var seq__12210_12214 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__12211_12215 = null;
var count__12212_12216 = (0);
var i__12213_12217 = (0);
while(true){
if((i__12213_12217 < count__12212_12216)){
var v_12218 = cljs.core._nth.call(null,chunk__12211_12215,i__12213_12217);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12218);

var G__12219 = seq__12210_12214;
var G__12220 = chunk__12211_12215;
var G__12221 = count__12212_12216;
var G__12222 = (i__12213_12217 + (1));
seq__12210_12214 = G__12219;
chunk__12211_12215 = G__12220;
count__12212_12216 = G__12221;
i__12213_12217 = G__12222;
continue;
} else {
var temp__4657__auto___12223 = cljs.core.seq.call(null,seq__12210_12214);
if(temp__4657__auto___12223){
var seq__12210_12224__$1 = temp__4657__auto___12223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12210_12224__$1)){
var c__11084__auto___12225 = cljs.core.chunk_first.call(null,seq__12210_12224__$1);
var G__12226 = cljs.core.chunk_rest.call(null,seq__12210_12224__$1);
var G__12227 = c__11084__auto___12225;
var G__12228 = cljs.core.count.call(null,c__11084__auto___12225);
var G__12229 = (0);
seq__12210_12214 = G__12226;
chunk__12211_12215 = G__12227;
count__12212_12216 = G__12228;
i__12213_12217 = G__12229;
continue;
} else {
var v_12230 = cljs.core.first.call(null,seq__12210_12224__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12230);

var G__12231 = cljs.core.next.call(null,seq__12210_12224__$1);
var G__12232 = null;
var G__12233 = (0);
var G__12234 = (0);
seq__12210_12214 = G__12231;
chunk__12211_12215 = G__12232;
count__12212_12216 = G__12233;
i__12213_12217 = G__12234;
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