// Compiled by ClojureScript 1.9.473 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('goog.object');
goog.require('goog.events');

/**
 * @interface
 */
domina.events.Event = function(){};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$prevent_default$arity$1 == null)))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__7783__auto__ = (((evt == null))?null:evt);
var m__7784__auto__ = (domina.events.prevent_default[goog.typeOf(x__7783__auto__)]);
if(!((m__7784__auto__ == null))){
return m__7784__auto__.call(null,evt);
} else {
var m__7784__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__7784__auto____$1 == null))){
return m__7784__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$stop_propagation$arity$1 == null)))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__7783__auto__ = (((evt == null))?null:evt);
var m__7784__auto__ = (domina.events.stop_propagation[goog.typeOf(x__7783__auto__)]);
if(!((m__7784__auto__ == null))){
return m__7784__auto__.call(null,evt);
} else {
var m__7784__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__7784__auto____$1 == null))){
return m__7784__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$target$arity$1 == null)))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__7783__auto__ = (((evt == null))?null:evt);
var m__7784__auto__ = (domina.events.target[goog.typeOf(x__7783__auto__)]);
if(!((m__7784__auto__ == null))){
return m__7784__auto__.call(null,evt);
} else {
var m__7784__auto____$1 = (domina.events.target["_"]);
if(!((m__7784__auto____$1 == null))){
return m__7784__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$current_target$arity$1 == null)))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__7783__auto__ = (((evt == null))?null:evt);
var m__7784__auto__ = (domina.events.current_target[goog.typeOf(x__7783__auto__)]);
if(!((m__7784__auto__ == null))){
return m__7784__auto__.call(null,evt);
} else {
var m__7784__auto____$1 = (domina.events.current_target["_"]);
if(!((m__7784__auto____$1 == null))){
return m__7784__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$event_type$arity$1 == null)))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__7783__auto__ = (((evt == null))?null:evt);
var m__7784__auto__ = (domina.events.event_type[goog.typeOf(x__7783__auto__)]);
if(!((m__7784__auto__ == null))){
return m__7784__auto__.call(null,evt);
} else {
var m__7784__auto____$1 = (domina.events.event_type["_"]);
if(!((m__7784__auto____$1 == null))){
return m__7784__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$raw_event$arity$1 == null)))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__7783__auto__ = (((evt == null))?null:evt);
var m__7784__auto__ = (domina.events.raw_event[goog.typeOf(x__7783__auto__)]);
if(!((m__7784__auto__ == null))){
return m__7784__auto__.call(null,evt);
} else {
var m__7784__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__7784__auto____$1 == null))){
return m__7784__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t_domina$events9916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events9916 = (function (f,evt,meta9917){
this.f = f;
this.evt = evt;
this.meta9917 = meta9917;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events9916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9918,meta9917__$1){
var self__ = this;
var _9918__$1 = this;
return (new domina.events.t_domina$events9916(self__.f,self__.evt,meta9917__$1));
});

domina.events.t_domina$events9916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9918){
var self__ = this;
var _9918__$1 = this;
return self__.meta9917;
});

domina.events.t_domina$events9916.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events9916.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events9916.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events9916.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events9916.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events9916.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events9916.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events9916.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4655__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4655__auto__)){
var val = temp__4655__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t_domina$events9916.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__7115__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__7115__auto__)){
return or__7115__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events9916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta9917","meta9917",154459458,null)], null);
});

domina.events.t_domina$events9916.cljs$lang$type = true;

domina.events.t_domina$events9916.cljs$lang$ctorStr = "domina.events/t_domina$events9916";

domina.events.t_domina$events9916.cljs$lang$ctorPrWriter = (function (this__7726__auto__,writer__7727__auto__,opt__7728__auto__){
return cljs.core._write.call(null,writer__7727__auto__,"domina.events/t_domina$events9916");
});

domina.events.__GT_t_domina$events9916 = (function domina$events$create_listener_function_$___GT_t_domina$events9916(f__$1,evt__$1,meta9917){
return (new domina.events.t_domina$events9916(f__$1,evt__$1,meta9917));
});

}

