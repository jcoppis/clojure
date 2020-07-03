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
var opt_wrapper_8699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_8700 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_8701 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_8701,opt_wrapper_8699,table_section_wrapper_8700,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_8699,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_8700,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_8700,cell_wrapper_8701,table_section_wrapper_8700,table_section_wrapper_8700]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__7103__auto__ = div.firstChild;
if(cljs.core.truth_(and__7103__auto__)){
return div.firstChild.childNodes;
} else {
return and__7103__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__8706 = cljs.core.seq.call(null,tbody);
var chunk__8707 = null;
var count__8708 = (0);
var i__8709 = (0);
while(true){
if((i__8709 < count__8708)){
var child = cljs.core._nth.call(null,chunk__8707,i__8709);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__8710 = seq__8706;
var G__8711 = chunk__8707;
var G__8712 = count__8708;
var G__8713 = (i__8709 + (1));
seq__8706 = G__8710;
chunk__8707 = G__8711;
count__8708 = G__8712;
i__8709 = G__8713;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8706);
if(temp__4657__auto__){
var seq__8706__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8706__$1)){
var c__7934__auto__ = cljs.core.chunk_first.call(null,seq__8706__$1);
var G__8714 = cljs.core.chunk_rest.call(null,seq__8706__$1);
var G__8715 = c__7934__auto__;
var G__8716 = cljs.core.count.call(null,c__7934__auto__);
var G__8717 = (0);
seq__8706 = G__8714;
chunk__8707 = G__8715;
count__8708 = G__8716;
i__8709 = G__8717;
continue;
} else {
var child = cljs.core.first.call(null,seq__8706__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__8718 = cljs.core.next.call(null,seq__8706__$1);
var G__8719 = null;
var G__8720 = (0);
var G__8721 = (0);
seq__8706 = G__8718;
chunk__8707 = G__8719;
count__8708 = G__8720;
i__8709 = G__8721;
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
var vec__8725 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__8725,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__8725,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__8725,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__8728 = wrapper.lastChild;
var G__8729 = (level - (1));
wrapper = G__8728;
level = G__8729;
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

if(cljs.core.truth_((function (){var and__7103__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__7103__auto__){
return cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html__$1);
} else {
return and__7103__auto__;
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
var x__7783__auto__ = (((content == null))?null:content);
var m__7784__auto__ = (domina.core.nodes[goog.typeOf(x__7783__auto__)]);
if(!((m__7784__auto__ == null))){
return m__7784__auto__.call(null,content);
} else {
var m__7784__auto____$1 = (domina.core.nodes["_"]);
if(!((m__7784__auto____$1 == null))){
return m__7784__auto____$1.call(null,content);
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
var x__7783__auto__ = (((nodeseq == null))?null:nodeseq);
var m__7784__auto__ = (domina.core.single_node[goog.typeOf(x__7783__auto__)]);
if(!((m__7784__auto__ == null))){
return m__7784__auto__.call(null,nodeseq);
} else {
var m__7784__auto____$1 = (domina.core.single_node["_"]);
if(!((m__7784__auto____$1 == null))){
return m__7784__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina.core._STAR_debug_STAR_ = true;
domina.core.log_debug = (function domina$core$log_debug(var_args){
var args__8235__auto__ = [];
var len__8228__auto___8731 = arguments.length;
var i__8229__auto___8732 = (0);
while(true){
if((i__8229__auto___8732 < len__8228__auto___8731)){
args__8235__auto__.push((arguments[i__8229__auto___8732]));

var G__8733 = (i__8229__auto___8732 + (1));
i__8229__auto___8732 = G__8733;
continue;
} else {
}
break;
}

var argseq__8236__auto__ = ((((0) < args__8235__auto__.length))?(new cljs.core.IndexedSeq(args__8235__auto__.slice((0)),(0),null)):null);
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__8236__auto__);
});

domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if((domina.core._STAR_debug_STAR_) && (!(cljs.core._EQ_.call(null,window.console,undefined)))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log_debug.cljs$lang$maxFixedArity = (0);

domina.core.log_debug.cljs$lang$applyTo = (function (seq8730){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8730));
});

domina.core.log = (function domina$core$log(var_args){
var args__8235__auto__ = [];
var len__8228__auto___8735 = arguments.length;
var i__8229__auto___8736 = (0);
while(true){
if((i__8229__auto___8736 < len__8228__auto___8735)){
args__8235__auto__.push((arguments[i__8229__auto___8736]));

var G__8737 = (i__8229__auto___8736 + (1));
i__8229__auto___8736 = G__8737;
continue;
} else {
}
break;
}

var argseq__8236__auto__ = ((((0) < args__8235__auto__.length))?(new cljs.core.IndexedSeq(args__8235__auto__.slice((0)),(0),null)):null);
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__8236__auto__);
});

domina.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log.cljs$lang$maxFixedArity = (0);

domina.core.log.cljs$lang$applyTo = (function (seq8734){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8734));
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
var args__8235__auto__ = [];
var len__8228__auto___8739 = arguments.length;
var i__8229__auto___8740 = (0);
while(true){
if((i__8229__auto___8740 < len__8228__auto___8739)){
args__8235__auto__.push((arguments[i__8229__auto___8740]));

var G__8741 = (i__8229__auto___8740 + (1));
i__8229__auto___8740 = G__8741;
continue;
} else {
}
break;
}

var argseq__8236__auto__ = ((((0) < args__8235__auto__.length))?(new cljs.core.IndexedSeq(args__8235__auto__.slice((0)),(0),null)):null);
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__8236__auto__);
});

domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.core.single_node,contents));
});

