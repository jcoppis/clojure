// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12367){
var map__12392 = p__12367;
var map__12392__$1 = ((((!((map__12392 == null)))?((((map__12392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12392):map__12392);
var m = map__12392__$1;
var n = cljs.core.get.call(null,map__12392__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12392__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12394_12416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12395_12417 = null;
var count__12396_12418 = (0);
var i__12397_12419 = (0);
while(true){
if((i__12397_12419 < count__12396_12418)){
var f_12420 = cljs.core._nth.call(null,chunk__12395_12417,i__12397_12419);
cljs.core.println.call(null,"  ",f_12420);

var G__12421 = seq__12394_12416;
var G__12422 = chunk__12395_12417;
var G__12423 = count__12396_12418;
var G__12424 = (i__12397_12419 + (1));
seq__12394_12416 = G__12421;
chunk__12395_12417 = G__12422;
count__12396_12418 = G__12423;
i__12397_12419 = G__12424;
continue;
} else {
var temp__4657__auto___12425 = cljs.core.seq.call(null,seq__12394_12416);
if(temp__4657__auto___12425){
var seq__12394_12426__$1 = temp__4657__auto___12425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12394_12426__$1)){
var c__7934__auto___12427 = cljs.core.chunk_first.call(null,seq__12394_12426__$1);
var G__12428 = cljs.core.chunk_rest.call(null,seq__12394_12426__$1);
var G__12429 = c__7934__auto___12427;
var G__12430 = cljs.core.count.call(null,c__7934__auto___12427);
var G__12431 = (0);
seq__12394_12416 = G__12428;
chunk__12395_12417 = G__12429;
count__12396_12418 = G__12430;
i__12397_12419 = G__12431;
continue;
} else {
var f_12432 = cljs.core.first.call(null,seq__12394_12426__$1);
cljs.core.println.call(null,"  ",f_12432);

var G__12433 = cljs.core.next.call(null,seq__12394_12426__$1);
var G__12434 = null;
var G__12435 = (0);
var G__12436 = (0);
seq__12394_12416 = G__12433;
chunk__12395_12417 = G__12434;
count__12396_12418 = G__12435;
i__12397_12419 = G__12436;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12437 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7115__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7115__auto__)){
return or__7115__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12437);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12437)))?cljs.core.second.call(null,arglists_12437):arglists_12437));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12398_12438 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12399_12439 = null;
var count__12400_12440 = (0);
var i__12401_12441 = (0);
while(true){
if((i__12401_12441 < count__12400_12440)){
var vec__12402_12442 = cljs.core._nth.call(null,chunk__12399_12439,i__12401_12441);
var name_12443 = cljs.core.nth.call(null,vec__12402_12442,(0),null);
var map__12405_12444 = cljs.core.nth.call(null,vec__12402_12442,(1),null);
var map__12405_12445__$1 = ((((!((map__12405_12444 == null)))?((((map__12405_12444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12405_12444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12405_12444):map__12405_12444);
var doc_12446 = cljs.core.get.call(null,map__12405_12445__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12447 = cljs.core.get.call(null,map__12405_12445__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12443);

cljs.core.println.call(null," ",arglists_12447);

if(cljs.core.truth_(doc_12446)){
cljs.core.println.call(null," ",doc_12446);
} else {
}

var G__12448 = seq__12398_12438;
var G__12449 = chunk__12399_12439;
var G__12450 = count__12400_12440;
var G__12451 = (i__12401_12441 + (1));
seq__12398_12438 = G__12448;
chunk__12399_12439 = G__12449;
count__12400_12440 = G__12450;
i__12401_12441 = G__12451;
continue;
} else {
var temp__4657__auto___12452 = cljs.core.seq.call(null,seq__12398_12438);
if(temp__4657__auto___12452){
var seq__12398_12453__$1 = temp__4657__auto___12452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12398_12453__$1)){
var c__7934__auto___12454 = cljs.core.chunk_first.call(null,seq__12398_12453__$1);
var G__12455 = cljs.core.chunk_rest.call(null,seq__12398_12453__$1);
var G__12456 = c__7934__auto___12454;
var G__12457 = cljs.core.count.call(null,c__7934__auto___12454);
var G__12458 = (0);
seq__12398_12438 = G__12455;
chunk__12399_12439 = G__12456;
count__12400_12440 = G__12457;
i__12401_12441 = G__12458;
continue;
} else {
var vec__12407_12459 = cljs.core.first.call(null,seq__12398_12453__$1);
var name_12460 = cljs.core.nth.call(null,vec__12407_12459,(0),null);
var map__12410_12461 = cljs.core.nth.call(null,vec__12407_12459,(1),null);
var map__12410_12462__$1 = ((((!((map__12410_12461 == null)))?((((map__12410_12461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12410_12461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12410_12461):map__12410_12461);
var doc_12463 = cljs.core.get.call(null,map__12410_12462__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12464 = cljs.core.get.call(null,map__12410_12462__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12460);

cljs.core.println.call(null," ",arglists_12464);

if(cljs.core.truth_(doc_12463)){
cljs.core.println.call(null," ",doc_12463);
} else {
}

var G__12465 = cljs.core.next.call(null,seq__12398_12453__$1);
var G__12466 = null;
var G__12467 = (0);
var G__12468 = (0);
seq__12398_12438 = G__12465;
chunk__12399_12439 = G__12466;
count__12400_12440 = G__12467;
i__12401_12441 = G__12468;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__12412 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12413 = null;
var count__12414 = (0);
var i__12415 = (0);
while(true){
if((i__12415 < count__12414)){
var role = cljs.core._nth.call(null,chunk__12413,i__12415);
var temp__4657__auto___12469__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12469__$1)){
var spec_12470 = temp__4657__auto___12469__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12470));
} else {
}

var G__12471 = seq__12412;
var G__12472 = chunk__12413;
var G__12473 = count__12414;
var G__12474 = (i__12415 + (1));
seq__12412 = G__12471;
chunk__12413 = G__12472;
count__12414 = G__12473;
i__12415 = G__12474;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12412);
if(temp__4657__auto____$1){
var seq__12412__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12412__$1)){
var c__7934__auto__ = cljs.core.chunk_first.call(null,seq__12412__$1);
var G__12475 = cljs.core.chunk_rest.call(null,seq__12412__$1);
var G__12476 = c__7934__auto__;
var G__12477 = cljs.core.count.call(null,c__7934__auto__);
var G__12478 = (0);
seq__12412 = G__12475;
chunk__12413 = G__12476;
count__12414 = G__12477;
i__12415 = G__12478;
continue;
} else {
var role = cljs.core.first.call(null,seq__12412__$1);
var temp__4657__auto___12479__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12479__$2)){
var spec_12480 = temp__4657__auto___12479__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12480));
} else {
}

var G__12481 = cljs.core.next.call(null,seq__12412__$1);
var G__12482 = null;
var G__12483 = (0);
var G__12484 = (0);
seq__12412 = G__12481;
chunk__12413 = G__12482;
count__12414 = G__12483;
i__12415 = G__12484;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map