return (new domina.events.t_domina$events9916(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__7903__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__9923(s__9924){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__9924__$1 = s__9924;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9924__$1);
if(temp__4657__auto__){
var s__9924__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9924__$2)){
var c__7901__auto__ = cljs.core.chunk_first.call(null,s__9924__$2);
var size__7902__auto__ = cljs.core.count.call(null,c__7901__auto__);
var b__9926 = cljs.core.chunk_buffer.call(null,size__7902__auto__);
if((function (){var i__9925 = (0);
while(true){
if((i__9925 < size__7902__auto__)){
var node = cljs.core._nth.call(null,c__7901__auto__,i__9925);
cljs.core.chunk_append.call(null,b__9926,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__9927 = (i__9925 + (1));
i__9925 = G__9927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9926),domina$events$listen_internal_BANG__$_iter__9923.call(null,cljs.core.chunk_rest.call(null,s__9924__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9926),null);
}
} else {
var node = cljs.core.first.call(null,s__9924__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__9923.call(null,cljs.core.rest.call(null,s__9924__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__7903__auto__.call(null,domina.core.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var args9928 = [];
var len__8228__auto___9931 = arguments.length;
var i__8229__auto___9932 = (0);
while(true){
if((i__8229__auto___9932 < len__8228__auto___9931)){
args9928.push((arguments[i__8229__auto___9932]));

var G__9933 = (i__8229__auto___9932 + (1));
i__8229__auto___9932 = G__9933;
continue;
} else {
}
break;
}

var G__9930 = args9928.length;
switch (G__9930) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9928.length)].join('')));

}
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});

domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var args9935 = [];
var len__8228__auto___9938 = arguments.length;
var i__8229__auto___9939 = (0);
while(true){
if((i__8229__auto___9939 < len__8228__auto___9938)){
args9935.push((arguments[i__8229__auto___9939]));

var G__9940 = (i__8229__auto___9939 + (1));
i__8229__auto___9939 = G__9940;
continue;
} else {
}
break;
}

var G__9937 = args9935.length;
switch (G__9937) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9935.length)].join('')));

}
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});

domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var args9942 = [];
var len__8228__auto___9945 = arguments.length;
var i__8229__auto___9946 = (0);
while(true){
if((i__8229__auto___9946 < len__8228__auto___9945)){
args9942.push((arguments[i__8229__auto___9946]));

var G__9947 = (i__8229__auto___9946 + (1));
i__8229__auto___9946 = G__9947;
continue;
} else {
}
break;
}

var G__9944 = args9942.length;
switch (G__9944) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9942.length)].join('')));

}
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});

domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var args9949 = [];
var len__8228__auto___9952 = arguments.length;
var i__8229__auto___9953 = (0);
while(true){
if((i__8229__auto___9953 < len__8228__auto___9952)){
args9949.push((arguments[i__8229__auto___9953]));

var G__9954 = (i__8229__auto___9953 + (1));
i__8229__auto___9953 = G__9954;
continue;
} else {
}
break;
}

var G__9951 = args9949.length;
switch (G__9951) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9949.length)].join('')));

}
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});

domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var args9956 = [];
var len__8228__auto___9967 = arguments.length;
var i__8229__auto___9968 = (0);
while(true){
if((i__8229__auto___9968 < len__8228__auto___9967)){
args9956.push((arguments[i__8229__auto___9968]));

var G__9969 = (i__8229__auto___9968 + (1));
i__8229__auto___9968 = G__9969;
continue;
} else {
}
break;
}

