goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23443){
var map__23444 = p__23443;
var map__23444__$1 = (((((!((map__23444 == null))))?(((((map__23444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23444):map__23444);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23444__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23444__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23444__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23444__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4047__auto__ = child_of;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__23446_23481 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23447_23482 = null;
var count__23448_23483 = (0);
var i__23449_23484 = (0);
while(true){
if((i__23449_23484 < count__23448_23483)){
var vec__23450_23485 = chunk__23447_23482.cljs$core$IIndexed$_nth$arity$2(null,i__23449_23484);
var k_23486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23450_23485,(0),null);
var cb_23487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23450_23485,(1),null);
try{var G__23454_23492 = cljs.core.deref(re_frame.trace.traces);
(cb_23487.cljs$core$IFn$_invoke$arity$1 ? cb_23487.cljs$core$IFn$_invoke$arity$1(G__23454_23492) : cb_23487.call(null,G__23454_23492));
}catch (e23453){var e_23493 = e23453;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23486,"while storing",cljs.core.deref(re_frame.trace.traces),e_23493], 0));
}

var G__23494 = seq__23446_23481;
var G__23495 = chunk__23447_23482;
var G__23496 = count__23448_23483;
var G__23497 = (i__23449_23484 + (1));
seq__23446_23481 = G__23494;
chunk__23447_23482 = G__23495;
count__23448_23483 = G__23496;
i__23449_23484 = G__23497;
continue;
} else {
var temp__5457__auto___23500 = cljs.core.seq(seq__23446_23481);
if(temp__5457__auto___23500){
var seq__23446_23501__$1 = temp__5457__auto___23500;
if(cljs.core.chunked_seq_QMARK_(seq__23446_23501__$1)){
var c__4461__auto___23502 = cljs.core.chunk_first(seq__23446_23501__$1);
var G__23503 = cljs.core.chunk_rest(seq__23446_23501__$1);
var G__23504 = c__4461__auto___23502;
var G__23505 = cljs.core.count(c__4461__auto___23502);
var G__23506 = (0);
seq__23446_23481 = G__23503;
chunk__23447_23482 = G__23504;
count__23448_23483 = G__23505;
i__23449_23484 = G__23506;
continue;
} else {
var vec__23455_23507 = cljs.core.first(seq__23446_23501__$1);
var k_23508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23455_23507,(0),null);
var cb_23509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23455_23507,(1),null);
try{var G__23459_23511 = cljs.core.deref(re_frame.trace.traces);
(cb_23509.cljs$core$IFn$_invoke$arity$1 ? cb_23509.cljs$core$IFn$_invoke$arity$1(G__23459_23511) : cb_23509.call(null,G__23459_23511));
}catch (e23458){var e_23513 = e23458;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23508,"while storing",cljs.core.deref(re_frame.trace.traces),e_23513], 0));
}

var G__23514 = cljs.core.next(seq__23446_23501__$1);
var G__23515 = null;
var G__23516 = (0);
var G__23517 = (0);
seq__23446_23481 = G__23514;
chunk__23447_23482 = G__23515;
count__23448_23483 = G__23516;
i__23449_23484 = G__23517;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
