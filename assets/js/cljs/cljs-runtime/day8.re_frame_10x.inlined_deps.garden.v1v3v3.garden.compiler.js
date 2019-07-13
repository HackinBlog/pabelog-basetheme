goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compression');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.selectors');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
/**
 * The current compiler flags.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,expr], 0));
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = null;
/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.vendors = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$vendors(){
return cljs.core.seq(new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.auto_prefixed_properties = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$auto_prefixed_properties(){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_)));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.auto_prefixed_properties(),property);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$top_level_expression_QMARK_(x){
var or__4047__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.rule_QMARK_.call(null,x));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_import_QMARK_(x)) || (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_media_QMARK_(x)) || (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_keyframes_QMARK_(x)));
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.divide_vec = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$divide_vec(pred,coll){
var fexpr__17839 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove);
return (fexpr__17839.cljs$core$IFn$_invoke$arity$2 ? fexpr__17839.cljs$core$IFn$_invoke$arity$2(pred,coll) : fexpr__17839.call(null,pred,coll));
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.core.seq_QMARK_(x)){
return (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1(x) : day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs.call(null,x));
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration_1 = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_declaration_1(declaration){
if(cljs.core.map_QMARK_(declaration)){
} else {
throw (new Error("Assert failed: (map? declaration)"));
}

var prefix = (function (p1__17844_SHARP_,p2__17845_SHARP_){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__17844_SHARP_,"-",p2__17845_SHARP_], 0));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (prefix){
return (function (m,p__17848){
var vec__17849 = p__17848;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17849,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17849,(1),null);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_(v)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__17849,k,v,prefix){
return (function (m1,p__17852){
var vec__17853 = p__17852;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17853,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17853,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m1,prefix(k,k1),v1);
});})(vec__17849,k,v,prefix))
,m,(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1(v) : day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration_1.call(null,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(k),v);
}
});})(prefix))
,cljs.core.empty(declaration),declaration);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_declaration(declaration){
if(cljs.core.empty_QMARK_(declaration)){
return declaration;
} else {
return cljs.core.with_meta(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration_1(declaration),cljs.core.meta(declaration));
}
});
/**
 * Matches a single "&" or "&" follow by one or more
 *   non-whitespace characters.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.extract_reference = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$extract_reference(selector){
var temp__5457__auto__ = cljs.core.re_find(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.parent_selector_re,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(cljs.core.last(selector)));
if(cljs.core.truth_(temp__5457__auto__)){
var reference = temp__5457__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(reference));
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_selector_reference = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_selector_reference(selector){
var temp__5455__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.extract_reference(selector);
if(cljs.core.truth_(temp__5455__auto__)){
var reference = temp__5455__auto__;
var parent = cljs.core.butlast(selector);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(parent),(new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(parent),reference], 0)),null,(1),null)));
} else {
return selector;
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_selector = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq(parent))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent,selector__$1], 0))):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,selector__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_selector_reference,selector__$2);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_rule(rule){
var vec__17873 = cljs.core.split_with(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17873,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17873,(1),null);
var selector__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_selector(selector,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);
var children__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand(children);
var vec__17876 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.divide_vec(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17876,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17876,(1),null);
var ys = (function (){var _STAR_selector_context_STAR__orig_val__17880 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_;
var _STAR_selector_context_STAR__temp_val__17881 = ((cljs.core.seq(selector__$1))?selector__$1:day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR__temp_val__17881;

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs], 0)));
}finally {day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR__orig_val__17880;
}})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ys,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declarations], 0))));
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__17885 = cljs.core.get_global_hierarchy;
return (fexpr__17885.cljs$core$IFn$_invoke$arity$0 ? fexpr__17885.cljs$core$IFn$_invoke$arity$0() : fexpr__17885.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
return (new cljs.core.List(null,at_rule,null,(1),null));
}));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__17889){
var map__17890 = p__17889;
var map__17890__$1 = (((((!((map__17890 == null))))?(((((map__17890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17890):map__17890);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17890__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__17892 = value;
var map__17892__$1 = (((((!((map__17892 == null))))?(((((map__17892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17892):map__17892);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17892__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17892__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return (new cljs.core.List(null,(new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frames], 0))], null),null,null,null)),null,(1),null));
}));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_media_query_expression = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_media_query_expression(expression){
var temp__5455__auto__ = (function (){var G__17894 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null));
return (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1(G__17894) : day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.media_expression_behavior.call(null,G__17894));
})();
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(expression,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_) : f.call(null,expression,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_));
} else {
return expression;
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__17895){
var map__17896 = p__17895;
var map__17896__$1 = (((((!((map__17896 == null))))?(((((map__17896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17896):map__17896);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17896__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__17898 = value;
var map__17898__$1 = (((((!((map__17898 == null))))?(((((map__17898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17898):map__17898);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17898__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17898__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_media_query_expression(media_queries);
var xs = (function (){var _STAR_media_query_context_STAR__orig_val__17903 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_;
var _STAR_media_query_context_STAR__temp_val__17904 = media_queries__$1;
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__temp_val__17904;

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand(rules)], 0)));
}finally {day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR__orig_val__17903;
}})();
var vec__17899 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.divide_vec(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17899,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17899,(1),null);
return cljs.core.cons((new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_stylesheet = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand(xs)));
});
goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.IExpandable,"null",true);

var G__17905_18053 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand;
var G__17906_18054 = "null";
var G__17907_18055 = ((function (G__17905_18053,G__17906_18054){
return (function (this$){
return null;
});})(G__17905_18053,G__17906_18054))
;
goog.object.set(G__17905_18053,G__17906_18054,G__17907_18055);

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration(this$__$1),null,(1),null));
});

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.IExpandable,"_",true);

var G__17908_18083 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand;
var G__17909_18084 = "_";
var G__17910_18085 = ((function (G__17908_18083,G__17909_18084){
return (function (this$){
return (new cljs.core.List(null,this$,null,(1),null));
});})(G__17908_18083,G__17909_18084))
;
goog.object.set(G__17908_18083,G__17909_18084,G__17910_18085);

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration(this$__$1),null,(1),null));
});

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1) : day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_at_rule.call(null,this$__$1));
});

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
});

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_rule(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_declaration(this$__$1),null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_seqs(this$__$1);
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_css(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CSSRenderer.render-css",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma = ", ";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.colon = ": ";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.semicolon = ";";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.l_brace = " {\n";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.r_brace = "\n}";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.l_brace_1 = " {\n\n";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.r_brace_1 = "\n\n}";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_sep = "\n\n";
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$space_separated_list(var_args){
var G__17912 = arguments.length;
switch (G__17912) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,xs);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$comma_separated_list(var_args){
var G__17914 = arguments.length;
switch (G__17914) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,xs);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__4434__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$iter__17915(s__17916){
return (new cljs.core.LazySeq(null,(function (){
var s__17916__$1 = s__17916;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__17916__$1);
if(temp__5457__auto__){
var s__17916__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17916__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__17916__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__17918 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__17917 = (0);
while(true){
if((i__17917 < size__4433__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__17917);
cljs.core.chunk_append(b__17918,((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))));

var G__18106 = (i__17917 + (1));
i__17917 = G__18106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17918),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$iter__17915(cljs.core.chunk_rest(s__17916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17918),null);
}
} else {
var x = cljs.core.first(s__17916__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$iter__17915(cljs.core.rest(s__17916__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma,ys);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$rule_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$indent_str(s){
return s.replace(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_loc_re,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_value = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_value(x){
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_keyframes_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css(x);
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_property_and_value = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_property_and_value(p__17919){
var vec__17920 = p__17919;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17920,(1),null);
if(cljs.core.set_QMARK_(val)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_property_and_value,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_(val))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_value,val):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_value(val));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.colon,val__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.semicolon], 0));
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.add_blocks = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__17923_SHARP_){
return cljs.core.cons(p1__17923_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__17923_SHARP_) : f.call(null,p1__17923_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declaration], 0));
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefixed_blocks = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefixed_blocks(vendors,p__17924){
var vec__17925 = p__17924;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17925,(1),null);
var iter__4434__auto__ = ((function (vec__17925,p,v){
return (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__17928(s__17929){
return (new cljs.core.LazySeq(null,((function (vec__17925,p,v){
return (function (){
var s__17929__$1 = s__17929;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__17929__$1);
if(temp__5457__auto__){
var s__17929__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17929__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__17929__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__17931 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__17930 = (0);
while(true){
if((i__17930 < size__4433__auto__)){
var vendor = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__17930);
cljs.core.chunk_append(b__17931,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null));

var G__18122 = (i__17930 + (1));
i__17930 = G__18122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17931),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__17928(cljs.core.chunk_rest(s__17929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17931),null);
}
} else {
var vendor = cljs.core.first(s__17929__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__17928(cljs.core.rest(s__17929__$2)));
}
} else {
return null;
}
break;
}
});})(vec__17925,p,v))
,null,null));
});})(vec__17925,p,v))
;
return iter__4434__auto__(vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_all_properties = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefix_all_properties(vendors,declaration){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.add_blocks(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_auto_properties = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefix_auto_properties(vendors,declaration){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.add_blocks((function (block){
var vec__17932 = block;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17932,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17932,(1),null);
if(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_(cljs.core.name(p))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefixed_blocks(vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_declaration = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.vendors();
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration)))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_all_properties:day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_auto_properties);
return (prefix_fn.cljs$core$IFn$_invoke$arity$2 ? prefix_fn.cljs$core$IFn$_invoke$arity$2(vendors,declaration) : prefix_fn.call(null,vendors,declaration));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_declaration = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_declaration(declaration){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_property_and_value,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.prefix_declaration(declaration)));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_selector = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_selector(selector){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_rule(p__17935){
var vec__17936 = p__17935;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17936,(0),null);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17936,(1),null);
var rule = vec__17936;
if(((cljs.core.seq(rule)) && (cljs.core.every_QMARK_(cljs.core.seq,rule)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_selector(selector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.l_brace),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,declarations)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.r_brace)].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr_part = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_media_expr_part(p__17939){
var vec__17940 = p__17939;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17940,(1),null);
var vec__17943 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943,(0),null);
var sv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.seq(sv);
} else {
return and__4036__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.colon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 * 
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_(expr)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" and ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_unit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_unit(css_unit){
var map__17946 = css_unit;
var map__17946__$1 = (((((!((map__17946 == null))))?(((((map__17946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17946):map__17946);
var magnitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17946__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17946__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(unit))].join('');
});
/**
 * Render a CSS function.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_function = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_function(css_function){
var map__17948 = css_function;
var map__17948__$1 = (((((!((map__17948 == null))))?(((((map__17948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17948):map__17948);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17948__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17948__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_(args))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(args):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(args));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%s(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(function$),args__$1], 0));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_color = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$render_color(c){
var temp__5455__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5455__auto__)){
var a = temp__5455__auto__;
var map__17950 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_hsl(c);
var map__17950__$1 = (((((!((map__17950 == null))))?(((((map__17950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17950):map__17950);
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__17951 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17951,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17951,(1),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("hsla(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null))], 0));
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.as_hex(c);
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule !== 'undefined')){
} else {
/**
 * Render a CSS at-rule
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__17955 = cljs.core.get_global_hierarchy;
return (fexpr__17955.cljs$core$IFn$_invoke$arity$0 ? fexpr__17955.cljs$core$IFn$_invoke$arity$0() : fexpr__17955.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("day8.re-frame-10x.inlined-deps.garden.v1v3v3.garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__17956){
var map__17957 = p__17956;
var map__17957__$1 = (((((!((map__17957 == null))))?(((((map__17957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17957):map__17957);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__17959 = value;
var map__17959__$1 = (((((!((map__17959 == null))))?(((((map__17959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17959):map__17959);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17959__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17959__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.wrap_quotes(url):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css(url));
var queries = (cljs.core.truth_(media_queries)?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr(media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.semicolon)].join('');
}));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__17962){
var map__17963 = p__17962;
var map__17963__$1 = (((((!((map__17963 == null))))?(((((map__17963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17963):map__17963);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17963__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__17965 = value;
var map__17965__$1 = (((((!((map__17965 == null))))?(((((map__17965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17965):map__17965);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17965__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17965__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq(frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str(identifier)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_str(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,frames)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.r_brace_1)].join('');
var prefix = ((function (body,map__17965,map__17965__$1,identifier,frames,map__17963,map__17963__$1,value){
return (function (vendor){
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.vendor_prefix(vendor,"keyframes "))].join('');
});})(body,map__17965,map__17965__$1,identifier,frames,map__17963,map__17963__$1,value))
;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (body,prefix,map__17965,map__17965__$1,identifier,frames,map__17963,map__17963__$1,value){
return (function (p1__17961_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17961_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)].join('');
});})(body,prefix,map__17965,map__17965__$1,identifier,frames,map__17963,map__17963__$1,value))
,cljs.core.cons("@keyframes ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(prefix,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.vendors()))));
} else {
return null;
}
}));
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__17967){
var map__17968 = p__17967;
var map__17968__$1 = (((((!((map__17968 == null))))?(((((map__17968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17968):map__17968);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17968__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__17970 = value;
var map__17970__$1 = (((((!((map__17970 == null))))?(((((map__17970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17970):map__17970);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17970__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17970__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq(rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_media_expr(media_queries)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.indent_str(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,rules)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.CSSRenderer,"null",true);

var G__17972_18147 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css;
var G__17973_18148 = "null";
var G__17974_18149 = ((function (G__17972_18147,G__17973_18148){
return (function (this$){
return "";
});})(G__17972_18147,G__17973_18148))
;
goog.object.set(G__17972_18147,G__17973_18148,G__17974_18149);

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_color(this$__$1);
});

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSUnit.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_unit(this$__$1);
});

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.CSSRenderer,"number",true);

var G__17975_18150 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css;
var G__17976_18151 = "number";
var G__17977_18152 = ((function (G__17975_18150,G__17976_18151){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__17975_18150,G__17976_18151))
;
goog.object.set(G__17975_18150,G__17976_18151,G__17977_18152);

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_function(this$__$1);
});

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_declaration(this$__$1);
});

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.CSSRenderer,"_",true);

var G__17978_18153 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css;
var G__17979_18154 = "_";
var G__17980_18155 = ((function (G__17978_18153,G__17979_18154){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__17978_18153,G__17979_18154))
;
goog.object.set(G__17978_18153,G__17979_18154,G__17980_18155);

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_declaration(this$__$1);
});

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1) : day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_at_rule.call(null,this$__$1));
});

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
});

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_rule(this$__$1);
});

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_declaration(this$__$1);
});

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_style = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$compile_style(ms){
return cljs.core.first(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_compile = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR__orig_val__17981 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_;
var _STAR_flags_STAR__temp_val__17982 = flags;
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR__temp_val__17982;

try{return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.rule_join(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.render_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.expand_stylesheet(rules)))));
}finally {day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR__orig_val__17981;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_preamble = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$do_preamble(p__17983,stylesheet){
var map__17984 = p__17983;
var map__17984__$1 = (((((!((map__17984 == null))))?(((((map__17984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17984):map__17984);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17984__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_compression = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$do_compression(p__17986,stylesheet){
var map__17987 = p__17986;
var map__17987__$1 = (((((!((map__17987 == null))))?(((((map__17987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17987):map__17987);
var pretty_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17987__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17987__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__4047__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compression.compress_stylesheet(stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_output_to = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$do_output_to(p__17989,stylesheet){
var map__17990 = p__17989;
var map__17990__$1 = (((((!((map__17990 == null))))?(((((map__17990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17990):map__17990);
var output_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17990__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$compiler$compile_css(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18156 = arguments.length;
var i__4642__auto___18157 = (0);
while(true){
if((i__4642__auto___18157 < len__4641__auto___18156)){
args__4647__auto__.push((arguments[i__4642__auto___18157]));

var G__18158 = (i__4642__auto___18157 + (1));
i__4642__auto___18157 = G__18158;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__17994 = (cljs.core.truth_((function (){var and__4036__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_(flags);
if(and__4036__auto__){
return cljs.core.some(cljs.core.set(cljs.core.keys(flags)),cljs.core.keys(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
} else {
return and__4036__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,flags], 0)),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,cljs.core.cons(flags,rules)], null));
var flags__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17994,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17994,(1),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_output_to(flags__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_compression(flags__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_preamble(flags__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.do_compile(flags__$1,rules__$1))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$applyTo = (function (seq17992){
var G__17993 = cljs.core.first(seq17992);
var seq17992__$1 = cljs.core.next(seq17992);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17993,seq17992__$1);
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.js.map
