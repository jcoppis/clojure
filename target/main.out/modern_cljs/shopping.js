// Compiled by ClojureScript 1.9.473 {}
goog.provide('modern_cljs.shopping');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('domina.events');
goog.require('domina.css');
goog.require('hiccups.runtime');
goog.require('modern_cljs.shopping.validators');
goog.require('shoreleave.remotes.http_rpc');
modern_cljs.shopping.calculate_BANG_ = (function modern_cljs$shopping$calculate_BANG_(){
var quantity = domina.core.value.call(null,domina.core.by_id.call(null,"quantity"));
var price = domina.core.value.call(null,domina.core.by_id.call(null,"price"));
var tax = domina.core.value.call(null,domina.core.by_id.call(null,"tax"));
var discount = domina.core.value.call(null,domina.core.by_id.call(null,"discount"));
var errors = modern_cljs.shopping.validators.validate_shopping_form.call(null,quantity,price,tax,discount);
if(cljs.core.not.call(null,errors)){
return shoreleave.remotes.http_rpc.remote_callback.call(null,new cljs.core.Keyword(null,"calculate","calculate",-1224644403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantity,price,tax,discount], null),((function (quantity,price,tax,discount,errors){
return (function (p1__12729_SHARP_){
return domina.core.set_value_BANG_.call(null,domina.core.by_id.call(null,"total"),p1__12729_SHARP_.toFixed((2)));
});})(quantity,price,tax,discount,errors))
);
} else {
return null;
}
});
modern_cljs.shopping.validate_shopping_field_BANG_ = (function modern_cljs$shopping$validate_shopping_field_BANG_(evt,field,text){
var attr = cljs.core.name.call(null,field);
var label = domina.css.sel.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("label[for="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''));
domina.core.remove_class_BANG_.call(null,label,"help");

var temp__4655__auto__ = modern_cljs.shopping.validators.validate_shopping_field.call(null,field,domina.core.value.call(null,domina.core.by_id.call(null,attr)));
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
domina.core.add_class_BANG_.call(null,label,"help");

return domina.core.set_text_BANG_.call(null,label,error);
} else {
domina.core.set_text_BANG_.call(null,label,text);

modern_cljs.shopping.calculate_BANG_.call(null);

return domina.events.prevent_default.call(null,evt);
}
});
modern_cljs.shopping.init = (function modern_cljs$shopping$init(){
if(cljs.core.truth_((function (){var and__7103__auto__ = document;
if(cljs.core.truth_(and__7103__auto__)){
return (document["getElementById"]);
} else {
return and__7103__auto__;
}
})())){
var quantity_text_12734 = domina.core.text.call(null,domina.css.sel.call(null,"label[for=quantity]"));
var price_text_12735 = domina.core.text.call(null,domina.css.sel.call(null,"label[for=price]"));
var tax_text_12736 = domina.core.text.call(null,domina.css.sel.call(null,"label[for=tax]"));
var discount_text_12737 = domina.core.text.call(null,domina.css.sel.call(null,"label[for=discount]"));
domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"quantity"),new cljs.core.Keyword(null,"input","input",556931961),((function (quantity_text_12734,price_text_12735,tax_text_12736,discount_text_12737){
return (function (evt){
return modern_cljs.shopping.validate_shopping_field_BANG_.call(null,evt,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity_text_12734);
});})(quantity_text_12734,price_text_12735,tax_text_12736,discount_text_12737))
);

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"price"),new cljs.core.Keyword(null,"input","input",556931961),((function (quantity_text_12734,price_text_12735,tax_text_12736,discount_text_12737){
return (function (evt){
return modern_cljs.shopping.validate_shopping_field_BANG_.call(null,evt,new cljs.core.Keyword(null,"price","price",22129180),price_text_12735);
});})(quantity_text_12734,price_text_12735,tax_text_12736,discount_text_12737))
);

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"tax"),new cljs.core.Keyword(null,"input","input",556931961),((function (quantity_text_12734,price_text_12735,tax_text_12736,discount_text_12737){
return (function (evt){
return modern_cljs.shopping.validate_shopping_field_BANG_.call(null,evt,new cljs.core.Keyword(null,"tax","tax",-226525810),tax_text_12736);
});})(quantity_text_12734,price_text_12735,tax_text_12736,discount_text_12737))
);

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"discount"),new cljs.core.Keyword(null,"input","input",556931961),((function (quantity_text_12734,price_text_12735,tax_text_12736,discount_text_12737){
return (function (evt){
return modern_cljs.shopping.validate_shopping_field_BANG_.call(null,evt,new cljs.core.Keyword(null,"discount","discount",1508820155),discount_text_12737);
});})(quantity_text_12734,price_text_12735,tax_text_12736,discount_text_12737))
);

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"calc"),new cljs.core.Keyword(null,"click","click",1912301393),(function (evt){
modern_cljs.shopping.calculate_BANG_.call(null);

return domina.events.prevent_default.call(null,evt);
}));

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"calc"),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),(function (){
return domina.core.append_BANG_.call(null,domina.core.by_id.call(null,"shoppingForm"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div class=\"help\" id=\"help\">Click to calculate</div>")].join(''));
}));

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"calc"),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),(function (){
return domina.core.destroy_BANG_.call(null,domina.core.by_id.call(null,"help"));
}));

return modern_cljs.shopping.calculate_BANG_.call(null);
} else {
return null;
}
});
goog.exportSymbol('modern_cljs.shopping.init', modern_cljs.shopping.init);

//# sourceMappingURL=shopping.js.map