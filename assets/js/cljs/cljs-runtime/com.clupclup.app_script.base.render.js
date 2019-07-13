goog.provide('com.clupclup.app_script.base.render');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('com.clupclup.app_script.base.utils');
com.clupclup.app_script.base.render.render = (function com$clupclup$app_script$base$render$render(id,root){
var temp__5457__auto__ = com.clupclup.app_script.base.utils.safe_get_element_id(id);
if(cljs.core.truth_(temp__5457__auto__)){
var elm = temp__5457__auto__;
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null),elm);
} else {
return null;
}
});
goog.exportSymbol('com.clupclup.app_script.base.render.render', com.clupclup.app_script.base.render.render);

//# sourceMappingURL=com.clupclup.app_script.base.render.js.map
