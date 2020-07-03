// Compiled by ClojureScript 1.9.473 {}
goog.provide('shoreleave.browser.cookies');
goog.require('cljs.core');
goog.require('goog.net.Cookies');
goog.require('goog.string');
goog.net.Cookies.prototype.cljs$core$ITransientAssociative$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.Cookies.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (c,k,v){
var c__$1 = this;
var temp__4657__auto__ = (function (){var and__7103__auto__ = c__$1.isValidName(cljs.core.name.call(null,k));
if(cljs.core.truth_(and__7103__auto__)){
return cljs.core.name.call(null,k);
} else {
return and__7103__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var k__$1 = temp__4657__auto__;
return c__$1.set(k__$1,v);
} else {
return null;
}
});

goog.net.Cookies.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.Cookies.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (c,k){
var c__$1 = this;
return cljs.core._lookup.call(null,c__$1,k,null);
});

goog.net.Cookies.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (c,k,not_found){
var c__$1 = this;
var v = c__$1.get(cljs.core.name.call(null,k),not_found);
if(typeof v === 'string'){
return goog.string.urlDecode(v);
} else {
return v;
}
});

goog.net.Cookies.prototype.cljs$core$ITransientMap$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.Cookies.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (c,k){
var c__$1 = this;
var temp__4657__auto__ = (function (){var and__7103__auto__ = c__$1.isValidName(cljs.core.name.call(null,k));
if(cljs.core.truth_(and__7103__auto__)){
return cljs.core.name.call(null,k);
} else {
return and__7103__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var k__$1 = temp__4657__auto__;
return c__$1.remove(k__$1);
} else {
return null;
}
});

goog.net.Cookies.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.Cookies.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (c,writer,opts){
var c__$1 = this;
return cljs.core._write.call(null,writer,cljs.core._persistent_BANG_.call(null,c__$1));
});

goog.net.Cookies.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.Cookies.prototype.cljs$core$ICounted$_count$arity$1 = (function (c){
var c__$1 = this;
return c__$1.getCount();
});

goog.net.Cookies.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.Cookies.prototype.cljs$core$IHash$_hash$arity$1 = (function (c){
var c__$1 = this;
return cljs.core._hash.call(null,cljs.core._persistent_BANG_.call(null,c__$1));
});

goog.net.Cookies.prototype.cljs$core$ITransientCollection$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.Cookies.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (c){
var c__$1 = this;
return shoreleave.browser.cookies.as_hash_map.call(null,c__$1);
});

goog.net.Cookies.prototype.cljs$core$IAssociative$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.Cookies.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (c,k,v){
var c__$1 = this;
return cljs.core._assoc.call(null,cljs.core._persistent_BANG_.call(null,c__$1),k,v);
});

goog.net.Cookies.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (c,k){
var c__$1 = this;
return c__$1.containsKey(cljs.core.name.call(null,k));
});

goog.net.Cookies.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.Cookies.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (c){
var c__$1 = this;
return cljs.core.map.call(null,cljs.core.vector,c__$1.getKeys(),c__$1.getValues());
});

goog.net.Cookies.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.Cookies.prototype.call = (function() {
var G__9864 = null;
var G__9864__2 = (function (self__,k){
var self____$1 = this;
var c = self____$1;
return cljs.core._lookup.call(null,c,k);
});
var G__9864__3 = (function (self__,k,not_found){
var self____$1 = this;
var c = self____$1;
return cljs.core._lookup.call(null,c,k,not_found);
});
G__9864 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__9864__2.call(this,self__,k);
case 3:
return G__9864__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9864.cljs$core$IFn$_invoke$arity$2 = G__9864__2;
G__9864.cljs$core$IFn$_invoke$arity$3 = G__9864__3;
return G__9864;
})()
;

goog.net.Cookies.prototype.apply = (function (self__,args9863){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9863)));
});

goog.net.Cookies.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var c = this;
return cljs.core._lookup.call(null,c,k);
});

goog.net.Cookies.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var c = this;
return cljs.core._lookup.call(null,c,k,not_found);
});
shoreleave.browser.cookies.cookies = (new goog.net.Cookies(document));
shoreleave.browser.cookies.as_hash_map = (function shoreleave$browser$cookies$as_hash_map(var_args){
var args9865 = [];
var len__8228__auto___9868 = arguments.length;
var i__8229__auto___9869 = (0);
while(true){
if((i__8229__auto___9869 < len__8228__auto___9868)){
args9865.push((arguments[i__8229__auto___9869]));

var G__9870 = (i__8229__auto___9869 + (1));
i__8229__auto___9869 = G__9870;
continue;
} else {
}
break;
}

var G__9867 = args9865.length;
switch (G__9867) {
case 0:
return shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9865.length)].join('')));

}
});

shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$0 = (function (){
return shoreleave.browser.cookies.as_hash_map.call(null,shoreleave.browser.cookies.cookies);
});

shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$1 = (function (cks){
return cljs.core.zipmap.call(null,cks.getKeys(),cks.getValues());
});

shoreleave.browser.cookies.as_hash_map.cljs$lang$maxFixedArity = 1;

/**
 * Returns a boolean, true if cookies are currently enabled for the browser
 */
shoreleave.browser.cookies.cookies_enabled_QMARK_ = (function shoreleave$browser$cookies$cookies_enabled_QMARK_(var_args){
var args9872 = [];
var len__8228__auto___9875 = arguments.length;
var i__8229__auto___9876 = (0);
while(true){
if((i__8229__auto___9876 < len__8228__auto___9875)){
args9872.push((arguments[i__8229__auto___9876]));

var G__9877 = (i__8229__auto___9876 + (1));
i__8229__auto___9876 = G__9877;
continue;
} else {
}
break;
}

var G__9874 = args9872.length;
switch (G__9874) {
case 0:
return shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9872.length)].join('')));

}
});

shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return shoreleave.browser.cookies.cookies_enabled_QMARK_.call(null,shoreleave.browser.cookies.cookies);
});

shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (cks){
return cks.isEnabled();
});

shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$lang$maxFixedArity = 1;

shoreleave.browser.cookies.empty_BANG_ = (function shoreleave$browser$cookies$empty_BANG_(cks){
return cks.clear();
});

//# sourceMappingURL=cookies.js.map