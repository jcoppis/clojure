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
var x__10523__auto__ = (((evt == null))?null:evt);
var m__10524__auto__ = (domina.events.prevent_default[goog.typeOf(x__10523__auto__)]);
if(!((m__10524__auto__ == null))){
return m__10524__auto__.call(null,evt);
} else {
var m__10524__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__10524__auto____$1 == null))){
return m__10524__auto____$1.call(null,evt);
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
var x__10523__auto__ = (((evt == null))?null:evt);
var m__10524__auto__ = (domina.events.stop_propagation[goog.typeOf(x__10523__auto__)]);
if(!((m__10524__auto__ == null))){
return m__10524__auto__.call(null,evt);
} else {
var m__10524__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__10524__auto____$1 == null))){
return m__10524__auto____$1.call(null,evt);
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
var x__10523__auto__ = (((evt == null))?null:evt);
var m__10524__auto__ = (domina.events.target[goog.typeOf(x__10523__auto__)]);
if(!((m__10524__auto__ == null))){
return m__10524__auto__.call(null,evt);
} else {
var m__10524__auto____$1 = (domina.events.target["_"]);
if(!((m__10524__auto____$1 == null))){
return m__10524__auto____$1.call(null,evt);
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
var x__10523__auto__ = (((evt == null))?null:evt);
var m__10524__auto__ = (domina.events.current_target[goog.typeOf(x__10523__auto__)]);
if(!((m__10524__auto__ == null))){
return m__10524__auto__.call(null,evt);
} else {
var m__10524__auto____$1 = (domina.events.current_target["_"]);
if(!((m__10524__auto____$1 == null))){
return m__10524__auto____$1.call(null,evt);
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
var x__10523__auto__ = (((evt == null))?null:evt);
var m__10524__auto__ = (domina.events.event_type[goog.typeOf(x__10523__auto__)]);
if(!((m__10524__auto__ == null))){
return m__10524__auto__.call(null,evt);
} else {
var m__10524__auto____$1 = (domina.events.event_type["_"]);
if(!((m__10524__auto____$1 == null))){
return m__10524__auto____$1.call(null,evt);
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
var x__10523__auto__ = (((evt == null))?null:evt);
var m__10524__auto__ = (domina.events.raw_event[goog.typeOf(x__10523__auto__)]);
if(!((m__10524__auto__ == null))){
return m__10524__auto__.call(null,evt);
} else {
var m__10524__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__10524__auto____$1 == null))){
return m__10524__auto____$1.call(null,evt);
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
if(typeof domina.events.t_domina$events11416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events11416 = (function (f,evt,meta11417){
this.f = f;
this.evt = evt;
this.meta11417 = meta11417;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events11416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11418,meta11417__$1){
var self__ = this;
var _11418__$1 = this;
return (new domina.events.t_domina$events11416(self__.f,self__.evt,meta11417__$1));
});

domina.events.t_domina$events11416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11418){
var self__ = this;
var _11418__$1 = this;
return self__.meta11417;
});

domina.events.t_domina$events11416.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events11416.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events11416.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events11416.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events11416.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events11416.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events11416.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events11416.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events11416.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__9855__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__9855__auto__)){
return or__9855__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events11416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta11417","meta11417",848473830,null)], null);
});

domina.events.t_domina$events11416.cljs$lang$type = true;

domina.events.t_domina$events11416.cljs$lang$ctorStr = "domina.events/t_domina$events11416";

domina.events.t_domina$events11416.cljs$lang$ctorPrWriter = (function (this__10466__auto__,writer__10467__auto__,opt__10468__auto__){
return cljs.core._write.call(null,writer__10467__auto__,"domina.events/t_domina$events11416");
});

domina.events.__GT_t_domina$events11416 = (function domina$events$create_listener_function_$___GT_t_domina$events11416(f__$1,evt__$1,meta11417){
return (new domina.events.t_domina$events11416(f__$1,evt__$1,meta11417));
});

}

return (new domina.events.t_domina$events11416(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__10643__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__11423(s__11424){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__11424__$1 = s__11424;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11424__$1);
if(temp__4657__auto__){
var s__11424__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11424__$2)){
var c__10641__auto__ = cljs.core.chunk_first.call(null,s__11424__$2);
var size__10642__auto__ = cljs.core.count.call(null,c__10641__auto__);
var b__11426 = cljs.core.chunk_buffer.call(null,size__10642__auto__);
if((function (){var i__11425 = (0);
while(true){
if((i__11425 < size__10642__auto__)){
var node = cljs.core._nth.call(null,c__10641__auto__,i__11425);
cljs.core.chunk_append.call(null,b__11426,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__11427 = (i__11425 + (1));
i__11425 = G__11427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11426),domina$events$listen_internal_BANG__$_iter__11423.call(null,cljs.core.chunk_rest.call(null,s__11424__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11426),null);
}
} else {
var node = cljs.core.first.call(null,s__11424__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__11423.call(null,cljs.core.rest.call(null,s__11424__$2)));
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
return iter__10643__auto__.call(null,domina.core.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var args11428 = [];
var len__10968__auto___11431 = arguments.length;
var i__10969__auto___11432 = (0);
while(true){
if((i__10969__auto___11432 < len__10968__auto___11431)){
args11428.push((arguments[i__10969__auto___11432]));

var G__11433 = (i__10969__auto___11432 + (1));
i__10969__auto___11432 = G__11433;
continue;
} else {
}
break;
}

var G__11430 = args11428.length;
switch (G__11430) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11428.length)].join('')));

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
var args11435 = [];
var len__10968__auto___11438 = arguments.length;
var i__10969__auto___11439 = (0);
while(true){
if((i__10969__auto___11439 < len__10968__auto___11438)){
args11435.push((arguments[i__10969__auto___11439]));

var G__11440 = (i__10969__auto___11439 + (1));
i__10969__auto___11439 = G__11440;
continue;
} else {
}
break;
}

var G__11437 = args11435.length;
switch (G__11437) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11435.length)].join('')));

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
var args11442 = [];
var len__10968__auto___11445 = arguments.length;
var i__10969__auto___11446 = (0);
while(true){
if((i__10969__auto___11446 < len__10968__auto___11445)){
args11442.push((arguments[i__10969__auto___11446]));

var G__11447 = (i__10969__auto___11446 + (1));
i__10969__auto___11446 = G__11447;
continue;
} else {
}
break;
}

