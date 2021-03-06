// Compiled by ClojureScript 1.9.473 {}
goog.provide('modern_cljs.login');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('domina.events');
goog.require('hiccups.runtime');
goog.require('modern_cljs.login.validators');
goog.require('shoreleave.remotes.http_rpc');
modern_cljs.login.validate_email_domain = (function modern_cljs$login$validate_email_domain(email){
return shoreleave.remotes.http_rpc.remote_callback.call(null,new cljs.core.Keyword(null,"email-domain-errors","email-domain-errors",-581599182),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [email], null),(function (p1__10363_SHARP_){
if(cljs.core.truth_(p1__10363_SHARP_)){
domina.core.prepend_BANG_.call(null,domina.core.by_id.call(null,"loginForm"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div class=\"help email\">The email domain doesn't exist.</div>")].join(''));

return false;
} else {
return true;
}
}));
});
modern_cljs.login.validate_email = (function modern_cljs$login$validate_email(email){
domina.core.destroy_BANG_.call(null,domina.core.by_class.call(null,"email"));

var temp__4655__auto__ = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(modern_cljs.login.validators.user_credential_errors.call(null,domina.core.value.call(null,email),null));
if(cljs.core.truth_(temp__4655__auto__)){
var errors = temp__4655__auto__;
domina.core.prepend_BANG_.call(null,domina.core.by_id.call(null,"loginForm"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs10369 = cljs.core.first.call(null,errors);
if(cljs.core.map_QMARK_.call(null,attrs10369)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"help email"], null),attrs10369))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div class=\"help email\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs10369)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
})())].join(''));

return false;
} else {
return modern_cljs.login.validate_email_domain.call(null,domina.core.value.call(null,email));
}
});
modern_cljs.login.validate_password = (function modern_cljs$login$validate_password(password){
domina.core.destroy_BANG_.call(null,domina.core.by_class.call(null,"password"));

var temp__4655__auto__ = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(modern_cljs.login.validators.user_credential_errors.call(null,null,domina.core.value.call(null,password)));
if(cljs.core.truth_(temp__4655__auto__)){
var errors = temp__4655__auto__;
domina.core.append_BANG_.call(null,domina.core.by_id.call(null,"loginForm"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs10371 = cljs.core.first.call(null,errors);
if(cljs.core.map_QMARK_.call(null,attrs10371)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"help password"], null),attrs10371))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div class=\"help password\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs10371)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
})())].join(''));

return false;
} else {
return true;
}
});
modern_cljs.login.validate_form = (function modern_cljs$login$validate_form(evt,email,password){
var temp__4655__auto__ = modern_cljs.login.validators.user_credential_errors.call(null,domina.core.value.call(null,email),domina.core.value.call(null,password));
if(cljs.core.truth_(temp__4655__auto__)){
var map__10376 = temp__4655__auto__;
var map__10376__$1 = ((((!((map__10376 == null)))?((((map__10376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10376):map__10376);
var e_errs = cljs.core.get.call(null,map__10376__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var p_errs = cljs.core.get.call(null,map__10376__$1,new cljs.core.Keyword(null,"password","password",417022471));
if(cljs.core.truth_((function (){var or__7115__auto__ = e_errs;
if(cljs.core.truth_(or__7115__auto__)){
return or__7115__auto__;
} else {
return p_errs;
}
})())){
domina.core.destroy_BANG_.call(null,domina.core.by_class.call(null,"help"));

domina.events.prevent_default.call(null,evt);

return domina.core.append_BANG_.call(null,domina.core.by_id.call(null,"loginForm"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div class=\"help\">Please complete the form.</div>")].join(''));
} else {
return domina.events.prevent_default.call(null,evt);
}
} else {
return true;
}
});
modern_cljs.login.init = (function modern_cljs$login$init(){
if(cljs.core.truth_((function (){var and__7103__auto__ = document;
if(cljs.core.truth_(and__7103__auto__)){
return (document["getElementById"]);
} else {
return and__7103__auto__;
}
})())){
var email = domina.core.by_id.call(null,"email");
var password = domina.core.by_id.call(null,"password");
domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"submit"),new cljs.core.Keyword(null,"click","click",1912301393),((function (email,password){
return (function (evt){
return modern_cljs.login.validate_form.call(null,evt,email,password);
});})(email,password))
);

domina.events.listen_BANG_.call(null,email,new cljs.core.Keyword(null,"blur","blur",-453500461),((function (email,password){
return (function (evt){
return modern_cljs.login.validate_email.call(null,email);
});})(email,password))
);

return domina.events.listen_BANG_.call(null,password,new cljs.core.Keyword(null,"blur","blur",-453500461),((function (email,password){
return (function (evt){
return modern_cljs.login.validate_password.call(null,password);
});})(email,password))
);
} else {
return null;
}
});
goog.exportSymbol('modern_cljs.login.init', modern_cljs.login.init);

//# sourceMappingURL=login.js.map