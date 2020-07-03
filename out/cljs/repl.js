// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12078){
var map__12103 = p__12078;
var map__12103__$1 = ((((!((map__12103 == null)))?((((map__12103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12103):map__12103);
var m = map__12103__$1;
var n = cljs.core.get.call(null,map__12103__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12103__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12105_12127 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12106_12128 = null;
var count__12107_12129 = (0);
var i__12108_12130 = (0);
while(true){
if((i__12108_12130 < count__12107_12129)){
var f_12131 = cljs.core._nth.call(null,chunk__12106_12128,i__12108_12130);
cljs.core.println.call(null,"  ",f_12131);

var G__12132 = seq__12105_12127;
var G__12133 = chunk__12106_12128;
var G__12134 = count__12107_12129;
var G__12135 = (i__12108_12130 + (1));
seq__12105_12127 = G__12132;
chunk__12106_12128 = G__12133;
count__12107_12129 = G__12134;
i__12108_12130 = G__12135;
continue;
} else {
var temp__4657__auto___12136 = cljs.core.seq.call(null,seq__12105_12127);
if(temp__4657__auto___12136){
var seq__12105_12137__$1 = temp__4657__auto___12136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12105_12137__$1)){
var c__10644__auto___12138 = cljs.core.chunk_first.call(null,seq__12105_12137__$1);
var G__12139 = cljs.core.chunk_rest.call(null,seq__12105_12137__$1);
var G__12140 = c__10644__auto___12138;
var G__12141 = cljs.core.count.call(null,c__10644__auto___12138);
var G__12142 = (0);
seq__12105_12127 = G__12139;
chunk__12106_12128 = G__12140;
count__12107_12129 = G__12141;
i__12108_12130 = G__12142;
continue;
} else {
var f_12143 = cljs.core.first.call(null,seq__12105_12137__$1);
cljs.core.println.call(null,"  ",f_12143);

var G__12144 = cljs.core.next.call(null,seq__12105_12137__$1);
var G__12145 = null;
var G__12146 = (0);
var G__12147 = (0);
seq__12105_12127 = G__12144;
chunk__12106_12128 = G__12145;
count__12107_12129 = G__12146;
i__12108_12130 = G__12147;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12148 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9825__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9825__auto__)){
return or__9825__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12148);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12148)))?cljs.core.second.call(null,arglists_12148):arglists_12148));
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
var seq__12109_12149 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12110_12150 = null;
var count__12111_12151 = (0);
var i__12112_12152 = (0);
while(true){
if((i__12112_12152 < count__12111_12151)){
var vec__12113_12153 = cljs.core._nth.call(null,chunk__12110_12150,i__12112_12152);
var name_12154 = cljs.core.nth.call(null,vec__12113_12153,(0),null);
var map__12116_12155 = cljs.core.nth.call(null,vec__12113_12153,(1),null);
var map__12116_12156__$1 = ((((!((map__12116_12155 == null)))?((((map__12116_12155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12116_12155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12116_12155):map__12116_12155);
var doc_12157 = cljs.core.get.call(null,map__12116_12156__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12158 = cljs.core.get.call(null,map__12116_12156__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12154);

cljs.core.println.call(null," ",arglists_12158);

if(cljs.core.truth_(doc_12157)){
cljs.core.println.call(null," ",doc_12157);
} else {
}

var G__12159 = seq__12109_12149;
var G__12160 = chunk__12110_12150;
var G__12161 = count__12111_12151;
var G__12162 = (i__12112_12152 + (1));
seq__12109_12149 = G__12159;
chunk__12110_12150 = G__12160;
count__12111_12151 = G__12161;
i__12112_12152 = G__12162;
continue;
} else {
var temp__4657__auto___12163 = cljs.core.seq.call(null,seq__12109_12149);
if(temp__4657__auto___12163){
var seq__12109_12164__$1 = temp__4657__auto___12163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12109_12164__$1)){
var c__10644__auto___12165 = cljs.core.chunk_first.call(null,seq__12109_12164__$1);
var G__12166 = cljs.core.chunk_rest.call(null,seq__12109_12164__$1);
var G__12167 = c__10644__auto___12165;
var G__12168 = cljs.core.count.call(null,c__10644__auto___12165);
var G__12169 = (0);
seq__12109_12149 = G__12166;
chunk__12110_12150 = G__12167;
count__12111_12151 = G__12168;
i__12112_12152 = G__12169;
continue;
} else {
var vec__12118_12170 = cljs.core.first.call(null,seq__12109_12164__$1);
var name_12171 = cljs.core.nth.call(null,vec__12118_12170,(0),null);
var map__12121_12172 = cljs.core.nth.call(null,vec__12118_12170,(1),null);
var map__12121_12173__$1 = ((((!((map__12121_12172 == null)))?((((map__12121_12172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12121_12172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12121_12172):map__12121_12172);
var doc_12174 = cljs.core.get.call(null,map__12121_12173__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12175 = cljs.core.get.call(null,map__12121_12173__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12171);

cljs.core.println.call(null," ",arglists_12175);

if(cljs.core.truth_(doc_12174)){
cljs.core.println.call(null," ",doc_12174);
} else {
}

var G__12176 = cljs.core.next.call(null,seq__12109_12164__$1);
var G__12177 = null;
var G__12178 = (0);
var G__12179 = (0);
seq__12109_12149 = G__12176;
chunk__12110_12150 = G__12177;
count__12111_12151 = G__12178;
i__12112_12152 = G__12179;
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

var seq__12123 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12124 = null;
var count__12125 = (0);
var i__12126 = (0);
while(true){
if((i__12126 < count__12125)){
var role = cljs.core._nth.call(null,chunk__12124,i__12126);
var temp__4657__auto___12180__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12180__$1)){
var spec_12181 = temp__4657__auto___12180__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12181));
} else {
}

var G__12182 = seq__12123;
var G__12183 = chunk__12124;
var G__12184 = count__12125;
var G__12185 = (i__12126 + (1));
seq__12123 = G__12182;
chunk__12124 = G__12183;
count__12125 = G__12184;
i__12126 = G__12185;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12123);
if(temp__4657__auto____$1){
var seq__12123__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12123__$1)){
var c__10644__auto__ = cljs.core.chunk_first.call(null,seq__12123__$1);
var G__12186 = cljs.core.chunk_rest.call(null,seq__12123__$1);
var G__12187 = c__10644__auto__;
var G__12188 = cljs.core.count.call(null,c__10644__auto__);
var G__12189 = (0);
seq__12123 = G__12186;
chunk__12124 = G__12187;
count__12125 = G__12188;
i__12126 = G__12189;
continue;
} else {
var role = cljs.core.first.call(null,seq__12123__$1);
var temp__4657__auto___12190__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12190__$2)){
var spec_12191 = temp__4657__auto___12190__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12191));
} else {
}

var G__12192 = cljs.core.next.call(null,seq__12123__$1);
var G__12193 = null;
var G__12194 = (0);
var G__12195 = (0);
seq__12123 = G__12192;
chunk__12124 = G__12193;
count__12125 = G__12194;
i__12126 = G__12195;
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