var G__11444 = args11442.length;
switch (G__11444) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11442.length)].join('')));

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
var args11449 = [];
var len__10968__auto___11452 = arguments.length;
var i__10969__auto___11453 = (0);
while(true){
if((i__10969__auto___11453 < len__10968__auto___11452)){
args11449.push((arguments[i__10969__auto___11453]));

var G__11454 = (i__10969__auto___11453 + (1));
i__10969__auto___11453 = G__11454;
continue;
} else {
}
break;
}

var G__11451 = args11449.length;
switch (G__11451) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11449.length)].join('')));

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
var args11456 = [];
var len__10968__auto___11467 = arguments.length;
var i__10969__auto___11468 = (0);
while(true){
if((i__10969__auto___11468 < len__10968__auto___11467)){
args11456.push((arguments[i__10969__auto___11468]));

var G__11469 = (i__10969__auto___11468 + (1));
i__10969__auto___11468 = G__11469;
continue;
} else {
}
break;
}

var G__11458 = args11456.length;
switch (G__11458) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11456.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__11459 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11460 = null;
var count__11461 = (0);
var i__11462 = (0);
while(true){
if((i__11462 < count__11461)){
var node = cljs.core._nth.call(null,chunk__11460,i__11462);
goog.events.removeAll(node);

var G__11471 = seq__11459;
var G__11472 = chunk__11460;
var G__11473 = count__11461;
var G__11474 = (i__11462 + (1));
seq__11459 = G__11471;
chunk__11460 = G__11472;
count__11461 = G__11473;
i__11462 = G__11474;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11459);
if(temp__4657__auto__){
var seq__11459__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11459__$1)){
var c__10674__auto__ = cljs.core.chunk_first.call(null,seq__11459__$1);
var G__11475 = cljs.core.chunk_rest.call(null,seq__11459__$1);
var G__11476 = c__10674__auto__;
var G__11477 = cljs.core.count.call(null,c__10674__auto__);
var G__11478 = (0);
seq__11459 = G__11475;
chunk__11460 = G__11476;
count__11461 = G__11477;
i__11462 = G__11478;
continue;
} else {
var node = cljs.core.first.call(null,seq__11459__$1);
goog.events.removeAll(node);

var G__11479 = cljs.core.next.call(null,seq__11459__$1);
var G__11480 = null;
var G__11481 = (0);
var G__11482 = (0);
seq__11459 = G__11479;
chunk__11460 = G__11480;
count__11461 = G__11481;
i__11462 = G__11482;
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
var seq__11463 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11464 = null;
var count__11465 = (0);
var i__11466 = (0);
while(true){
if((i__11466 < count__11465)){
var node = cljs.core._nth.call(null,chunk__11464,i__11466);
goog.events.removeAll(node,type__$1);

var G__11483 = seq__11463;
var G__11484 = chunk__11464;
var G__11485 = count__11465;
var G__11486 = (i__11466 + (1));
seq__11463 = G__11483;
chunk__11464 = G__11484;
count__11465 = G__11485;
i__11466 = G__11486;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11463);
if(temp__4657__auto__){
var seq__11463__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11463__$1)){
var c__10674__auto__ = cljs.core.chunk_first.call(null,seq__11463__$1);
var G__11487 = cljs.core.chunk_rest.call(null,seq__11463__$1);
var G__11488 = c__10674__auto__;
var G__11489 = cljs.core.count.call(null,c__10674__auto__);
var G__11490 = (0);
seq__11463 = G__11487;
chunk__11464 = G__11488;
count__11465 = G__11489;
i__11466 = G__11490;
continue;
} else {
var node = cljs.core.first.call(null,seq__11463__$1);
goog.events.removeAll(node,type__$1);

var G__11491 = cljs.core.next.call(null,seq__11463__$1);
var G__11492 = null;
var G__11493 = (0);
var G__11494 = (0);
seq__11463 = G__11491;
chunk__11464 = G__11492;
count__11465 = G__11493;
i__11466 = G__11494;
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
var args11495 = [];
var len__10968__auto___11498 = arguments.length;
var i__10969__auto___11499 = (0);
while(true){
if((i__10969__auto___11499 < len__10968__auto___11498)){
args11495.push((arguments[i__10969__auto___11499]));

var G__11500 = (i__10969__auto___11499 + (1));
i__10969__auto___11499 = G__11500;
continue;
} else {
}
break;
}

var G__11497 = args11495.length;
switch (G__11497) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11495.length)].join('')));

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
var G__11502 = parent;
var G__11503 = cljs.core.cons.call(null,parent,so_far);
n = G__11502;
so_far = G__11503;
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
var seq__11512_11520 = cljs.core.seq.call(null,ancestors);
var chunk__11513_11521 = null;
var count__11514_11522 = (0);
var i__11515_11523 = (0);
while(true){
if((i__11515_11523 < count__11514_11522)){
var n_11524 = cljs.core._nth.call(null,chunk__11513_11521,i__11515_11523);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_11524;

goog.events.fireListeners(n_11524,evt.type,true,evt);
}

var G__11525 = seq__11512_11520;
var G__11526 = chunk__11513_11521;
var G__11527 = count__11514_11522;
var G__11528 = (i__11515_11523 + (1));
seq__11512_11520 = G__11525;
chunk__11513_11521 = G__11526;
count__11514_11522 = G__11527;
i__11515_11523 = G__11528;
continue;
} else {
var temp__4657__auto___11529 = cljs.core.seq.call(null,seq__11512_11520);
if(temp__4657__auto___11529){
var seq__11512_11530__$1 = temp__4657__auto___11529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11512_11530__$1)){
var c__10674__auto___11531 = cljs.core.chunk_first.call(null,seq__11512_11530__$1);
var G__11532 = cljs.core.chunk_rest.call(null,seq__11512_11530__$1);
var G__11533 = c__10674__auto___11531;
var G__11534 = cljs.core.count.call(null,c__10674__auto___11531);
var G__11535 = (0);
seq__11512_11520 = G__11532;
chunk__11513_11521 = G__11533;
count__11514_11522 = G__11534;
i__11515_11523 = G__11535;
continue;
} else {
var n_11536 = cljs.core.first.call(null,seq__11512_11530__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_11536;

goog.events.fireListeners(n_11536,evt.type,true,evt);
}

var G__11537 = cljs.core.next.call(null,seq__11512_11530__$1);
var G__11538 = null;
var G__11539 = (0);
var G__11540 = (0);
seq__11512_11520 = G__11537;
chunk__11513_11521 = G__11538;
count__11514_11522 = G__11539;
i__11515_11523 = G__11540;
continue;
}
} else {
}
}
break;
}

