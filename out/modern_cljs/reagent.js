// Compiled by ClojureScript 1.9.473 {}
goog.provide('modern_cljs.reagent');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.marked');
modern_cljs.reagent.data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"author","author",2111686192),"Pete Hunt",new cljs.core.Keyword(null,"text","text",-1790561697),"This is one comment"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"author","author",2111686192),"Jordan Walke",new cljs.core.Keyword(null,"text","text",-1790561697),"This is *another* comment"], null)], null);
modern_cljs.reagent.comment_component = (function modern_cljs$reagent$comment_component(author,comment){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),author], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),({"__html": marked(comment,({"sanitize": true}))})], null)], null)], null);
});
modern_cljs.reagent.comment_list = (function modern_cljs$reagent$comment_list(comments){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__11053__auto__ = (function modern_cljs$reagent$comment_list_$_iter__11971(s__11972){
return (new cljs.core.LazySeq(null,(function (){
var s__11972__$1 = s__11972;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11972__$1);
if(temp__4657__auto__){
var s__11972__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11972__$2)){
var c__11051__auto__ = cljs.core.chunk_first.call(null,s__11972__$2);
var size__11052__auto__ = cljs.core.count.call(null,c__11051__auto__);
var b__11974 = cljs.core.chunk_buffer.call(null,size__11052__auto__);
if((function (){var i__11973 = (0);
while(true){
if((i__11973 < size__11052__auto__)){
var map__11979 = cljs.core._nth.call(null,c__11051__auto__,i__11973);
var map__11979__$1 = ((((!((map__11979 == null)))?((((map__11979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11979):map__11979);
var id = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var author = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var text = cljs.core.get.call(null,map__11979__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cljs.core.chunk_append.call(null,b__11974,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_component,author,text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__11983 = (i__11973 + (1));
i__11973 = G__11983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11974),modern_cljs$reagent$comment_list_$_iter__11971.call(null,cljs.core.chunk_rest.call(null,s__11972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11974),null);
}
} else {
var map__11981 = cljs.core.first.call(null,s__11972__$2);
var map__11981__$1 = ((((!((map__11981 == null)))?((((map__11981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11981):map__11981);
var id = cljs.core.get.call(null,map__11981__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var author = cljs.core.get.call(null,map__11981__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var text = cljs.core.get.call(null,map__11981__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_component,author,text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),modern_cljs$reagent$comment_list_$_iter__11971.call(null,cljs.core.rest.call(null,s__11972__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11053__auto__.call(null,comments);
})()], null);
});
modern_cljs.reagent.comment_form = (function modern_cljs$reagent$comment_form(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello, world! I'm a comment-form"], null);
});
modern_cljs.reagent.comment_box = (function modern_cljs$reagent$comment_box(comments){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Comments"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_list,comments], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_form], null)], null);
});

//# sourceMappingURL=reagent.js.map