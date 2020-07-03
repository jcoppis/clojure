// Compiled by ClojureScript 1.9.473 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__8571_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8571_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__8576 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8577 = null;
var count__8578 = (0);
var i__8579 = (0);
while(true){
if((i__8579 < count__8578)){
var s = cljs.core._nth.call(null,chunk__8577,i__8579);
var temp__4657__auto___8580 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___8580)){
var sheet_8581 = temp__4657__auto___8580;
var temp__4657__auto___8582__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8581.href,changed);
if(cljs.core.truth_(temp__4657__auto___8582__$1)){
var href_uri_8583 = temp__4657__auto___8582__$1;
sheet_8581.ownerNode.href = href_uri_8583.makeUnique().toString();
} else {
}
} else {
}

var G__8584 = seq__8576;
var G__8585 = chunk__8577;
var G__8586 = count__8578;
var G__8587 = (i__8579 + (1));
seq__8576 = G__8584;
chunk__8577 = G__8585;
count__8578 = G__8586;
i__8579 = G__8587;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8576);
if(temp__4657__auto__){
var seq__8576__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8576__$1)){
var c__7934__auto__ = cljs.core.chunk_first.call(null,seq__8576__$1);
var G__8588 = cljs.core.chunk_rest.call(null,seq__8576__$1);
var G__8589 = c__7934__auto__;
var G__8590 = cljs.core.count.call(null,c__7934__auto__);
var G__8591 = (0);
seq__8576 = G__8588;
chunk__8577 = G__8589;
count__8578 = G__8590;
i__8579 = G__8591;
continue;
} else {
var s = cljs.core.first.call(null,seq__8576__$1);
var temp__4657__auto___8592__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___8592__$1)){
var sheet_8593 = temp__4657__auto___8592__$1;
var temp__4657__auto___8594__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8593.href,changed);
if(cljs.core.truth_(temp__4657__auto___8594__$2)){
var href_uri_8595 = temp__4657__auto___8594__$2;
sheet_8593.ownerNode.href = href_uri_8595.makeUnique().toString();
} else {
}
} else {
}

var G__8596 = cljs.core.next.call(null,seq__8576__$1);
var G__8597 = null;
var G__8598 = (0);
var G__8599 = (0);
seq__8576 = G__8596;
chunk__8577 = G__8597;
count__8578 = G__8598;
i__8579 = G__8599;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__8604 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8605 = null;
var count__8606 = (0);
var i__8607 = (0);
while(true){
if((i__8607 < count__8606)){
var s = cljs.core._nth.call(null,chunk__8605,i__8607);
var temp__4657__auto___8608 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___8608)){
var image_8609 = temp__4657__auto___8608;
var temp__4657__auto___8610__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_8609.src,changed);
if(cljs.core.truth_(temp__4657__auto___8610__$1)){
var href_uri_8611 = temp__4657__auto___8610__$1;
image_8609.src = href_uri_8611.makeUnique().toString();
} else {
}
} else {
}

var G__8612 = seq__8604;
var G__8613 = chunk__8605;
var G__8614 = count__8606;
var G__8615 = (i__8607 + (1));
seq__8604 = G__8612;
chunk__8605 = G__8613;
count__8606 = G__8614;
i__8607 = G__8615;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8604);
if(temp__4657__auto__){
var seq__8604__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8604__$1)){
var c__7934__auto__ = cljs.core.chunk_first.call(null,seq__8604__$1);
var G__8616 = cljs.core.chunk_rest.call(null,seq__8604__$1);
var G__8617 = c__7934__auto__;
var G__8618 = cljs.core.count.call(null,c__7934__auto__);
var G__8619 = (0);
seq__8604 = G__8616;
chunk__8605 = G__8617;
count__8606 = G__8618;
i__8607 = G__8619;
continue;
} else {
var s = cljs.core.first.call(null,seq__8604__$1);
var temp__4657__auto___8620__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___8620__$1)){
var image_8621 = temp__4657__auto___8620__$1;
var temp__4657__auto___8622__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_8621.src,changed);
if(cljs.core.truth_(temp__4657__auto___8622__$2)){
var href_uri_8623 = temp__4657__auto___8622__$2;
image_8621.src = href_uri_8623.makeUnique().toString();
} else {
}
} else {
}