var G__9958 = args9956.length;
switch (G__9958) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9956.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__9959 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9960 = null;
var count__9961 = (0);
var i__9962 = (0);
while(true){
if((i__9962 < count__9961)){
var node = cljs.core._nth.call(null,chunk__9960,i__9962);
goog.events.removeAll(node);

var G__9971 = seq__9959;
var G__9972 = chunk__9960;
var G__9973 = count__9961;
var G__9974 = (i__9962 + (1));
seq__9959 = G__9971;
chunk__9960 = G__9972;
count__9961 = G__9973;
i__9962 = G__9974;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9959);
if(temp__4657__auto__){
var seq__9959__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9959__$1)){
var c__7934__auto__ = cljs.core.chunk_first.call(null,seq__9959__$1);
var G__9975 = cljs.core.chunk_rest.call(null,seq__9959__$1);
var G__9976 = c__7934__auto__;
var G__9977 = cljs.core.count.call(null,c__7934__auto__);
var G__9978 = (0);
seq__9959 = G__9975;
chunk__9960 = G__9976;
count__9961 = G__9977;
i__9962 = G__9978;
continue;
} else {
var node = cljs.core.first.call(null,seq__9959__$1);
goog.events.removeAll(node);

var G__9979 = cljs.core.next.call(null,seq__9959__$1);
var G__9980 = null;
var G__9981 = (0);
var G__9982 = (0);
seq__9959 = G__9979;
chunk__9960 = G__9980;
count__9961 = G__9981;
i__9962 = G__9982;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__9963 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9964 = null;
var count__9965 = (0);
var i__9966 = (0);
while(true){
if((i__9966 < count__9965)){
var node = cljs.core._nth.call(null,chunk__9964,i__9966);
goog.events.removeAll(node,type__$1);

var G__9983 = seq__9963;
var G__9984 = chunk__9964;
var G__9985 = count__9965;
var G__9986 = (i__9966 + (1));
seq__9963 = G__9983;
chunk__9964 = G__9984;
count__9965 = G__9985;
i__9966 = G__9986;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9963);
if(temp__4657__auto__){
var seq__9963__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9963__$1)){
var c__7934__auto__ = cljs.core.chunk_first.call(null,seq__9963__$1);
var G__9987 = cljs.core.chunk_rest.call(null,seq__9963__$1);
var G__9988 = c__7934__auto__;
var G__9989 = cljs.core.count.call(null,c__7934__auto__);
var G__9990 = (0);
seq__9963 = G__9987;
chunk__9964 = G__9988;
count__9965 = G__9989;
i__9966 = G__9990;
continue;
} else {
var node = cljs.core.first.call(null,seq__9963__$1);
goog.events.removeAll(node,type__$1);

var G__9991 = cljs.core.next.call(null,seq__9963__$1);
var G__9992 = null;
var G__9993 = (0);
var G__9994 = (0);
seq__9963 = G__9991;
chunk__9964 = G__9992;
count__9965 = G__9993;
i__9966 = G__9994;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var args9995 = [];
var len__8228__auto___9998 = arguments.length;
var i__8229__auto___9999 = (0);
while(true){
if((i__8229__auto___9999 < len__8228__auto___9998)){
args9995.push((arguments[i__8229__auto___9999]));

var G__10000 = (i__8229__auto___9999 + (1));
i__8229__auto___9999 = G__10000;
continue;
} else {
}
break;
}

var G__9997 = args9995.length;
switch (G__9997) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9995.length)].join('')));

}
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__4655__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4655__auto__)){
var parent = temp__4655__auto__;
var G__10002 = parent;
var G__10003 = cljs.core.cons.call(null,parent,so_far);
n = G__10002;
so_far = G__10003;
continue;
} else {
return so_far;
}
break;
}
});

domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2;

/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
var ancestors = domina.events.ancestor_nodes.call(null,domina.core.single_node.call(null,source));
var seq__10012_10020 = cljs.core.seq.call(null,ancestors);
var chunk__10013_10021 = null;
var count__10014_10022 = (0);
var i__10015_10023 = (0);
while(true){
if((i__10015_10023 < count__10014_10022)){
var n_10024 = cljs.core._nth.call(null,chunk__10013_10021,i__10015_10023);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_10024;

goog.events.fireListeners(n_10024,evt.type,true,evt);
}

var G__10025 = seq__10012_10020;
var G__10026 = chunk__10013_10021;
var G__10027 = count__10014_10022;
var G__10028 = (i__10015_10023 + (1));
seq__10012_10020 = G__10025;
chunk__10013_10021 = G__10026;
count__10014_10022 = G__10027;
i__10015_10023 = G__10028;
continue;
} else {
var temp__4657__auto___10029 = cljs.core.seq.call(null,seq__10012_10020);
if(temp__4657__auto___10029){
var seq__10012_10030__$1 = temp__4657__auto___10029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10012_10030__$1)){
var c__7934__auto___10031 = cljs.core.chunk_first.call(null,seq__10012_10030__$1);
var G__10032 = cljs.core.chunk_rest.call(null,seq__10012_10030__$1);
var G__10033 = c__7934__auto___10031;
var G__10034 = cljs.core.count.call(null,c__7934__auto___10031);
var G__10035 = (0);
seq__10012_10020 = G__10032;
chunk__10013_10021 = G__10033;
count__10014_10022 = G__10034;
i__10015_10023 = G__10035;
continue;
} else {
var n_10036 = cljs.core.first.call(null,seq__10012_10030__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_10036;

goog.events.fireListeners(n_10036,evt.type,true,evt);
}

var G__10037 = cljs.core.next.call(null,seq__10012_10030__$1);
var G__10038 = null;
var G__10039 = (0);
var G__10040 = (0);
seq__10012_10020 = G__10037;
chunk__10013_10021 = G__10038;
count__10014_10022 = G__10039;
i__10015_10023 = G__10040;
continue;
}
} else {
}
}
break;
}

