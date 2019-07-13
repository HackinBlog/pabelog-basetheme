goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30465 = arguments.length;
var i__4642__auto___30466 = (0);
while(true){
if((i__4642__auto___30466 < len__4641__auto___30465)){
args__4647__auto__.push((arguments[i__4642__auto___30466]));

var G__30467 = (i__4642__auto___30466 + (1));
i__4642__auto___30466 = G__30467;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq30305){
var G__30306 = cljs.core.first(seq30305);
var seq30305__$1 = cljs.core.next(seq30305);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30306,seq30305__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__30320){
var map__30321 = p__30320;
var map__30321__$1 = (((((!((map__30321 == null))))?(((((map__30321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30321):map__30321);
var src = map__30321__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30321__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30321__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4047__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__30329 = cljs.core.seq(sources);
var chunk__30330 = null;
var count__30331 = (0);
var i__30332 = (0);
while(true){
if((i__30332 < count__30331)){
var map__30334 = chunk__30330.cljs$core$IIndexed$_nth$arity$2(null,i__30332);
var map__30334__$1 = (((((!((map__30334 == null))))?(((((map__30334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30334):map__30334);
var src = map__30334__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30334__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30334__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30334__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30334__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__30468 = seq__30329;
var G__30469 = chunk__30330;
var G__30470 = count__30331;
var G__30471 = (i__30332 + (1));
seq__30329 = G__30468;
chunk__30330 = G__30469;
count__30331 = G__30470;
i__30332 = G__30471;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30329);
if(temp__5457__auto__){
var seq__30329__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30329__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__30329__$1);
var G__30472 = cljs.core.chunk_rest(seq__30329__$1);
var G__30473 = c__4461__auto__;
var G__30474 = cljs.core.count(c__4461__auto__);
var G__30475 = (0);
seq__30329 = G__30472;
chunk__30330 = G__30473;
count__30331 = G__30474;
i__30332 = G__30475;
continue;
} else {
var map__30339 = cljs.core.first(seq__30329__$1);
var map__30339__$1 = (((((!((map__30339 == null))))?(((((map__30339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30339):map__30339);
var src = map__30339__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30339__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30339__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30339__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30339__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__30476 = cljs.core.next(seq__30329__$1);
var G__30477 = null;
var G__30478 = (0);
var G__30479 = (0);
seq__30329 = G__30476;
chunk__30330 = G__30477;
count__30331 = G__30478;
i__30332 = G__30479;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__30346 = cljs.core.seq(js_requires);
var chunk__30347 = null;
var count__30348 = (0);
var i__30349 = (0);
while(true){
if((i__30349 < count__30348)){
var js_ns = chunk__30347.cljs$core$IIndexed$_nth$arity$2(null,i__30349);
var require_str_30480 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_30480);


var G__30481 = seq__30346;
var G__30482 = chunk__30347;
var G__30483 = count__30348;
var G__30484 = (i__30349 + (1));
seq__30346 = G__30481;
chunk__30347 = G__30482;
count__30348 = G__30483;
i__30349 = G__30484;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30346);
if(temp__5457__auto__){
var seq__30346__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30346__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__30346__$1);
var G__30485 = cljs.core.chunk_rest(seq__30346__$1);
var G__30486 = c__4461__auto__;
var G__30487 = cljs.core.count(c__4461__auto__);
var G__30488 = (0);
seq__30346 = G__30485;
chunk__30347 = G__30486;
count__30348 = G__30487;
i__30349 = G__30488;
continue;
} else {
var js_ns = cljs.core.first(seq__30346__$1);
var require_str_30489 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_30489);


var G__30490 = cljs.core.next(seq__30346__$1);
var G__30491 = null;
var G__30492 = (0);
var G__30493 = (0);
seq__30346 = G__30490;
chunk__30347 = G__30491;
count__30348 = G__30492;
i__30349 = G__30493;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__30351 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__30351) : callback.call(null,G__30351));
} else {
var G__30354 = shadow.cljs.devtools.client.env.files_url();
var G__30355 = ((function (G__30354){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__30354))
;
var G__30356 = "POST";
var G__30357 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__30358 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__30354,G__30355,G__30356,G__30357,G__30358);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__30361){
var map__30362 = p__30361;
var map__30362__$1 = (((((!((map__30362 == null))))?(((((map__30362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30362):map__30362);
var msg = map__30362__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30362__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30362__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__30364 = info;
var map__30364__$1 = (((((!((map__30364 == null))))?(((((map__30364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30364):map__30364);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30364__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30364__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4434__auto__ = ((function (map__30364,map__30364__$1,sources,compiled,map__30362,map__30362__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__30366(s__30367){
return (new cljs.core.LazySeq(null,((function (map__30364,map__30364__$1,sources,compiled,map__30362,map__30362__$1,msg,info,reload_info){
return (function (){
var s__30367__$1 = s__30367;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__30367__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__30372 = cljs.core.first(xs__6012__auto__);
var map__30372__$1 = (((((!((map__30372 == null))))?(((((map__30372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30372):map__30372);
var src = map__30372__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30372__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30372__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4430__auto__ = ((function (s__30367__$1,map__30372,map__30372__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__30364,map__30364__$1,sources,compiled,map__30362,map__30362__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__30366_$_iter__30368(s__30369){
return (new cljs.core.LazySeq(null,((function (s__30367__$1,map__30372,map__30372__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__30364,map__30364__$1,sources,compiled,map__30362,map__30362__$1,msg,info,reload_info){
return (function (){
var s__30369__$1 = s__30369;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__30369__$1);
if(temp__5457__auto____$1){
var s__30369__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30369__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__30369__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__30371 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__30370 = (0);
while(true){
if((i__30370 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__30370);
cljs.core.chunk_append(b__30371,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__30494 = (i__30370 + (1));
i__30370 = G__30494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30371),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__30366_$_iter__30368(cljs.core.chunk_rest(s__30369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30371),null);
}
} else {
var warning = cljs.core.first(s__30369__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__30366_$_iter__30368(cljs.core.rest(s__30369__$2)));
}
} else {
return null;
}
break;
}
});})(s__30367__$1,map__30372,map__30372__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__30364,map__30364__$1,sources,compiled,map__30362,map__30362__$1,msg,info,reload_info))
,null,null));
});})(s__30367__$1,map__30372,map__30372__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__30364,map__30364__$1,sources,compiled,map__30362,map__30362__$1,msg,info,reload_info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__30366(cljs.core.rest(s__30367__$1)));
} else {
var G__30495 = cljs.core.rest(s__30367__$1);
s__30367__$1 = G__30495;
continue;
}
} else {
var G__30496 = cljs.core.rest(s__30367__$1);
s__30367__$1 = G__30496;
continue;
}
} else {
return null;
}
break;
}
});})(map__30364,map__30364__$1,sources,compiled,map__30362,map__30362__$1,msg,info,reload_info))
,null,null));
});})(map__30364,map__30364__$1,sources,compiled,map__30362,map__30362__$1,msg,info,reload_info))
;
return iter__4434__auto__(sources);
})()));
var seq__30374_30497 = cljs.core.seq(warnings);
var chunk__30375_30498 = null;
var count__30376_30499 = (0);
var i__30377_30500 = (0);
while(true){
if((i__30377_30500 < count__30376_30499)){
var map__30378_30501 = chunk__30375_30498.cljs$core$IIndexed$_nth$arity$2(null,i__30377_30500);
var map__30378_30502__$1 = (((((!((map__30378_30501 == null))))?(((((map__30378_30501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30378_30501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30378_30501):map__30378_30501);
var w_30503 = map__30378_30502__$1;
var msg_30504__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30378_30502__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_30505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30378_30502__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30378_30502__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_30507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30378_30502__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_30507)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_30505),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_30506),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_30504__$1)].join(''));


var G__30508 = seq__30374_30497;
var G__30509 = chunk__30375_30498;
var G__30510 = count__30376_30499;
var G__30511 = (i__30377_30500 + (1));
seq__30374_30497 = G__30508;
chunk__30375_30498 = G__30509;
count__30376_30499 = G__30510;
i__30377_30500 = G__30511;
continue;
} else {
var temp__5457__auto___30512 = cljs.core.seq(seq__30374_30497);
if(temp__5457__auto___30512){
var seq__30374_30513__$1 = temp__5457__auto___30512;
if(cljs.core.chunked_seq_QMARK_(seq__30374_30513__$1)){
var c__4461__auto___30514 = cljs.core.chunk_first(seq__30374_30513__$1);
var G__30515 = cljs.core.chunk_rest(seq__30374_30513__$1);
var G__30516 = c__4461__auto___30514;
var G__30517 = cljs.core.count(c__4461__auto___30514);
var G__30518 = (0);
seq__30374_30497 = G__30515;
chunk__30375_30498 = G__30516;
count__30376_30499 = G__30517;
i__30377_30500 = G__30518;
continue;
} else {
var map__30382_30519 = cljs.core.first(seq__30374_30513__$1);
var map__30382_30520__$1 = (((((!((map__30382_30519 == null))))?(((((map__30382_30519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30382_30519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30382_30519):map__30382_30519);
var w_30521 = map__30382_30520__$1;
var msg_30522__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30382_30520__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_30523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30382_30520__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30382_30520__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_30525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30382_30520__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_30525)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_30523),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_30524),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_30522__$1)].join(''));


var G__30526 = cljs.core.next(seq__30374_30513__$1);
var G__30527 = null;
var G__30528 = (0);
var G__30529 = (0);
seq__30374_30497 = G__30526;
chunk__30375_30498 = G__30527;
count__30376_30499 = G__30528;
i__30377_30500 = G__30529;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__30364,map__30364__$1,sources,compiled,warnings,map__30362,map__30362__$1,msg,info,reload_info){
return (function (p__30391){
var map__30392 = p__30391;
var map__30392__$1 = (((((!((map__30392 == null))))?(((((map__30392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30392):map__30392);
var src = map__30392__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30392__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30392__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__30364,map__30364__$1,sources,compiled,warnings,map__30362,map__30362__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__30364,map__30364__$1,sources,compiled,warnings,map__30362,map__30362__$1,msg,info,reload_info){
return (function (p__30394){
var map__30395 = p__30394;
var map__30395__$1 = (((((!((map__30395 == null))))?(((((map__30395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30395):map__30395);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30395__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__30364,map__30364__$1,sources,compiled,warnings,map__30362,map__30362__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__30364,map__30364__$1,sources,compiled,warnings,map__30362,map__30362__$1,msg,info,reload_info){
return (function (p__30397){
var map__30398 = p__30397;
var map__30398__$1 = (((((!((map__30398 == null))))?(((((map__30398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30398):map__30398);
var rc = map__30398__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30398__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__30364,map__30364__$1,sources,compiled,warnings,map__30362,map__30362__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__30364,map__30364__$1,sources,compiled,warnings,map__30362,map__30362__$1,msg,info,reload_info){
return (function (p1__30360_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__30360_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__30364,map__30364__$1,sources,compiled,warnings,map__30362,map__30362__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__4036__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__4036__auto__){
return rel_new;
} else {
return and__4036__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4036__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4036__auto____$1){
return new$;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__30400){
var map__30401 = p__30400;
var map__30401__$1 = (((((!((map__30401 == null))))?(((((map__30401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30401):map__30401);
var msg = map__30401__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30401__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__30403 = cljs.core.seq(updates);
var chunk__30405 = null;
var count__30406 = (0);
var i__30407 = (0);
while(true){
if((i__30407 < count__30406)){
var path = chunk__30405.cljs$core$IIndexed$_nth$arity$2(null,i__30407);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__30412_30530 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__30415_30531 = null;
var count__30416_30532 = (0);
var i__30417_30533 = (0);
while(true){
if((i__30417_30533 < count__30416_30532)){
var node_30534 = chunk__30415_30531.cljs$core$IIndexed$_nth$arity$2(null,i__30417_30533);
var path_match_30535 = shadow.cljs.devtools.client.browser.match_paths(node_30534.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30535)){
var new_link_30536 = (function (){var G__30421 = node_30534.cloneNode(true);
G__30421.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30535),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__30421;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30535], 0));

goog.dom.insertSiblingAfter(new_link_30536,node_30534);

goog.dom.removeNode(node_30534);


var G__30537 = seq__30412_30530;
var G__30538 = chunk__30415_30531;
var G__30539 = count__30416_30532;
var G__30540 = (i__30417_30533 + (1));
seq__30412_30530 = G__30537;
chunk__30415_30531 = G__30538;
count__30416_30532 = G__30539;
i__30417_30533 = G__30540;
continue;
} else {
var G__30541 = seq__30412_30530;
var G__30542 = chunk__30415_30531;
var G__30543 = count__30416_30532;
var G__30544 = (i__30417_30533 + (1));
seq__30412_30530 = G__30541;
chunk__30415_30531 = G__30542;
count__30416_30532 = G__30543;
i__30417_30533 = G__30544;
continue;
}
} else {
var temp__5457__auto___30545 = cljs.core.seq(seq__30412_30530);
if(temp__5457__auto___30545){
var seq__30412_30546__$1 = temp__5457__auto___30545;
if(cljs.core.chunked_seq_QMARK_(seq__30412_30546__$1)){
var c__4461__auto___30547 = cljs.core.chunk_first(seq__30412_30546__$1);
var G__30548 = cljs.core.chunk_rest(seq__30412_30546__$1);
var G__30549 = c__4461__auto___30547;
var G__30550 = cljs.core.count(c__4461__auto___30547);
var G__30551 = (0);
seq__30412_30530 = G__30548;
chunk__30415_30531 = G__30549;
count__30416_30532 = G__30550;
i__30417_30533 = G__30551;
continue;
} else {
var node_30552 = cljs.core.first(seq__30412_30546__$1);
var path_match_30553 = shadow.cljs.devtools.client.browser.match_paths(node_30552.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30553)){
var new_link_30554 = (function (){var G__30422 = node_30552.cloneNode(true);
G__30422.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30553),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__30422;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30553], 0));

goog.dom.insertSiblingAfter(new_link_30554,node_30552);

goog.dom.removeNode(node_30552);


var G__30555 = cljs.core.next(seq__30412_30546__$1);
var G__30556 = null;
var G__30557 = (0);
var G__30558 = (0);
seq__30412_30530 = G__30555;
chunk__30415_30531 = G__30556;
count__30416_30532 = G__30557;
i__30417_30533 = G__30558;
continue;
} else {
var G__30559 = cljs.core.next(seq__30412_30546__$1);
var G__30560 = null;
var G__30561 = (0);
var G__30562 = (0);
seq__30412_30530 = G__30559;
chunk__30415_30531 = G__30560;
count__30416_30532 = G__30561;
i__30417_30533 = G__30562;
continue;
}
}
} else {
}
}
break;
}


var G__30563 = seq__30403;
var G__30564 = chunk__30405;
var G__30565 = count__30406;
var G__30566 = (i__30407 + (1));
seq__30403 = G__30563;
chunk__30405 = G__30564;
count__30406 = G__30565;
i__30407 = G__30566;
continue;
} else {
var G__30567 = seq__30403;
var G__30568 = chunk__30405;
var G__30569 = count__30406;
var G__30570 = (i__30407 + (1));
seq__30403 = G__30567;
chunk__30405 = G__30568;
count__30406 = G__30569;
i__30407 = G__30570;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30403);
if(temp__5457__auto__){
var seq__30403__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30403__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__30403__$1);
var G__30571 = cljs.core.chunk_rest(seq__30403__$1);
var G__30572 = c__4461__auto__;
var G__30573 = cljs.core.count(c__4461__auto__);
var G__30574 = (0);
seq__30403 = G__30571;
chunk__30405 = G__30572;
count__30406 = G__30573;
i__30407 = G__30574;
continue;
} else {
var path = cljs.core.first(seq__30403__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__30424_30575 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__30427_30576 = null;
var count__30428_30577 = (0);
var i__30429_30578 = (0);
while(true){
if((i__30429_30578 < count__30428_30577)){
var node_30579 = chunk__30427_30576.cljs$core$IIndexed$_nth$arity$2(null,i__30429_30578);
var path_match_30580 = shadow.cljs.devtools.client.browser.match_paths(node_30579.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30580)){
var new_link_30581 = (function (){var G__30433 = node_30579.cloneNode(true);
G__30433.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30580),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__30433;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30580], 0));

goog.dom.insertSiblingAfter(new_link_30581,node_30579);

goog.dom.removeNode(node_30579);


var G__30582 = seq__30424_30575;
var G__30583 = chunk__30427_30576;
var G__30584 = count__30428_30577;
var G__30585 = (i__30429_30578 + (1));
seq__30424_30575 = G__30582;
chunk__30427_30576 = G__30583;
count__30428_30577 = G__30584;
i__30429_30578 = G__30585;
continue;
} else {
var G__30586 = seq__30424_30575;
var G__30587 = chunk__30427_30576;
var G__30588 = count__30428_30577;
var G__30589 = (i__30429_30578 + (1));
seq__30424_30575 = G__30586;
chunk__30427_30576 = G__30587;
count__30428_30577 = G__30588;
i__30429_30578 = G__30589;
continue;
}
} else {
var temp__5457__auto___30590__$1 = cljs.core.seq(seq__30424_30575);
if(temp__5457__auto___30590__$1){
var seq__30424_30591__$1 = temp__5457__auto___30590__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30424_30591__$1)){
var c__4461__auto___30592 = cljs.core.chunk_first(seq__30424_30591__$1);
var G__30593 = cljs.core.chunk_rest(seq__30424_30591__$1);
var G__30594 = c__4461__auto___30592;
var G__30595 = cljs.core.count(c__4461__auto___30592);
var G__30596 = (0);
seq__30424_30575 = G__30593;
chunk__30427_30576 = G__30594;
count__30428_30577 = G__30595;
i__30429_30578 = G__30596;
continue;
} else {
var node_30597 = cljs.core.first(seq__30424_30591__$1);
var path_match_30598 = shadow.cljs.devtools.client.browser.match_paths(node_30597.getAttribute("href"),path);
if(cljs.core.truth_(path_match_30598)){
var new_link_30599 = (function (){var G__30434 = node_30597.cloneNode(true);
G__30434.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_30598),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__30434;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_30598], 0));

goog.dom.insertSiblingAfter(new_link_30599,node_30597);

goog.dom.removeNode(node_30597);


var G__30600 = cljs.core.next(seq__30424_30591__$1);
var G__30601 = null;
var G__30602 = (0);
var G__30603 = (0);
seq__30424_30575 = G__30600;
chunk__30427_30576 = G__30601;
count__30428_30577 = G__30602;
i__30429_30578 = G__30603;
continue;
} else {
var G__30604 = cljs.core.next(seq__30424_30591__$1);
var G__30605 = null;
var G__30606 = (0);
var G__30607 = (0);
seq__30424_30575 = G__30604;
chunk__30427_30576 = G__30605;
count__30428_30577 = G__30606;
i__30429_30578 = G__30607;
continue;
}
}
} else {
}
}
break;
}


var G__30608 = cljs.core.next(seq__30403__$1);
var G__30609 = null;
var G__30610 = (0);
var G__30611 = (0);
seq__30403 = G__30608;
chunk__30405 = G__30609;
count__30406 = G__30610;
i__30407 = G__30611;
continue;
} else {
var G__30612 = cljs.core.next(seq__30403__$1);
var G__30613 = null;
var G__30614 = (0);
var G__30615 = (0);
seq__30403 = G__30612;
chunk__30405 = G__30613;
count__30406 = G__30614;
i__30407 = G__30615;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__30435){
var map__30436 = p__30435;
var map__30436__$1 = (((((!((map__30436 == null))))?(((((map__30436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30436):map__30436);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30436__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30436__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__30436,map__30436__$1,id,js){
return (function (){
return eval(js);
});})(map__30436,map__30436__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__30438){
var map__30439 = p__30438;
var map__30439__$1 = (((((!((map__30439 == null))))?(((((map__30439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30439):map__30439);
var msg = map__30439__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30439__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30439__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30439__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30439__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__30439,map__30439__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__30441){
var map__30442 = p__30441;
var map__30442__$1 = (((((!((map__30442 == null))))?(((((map__30442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30442):map__30442);
var src = map__30442__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30442__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4036__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4036__auto__;
}
});})(map__30439,map__30439__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__30439,map__30439__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__30439,map__30439__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__30444){
var map__30445 = p__30444;
var map__30445__$1 = (((((!((map__30445 == null))))?(((((map__30445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30445):map__30445);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30445__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30445__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__30445,map__30445__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__30445,map__30445__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__30447){
var map__30448 = p__30447;
var map__30448__$1 = (((((!((map__30448 == null))))?(((((map__30448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30448):map__30448);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30448__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30448__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__30450){
var map__30451 = p__30450;
var map__30451__$1 = (((((!((map__30451 == null))))?(((((map__30451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30451):map__30451);
var msg = map__30451__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30451__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__30453 = type;
var G__30453__$1 = (((G__30453 instanceof cljs.core.Keyword))?G__30453.fqn:null);
switch (G__30453__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__30454 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__30455 = ((function (G__30454){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__30454))
;
var G__30456 = "POST";
var G__30457 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__30458 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__30454,G__30455,G__30456,G__30457,G__30458);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4047__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e30463){var e = e30463;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___30617 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___30617)){
var s_30618 = temp__5457__auto___30617;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_30618.onclose = ((function (s_30618,temp__5457__auto___30617){
return (function (e){
return null;
});})(s_30618,temp__5457__auto___30617))
;

s_30618.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