var G__8624 = cljs.core.next.call(null,seq__8604__$1);
var G__8625 = null;
var G__8626 = (0);
var G__8627 = (0);
seq__8604 = G__8624;
chunk__8605 = G__8625;
count__8606 = G__8626;
i__8607 = G__8627;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8630){
var map__8633 = p__8630;
var map__8633__$1 = ((((!((map__8633 == null)))?((((map__8633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8633):map__8633);
var on_jsload = cljs.core.get.call(null,map__8633__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8633,map__8633__$1,on_jsload){
return (function (p1__8628_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8628_SHARP_,".js");
});})(map__8633,map__8633__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8633,map__8633__$1,on_jsload){
return (function (p1__8629_SHARP_){
return goog.Uri.parse(p1__8629_SHARP_).makeUnique();
});})(js_files,map__8633,map__8633__$1,on_jsload))
,js_files)),({"cleanupWhenDone": true})).addCallbacks(((function (js_files,map__8633,map__8633__$1,on_jsload){
return (function() { 
var G__8635__delegate = function (_){
return on_jsload.call(null);
};
var G__8635 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8636__i = 0, G__8636__a = new Array(arguments.length -  0);
while (G__8636__i < G__8636__a.length) {G__8636__a[G__8636__i] = arguments[G__8636__i + 0]; ++G__8636__i;}
  _ = new cljs.core.IndexedSeq(G__8636__a,0);
} 
return G__8635__delegate.call(this,_);};
G__8635.cljs$lang$maxFixedArity = 0;
G__8635.cljs$lang$applyTo = (function (arglist__8637){
var _ = cljs.core.seq(arglist__8637);
return G__8635__delegate(_);
});
G__8635.cljs$core$IFn$_invoke$arity$variadic = G__8635__delegate;
return G__8635;
})()
;})(js_files,map__8633,map__8633__$1,on_jsload))
,((function (js_files,map__8633,map__8633__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8633,map__8633__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__8642_8646 = cljs.core.seq.call(null,things_to_log);
var chunk__8643_8647 = null;
var count__8644_8648 = (0);
var i__8645_8649 = (0);
while(true){
if((i__8645_8649 < count__8644_8648)){
var t_8650 = cljs.core._nth.call(null,chunk__8643_8647,i__8645_8649);
console.log(t_8650);

var G__8651 = seq__8642_8646;
var G__8652 = chunk__8643_8647;
var G__8653 = count__8644_8648;
var G__8654 = (i__8645_8649 + (1));
seq__8642_8646 = G__8651;
chunk__8643_8647 = G__8652;
count__8644_8648 = G__8653;
i__8645_8649 = G__8654;
continue;
} else {
var temp__4657__auto___8655 = cljs.core.seq.call(null,seq__8642_8646);
if(temp__4657__auto___8655){
var seq__8642_8656__$1 = temp__4657__auto___8655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8642_8656__$1)){
var c__7934__auto___8657 = cljs.core.chunk_first.call(null,seq__8642_8656__$1);
var G__8658 = cljs.core.chunk_rest.call(null,seq__8642_8656__$1);
var G__8659 = c__7934__auto___8657;
var G__8660 = cljs.core.count.call(null,c__7934__auto___8657);
var G__8661 = (0);
seq__8642_8646 = G__8658;
chunk__8643_8647 = G__8659;
count__8644_8648 = G__8660;
i__8645_8649 = G__8661;
continue;
} else {
var t_8662 = cljs.core.first.call(null,seq__8642_8656__$1);
console.log(t_8662);

var G__8663 = cljs.core.next.call(null,seq__8642_8656__$1);
var G__8664 = null;
var G__8665 = (0);
var G__8666 = (0);
seq__8642_8646 = G__8663;
chunk__8643_8647 = G__8664;
count__8644_8648 = G__8665;
i__8645_8649 = G__8666;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__8667_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8667_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__8673){
var map__8674 = p__8673;
var map__8674__$1 = ((((!((map__8674 == null)))?((((map__8674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8674):map__8674);
var canonical_path = cljs.core.get.call(null,map__8674__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__8674__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__8676 = window;
var G__8676__$1 = (((G__8676 == null))?null:G__8676.location);
if((G__8676__$1 == null)){
return null;
} else {
return G__8676__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__8677 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__8677);

adzerk.boot_reload.reload.reload_css.call(null,G__8677);

adzerk.boot_reload.reload.reload_img.call(null,G__8677);

return G__8677;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map