var seq__11516_11541 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__11517_11542 = null;
var count__11518_11543 = (0);
var i__11519_11544 = (0);
while(true){
if((i__11519_11544 < count__11518_11543)){
var n_11545 = cljs.core._nth.call(null,chunk__11517_11542,i__11519_11544);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_11545;

goog.events.fireListeners(n_11545,evt.type,false,evt);
}

var G__11546 = seq__11516_11541;
var G__11547 = chunk__11517_11542;
var G__11548 = count__11518_11543;
var G__11549 = (i__11519_11544 + (1));
seq__11516_11541 = G__11546;
chunk__11517_11542 = G__11547;
count__11518_11543 = G__11548;
i__11519_11544 = G__11549;
continue;
} else {
var temp__4657__auto___11550 = cljs.core.seq.call(null,seq__11516_11541);
if(temp__4657__auto___11550){
var seq__11516_11551__$1 = temp__4657__auto___11550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11516_11551__$1)){
var c__10674__auto___11552 = cljs.core.chunk_first.call(null,seq__11516_11551__$1);
var G__11553 = cljs.core.chunk_rest.call(null,seq__11516_11551__$1);
var G__11554 = c__10674__auto___11552;
var G__11555 = cljs.core.count.call(null,c__10674__auto___11552);
var G__11556 = (0);
seq__11516_11541 = G__11553;
chunk__11517_11542 = G__11554;
count__11518_11543 = G__11555;
i__11519_11544 = G__11556;
continue;
} else {
var n_11557 = cljs.core.first.call(null,seq__11516_11551__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_11557;

goog.events.fireListeners(n_11557,evt.type,false,evt);
}

var G__11558 = cljs.core.next.call(null,seq__11516_11551__$1);
var G__11559 = null;
var G__11560 = (0);
var G__11561 = (0);
seq__11516_11541 = G__11558;
chunk__11517_11542 = G__11559;
count__11518_11543 = G__11560;
i__11519_11544 = G__11561;
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
var and__9843__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__9843__auto__)){
return o.dispatchEvent;
} else {
return and__9843__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var args11562 = [];
var len__10968__auto___11575 = arguments.length;
var i__10969__auto___11576 = (0);
while(true){
if((i__10969__auto___11576 < len__10968__auto___11575)){
args11562.push((arguments[i__10969__auto___11576]));

var G__11577 = (i__10969__auto___11576 + (1));
i__10969__auto___11576 = G__11577;
continue;
} else {
}
break;
}

var G__11564 = args11562.length;
switch (G__11564) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11562.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__11565_11579 = cljs.core.seq.call(null,evt_map);
var chunk__11566_11580 = null;
var count__11567_11581 = (0);
var i__11568_11582 = (0);
while(true){
if((i__11568_11582 < count__11567_11581)){
var vec__11569_11583 = cljs.core._nth.call(null,chunk__11566_11580,i__11568_11582);
var k_11584 = cljs.core.nth.call(null,vec__11569_11583,(0),null);
var v_11585 = cljs.core.nth.call(null,vec__11569_11583,(1),null);
(evt[k_11584] = v_11585);

var G__11586 = seq__11565_11579;
var G__11587 = chunk__11566_11580;
var G__11588 = count__11567_11581;
var G__11589 = (i__11568_11582 + (1));
seq__11565_11579 = G__11586;
chunk__11566_11580 = G__11587;
count__11567_11581 = G__11588;
i__11568_11582 = G__11589;
continue;
} else {
var temp__4657__auto___11590 = cljs.core.seq.call(null,seq__11565_11579);
if(temp__4657__auto___11590){
var seq__11565_11591__$1 = temp__4657__auto___11590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11565_11591__$1)){
var c__10674__auto___11592 = cljs.core.chunk_first.call(null,seq__11565_11591__$1);
var G__11593 = cljs.core.chunk_rest.call(null,seq__11565_11591__$1);
var G__11594 = c__10674__auto___11592;
var G__11595 = cljs.core.count.call(null,c__10674__auto___11592);
var G__11596 = (0);
seq__11565_11579 = G__11593;
chunk__11566_11580 = G__11594;
count__11567_11581 = G__11595;
i__11568_11582 = G__11596;
continue;
} else {
var vec__11572_11597 = cljs.core.first.call(null,seq__11565_11591__$1);
var k_11598 = cljs.core.nth.call(null,vec__11572_11597,(0),null);
var v_11599 = cljs.core.nth.call(null,vec__11572_11597,(1),null);
(evt[k_11598] = v_11599);

var G__11600 = cljs.core.next.call(null,seq__11565_11591__$1);
var G__11601 = null;
var G__11602 = (0);
var G__11603 = (0);
seq__11565_11579 = G__11600;
chunk__11566_11580 = G__11601;
count__11567_11581 = G__11602;
i__11568_11582 = G__11603;
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
return (function (p1__11604_SHARP_){
return goog.events.getListeners(p1__11604_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map