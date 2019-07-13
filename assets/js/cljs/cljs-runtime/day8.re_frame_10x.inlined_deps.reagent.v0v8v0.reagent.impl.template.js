goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.interop');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper = (function (){
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.impl.template/NativeWrapper";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.impl.template/NativeWrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.__GT_NativeWrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$__GT_NativeWrapper(){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$hiccup_tag_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_(x)) || (typeof x === 'string'));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.valid_tag_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$valid_tag_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x)) || ((x instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cache_get = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_prop_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$cached_prop_name(k){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_(k)){
var temp__5459__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5459__auto__ == null)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.prop_name_cache[cljs.core.name(k)] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__5459__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.kv_conv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$kv_conv(o,k,v){
var G__18421 = o;
(G__18421[day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_prop_name(k)] = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value.call(null,v)));

return G__18421;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$convert_prop_value(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__18571__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__18571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18572__i = 0, G__18572__a = new Array(arguments.length -  0);
while (G__18572__i < G__18572__a.length) {G__18572__a[G__18572__i] = arguments[G__18572__i + 0]; ++G__18572__i;}
  args = new cljs.core.IndexedSeq(G__18572__a,0,null);
} 
return G__18571__delegate.call(this,args);};
G__18571.cljs$lang$maxFixedArity = 0;
G__18571.cljs$lang$applyTo = (function (arglist__18573){
var args = cljs.core.seq(arglist__18573);
return G__18571__delegate(args);
});
G__18571.cljs$core$IFn$_invoke$arity$variadic = G__18571__delegate;
return G__18571;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.custom_prop_name_cache = ({});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_custom_prop_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$cached_custom_prop_name(k){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_(k)){
var temp__5459__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.custom_prop_name_cache,cljs.core.name(k));
if((temp__5459__auto__ == null)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.prop_name_cache[cljs.core.name(k)] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__5459__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.custom_kv_conv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$custom_kv_conv(o,k,v){
var G__18425 = o;
(G__18425[day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_custom_prop_name(k)] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value(v));

return G__18425;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_custom_prop_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$convert_custom_prop_value(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__18576__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__18576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18577__i = 0, G__18577__a = new Array(arguments.length -  0);
while (G__18577__i < G__18577__a.length) {G__18577__a[G__18577__i] = arguments[G__18577__i + 0]; ++G__18577__i;}
  args = new cljs.core.IndexedSeq(G__18577__a,0,null);
} 
return G__18576__delegate.call(this,args);};
G__18576.cljs$lang$maxFixedArity = 0;
G__18576.cljs$lang$applyTo = (function (arglist__18578){
var args = cljs.core.seq(arglist__18578);
return G__18576__delegate(args);
});
G__18576.cljs$core$IFn$_invoke$arity$variadic = G__18576__delegate;
return G__18576;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.oset = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$oset(o,k,v){
var G__18427 = (((o == null))?({}):o);
(G__18427[k] = v);

return G__18427;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.oget = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.set_id_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$set_id_class(props,id_class){
var id = (id_class["id"]);
var class$ = (id_class["class"]);
var G__18444 = props;
var G__18444__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18444,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__18444);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18444__$1,new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var old_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if((old_class == null)){
return class$;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_class)].join('');
}
})());
} else {
return G__18444__$1;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.stringify_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$stringify_class(p__18458){
var map__18463 = p__18458;
var map__18463__$1 = (((((!((map__18463 == null))))?(((((map__18463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18463):map__18463);
var props = map__18463__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18463__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.coll_QMARK_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,class$)));
} else {
return props;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$convert_props(props,id_class){
var props__$1 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.set_id_class(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.stringify_class(props),id_class);
if(cljs.core.truth_((id_class["custom"]))){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_custom_prop_value(props__$1);
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value(props__$1);
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.has_selection_api_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.these_inputs_have_selection_api,input_type);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_node_set_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__18477){
var map__18478 = p__18477;
var map__18478__$1 = (((((!((map__18478 == null))))?(((((map__18478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18478):map__18478);
var on_write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18478__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if((!((((node === (document["activeElement"]))) && (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.has_selection_api_QMARK_((node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))))){
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
return (on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
return null;
}
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.do_after_render(((function (node_value,map__18478,map__18478__$1,on_write){
return (function (){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1(component) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_set_value.call(null,component));
});})(node_value,map__18478,map__18478__$1,on_write))
);
} else {
var existing_offset_from_end = (cljs.core.count(node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
(on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
}

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_set_value = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1(this$) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node.call(null,this$));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_node_set_value(node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_handle_change = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.do_after_render((function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_render_setup = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__4036__auto__ = (!((jsprops == null)));
if(and__4036__auto__){
var and__4036__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4036__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__18522 = jsprops;
(G__18522["defaultValue"] = value);

(G__18522["onChange"] = ((function (G__18522,v,value,on_change){
return (function (p1__18513_SHARP_){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_handle_change(this$,on_change,p1__18513_SHARP_);
});})(G__18522,v,value,on_change))
);

return G__18522;
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_unmount = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$input_component_QMARK_(x){
var G__18525 = x;
switch (G__18525) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input_class = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_render_setup(this$,jsprops);

return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child));
})], null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$reagent_input(){
if((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input_class == null)){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input_class = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.create_class(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_spec);
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input_class;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.parse_tag = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$parse_tag(hiccup_tag){
var vec__18531 = cljs.core.next(cljs.core.re_matches(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18531,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18531,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18531,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace(class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.comp_name())].join('')),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "class": class$__$1, "custom": cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),tag.indexOf("-"))});
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.try_get_key = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$try_get_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e18534){var e = e18534;
return null;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.get_key = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.try_get_key(x);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.key_from_vec = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$key_from_vec(v){
var temp__5459__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.get_key(cljs.core.meta(v));
if((temp__5459__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__5459__auto__;
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reag_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$reag_element(tag,v){
var c = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_class(tag);
var jsprops = ({"argv": v});
var temp__5461__auto___18590 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.key_from_vec(v);
if((temp__5461__auto___18590 == null)){
} else {
var key_18591 = temp__5461__auto___18590;
(jsprops["key"] = key_18591);
}

return module$node_modules$react$index.createElement(c,jsprops);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.fragment_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$fragment_element(argv){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_prop_value(((hasprops)?props:null));
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5461__auto___18600 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.key_from_vec(argv);
if((temp__5461__auto___18600 == null)){
} else {
var key_18601 = temp__5461__auto___18600;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.oset(jsprops,"key",key_18601);
}

return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,module$node_modules$react$index.Fragment,jsprops,first_child) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,module$node_modules$react$index.Fragment,jsprops,first_child));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$adapt_react_class(c){
var G__18540 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.__GT_NativeWrapper();
(G__18540["name"] = c);

(G__18540["id"] = null);

(G__18540["class"] = null);

return G__18540;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.tag_name_cache = ({});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_parse = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$cached_parse(x){
var temp__5459__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.tag_name_cache,x);
if((temp__5459__auto__ == null)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.tag_name_cache[x] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.parse_tag(x));
} else {
var s = temp__5459__auto__;
return s;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.native_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.input_component_QMARK_(comp)){
var G__18546 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reagent_input(),argv,comp,jsprops,first_child], null),cljs.core.meta(argv));
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__18546) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element.call(null,G__18546));
} else {
var key = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.get_key(cljs.core.meta(argv));
var p = (((key == null))?jsprops:day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.oset(jsprops,"key",key));
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,p,first_child) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,comp,p,first_child));
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.str_coll = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.fun_name(x);
var G__18548 = n;
switch (G__18548) {
case "":
return x;

break;
default:
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
} else {
return x;
}
}),coll));

});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$hiccup_err(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18625 = arguments.length;
var i__4642__auto___18626 = (0);
while(true){
if((i__4642__auto___18626 < len__4641__auto___18625)){
args__4647__auto__.push((arguments[i__4642__auto___18626]));

var G__18627 = (i__4642__auto___18626 + (1));
i__4642__auto___18626 = G__18627;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.str_coll(v)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.comp_name())].join('');
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq18549){
var G__18550 = cljs.core.first(seq18549);
var seq18549__$1 = cljs.core.next(seq18549);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18550,seq18549__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.vec_to_elem = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0))),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0))),"\n","(valid-tag? tag)"].join('')));
}