var seq__10016_10041 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__10017_10042 = null;
var count__10018_10043 = (0);
var i__10019_10044 = (0);
while(true){
if((i__10019_10044 < count__10018_10043)){
var n_10045 = cljs.core._nth.call(null,chunk__10017_10042,i__10019_10044);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_10045;

goog.events.fireListeners(n_10045,evt.type,false,evt);
}

var G__10046 = seq__10016_10041;
var G__10047 = chunk__10017_10042;
var G__10048 = count__10018_10043;
var G__10049 = (i__10019_10044 + (1));
seq__10016_10041 = G__10046;
chunk__10017_10042 = G__10047;
count__10018_10043 = G__10048;
i__10019_10044 = G__10049;
continue;
} else {
var temp__4657__auto___10050 = cljs.core.seq.call(null,seq__10016_10041);
if(temp__4657__auto___10050){
var seq__10016_10051__$1 = temp__4657__auto___10050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10016_10051__$1)){
var c__7934__auto___10052 = cljs.core.chunk_first.call(null,seq__10016_10051__$1);
var G__10053 = cljs.core.chunk_rest.call(null,seq__10016_10051__$1);
var G__10054 = c__7934__auto___10052;
var G__10055 = cljs.core.count.call(null,c__7934__auto___10052);
var G__10056 = (0);
seq__10016_10041 = G__10053;
chunk__10017_10042 = G__10054;
count__10018_10043 = G__10055;
i__10019_10044 = G__10056;
continue;
} else {
var n_10057 = cljs.core.first.call(null,seq__10016_10051__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_10057;

goog.events.fireListeners(n_10057,evt.type,false,evt);
}

var G__10058 = cljs.core.next.call(null,seq__10016_10051__$1);
var G__10059 = null;
var G__10060 = (0);
var G__10061 = (0);
seq__10016_10041 = G__10058;
chunk__10017_10042 = G__10059;
count__10018_10043 = G__10060;
i__10019_10044 = G__10061;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__7103__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__7103__auto__)){
return o.dispatchEvent;
} else {
return and__7103__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var args10062 = [];
var len__8228__auto___10075 = arguments.length;
var i__8229__auto___10076 = (0);
while(true){
if((i__8229__auto___10076 < len__8228__auto___10075)){
args10062.push((arguments[i__8229__auto___10076]));

var G__10077 = (i__8229__auto___10076 + (1));
i__8229__auto___10076 = G__10077;
continue;
} else {
}
break;
}

var G__10064 = args10062.length;
switch (G__10064) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10062.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__10065_10079 = cljs.core.seq.call(null,evt_map);
var chunk__10066_10080 = null;
var count__10067_10081 = (0);
var i__10068_10082 = (0);
while(true){
if((i__10068_10082 < count__10067_10081)){
var vec__10069_10083 = cljs.core._nth.call(null,chunk__10066_10080,i__10068_10082);
var k_10084 = cljs.core.nth.call(null,vec__10069_10083,(0),null);
var v_10085 = cljs.core.nth.call(null,vec__10069_10083,(1),null);
(evt[k_10084] = v_10085);

var G__10086 = seq__10065_10079;
var G__10087 = chunk__10066_10080;
var G__10088 = count__10067_10081;
var G__10089 = (i__10068_10082 + (1));
seq__10065_10079 = G__10086;
chunk__10066_10080 = G__10087;
count__10067_10081 = G__10088;
i__10068_10082 = G__10089;
continue;
} else {
var temp__4657__auto___10090 = cljs.core.seq.call(null,seq__10065_10079);
if(temp__4657__auto___10090){
var seq__10065_10091__$1 = temp__4657__auto___10090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10065_10091__$1)){
var c__7934__auto___10092 = cljs.core.chunk_first.call(null,seq__10065_10091__$1);
var G__10093 = cljs.core.chunk_rest.call(null,seq__10065_10091__$1);
var G__10094 = c__7934__auto___10092;
var G__10095 = cljs.core.count.call(null,c__7934__auto___10092);
var G__10096 = (0);
seq__10065_10079 = G__10093;
chunk__10066_10080 = G__10094;
count__10067_10081 = G__10095;
i__10068_10082 = G__10096;
continue;
} else {
var vec__10072_10097 = cljs.core.first.call(null,seq__10065_10091__$1);
var k_10098 = cljs.core.nth.call(null,vec__10072_10097,(0),null);
var v_10099 = cljs.core.nth.call(null,vec__10072_10097,(1),null);
(evt[k_10098] = v_10099);

var G__10100 = cljs.core.next.call(null,seq__10065_10091__$1);
var G__10101 = null;
var G__10102 = (0);
var G__10103 = (0);
seq__10065_10079 = G__10100;
chunk__10066_10080 = G__10101;
count__10067_10081 = G__10102;
i__10068_10082 = G__10103;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});

domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__10104_SHARP_){
return goog.events.getListeners(p1__10104_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map