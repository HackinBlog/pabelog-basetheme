goog.provide('com.clupclup.app_script.base.utils');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('com.clupclup.app_script.base.log');
com.clupclup.app_script.base.utils.safe_get_element_id = (function com$clupclup$app_script$base$utils$safe_get_element_id(element_id){
try{return goog.dom.getRequiredElement(element_id);
}catch (e30464){if((e30464 instanceof Error)){
var e = e30464;
return null;
} else {
throw e30464;

}
}});

//# sourceMappingURL=com.clupclup.app_script.base.utils.js.map