if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"<>","<>",1280186386),tag)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.fragment_element(v);
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_(tag)){
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__18552 = pos;
switch (G__18552) {
case (-1):
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.native_element(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.cached_parse(n),v,(1));

break;
case (0):
var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0))),"\n","(= \">\" n)"].join('')));
}

if(((typeof comp === 'string') || (cljs.core.fn_QMARK_(comp)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected React component in"], 0))),"\n","(or (string? comp) (fn? comp))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.native_element(({"name": comp}),v,(2));

break;
default:
var G__18636 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(v,null),(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null),cljs.core.meta(v));
v = G__18636;
continue;

}
} else {
if((tag instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.NativeWrapper)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.native_element(tag,v,(1));
} else {
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.reag_element(tag,v);

}
}
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$as_element(x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1(x) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq_check.call(null,x));

} else {
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.as_element = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4518__auto___18637 = a.length;
var i_18638 = (0);
while(true){
if((i_18638 < n__4518__auto___18637)){
(a[i_18638] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element((a[i_18638])));

var G__18639 = (i_18638 + (1));
i_18638 = G__18639;
continue;
} else {
}
break;
}

return a;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq_dev = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4518__auto___18640 = a.length;
var i_18642 = (0);
while(true){
if((i_18642 < n__4518__auto___18640)){
var val_18643 = (a[i_18642]);
if(((cljs.core.vector_QMARK_(val_18643)) && ((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.key_from_vec(val_18643) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_18642] = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element(val_18643));

var G__18644 = (i_18642 + (1));
i_18642 = G__18644;
continue;
} else {
}
break;
}

return a;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq_check = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__18561 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.check_derefs(((function (ctx){
return (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.expand_seq_dev(x,ctx);
});})(ctx))
);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18561,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18561,(1),null);
if(cljs.core.truth_(derefed)){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0)))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0)))].join(''));
} else {
}
} else {
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.make_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__18567 = (cljs.core.count(argv) - first_child);
switch (G__18567) {
case (0):
return module$node_modules$react$index.createElement(comp,jsprops);

break;
case (1):
var G__18568 = comp;
var G__18569 = jsprops;
var G__18570 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null));
return module$node_modules$react$index.createElement(G__18568,G__18569,G__18570);

break;
default:
return module$node_modules$react$index.createElement.apply(null,cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element(v));
} else {
}

return a;
}),[comp,jsprops],argv));

}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.js.map