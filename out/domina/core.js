// Compiled by ClojureScript 1.9.473 {}
goog.provide('domina.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.core.re_html = /<|&#?\w+;/;
domina.core.re_leading_whitespace = /^\s+/;
domina.core.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.core.re_tag_name = /<([\w:]+)/;
domina.core.re_no_inner_html = /<(?:script|style)/i;
domina.core.re_tbody = /<tbody/i;
var opt_wrapper_11516 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_11517 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_11518 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_11518,opt_wrapper_11516,table_section_wrapper_11517,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_11516,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_11517,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_11517,cell_wrapper_11518,table_section_wrapper_11517,table_section_wrapper_11517]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__9843__auto__ = div.firstChild;
if(cljs.core.truth_(and__9843__auto__)){
return div.firstChild.childNodes;
} else {
return and__9843__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__11523 = cljs.core.seq.call(null,tbody);
var chunk__11524 = null;
var count__11525 = (0);
var i__11526 = (0);
while(true){
if((i__11526 < count__11525)){
var child = cljs.core._nth.call(null,chunk__11524,i__11526);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__11527 = seq__11523;
var G__11528 = chunk__11524;
var G__11529 = count__11525;
var G__11530 = (i__11526 + (1));
seq__11523 = G__11527;
chunk__11524 = G__11528;
count__11525 = G__11529;
i__11526 = G__11530;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11523);
if(temp__4657__auto__){
var seq__11523__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11523__$1)){
var c__10674__auto__ = cljs.core.chunk_first.call(null,seq__11523__$1);
var G__11531 = cljs.core.chunk_rest.call(null,seq__11523__$1);
var G__11532 = c__10674__auto__;
var G__11533 = cljs.core.count.call(null,c__10674__auto__);
var G__11534 = (0);
seq__11523 = G__11531;
chunk__11524 = G__11532;
count__11525 = G__11533;
i__11526 = G__11534;
continue;
} else {
var child = cljs.core.first.call(null,seq__11523__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__11535 = cljs.core.next.call(null,seq__11523__$1);
var G__11536 = null;
var G__11537 = (0);
var G__11538 = (0);
seq__11523 = G__11535;
chunk__11524 = G__11536;
count__11525 = G__11537;
i__11526 = G__11538;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.core.restore_leading_whitespace_BANG_ = (function domina$core$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.core.html_to_dom = (function domina$core$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.core.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.core.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__11542 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__11542,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__11542,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__11542,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__11545 = wrapper.lastChild;
var G__11546 = (level - (1));
wrapper = G__11545;
level = G__11546;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.core.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__9843__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__9843__auto__){
return cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html__$1);
} else {
return and__9843__auto__;
}
})())){
domina.core.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.core.string_to_dom = (function domina$core$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.core.re_html,s))){
return domina.core.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.core.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.core.nodes = (function domina$core$nodes(content){
if((!((content == null))) && (!((content.domina$core$DomContent$nodes$arity$1 == null)))){
return content.domina$core$DomContent$nodes$arity$1(content);
} else {
var x__10523__auto__ = (((content == null))?null:content);
var m__10524__auto__ = (domina.core.nodes[goog.typeOf(x__10523__auto__)]);
if(!((m__10524__auto__ == null))){
return m__10524__auto__.call(null,content);
} else {
var m__10524__auto____$1 = (domina.core.nodes["_"]);
if(!((m__10524__auto____$1 == null))){
return m__10524__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.core.single_node = (function domina$core$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$core$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$core$DomContent$single_node$arity$1(nodeseq);
} else {
var x__10523__auto__ = (((nodeseq == null))?null:nodeseq);
var m__10524__auto__ = (domina.core.single_node[goog.typeOf(x__10523__auto__)]);
if(!((m__10524__auto__ == null))){
return m__10524__auto__.call(null,nodeseq);
} else {
var m__10524__auto____$1 = (domina.core.single_node["_"]);
if(!((m__10524__auto____$1 == null))){
return m__10524__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina.core._STAR_debug_STAR_ = true;
domina.core.log_debug = (function domina$core$log_debug(var_args){
var args__10975__auto__ = [];
var len__10968__auto___11548 = arguments.length;
var i__10969__auto___11549 = (0);
while(true){
if((i__10969__auto___11549 < len__10968__auto___11548)){
args__10975__auto__.push((arguments[i__10969__auto___11549]));

var G__11550 = (i__10969__auto___11549 + (1));
i__10969__auto___11549 = G__11550;
continue;
} else {
}
break;
}

var argseq__10976__auto__ = ((((0) < args__10975__auto__.length))?(new cljs.core.IndexedSeq(args__10975__auto__.slice((0)),(0),null)):null);
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__10976__auto__);
});

domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if((domina.core._STAR_debug_STAR_) && (!(cljs.core._EQ_.call(null,window.console,undefined)))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log_debug.cljs$lang$maxFixedArity = (0);

domina.core.log_debug.cljs$lang$applyTo = (function (seq11547){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11547));
});

domina.core.log = (function domina$core$log(var_args){
var args__10975__auto__ = [];
var len__10968__auto___11552 = arguments.length;
var i__10969__auto___11553 = (0);
while(true){
if((i__10969__auto___11553 < len__10968__auto___11552)){
args__10975__auto__.push((arguments[i__10969__auto___11553]));

var G__11554 = (i__10969__auto___11553 + (1));
i__10969__auto___11553 = G__11554;
continue;
} else {
}
break;
}

var argseq__10976__auto__ = ((((0) < args__10975__auto__.length))?(new cljs.core.IndexedSeq(args__10975__auto__.slice((0)),(0),null)):null);
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__10976__auto__);
});

domina.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log.cljs$lang$maxFixedArity = (0);

domina.core.log.cljs$lang$applyTo = (function (seq11551){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11551));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.core.by_id = (function domina$core$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.core.by_class = (function domina$core$by_class(class_name){
return domina.core.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.core.children = (function domina$core$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.core.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.core.common_ancestor = (function domina$core$common_ancestor(var_args){
var args__10975__auto__ = [];
var len__10968__auto___11556 = arguments.length;
var i__10969__auto___11557 = (0);
while(true){
if((i__10969__auto___11557 < len__10968__auto___11556)){
args__10975__auto__.push((arguments[i__10969__auto___11557]));

var G__11558 = (i__10969__auto___11557 + (1));
i__10969__auto___11557 = G__11558;
continue;
} else {
}
break;
}

var argseq__10976__auto__ = ((((0) < args__10975__auto__.length))?(new cljs.core.IndexedSeq(args__10975__auto__.slice((0)),(0),null)):null);
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__10976__auto__);
});

domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.core.single_node,contents));
});

domina.core.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq11555){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11555));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.core.ancestor_QMARK_ = (function domina$core$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.core.common_ancestor.call(null,ancestor_content,descendant_content),domina.core.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.core.clone = (function domina$core$clone(content){
return cljs.core.map.call(null,(function (p1__11559_SHARP_){
return p1__11559_SHARP_.cloneNode(true);
}),domina.core.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.append_BANG_ = (function domina$core$append_BANG_(parent_content,child_content){
domina.core.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.insert_BANG_ = (function domina$core$insert_BANG_(parent_content,child_content,idx){
domina.core.apply_with_cloning.call(null,(function (p1__11560_SHARP_,p2__11561_SHARP_){
return goog.dom.insertChildAt(p1__11560_SHARP_,p2__11561_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.prepend_BANG_ = (function domina$core$prepend_BANG_(parent_content,child_content){
domina.core.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_before_BANG_ = (function domina$core$insert_before_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__11563_SHARP_,p2__11562_SHARP_){
return goog.dom.insertSiblingBefore(p2__11562_SHARP_,p1__11563_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__11565_SHARP_,p2__11564_SHARP_){
return goog.dom.insertSiblingAfter(p2__11564_SHARP_,p1__11565_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__11567_SHARP_,p2__11566_SHARP_){
return goog.dom.replaceNode(p2__11566_SHARP_,p1__11567_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.core.detach_BANG_ = (function domina$core$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.core.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.core.destroy_BANG_ = (function domina$core$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.core.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.core.destroy_children_BANG_ = (function domina$core$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.core.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.core.style = (function domina$core$style(content,name){
var s = goog.style.getStyle(domina.core.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.core.attr = (function domina$core$attr(content,name){
return domina.core.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_style_BANG_ = (function domina$core$set_style_BANG_(var_args){
var args__10975__auto__ = [];
var len__10968__auto___11575 = arguments.length;
var i__10969__auto___11576 = (0);
while(true){
if((i__10969__auto___11576 < len__10968__auto___11575)){
args__10975__auto__.push((arguments[i__10969__auto___11576]));

var G__11577 = (i__10969__auto___11576 + (1));
i__10969__auto___11576 = G__11577;
continue;
} else {
}
break;
}

var argseq__10976__auto__ = ((((2) < args__10975__auto__.length))?(new cljs.core.IndexedSeq(args__10975__auto__.slice((2)),(0),null)):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10976__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__11571_11578 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11572_11579 = null;
var count__11573_11580 = (0);
var i__11574_11581 = (0);
while(true){
if((i__11574_11581 < count__11573_11580)){
var n_11582 = cljs.core._nth.call(null,chunk__11572_11579,i__11574_11581);
goog.style.setStyle(n_11582,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__11583 = seq__11571_11578;
var G__11584 = chunk__11572_11579;
var G__11585 = count__11573_11580;
var G__11586 = (i__11574_11581 + (1));
seq__11571_11578 = G__11583;
chunk__11572_11579 = G__11584;
count__11573_11580 = G__11585;
i__11574_11581 = G__11586;
continue;
} else {
var temp__4657__auto___11587 = cljs.core.seq.call(null,seq__11571_11578);
if(temp__4657__auto___11587){
var seq__11571_11588__$1 = temp__4657__auto___11587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11571_11588__$1)){
var c__10674__auto___11589 = cljs.core.chunk_first.call(null,seq__11571_11588__$1);
var G__11590 = cljs.core.chunk_rest.call(null,seq__11571_11588__$1);
var G__11591 = c__10674__auto___11589;
var G__11592 = cljs.core.count.call(null,c__10674__auto___11589);
var G__11593 = (0);
seq__11571_11578 = G__11590;
chunk__11572_11579 = G__11591;
count__11573_11580 = G__11592;
i__11574_11581 = G__11593;
continue;
} else {
var n_11594 = cljs.core.first.call(null,seq__11571_11588__$1);
goog.style.setStyle(n_11594,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__11595 = cljs.core.next.call(null,seq__11571_11588__$1);
var G__11596 = null;
var G__11597 = (0);
var G__11598 = (0);
seq__11571_11578 = G__11595;
chunk__11572_11579 = G__11596;
count__11573_11580 = G__11597;
i__11574_11581 = G__11598;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq11568){
var G__11569 = cljs.core.first.call(null,seq11568);
var seq11568__$1 = cljs.core.next.call(null,seq11568);
var G__11570 = cljs.core.first.call(null,seq11568__$1);
var seq11568__$2 = cljs.core.next.call(null,seq11568__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11569,G__11570,seq11568__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__10975__auto__ = [];
var len__10968__auto___11606 = arguments.length;
var i__10969__auto___11607 = (0);
while(true){
if((i__10969__auto___11607 < len__10968__auto___11606)){
args__10975__auto__.push((arguments[i__10969__auto___11607]));

var G__11608 = (i__10969__auto___11607 + (1));
i__10969__auto___11607 = G__11608;
continue;
} else {
}
break;
}

var argseq__10976__auto__ = ((((2) < args__10975__auto__.length))?(new cljs.core.IndexedSeq(args__10975__auto__.slice((2)),(0),null)):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10976__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__11602_11609 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11603_11610 = null;
var count__11604_11611 = (0);
var i__11605_11612 = (0);
while(true){
if((i__11605_11612 < count__11604_11611)){
var n_11613 = cljs.core._nth.call(null,chunk__11603_11610,i__11605_11612);
n_11613.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__11614 = seq__11602_11609;
var G__11615 = chunk__11603_11610;
var G__11616 = count__11604_11611;
var G__11617 = (i__11605_11612 + (1));
seq__11602_11609 = G__11614;
chunk__11603_11610 = G__11615;
count__11604_11611 = G__11616;
i__11605_11612 = G__11617;
continue;
} else {
var temp__4657__auto___11618 = cljs.core.seq.call(null,seq__11602_11609);
if(temp__4657__auto___11618){
var seq__11602_11619__$1 = temp__4657__auto___11618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11602_11619__$1)){
var c__10674__auto___11620 = cljs.core.chunk_first.call(null,seq__11602_11619__$1);
var G__11621 = cljs.core.chunk_rest.call(null,seq__11602_11619__$1);
var G__11622 = c__10674__auto___11620;
var G__11623 = cljs.core.count.call(null,c__10674__auto___11620);
var G__11624 = (0);
seq__11602_11609 = G__11621;
chunk__11603_11610 = G__11622;
count__11604_11611 = G__11623;
i__11605_11612 = G__11624;
continue;
} else {
var n_11625 = cljs.core.first.call(null,seq__11602_11619__$1);
n_11625.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__11626 = cljs.core.next.call(null,seq__11602_11619__$1);
var G__11627 = null;
var G__11628 = (0);
var G__11629 = (0);
seq__11602_11609 = G__11626;
chunk__11603_11610 = G__11627;
count__11604_11611 = G__11628;
i__11605_11612 = G__11629;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq11599){
var G__11600 = cljs.core.first.call(null,seq11599);
var seq11599__$1 = cljs.core.next.call(null,seq11599);
var G__11601 = cljs.core.first.call(null,seq11599__$1);
var seq11599__$2 = cljs.core.next.call(null,seq11599__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11600,G__11601,seq11599__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__11634_11638 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11635_11639 = null;
var count__11636_11640 = (0);
var i__11637_11641 = (0);
while(true){
if((i__11637_11641 < count__11636_11640)){
var n_11642 = cljs.core._nth.call(null,chunk__11635_11639,i__11637_11641);
n_11642.removeAttribute(cljs.core.name.call(null,name));

var G__11643 = seq__11634_11638;
var G__11644 = chunk__11635_11639;
var G__11645 = count__11636_11640;
var G__11646 = (i__11637_11641 + (1));
seq__11634_11638 = G__11643;
chunk__11635_11639 = G__11644;
count__11636_11640 = G__11645;
i__11637_11641 = G__11646;
continue;
} else {
var temp__4657__auto___11647 = cljs.core.seq.call(null,seq__11634_11638);
if(temp__4657__auto___11647){
var seq__11634_11648__$1 = temp__4657__auto___11647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11634_11648__$1)){
var c__10674__auto___11649 = cljs.core.chunk_first.call(null,seq__11634_11648__$1);
var G__11650 = cljs.core.chunk_rest.call(null,seq__11634_11648__$1);
var G__11651 = c__10674__auto___11649;
var G__11652 = cljs.core.count.call(null,c__10674__auto___11649);
var G__11653 = (0);
seq__11634_11638 = G__11650;
chunk__11635_11639 = G__11651;
count__11636_11640 = G__11652;
i__11637_11641 = G__11653;
continue;
} else {
var n_11654 = cljs.core.first.call(null,seq__11634_11648__$1);
n_11654.removeAttribute(cljs.core.name.call(null,name));

var G__11655 = cljs.core.next.call(null,seq__11634_11648__$1);
var G__11656 = null;
var G__11657 = (0);
var G__11658 = (0);
seq__11634_11638 = G__11655;
chunk__11635_11639 = G__11656;
count__11636_11640 = G__11657;
i__11637_11641 = G__11658;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.core.parse_style_attributes = (function domina$core$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__11662 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__11662,(0),null);
var v = cljs.core.nth.call(null,vec__11662,(1),null);
if(cljs.core.truth_((function (){var and__9843__auto__ = k;
if(cljs.core.truth_(and__9843__auto__)){
return v;
} else {
return and__9843__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.core.styles = (function domina$core$styles(content){
var style = domina.core.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.core.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.core.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.core.attrs = (function domina$core$attrs(content){
var node = domina.core.single_node.call(null,content);
var attrs = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs){
return (function (p1__11665_SHARP_){
var attr = attrs.item(p1__11665_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
});})(node,attrs))
,cljs.core.range.call(null,attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.core.set_styles_BANG_ = (function domina$core$set_styles_BANG_(content,styles){
var seq__11676_11686 = cljs.core.seq.call(null,styles);
var chunk__11677_11687 = null;
var count__11678_11688 = (0);
var i__11679_11689 = (0);
while(true){
if((i__11679_11689 < count__11678_11688)){
var vec__11680_11690 = cljs.core._nth.call(null,chunk__11677_11687,i__11679_11689);
var name_11691 = cljs.core.nth.call(null,vec__11680_11690,(0),null);
var value_11692 = cljs.core.nth.call(null,vec__11680_11690,(1),null);
domina.core.set_style_BANG_.call(null,content,name_11691,value_11692);

var G__11693 = seq__11676_11686;
var G__11694 = chunk__11677_11687;
var G__11695 = count__11678_11688;
var G__11696 = (i__11679_11689 + (1));
seq__11676_11686 = G__11693;
chunk__11677_11687 = G__11694;
count__11678_11688 = G__11695;
i__11679_11689 = G__11696;
continue;
} else {
var temp__4657__auto___11697 = cljs.core.seq.call(null,seq__11676_11686);
if(temp__4657__auto___11697){
var seq__11676_11698__$1 = temp__4657__auto___11697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11676_11698__$1)){
var c__10674__auto___11699 = cljs.core.chunk_first.call(null,seq__11676_11698__$1);
var G__11700 = cljs.core.chunk_rest.call(null,seq__11676_11698__$1);
var G__11701 = c__10674__auto___11699;
var G__11702 = cljs.core.count.call(null,c__10674__auto___11699);
var G__11703 = (0);
seq__11676_11686 = G__11700;
chunk__11677_11687 = G__11701;
count__11678_11688 = G__11702;
i__11679_11689 = G__11703;
continue;
} else {
var vec__11683_11704 = cljs.core.first.call(null,seq__11676_11698__$1);
var name_11705 = cljs.core.nth.call(null,vec__11683_11704,(0),null);
var value_11706 = cljs.core.nth.call(null,vec__11683_11704,(1),null);
domina.core.set_style_BANG_.call(null,content,name_11705,value_11706);

var G__11707 = cljs.core.next.call(null,seq__11676_11698__$1);
var G__11708 = null;
var G__11709 = (0);
var G__11710 = (0);
seq__11676_11686 = G__11707;
chunk__11677_11687 = G__11708;
count__11678_11688 = G__11709;
i__11679_11689 = G__11710;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attrs_BANG_ = (function domina$core$set_attrs_BANG_(content,attrs){
var seq__11721_11731 = cljs.core.seq.call(null,attrs);
var chunk__11722_11732 = null;
var count__11723_11733 = (0);
var i__11724_11734 = (0);
while(true){
if((i__11724_11734 < count__11723_11733)){
var vec__11725_11735 = cljs.core._nth.call(null,chunk__11722_11732,i__11724_11734);
var name_11736 = cljs.core.nth.call(null,vec__11725_11735,(0),null);
var value_11737 = cljs.core.nth.call(null,vec__11725_11735,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_11736,value_11737);

var G__11738 = seq__11721_11731;
var G__11739 = chunk__11722_11732;
var G__11740 = count__11723_11733;
var G__11741 = (i__11724_11734 + (1));
seq__11721_11731 = G__11738;
chunk__11722_11732 = G__11739;
count__11723_11733 = G__11740;
i__11724_11734 = G__11741;
continue;
} else {
var temp__4657__auto___11742 = cljs.core.seq.call(null,seq__11721_11731);
if(temp__4657__auto___11742){
var seq__11721_11743__$1 = temp__4657__auto___11742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11721_11743__$1)){
var c__10674__auto___11744 = cljs.core.chunk_first.call(null,seq__11721_11743__$1);
var G__11745 = cljs.core.chunk_rest.call(null,seq__11721_11743__$1);
var G__11746 = c__10674__auto___11744;
var G__11747 = cljs.core.count.call(null,c__10674__auto___11744);
var G__11748 = (0);
seq__11721_11731 = G__11745;
chunk__11722_11732 = G__11746;
count__11723_11733 = G__11747;
i__11724_11734 = G__11748;
continue;
} else {
var vec__11728_11749 = cljs.core.first.call(null,seq__11721_11743__$1);
var name_11750 = cljs.core.nth.call(null,vec__11728_11749,(0),null);
var value_11751 = cljs.core.nth.call(null,vec__11728_11749,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_11750,value_11751);

var G__11752 = cljs.core.next.call(null,seq__11721_11743__$1);
var G__11753 = null;
var G__11754 = (0);
var G__11755 = (0);
seq__11721_11731 = G__11752;
chunk__11722_11732 = G__11753;
count__11723_11733 = G__11754;
i__11724_11734 = G__11755;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.core.has_class_QMARK_ = (function domina$core$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.core.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.core.add_class_BANG_ = (function domina$core$add_class_BANG_(content,class$){
var seq__11760_11764 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11761_11765 = null;
var count__11762_11766 = (0);
var i__11763_11767 = (0);
while(true){
if((i__11763_11767 < count__11762_11766)){
var node_11768 = cljs.core._nth.call(null,chunk__11761_11765,i__11763_11767);
goog.dom.classes.add(node_11768,class$);

var G__11769 = seq__11760_11764;
var G__11770 = chunk__11761_11765;
var G__11771 = count__11762_11766;
var G__11772 = (i__11763_11767 + (1));
seq__11760_11764 = G__11769;
chunk__11761_11765 = G__11770;
count__11762_11766 = G__11771;
i__11763_11767 = G__11772;
continue;
} else {
var temp__4657__auto___11773 = cljs.core.seq.call(null,seq__11760_11764);
if(temp__4657__auto___11773){
var seq__11760_11774__$1 = temp__4657__auto___11773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11760_11774__$1)){
var c__10674__auto___11775 = cljs.core.chunk_first.call(null,seq__11760_11774__$1);
var G__11776 = cljs.core.chunk_rest.call(null,seq__11760_11774__$1);
var G__11777 = c__10674__auto___11775;
var G__11778 = cljs.core.count.call(null,c__10674__auto___11775);
var G__11779 = (0);
seq__11760_11764 = G__11776;
chunk__11761_11765 = G__11777;
count__11762_11766 = G__11778;
i__11763_11767 = G__11779;
continue;
} else {
var node_11780 = cljs.core.first.call(null,seq__11760_11774__$1);
goog.dom.classes.add(node_11780,class$);

var G__11781 = cljs.core.next.call(null,seq__11760_11774__$1);
var G__11782 = null;
var G__11783 = (0);
var G__11784 = (0);
seq__11760_11764 = G__11781;
chunk__11761_11765 = G__11782;
count__11762_11766 = G__11783;
i__11763_11767 = G__11784;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.core.remove_class_BANG_ = (function domina$core$remove_class_BANG_(content,class$){
var seq__11789_11793 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11790_11794 = null;
var count__11791_11795 = (0);
var i__11792_11796 = (0);
while(true){
if((i__11792_11796 < count__11791_11795)){
var node_11797 = cljs.core._nth.call(null,chunk__11790_11794,i__11792_11796);
goog.dom.classes.remove(node_11797,class$);

var G__11798 = seq__11789_11793;
var G__11799 = chunk__11790_11794;
var G__11800 = count__11791_11795;
var G__11801 = (i__11792_11796 + (1));
seq__11789_11793 = G__11798;
chunk__11790_11794 = G__11799;
count__11791_11795 = G__11800;
i__11792_11796 = G__11801;
continue;
} else {
var temp__4657__auto___11802 = cljs.core.seq.call(null,seq__11789_11793);
if(temp__4657__auto___11802){
var seq__11789_11803__$1 = temp__4657__auto___11802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11789_11803__$1)){
var c__10674__auto___11804 = cljs.core.chunk_first.call(null,seq__11789_11803__$1);
var G__11805 = cljs.core.chunk_rest.call(null,seq__11789_11803__$1);
var G__11806 = c__10674__auto___11804;
var G__11807 = cljs.core.count.call(null,c__10674__auto___11804);
var G__11808 = (0);
seq__11789_11793 = G__11805;
chunk__11790_11794 = G__11806;
count__11791_11795 = G__11807;
i__11792_11796 = G__11808;
continue;
} else {
var node_11809 = cljs.core.first.call(null,seq__11789_11803__$1);
goog.dom.classes.remove(node_11809,class$);

var G__11810 = cljs.core.next.call(null,seq__11789_11803__$1);
var G__11811 = null;
var G__11812 = (0);
var G__11813 = (0);
seq__11789_11793 = G__11810;
chunk__11790_11794 = G__11811;
count__11791_11795 = G__11812;
i__11792_11796 = G__11813;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.core.toggle_class_BANG_ = (function domina$core$toggle_class_BANG_(content,class$){
var seq__11818_11822 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11819_11823 = null;
var count__11820_11824 = (0);
var i__11821_11825 = (0);
while(true){
if((i__11821_11825 < count__11820_11824)){
var node_11826 = cljs.core._nth.call(null,chunk__11819_11823,i__11821_11825);
goog.dom.classes.toggle(node_11826,class$);

var G__11827 = seq__11818_11822;
var G__11828 = chunk__11819_11823;
var G__11829 = count__11820_11824;
var G__11830 = (i__11821_11825 + (1));
seq__11818_11822 = G__11827;
chunk__11819_11823 = G__11828;
count__11820_11824 = G__11829;
i__11821_11825 = G__11830;
continue;
} else {
var temp__4657__auto___11831 = cljs.core.seq.call(null,seq__11818_11822);
if(temp__4657__auto___11831){
var seq__11818_11832__$1 = temp__4657__auto___11831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11818_11832__$1)){
var c__10674__auto___11833 = cljs.core.chunk_first.call(null,seq__11818_11832__$1);
var G__11834 = cljs.core.chunk_rest.call(null,seq__11818_11832__$1);
var G__11835 = c__10674__auto___11833;
var G__11836 = cljs.core.count.call(null,c__10674__auto___11833);
var G__11837 = (0);
seq__11818_11822 = G__11834;
chunk__11819_11823 = G__11835;
count__11820_11824 = G__11836;
i__11821_11825 = G__11837;
continue;
} else {
var node_11838 = cljs.core.first.call(null,seq__11818_11832__$1);
goog.dom.classes.toggle(node_11838,class$);

var G__11839 = cljs.core.next.call(null,seq__11818_11832__$1);
var G__11840 = null;
var G__11841 = (0);
var G__11842 = (0);
seq__11818_11822 = G__11839;
chunk__11819_11823 = G__11840;
count__11820_11824 = G__11841;
i__11821_11825 = G__11842;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.core.classes = (function domina$core$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.core.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.core.set_classes_BANG_ = (function domina$core$set_classes_BANG_(content,classes){
var classes_11851__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__11847_11852 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11848_11853 = null;
var count__11849_11854 = (0);
var i__11850_11855 = (0);
while(true){
if((i__11850_11855 < count__11849_11854)){
var node_11856 = cljs.core._nth.call(null,chunk__11848_11853,i__11850_11855);
goog.dom.classes.set(node_11856,classes_11851__$1);

var G__11857 = seq__11847_11852;
var G__11858 = chunk__11848_11853;
var G__11859 = count__11849_11854;
var G__11860 = (i__11850_11855 + (1));
seq__11847_11852 = G__11857;
chunk__11848_11853 = G__11858;
count__11849_11854 = G__11859;
i__11850_11855 = G__11860;
continue;
} else {
var temp__4657__auto___11861 = cljs.core.seq.call(null,seq__11847_11852);
if(temp__4657__auto___11861){
var seq__11847_11862__$1 = temp__4657__auto___11861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11847_11862__$1)){
var c__10674__auto___11863 = cljs.core.chunk_first.call(null,seq__11847_11862__$1);
var G__11864 = cljs.core.chunk_rest.call(null,seq__11847_11862__$1);
var G__11865 = c__10674__auto___11863;
var G__11866 = cljs.core.count.call(null,c__10674__auto___11863);
var G__11867 = (0);
seq__11847_11852 = G__11864;
chunk__11848_11853 = G__11865;
count__11849_11854 = G__11866;
i__11850_11855 = G__11867;
continue;
} else {
var node_11868 = cljs.core.first.call(null,seq__11847_11862__$1);
goog.dom.classes.set(node_11868,classes_11851__$1);

var G__11869 = cljs.core.next.call(null,seq__11847_11862__$1);
var G__11870 = null;
var G__11871 = (0);
var G__11872 = (0);
seq__11847_11852 = G__11869;
chunk__11848_11853 = G__11870;
count__11849_11854 = G__11871;
i__11850_11855 = G__11872;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.core.text = (function domina$core$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.core.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.core.set_text_BANG_ = (function domina$core$set_text_BANG_(content,value){
var seq__11877_11881 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11878_11882 = null;
var count__11879_11883 = (0);
var i__11880_11884 = (0);
while(true){
if((i__11880_11884 < count__11879_11883)){
var node_11885 = cljs.core._nth.call(null,chunk__11878_11882,i__11880_11884);
goog.dom.setTextContent(node_11885,value);

var G__11886 = seq__11877_11881;
var G__11887 = chunk__11878_11882;
var G__11888 = count__11879_11883;
var G__11889 = (i__11880_11884 + (1));
seq__11877_11881 = G__11886;
chunk__11878_11882 = G__11887;
count__11879_11883 = G__11888;
i__11880_11884 = G__11889;
continue;
} else {
var temp__4657__auto___11890 = cljs.core.seq.call(null,seq__11877_11881);
if(temp__4657__auto___11890){
var seq__11877_11891__$1 = temp__4657__auto___11890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11877_11891__$1)){
var c__10674__auto___11892 = cljs.core.chunk_first.call(null,seq__11877_11891__$1);
var G__11893 = cljs.core.chunk_rest.call(null,seq__11877_11891__$1);
var G__11894 = c__10674__auto___11892;
var G__11895 = cljs.core.count.call(null,c__10674__auto___11892);
var G__11896 = (0);
seq__11877_11881 = G__11893;
chunk__11878_11882 = G__11894;
count__11879_11883 = G__11895;
i__11880_11884 = G__11896;
continue;
} else {
var node_11897 = cljs.core.first.call(null,seq__11877_11891__$1);
goog.dom.setTextContent(node_11897,value);

var G__11898 = cljs.core.next.call(null,seq__11877_11891__$1);
var G__11899 = null;
var G__11900 = (0);
var G__11901 = (0);
seq__11877_11881 = G__11898;
chunk__11878_11882 = G__11899;
count__11879_11883 = G__11900;
i__11880_11884 = G__11901;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.core.value = (function domina$core$value(content){
return goog.dom.forms.getValue(domina.core.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.core.set_value_BANG_ = (function domina$core$set_value_BANG_(content,value){
var seq__11906_11910 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11907_11911 = null;
var count__11908_11912 = (0);
var i__11909_11913 = (0);
while(true){
if((i__11909_11913 < count__11908_11912)){
var node_11914 = cljs.core._nth.call(null,chunk__11907_11911,i__11909_11913);
goog.dom.forms.setValue(node_11914,value);

var G__11915 = seq__11906_11910;
var G__11916 = chunk__11907_11911;
var G__11917 = count__11908_11912;
var G__11918 = (i__11909_11913 + (1));
seq__11906_11910 = G__11915;
chunk__11907_11911 = G__11916;
count__11908_11912 = G__11917;
i__11909_11913 = G__11918;
continue;
} else {
var temp__4657__auto___11919 = cljs.core.seq.call(null,seq__11906_11910);
if(temp__4657__auto___11919){
var seq__11906_11920__$1 = temp__4657__auto___11919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11906_11920__$1)){
var c__10674__auto___11921 = cljs.core.chunk_first.call(null,seq__11906_11920__$1);
var G__11922 = cljs.core.chunk_rest.call(null,seq__11906_11920__$1);
var G__11923 = c__10674__auto___11921;
var G__11924 = cljs.core.count.call(null,c__10674__auto___11921);
var G__11925 = (0);
seq__11906_11910 = G__11922;
chunk__11907_11911 = G__11923;
count__11908_11912 = G__11924;
i__11909_11913 = G__11925;
continue;
} else {
var node_11926 = cljs.core.first.call(null,seq__11906_11920__$1);
goog.dom.forms.setValue(node_11926,value);

var G__11927 = cljs.core.next.call(null,seq__11906_11920__$1);
var G__11928 = null;
var G__11929 = (0);
var G__11930 = (0);
seq__11906_11910 = G__11927;
chunk__11907_11911 = G__11928;
count__11908_11912 = G__11929;
i__11909_11913 = G__11930;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.core.html = (function domina$core$html(content){
return domina.core.single_node.call(null,content).innerHTML;
});
domina.core.replace_children_BANG_ = (function domina$core$replace_children_BANG_(content,inner_content){
return domina.core.append_BANG_.call(null,domina.core.destroy_children_BANG_.call(null,content),inner_content);
});
domina.core.set_inner_html_BANG_ = (function domina$core$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.core.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.core.wrap_map,tag_name);
if((allows_inner_html_QMARK_) && ((domina.support.leading_whitespace_QMARK_) || (cljs.core.not.call(null,leading_whitespace_QMARK_))) && (!(special_tag_QMARK_))){
var value_11941 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__11937_11942 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11938_11943 = null;
var count__11939_11944 = (0);
var i__11940_11945 = (0);
while(true){
if((i__11940_11945 < count__11939_11944)){
var node_11946 = cljs.core._nth.call(null,chunk__11938_11943,i__11940_11945);
node_11946.innerHTML = value_11941;

var G__11947 = seq__11937_11942;
var G__11948 = chunk__11938_11943;
var G__11949 = count__11939_11944;
var G__11950 = (i__11940_11945 + (1));
seq__11937_11942 = G__11947;
chunk__11938_11943 = G__11948;
count__11939_11944 = G__11949;
i__11940_11945 = G__11950;
continue;
} else {
var temp__4657__auto___11951 = cljs.core.seq.call(null,seq__11937_11942);
if(temp__4657__auto___11951){
var seq__11937_11952__$1 = temp__4657__auto___11951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11937_11952__$1)){
var c__10674__auto___11953 = cljs.core.chunk_first.call(null,seq__11937_11952__$1);
var G__11954 = cljs.core.chunk_rest.call(null,seq__11937_11952__$1);
var G__11955 = c__10674__auto___11953;
var G__11956 = cljs.core.count.call(null,c__10674__auto___11953);
var G__11957 = (0);
seq__11937_11942 = G__11954;
chunk__11938_11943 = G__11955;
count__11939_11944 = G__11956;
i__11940_11945 = G__11957;
continue;
} else {
var node_11958 = cljs.core.first.call(null,seq__11937_11952__$1);
node_11958.innerHTML = value_11941;

var G__11959 = cljs.core.next.call(null,seq__11937_11952__$1);
var G__11960 = null;
var G__11961 = (0);
var G__11962 = (0);
seq__11937_11942 = G__11959;
chunk__11938_11943 = G__11960;
count__11939_11944 = G__11961;
i__11940_11945 = G__11962;
continue;
}
} else {
}
}
break;
}
}catch (e11936){if((e11936 instanceof Error)){
var e_11963 = e11936;
domina.core.replace_children_BANG_.call(null,content,value_11941);
} else {
throw e11936;

}
}} else {
domina.core.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.core.set_html_BANG_ = (function domina$core$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.core.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.core.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.core.get_data = (function domina$core$get_data(var_args){
var args11964 = [];
var len__10968__auto___11967 = arguments.length;
var i__10969__auto___11968 = (0);
while(true){
if((i__10969__auto___11968 < len__10968__auto___11967)){
args11964.push((arguments[i__10969__auto___11968]));

var G__11969 = (i__10969__auto___11968 + (1));
i__10969__auto___11968 = G__11969;
continue;
} else {
}
break;
}

var G__11966 = args11964.length;
switch (G__11966) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11964.length)].join('')));

}
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.core.get_data.call(null,node,key,false);
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.core.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__9843__auto__ = bubble;
if(cljs.core.truth_(and__9843__auto__)){
return (value == null);
} else {
return and__9843__auto__;
}
})())){
var temp__4657__auto__ = domina.core.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
return domina.core.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.core.get_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.core.set_data_BANG_ = (function domina$core$set_data_BANG_(node,key,value){
var m = (function (){var or__9855__auto__ = domina.core.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__9855__auto__)){
return or__9855__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.core.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.core.apply_with_cloning = (function domina$core$apply_with_cloning(f,parent_content,child_content){
var parents = domina.core.nodes.call(null,parent_content);
var children = domina.core.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__11977_11981 = cljs.core.seq.call(null,children);
var chunk__11978_11982 = null;
var count__11979_11983 = (0);
var i__11980_11984 = (0);
while(true){
if((i__11980_11984 < count__11979_11983)){
var child_11985 = cljs.core._nth.call(null,chunk__11978_11982,i__11980_11984);
frag.appendChild(child_11985);

var G__11986 = seq__11977_11981;
var G__11987 = chunk__11978_11982;
var G__11988 = count__11979_11983;
var G__11989 = (i__11980_11984 + (1));
seq__11977_11981 = G__11986;
chunk__11978_11982 = G__11987;
count__11979_11983 = G__11988;
i__11980_11984 = G__11989;
continue;
} else {
var temp__4657__auto___11990 = cljs.core.seq.call(null,seq__11977_11981);
if(temp__4657__auto___11990){
var seq__11977_11991__$1 = temp__4657__auto___11990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11977_11991__$1)){
var c__10674__auto___11992 = cljs.core.chunk_first.call(null,seq__11977_11991__$1);
var G__11993 = cljs.core.chunk_rest.call(null,seq__11977_11991__$1);
var G__11994 = c__10674__auto___11992;
var G__11995 = cljs.core.count.call(null,c__10674__auto___11992);
var G__11996 = (0);
seq__11977_11981 = G__11993;
chunk__11978_11982 = G__11994;
count__11979_11983 = G__11995;
i__11980_11984 = G__11996;
continue;
} else {
var child_11997 = cljs.core.first.call(null,seq__11977_11991__$1);
frag.appendChild(child_11997);

var G__11998 = cljs.core.next.call(null,seq__11977_11991__$1);
var G__11999 = null;
var G__12000 = (0);
var G__12001 = (0);
seq__11977_11981 = G__11998;
chunk__11978_11982 = G__11999;
count__11979_11983 = G__12000;
i__11980_11984 = G__12001;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__11971_SHARP_,p2__11972_SHARP_){
return f.call(null,p1__11971_SHARP_,p2__11972_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args12002 = [];
var len__10968__auto___12005 = arguments.length;
var i__10969__auto___12006 = (0);
while(true){
if((i__10969__auto___12006 < len__10968__auto___12005)){
args12002.push((arguments[i__10969__auto___12006]));

var G__12007 = (i__10969__auto___12006 + (1));
i__10969__auto___12006 = G__12007;
continue;
} else {
}
break;
}

var G__12004 = args12002.length;
switch (G__12004) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12002.length)].join('')));

}
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_item.call(null,nl,(0));
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.core.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.core.lazy_nl_via_array_ref = (function domina$core$lazy_nl_via_array_ref(var_args){
var args12009 = [];
var len__10968__auto___12012 = arguments.length;
var i__10969__auto___12013 = (0);
while(true){
if((i__10969__auto___12013 < len__10968__auto___12012)){
args12009.push((arguments[i__10969__auto___12013]));

var G__12014 = (i__10969__auto___12013 + (1));
i__10969__auto___12013 = G__12014;
continue;
} else {
}
break;
}

var G__12011 = args12009.length;
switch (G__12011) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12009.length)].join('')));

}
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.core.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.core.lazy_nodelist = (function domina$core$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.core.lazy_nl_via_item.call(null,nl);
} else {
return domina.core.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.core.array_like_QMARK_ = (function domina$core$array_like_QMARK_(obj){
var and__9843__auto__ = obj;
if(cljs.core.truth_(and__9843__auto__)){
var and__9843__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__9843__auto____$1){
return obj.length;
} else {
return and__9843__auto____$1;
}
} else {
return and__9843__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.core.normalize_seq = (function domina$core$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$)))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,list_thing))){
return domina.core.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.core.DomContent["string"] = true);

(domina.core.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.core.nodes.call(null,domina.core.string_to_dom.call(null,s)));
}));

(domina.core.single_node["string"] = (function (s){
return domina.core.single_node.call(null,domina.core.string_to_dom.call(null,s));
}));

(domina.core.DomContent["_"] = true);

(domina.core.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,content))){
return domina.core.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.core.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.core.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=core.js.map