domina.core.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq8738){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8738));
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
return cljs.core.map.call(null,(function (p1__8742_SHARP_){
return p1__8742_SHARP_.cloneNode(true);
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
domina.core.apply_with_cloning.call(null,(function (p1__8743_SHARP_,p2__8744_SHARP_){
return goog.dom.insertChildAt(p1__8743_SHARP_,p2__8744_SHARP_,idx);
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
domina.core.apply_with_cloning.call(null,(function (p1__8746_SHARP_,p2__8745_SHARP_){
return goog.dom.insertSiblingBefore(p2__8745_SHARP_,p1__8746_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__8748_SHARP_,p2__8747_SHARP_){
return goog.dom.insertSiblingAfter(p2__8747_SHARP_,p1__8748_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__8750_SHARP_,p2__8749_SHARP_){
return goog.dom.replaceNode(p2__8749_SHARP_,p1__8750_SHARP_);
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
var args__8235__auto__ = [];
var len__8228__auto___8758 = arguments.length;
var i__8229__auto___8759 = (0);
while(true){
if((i__8229__auto___8759 < len__8228__auto___8758)){
args__8235__auto__.push((arguments[i__8229__auto___8759]));

var G__8760 = (i__8229__auto___8759 + (1));
i__8229__auto___8759 = G__8760;
continue;
} else {
}
break;
}

var argseq__8236__auto__ = ((((2) < args__8235__auto__.length))?(new cljs.core.IndexedSeq(args__8235__auto__.slice((2)),(0),null)):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8236__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__8754_8761 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8755_8762 = null;
var count__8756_8763 = (0);
var i__8757_8764 = (0);
while(true){
if((i__8757_8764 < count__8756_8763)){
var n_8765 = cljs.core._nth.call(null,chunk__8755_8762,i__8757_8764);
goog.style.setStyle(n_8765,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8766 = seq__8754_8761;
var G__8767 = chunk__8755_8762;
var G__8768 = count__8756_8763;
var G__8769 = (i__8757_8764 + (1));
seq__8754_8761 = G__8766;
chunk__8755_8762 = G__8767;
count__8756_8763 = G__8768;
i__8757_8764 = G__8769;
continue;
} else {
var temp__4657__auto___8770 = cljs.core.seq.call(null,seq__8754_8761);
if(temp__4657__auto___8770){
var seq__8754_8771__$1 = temp__4657__auto___8770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8754_8771__$1)){
var c__7934__auto___8772 = cljs.core.chunk_first.call(null,seq__8754_8771__$1);
var G__8773 = cljs.core.chunk_rest.call(null,seq__8754_8771__$1);
var G__8774 = c__7934__auto___8772;
var G__8775 = cljs.core.count.call(null,c__7934__auto___8772);
var G__8776 = (0);
seq__8754_8761 = G__8773;
chunk__8755_8762 = G__8774;
count__8756_8763 = G__8775;
i__8757_8764 = G__8776;
continue;
} else {
var n_8777 = cljs.core.first.call(null,seq__8754_8771__$1);
goog.style.setStyle(n_8777,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8778 = cljs.core.next.call(null,seq__8754_8771__$1);
var G__8779 = null;
var G__8780 = (0);
var G__8781 = (0);
seq__8754_8761 = G__8778;
chunk__8755_8762 = G__8779;
count__8756_8763 = G__8780;
i__8757_8764 = G__8781;
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

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq8751){
var G__8752 = cljs.core.first.call(null,seq8751);
var seq8751__$1 = cljs.core.next.call(null,seq8751);
var G__8753 = cljs.core.first.call(null,seq8751__$1);
var seq8751__$2 = cljs.core.next.call(null,seq8751__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8752,G__8753,seq8751__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__8235__auto__ = [];
var len__8228__auto___8789 = arguments.length;
var i__8229__auto___8790 = (0);
while(true){
if((i__8229__auto___8790 < len__8228__auto___8789)){
args__8235__auto__.push((arguments[i__8229__auto___8790]));

var G__8791 = (i__8229__auto___8790 + (1));
i__8229__auto___8790 = G__8791;
continue;
} else {
}
break;
}

var argseq__8236__auto__ = ((((2) < args__8235__auto__.length))?(new cljs.core.IndexedSeq(args__8235__auto__.slice((2)),(0),null)):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8236__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__8785_8792 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8786_8793 = null;
var count__8787_8794 = (0);
var i__8788_8795 = (0);
while(true){
if((i__8788_8795 < count__8787_8794)){
var n_8796 = cljs.core._nth.call(null,chunk__8786_8793,i__8788_8795);
n_8796.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8797 = seq__8785_8792;
var G__8798 = chunk__8786_8793;
var G__8799 = count__8787_8794;
var G__8800 = (i__8788_8795 + (1));
seq__8785_8792 = G__8797;
chunk__8786_8793 = G__8798;
count__8787_8794 = G__8799;
i__8788_8795 = G__8800;
continue;
} else {
var temp__4657__auto___8801 = cljs.core.seq.call(null,seq__8785_8792);
if(temp__4657__auto___8801){
var seq__8785_8802__$1 = temp__4657__auto___8801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8785_8802__$1)){
var c__7934__auto___8803 = cljs.core.chunk_first.call(null,seq__8785_8802__$1);
var G__8804 = cljs.core.chunk_rest.call(null,seq__8785_8802__$1);
var G__8805 = c__7934__auto___8803;
var G__8806 = cljs.core.count.call(null,c__7934__auto___8803);
var G__8807 = (0);
seq__8785_8792 = G__8804;
chunk__8786_8793 = G__8805;
count__8787_8794 = G__8806;
i__8788_8795 = G__8807;
continue;
} else {
var n_8808 = cljs.core.first.call(null,seq__8785_8802__$1);
n_8808.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8809 = cljs.core.next.call(null,seq__8785_8802__$1);
var G__8810 = null;
var G__8811 = (0);
var G__8812 = (0);
seq__8785_8792 = G__8809;
chunk__8786_8793 = G__8810;
count__8787_8794 = G__8811;
i__8788_8795 = G__8812;
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

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq8782){
var G__8783 = cljs.core.first.call(null,seq8782);
var seq8782__$1 = cljs.core.next.call(null,seq8782);
var G__8784 = cljs.core.first.call(null,seq8782__$1);
var seq8782__$2 = cljs.core.next.call(null,seq8782__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8783,G__8784,seq8782__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__8817_8821 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8818_8822 = null;
var count__8819_8823 = (0);
var i__8820_8824 = (0);
while(true){
if((i__8820_8824 < count__8819_8823)){
var n_8825 = cljs.core._nth.call(null,chunk__8818_8822,i__8820_8824);
n_8825.removeAttribute(cljs.core.name.call(null,name));

var G__8826 = seq__8817_8821;
var G__8827 = chunk__8818_8822;
var G__8828 = count__8819_8823;
var G__8829 = (i__8820_8824 + (1));
seq__8817_8821 = G__8826;
chunk__8818_8822 = G__8827;
count__8819_8823 = G__8828;
i__8820_8824 = G__8829;
continue;
} else {
var temp__4657__auto___8830 = cljs.core.seq.call(null,seq__8817_8821);
if(temp__4657__auto___8830){
var seq__8817_8831__$1 = temp__4657__auto___8830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8817_8831__$1)){
var c__7934__auto___8832 = cljs.core.chunk_first.call(null,seq__8817_8831__$1);
var G__8833 = cljs.core.chunk_rest.call(null,seq__8817_8831__$1);
var G__8834 = c__7934__auto___8832;
var G__8835 = cljs.core.count.call(null,c__7934__auto___8832);
var G__8836 = (0);
seq__8817_8821 = G__8833;
chunk__8818_8822 = G__8834;
count__8819_8823 = G__8835;
i__8820_8824 = G__8836;
continue;
} else {
var n_8837 = cljs.core.first.call(null,seq__8817_8831__$1);
n_8837.removeAttribute(cljs.core.name.call(null,name));

var G__8838 = cljs.core.next.call(null,seq__8817_8831__$1);
var G__8839 = null;
var G__8840 = (0);
var G__8841 = (0);
seq__8817_8821 = G__8838;
chunk__8818_8822 = G__8839;
count__8819_8823 = G__8840;
i__8820_8824 = G__8841;
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
var vec__8845 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__8845,(0),null);
var v = cljs.core.nth.call(null,vec__8845,(1),null);
if(cljs.core.truth_((function (){var and__7103__auto__ = k;
if(cljs.core.truth_(and__7103__auto__)){
return v;
} else {
return and__7103__auto__;
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
return (function (p1__8848_SHARP_){
var attr = attrs.item(p1__8848_SHARP_);
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
var seq__8859_8869 = cljs.core.seq.call(null,styles);
var chunk__8860_8870 = null;
var count__8861_8871 = (0);
var i__8862_8872 = (0);
while(true){
if((i__8862_8872 < count__8861_8871)){
var vec__8863_8873 = cljs.core._nth.call(null,chunk__8860_8870,i__8862_8872);
var name_8874 = cljs.core.nth.call(null,vec__8863_8873,(0),null);
var value_8875 = cljs.core.nth.call(null,vec__8863_8873,(1),null);
domina.core.set_style_BANG_.call(null,content,name_8874,value_8875);

var G__8876 = seq__8859_8869;
var G__8877 = chunk__8860_8870;
var G__8878 = count__8861_8871;
var G__8879 = (i__8862_8872 + (1));
seq__8859_8869 = G__8876;
chunk__8860_8870 = G__8877;
count__8861_8871 = G__8878;
i__8862_8872 = G__8879;
continue;
} else {
var temp__4657__auto___8880 = cljs.core.seq.call(null,seq__8859_8869);
if(temp__4657__auto___8880){
var seq__8859_8881__$1 = temp__4657__auto___8880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8859_8881__$1)){
var c__7934__auto___8882 = cljs.core.chunk_first.call(null,seq__8859_8881__$1);
var G__8883 = cljs.core.chunk_rest.call(null,seq__8859_8881__$1);
var G__8884 = c__7934__auto___8882;
var G__8885 = cljs.core.count.call(null,c__7934__auto___8882);
var G__8886 = (0);
seq__8859_8869 = G__8883;
chunk__8860_8870 = G__8884;
count__8861_8871 = G__8885;
i__8862_8872 = G__8886;
continue;
} else {
var vec__8866_8887 = cljs.core.first.call(null,seq__8859_8881__$1);
var name_8888 = cljs.core.nth.call(null,vec__8866_8887,(0),null);
var value_8889 = cljs.core.nth.call(null,vec__8866_8887,(1),null);
domina.core.set_style_BANG_.call(null,content,name_8888,value_8889);

var G__8890 = cljs.core.next.call(null,seq__8859_8881__$1);
var G__8891 = null;
var G__8892 = (0);
var G__8893 = (0);
seq__8859_8869 = G__8890;
chunk__8860_8870 = G__8891;
count__8861_8871 = G__8892;
i__8862_8872 = G__8893;
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
var seq__8904_8914 = cljs.core.seq.call(null,attrs);
var chunk__8905_8915 = null;
var count__8906_8916 = (0);
var i__8907_8917 = (0);
while(true){
if((i__8907_8917 < count__8906_8916)){
var vec__8908_8918 = cljs.core._nth.call(null,chunk__8905_8915,i__8907_8917);
var name_8919 = cljs.core.nth.call(null,vec__8908_8918,(0),null);
var value_8920 = cljs.core.nth.call(null,vec__8908_8918,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_8919,value_8920);

var G__8921 = seq__8904_8914;
var G__8922 = chunk__8905_8915;
var G__8923 = count__8906_8916;
var G__8924 = (i__8907_8917 + (1));
seq__8904_8914 = G__8921;
chunk__8905_8915 = G__8922;
count__8906_8916 = G__8923;
i__8907_8917 = G__8924;
continue;
} else {
var temp__4657__auto___8925 = cljs.core.seq.call(null,seq__8904_8914);
if(temp__4657__auto___8925){
var seq__8904_8926__$1 = temp__4657__auto___8925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8904_8926__$1)){
var c__7934__auto___8927 = cljs.core.chunk_first.call(null,seq__8904_8926__$1);
var G__8928 = cljs.core.chunk_rest.call(null,seq__8904_8926__$1);
var G__8929 = c__7934__auto___8927;
var G__8930 = cljs.core.count.call(null,c__7934__auto___8927);
var G__8931 = (0);
seq__8904_8914 = G__8928;
chunk__8905_8915 = G__8929;
count__8906_8916 = G__8930;
i__8907_8917 = G__8931;
continue;
} else {
var vec__8911_8932 = cljs.core.first.call(null,seq__8904_8926__$1);
var name_8933 = cljs.core.nth.call(null,vec__8911_8932,(0),null);
var value_8934 = cljs.core.nth.call(null,vec__8911_8932,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_8933,value_8934);

var G__8935 = cljs.core.next.call(null,seq__8904_8926__$1);
var G__8936 = null;
var G__8937 = (0);
var G__8938 = (0);
seq__8904_8914 = G__8935;
chunk__8905_8915 = G__8936;
count__8906_8916 = G__8937;
i__8907_8917 = G__8938;
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
var seq__8943_8947 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8944_8948 = null;
var count__8945_8949 = (0);
var i__8946_8950 = (0);
while(true){
if((i__8946_8950 < count__8945_8949)){
var node_8951 = cljs.core._nth.call(null,chunk__8944_8948,i__8946_8950);
goog.dom.classes.add(node_8951,class$);

var G__8952 = seq__8943_8947;
var G__8953 = chunk__8944_8948;
var G__8954 = count__8945_8949;
var G__8955 = (i__8946_8950 + (1));
seq__8943_8947 = G__8952;
chunk__8944_8948 = G__8953;
count__8945_8949 = G__8954;
i__8946_8950 = G__8955;
continue;
} else {
var temp__4657__auto___8956 = cljs.core.seq.call(null,seq__8943_8947);
if(temp__4657__auto___8956){
var seq__8943_8957__$1 = temp__4657__auto___8956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8943_8957__$1)){
var c__7934__auto___8958 = cljs.core.chunk_first.call(null,seq__8943_8957__$1);
var G__8959 = cljs.core.chunk_rest.call(null,seq__8943_8957__$1);
var G__8960 = c__7934__auto___8958;
var G__8961 = cljs.core.count.call(null,c__7934__auto___8958);
var G__8962 = (0);
seq__8943_8947 = G__8959;
chunk__8944_8948 = G__8960;
count__8945_8949 = G__8961;
i__8946_8950 = G__8962;
continue;
} else {
var node_8963 = cljs.core.first.call(null,seq__8943_8957__$1);
goog.dom.classes.add(node_8963,class$);

var G__8964 = cljs.core.next.call(null,seq__8943_8957__$1);
var G__8965 = null;
var G__8966 = (0);
var G__8967 = (0);
seq__8943_8947 = G__8964;
chunk__8944_8948 = G__8965;
count__8945_8949 = G__8966;
i__8946_8950 = G__8967;
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
var seq__8972_8976 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8973_8977 = null;
var count__8974_8978 = (0);
var i__8975_8979 = (0);
while(true){
if((i__8975_8979 < count__8974_8978)){
var node_8980 = cljs.core._nth.call(null,chunk__8973_8977,i__8975_8979);
goog.dom.classes.remove(node_8980,class$);

var G__8981 = seq__8972_8976;
var G__8982 = chunk__8973_8977;
var G__8983 = count__8974_8978;
var G__8984 = (i__8975_8979 + (1));
seq__8972_8976 = G__8981;
chunk__8973_8977 = G__8982;
count__8974_8978 = G__8983;
i__8975_8979 = G__8984;
continue;
} else {
var temp__4657__auto___8985 = cljs.core.seq.call(null,seq__8972_8976);
if(temp__4657__auto___8985){
var seq__8972_8986__$1 = temp__4657__auto___8985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8972_8986__$1)){
var c__7934__auto___8987 = cljs.core.chunk_first.call(null,seq__8972_8986__$1);
var G__8988 = cljs.core.chunk_rest.call(null,seq__8972_8986__$1);
var G__8989 = c__7934__auto___8987;
var G__8990 = cljs.core.count.call(null,c__7934__auto___8987);
var G__8991 = (0);
seq__8972_8976 = G__8988;
chunk__8973_8977 = G__8989;
count__8974_8978 = G__8990;
i__8975_8979 = G__8991;
continue;
} else {
var node_8992 = cljs.core.first.call(null,seq__8972_8986__$1);
goog.dom.classes.remove(node_8992,class$);

var G__8993 = cljs.core.next.call(null,seq__8972_8986__$1);
var G__8994 = null;
var G__8995 = (0);
var G__8996 = (0);
seq__8972_8976 = G__8993;
chunk__8973_8977 = G__8994;
count__8974_8978 = G__8995;
i__8975_8979 = G__8996;
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
var seq__9001_9005 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9002_9006 = null;
var count__9003_9007 = (0);
var i__9004_9008 = (0);
while(true){
if((i__9004_9008 < count__9003_9007)){
var node_9009 = cljs.core._nth.call(null,chunk__9002_9006,i__9004_9008);
goog.dom.classes.toggle(node_9009,class$);

var G__9010 = seq__9001_9005;
var G__9011 = chunk__9002_9006;
var G__9012 = count__9003_9007;
var G__9013 = (i__9004_9008 + (1));
seq__9001_9005 = G__9010;
chunk__9002_9006 = G__9011;
count__9003_9007 = G__9012;
i__9004_9008 = G__9013;
continue;
} else {
var temp__4657__auto___9014 = cljs.core.seq.call(null,seq__9001_9005);
if(temp__4657__auto___9014){
var seq__9001_9015__$1 = temp__4657__auto___9014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9001_9015__$1)){
var c__7934__auto___9016 = cljs.core.chunk_first.call(null,seq__9001_9015__$1);
var G__9017 = cljs.core.chunk_rest.call(null,seq__9001_9015__$1);
var G__9018 = c__7934__auto___9016;
var G__9019 = cljs.core.count.call(null,c__7934__auto___9016);
var G__9020 = (0);
seq__9001_9005 = G__9017;
chunk__9002_9006 = G__9018;
count__9003_9007 = G__9019;
i__9004_9008 = G__9020;
continue;
} else {
var node_9021 = cljs.core.first.call(null,seq__9001_9015__$1);
goog.dom.classes.toggle(node_9021,class$);

var G__9022 = cljs.core.next.call(null,seq__9001_9015__$1);
var G__9023 = null;
var G__9024 = (0);
var G__9025 = (0);
seq__9001_9005 = G__9022;
chunk__9002_9006 = G__9023;
count__9003_9007 = G__9024;
i__9004_9008 = G__9025;
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
var classes_9034__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__9030_9035 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9031_9036 = null;
var count__9032_9037 = (0);
var i__9033_9038 = (0);
while(true){
if((i__9033_9038 < count__9032_9037)){
var node_9039 = cljs.core._nth.call(null,chunk__9031_9036,i__9033_9038);
goog.dom.classes.set(node_9039,classes_9034__$1);

var G__9040 = seq__9030_9035;
var G__9041 = chunk__9031_9036;
var G__9042 = count__9032_9037;
var G__9043 = (i__9033_9038 + (1));
seq__9030_9035 = G__9040;
chunk__9031_9036 = G__9041;
count__9032_9037 = G__9042;
i__9033_9038 = G__9043;
continue;
} else {
var temp__4657__auto___9044 = cljs.core.seq.call(null,seq__9030_9035);
if(temp__4657__auto___9044){
var seq__9030_9045__$1 = temp__4657__auto___9044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9030_9045__$1)){
var c__7934__auto___9046 = cljs.core.chunk_first.call(null,seq__9030_9045__$1);
var G__9047 = cljs.core.chunk_rest.call(null,seq__9030_9045__$1);
var G__9048 = c__7934__auto___9046;
var G__9049 = cljs.core.count.call(null,c__7934__auto___9046);
var G__9050 = (0);
seq__9030_9035 = G__9047;
chunk__9031_9036 = G__9048;
count__9032_9037 = G__9049;
i__9033_9038 = G__9050;
continue;
} else {
var node_9051 = cljs.core.first.call(null,seq__9030_9045__$1);
goog.dom.classes.set(node_9051,classes_9034__$1);

var G__9052 = cljs.core.next.call(null,seq__9030_9045__$1);
var G__9053 = null;
var G__9054 = (0);
var G__9055 = (0);
seq__9030_9035 = G__9052;
chunk__9031_9036 = G__9053;
count__9032_9037 = G__9054;
i__9033_9038 = G__9055;
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
var seq__9060_9064 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9061_9065 = null;
var count__9062_9066 = (0);
var i__9063_9067 = (0);
while(true){
if((i__9063_9067 < count__9062_9066)){
var node_9068 = cljs.core._nth.call(null,chunk__9061_9065,i__9063_9067);
goog.dom.setTextContent(node_9068,value);

var G__9069 = seq__9060_9064;
var G__9070 = chunk__9061_9065;
var G__9071 = count__9062_9066;
var G__9072 = (i__9063_9067 + (1));
seq__9060_9064 = G__9069;
chunk__9061_9065 = G__9070;
count__9062_9066 = G__9071;
i__9063_9067 = G__9072;
continue;
} else {
var temp__4657__auto___9073 = cljs.core.seq.call(null,seq__9060_9064);
if(temp__4657__auto___9073){
var seq__9060_9074__$1 = temp__4657__auto___9073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9060_9074__$1)){
var c__7934__auto___9075 = cljs.core.chunk_first.call(null,seq__9060_9074__$1);
var G__9076 = cljs.core.chunk_rest.call(null,seq__9060_9074__$1);
var G__9077 = c__7934__auto___9075;
var G__9078 = cljs.core.count.call(null,c__7934__auto___9075);
var G__9079 = (0);
seq__9060_9064 = G__9076;
chunk__9061_9065 = G__9077;
count__9062_9066 = G__9078;
i__9063_9067 = G__9079;
continue;
} else {
var node_9080 = cljs.core.first.call(null,seq__9060_9074__$1);
goog.dom.setTextContent(node_9080,value);

var G__9081 = cljs.core.next.call(null,seq__9060_9074__$1);
var G__9082 = null;
var G__9083 = (0);
var G__9084 = (0);
seq__9060_9064 = G__9081;
chunk__9061_9065 = G__9082;
count__9062_9066 = G__9083;
i__9063_9067 = G__9084;
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
var seq__9089_9093 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9090_9094 = null;
var count__9091_9095 = (0);
var i__9092_9096 = (0);
while(true){
if((i__9092_9096 < count__9091_9095)){
var node_9097 = cljs.core._nth.call(null,chunk__9090_9094,i__9092_9096);
goog.dom.forms.setValue(node_9097,value);

var G__9098 = seq__9089_9093;
var G__9099 = chunk__9090_9094;
var G__9100 = count__9091_9095;
var G__9101 = (i__9092_9096 + (1));
seq__9089_9093 = G__9098;
chunk__9090_9094 = G__9099;
count__9091_9095 = G__9100;
i__9092_9096 = G__9101;
continue;
} else {
var temp__4657__auto___9102 = cljs.core.seq.call(null,seq__9089_9093);
if(temp__4657__auto___9102){
var seq__9089_9103__$1 = temp__4657__auto___9102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9089_9103__$1)){
var c__7934__auto___9104 = cljs.core.chunk_first.call(null,seq__9089_9103__$1);
var G__9105 = cljs.core.chunk_rest.call(null,seq__9089_9103__$1);
var G__9106 = c__7934__auto___9104;
var G__9107 = cljs.core.count.call(null,c__7934__auto___9104);
var G__9108 = (0);
seq__9089_9093 = G__9105;
chunk__9090_9094 = G__9106;
count__9091_9095 = G__9107;
i__9092_9096 = G__9108;
continue;
} else {
var node_9109 = cljs.core.first.call(null,seq__9089_9103__$1);
goog.dom.forms.setValue(node_9109,value);

var G__9110 = cljs.core.next.call(null,seq__9089_9103__$1);
var G__9111 = null;
var G__9112 = (0);
var G__9113 = (0);
seq__9089_9093 = G__9110;
chunk__9090_9094 = G__9111;
count__9091_9095 = G__9112;
i__9092_9096 = G__9113;
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
var value_9124 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__9120_9125 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9121_9126 = null;
var count__9122_9127 = (0);
var i__9123_9128 = (0);
while(true){
if((i__9123_9128 < count__9122_9127)){
var node_9129 = cljs.core._nth.call(null,chunk__9121_9126,i__9123_9128);
node_9129.innerHTML = value_9124;

var G__9130 = seq__9120_9125;
var G__9131 = chunk__9121_9126;
var G__9132 = count__9122_9127;
var G__9133 = (i__9123_9128 + (1));
seq__9120_9125 = G__9130;
chunk__9121_9126 = G__9131;
count__9122_9127 = G__9132;
i__9123_9128 = G__9133;
continue;
} else {
var temp__4657__auto___9134 = cljs.core.seq.call(null,seq__9120_9125);
if(temp__4657__auto___9134){
var seq__9120_9135__$1 = temp__4657__auto___9134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9120_9135__$1)){
var c__7934__auto___9136 = cljs.core.chunk_first.call(null,seq__9120_9135__$1);
var G__9137 = cljs.core.chunk_rest.call(null,seq__9120_9135__$1);
var G__9138 = c__7934__auto___9136;
var G__9139 = cljs.core.count.call(null,c__7934__auto___9136);
var G__9140 = (0);
seq__9120_9125 = G__9137;
chunk__9121_9126 = G__9138;
count__9122_9127 = G__9139;
i__9123_9128 = G__9140;
continue;
} else {
var node_9141 = cljs.core.first.call(null,seq__9120_9135__$1);
node_9141.innerHTML = value_9124;

var G__9142 = cljs.core.next.call(null,seq__9120_9135__$1);
var G__9143 = null;
var G__9144 = (0);
var G__9145 = (0);
seq__9120_9125 = G__9142;
chunk__9121_9126 = G__9143;
count__9122_9127 = G__9144;
i__9123_9128 = G__9145;
continue;
}
} else {
}
}
break;
}
}catch (e9119){if((e9119 instanceof Error)){
var e_9146 = e9119;
domina.core.replace_children_BANG_.call(null,content,value_9124);
} else {
throw e9119;

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
var args9147 = [];
var len__8228__auto___9150 = arguments.length;
var i__8229__auto___9151 = (0);
while(true){
if((i__8229__auto___9151 < len__8228__auto___9150)){
args9147.push((arguments[i__8229__auto___9151]));

var G__9152 = (i__8229__auto___9151 + (1));
i__8229__auto___9151 = G__9152;
continue;
} else {
}
break;
}

var G__9149 = args9147.length;
switch (G__9149) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9147.length)].join('')));

}
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.core.get_data.call(null,node,key,false);
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.core.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__7103__auto__ = bubble;
if(cljs.core.truth_(and__7103__auto__)){
return (value == null);
} else {
return and__7103__auto__;
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
var m = (function (){var or__7115__auto__ = domina.core.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__7115__auto__)){
return or__7115__auto__;
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
var seq__9160_9164 = cljs.core.seq.call(null,children);
var chunk__9161_9165 = null;
var count__9162_9166 = (0);
var i__9163_9167 = (0);
while(true){
if((i__9163_9167 < count__9162_9166)){
var child_9168 = cljs.core._nth.call(null,chunk__9161_9165,i__9163_9167);
frag.appendChild(child_9168);

var G__9169 = seq__9160_9164;
var G__9170 = chunk__9161_9165;
var G__9171 = count__9162_9166;
var G__9172 = (i__9163_9167 + (1));
seq__9160_9164 = G__9169;
chunk__9161_9165 = G__9170;
count__9162_9166 = G__9171;
i__9163_9167 = G__9172;
continue;
} else {
var temp__4657__auto___9173 = cljs.core.seq.call(null,seq__9160_9164);
if(temp__4657__auto___9173){
var seq__9160_9174__$1 = temp__4657__auto___9173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9160_9174__$1)){
var c__7934__auto___9175 = cljs.core.chunk_first.call(null,seq__9160_9174__$1);
var G__9176 = cljs.core.chunk_rest.call(null,seq__9160_9174__$1);
var G__9177 = c__7934__auto___9175;
var G__9178 = cljs.core.count.call(null,c__7934__auto___9175);
var G__9179 = (0);
seq__9160_9164 = G__9176;
chunk__9161_9165 = G__9177;
count__9162_9166 = G__9178;
i__9163_9167 = G__9179;
continue;
} else {
var child_9180 = cljs.core.first.call(null,seq__9160_9174__$1);
frag.appendChild(child_9180);

var G__9181 = cljs.core.next.call(null,seq__9160_9174__$1);
var G__9182 = null;
var G__9183 = (0);
var G__9184 = (0);
seq__9160_9164 = G__9181;
chunk__9161_9165 = G__9182;
count__9162_9166 = G__9183;
i__9163_9167 = G__9184;
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
return (function (p1__9154_SHARP_,p2__9155_SHARP_){
return f.call(null,p1__9154_SHARP_,p2__9155_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args9185 = [];
var len__8228__auto___9188 = arguments.length;
var i__8229__auto___9189 = (0);
while(true){
if((i__8229__auto___9189 < len__8228__auto___9188)){
args9185.push((arguments[i__8229__auto___9189]));

var G__9190 = (i__8229__auto___9189 + (1));
i__8229__auto___9189 = G__9190;
continue;
} else {
}
break;
}

var G__9187 = args9185.length;
switch (G__9187) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9185.length)].join('')));

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
var args9192 = [];
var len__8228__auto___9195 = arguments.length;
var i__8229__auto___9196 = (0);
while(true){
if((i__8229__auto___9196 < len__8228__auto___9195)){
args9192.push((arguments[i__8229__auto___9196]));

var G__9197 = (i__8229__auto___9196 + (1));
i__8229__auto___9196 = G__9197;
continue;
} else {
}
break;
}

var G__9194 = args9192.length;
switch (G__9194) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9192.length)].join('')));

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
var and__7103__auto__ = obj;
if(cljs.core.truth_(and__7103__auto__)){
var and__7103__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__7103__auto____$1){
return obj.length;
} else {
return and__7103__auto____$1;
}
} else {
return and__7103__auto__;
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