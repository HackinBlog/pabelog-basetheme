goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__19177 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19178 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19178;

try{try{var seq__19179 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__19180 = null;
var count__19181 = (0);
var i__19182 = (0);
while(true){
if((i__19182 < count__19181)){
var vec__19183 = chunk__19180.cljs$core$IIndexed$_nth$arity$2(null,i__19182);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19183,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19183,(1),null);
var temp__5455__auto___19222 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___19222)){
var effect_fn_19223 = temp__5455__auto___19222;
(effect_fn_19223.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19223.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19223.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19224 = seq__19179;
var G__19225 = chunk__19180;
var G__19226 = count__19181;
var G__19227 = (i__19182 + (1));
seq__19179 = G__19224;
chunk__19180 = G__19225;
count__19181 = G__19226;
i__19182 = G__19227;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19179);
if(temp__5457__auto__){
var seq__19179__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19179__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__19179__$1);
var G__19230 = cljs.core.chunk_rest(seq__19179__$1);
var G__19231 = c__4461__auto__;
var G__19232 = cljs.core.count(c__4461__auto__);
var G__19233 = (0);
seq__19179 = G__19230;
chunk__19180 = G__19231;
count__19181 = G__19232;
i__19182 = G__19233;
continue;
} else {
var vec__19186 = cljs.core.first(seq__19179__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19186,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19186,(1),null);
var temp__5455__auto___19234 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___19234)){
var effect_fn_19235 = temp__5455__auto___19234;
(effect_fn_19235.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19235.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19235.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19236 = cljs.core.next(seq__19179__$1);
var G__19237 = null;
var G__19238 = (0);
var G__19239 = (0);
seq__19179 = G__19236;
chunk__19180 = G__19237;
count__19181 = G__19238;
i__19182 = G__19239;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__18937__auto___19241 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now();
var duration__18938__auto___19242 = (end__18937__auto___19241 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18938__auto___19242,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__18937__auto___19241);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19177;
}} else {
var seq__19189 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__19190 = null;
var count__19191 = (0);
var i__19192 = (0);
while(true){
if((i__19192 < count__19191)){
var vec__19193 = chunk__19190.cljs$core$IIndexed$_nth$arity$2(null,i__19192);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19193,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19193,(1),null);
var temp__5455__auto___19245 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___19245)){
var effect_fn_19246 = temp__5455__auto___19245;
(effect_fn_19246.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19246.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19246.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19247 = seq__19189;
var G__19248 = chunk__19190;
var G__19249 = count__19191;
var G__19250 = (i__19192 + (1));
seq__19189 = G__19247;
chunk__19190 = G__19248;
count__19191 = G__19249;
i__19192 = G__19250;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19189);
if(temp__5457__auto__){
var seq__19189__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19189__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__19189__$1);
var G__19252 = cljs.core.chunk_rest(seq__19189__$1);
var G__19253 = c__4461__auto__;
var G__19254 = cljs.core.count(c__4461__auto__);
var G__19255 = (0);
seq__19189 = G__19252;
chunk__19190 = G__19253;
count__19191 = G__19254;
i__19192 = G__19255;
continue;
} else {
var vec__19196 = cljs.core.first(seq__19189__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19196,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19196,(1),null);
var temp__5455__auto___19256 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___19256)){
var effect_fn_19257 = temp__5455__auto___19256;
(effect_fn_19257.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19257.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19257.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19258 = cljs.core.next(seq__19189__$1);
var G__19259 = null;
var G__19260 = (0);
var G__19261 = (0);
seq__19189 = G__19258;
chunk__19190 = G__19259;
count__19191 = G__19260;
i__19192 = G__19261;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__19199 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19200 = null;
var count__19201 = (0);
var i__19202 = (0);
while(true){
if((i__19202 < count__19201)){
var map__19203 = chunk__19200.cljs$core$IIndexed$_nth$arity$2(null,i__19202);
var map__19203__$1 = (((((!((map__19203 == null))))?(((((map__19203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19203):map__19203);
var effect = map__19203__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19203__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19203__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__19199,chunk__19200,count__19201,i__19202,map__19203,map__19203__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__19199,chunk__19200,count__19201,i__19202,map__19203,map__19203__$1,effect,ms,dispatch))
,ms);
}


var G__19264 = seq__19199;
var G__19265 = chunk__19200;
var G__19266 = count__19201;
var G__19267 = (i__19202 + (1));
seq__19199 = G__19264;
chunk__19200 = G__19265;
count__19201 = G__19266;
i__19202 = G__19267;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19199);
if(temp__5457__auto__){
var seq__19199__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19199__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__19199__$1);
var G__19269 = cljs.core.chunk_rest(seq__19199__$1);
var G__19270 = c__4461__auto__;
var G__19271 = cljs.core.count(c__4461__auto__);
var G__19272 = (0);
seq__19199 = G__19269;
chunk__19200 = G__19270;
count__19201 = G__19271;
i__19202 = G__19272;
continue;
} else {
var map__19206 = cljs.core.first(seq__19199__$1);
var map__19206__$1 = (((((!((map__19206 == null))))?(((((map__19206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19206):map__19206);
var effect = map__19206__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19206__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19206__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__19199,chunk__19200,count__19201,i__19202,map__19206,map__19206__$1,effect,ms,dispatch,seq__19199__$1,temp__5457__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__19199,chunk__19200,count__19201,i__19202,map__19206,map__19206__$1,effect,ms,dispatch,seq__19199__$1,temp__5457__auto__))
,ms);
}


var G__19275 = cljs.core.next(seq__19199__$1);
var G__19276 = null;
var G__19277 = (0);
var G__19278 = (0);
seq__19199 = G__19275;
chunk__19200 = G__19276;
count__19201 = G__19277;
i__19202 = G__19278;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__19211 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19212 = null;
var count__19213 = (0);
var i__19214 = (0);
while(true){
if((i__19214 < count__19213)){
var event = chunk__19212.cljs$core$IIndexed$_nth$arity$2(null,i__19214);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__19279 = seq__19211;
var G__19280 = chunk__19212;
var G__19281 = count__19213;
var G__19282 = (i__19214 + (1));
seq__19211 = G__19279;
chunk__19212 = G__19280;
count__19213 = G__19281;
i__19214 = G__19282;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19211);
if(temp__5457__auto__){
var seq__19211__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19211__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__19211__$1);
var G__19283 = cljs.core.chunk_rest(seq__19211__$1);
var G__19284 = c__4461__auto__;
var G__19285 = cljs.core.count(c__4461__auto__);
var G__19286 = (0);
seq__19211 = G__19283;
chunk__19212 = G__19284;
count__19213 = G__19285;
i__19214 = G__19286;
continue;
} else {
var event = cljs.core.first(seq__19211__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__19287 = cljs.core.next(seq__19211__$1);
var G__19288 = null;
var G__19289 = (0);
var G__19290 = (0);
seq__19211 = G__19287;
chunk__19212 = G__19288;
count__19213 = G__19289;
i__19214 = G__19290;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__19215 = cljs.core.seq(value);
var chunk__19216 = null;
var count__19217 = (0);
var i__19218 = (0);
while(true){
if((i__19218 < count__19217)){
var event = chunk__19216.cljs$core$IIndexed$_nth$arity$2(null,i__19218);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19291 = seq__19215;
var G__19292 = chunk__19216;
var G__19293 = count__19217;
var G__19294 = (i__19218 + (1));
seq__19215 = G__19291;
chunk__19216 = G__19292;
count__19217 = G__19293;
i__19218 = G__19294;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19215);
if(temp__5457__auto__){
var seq__19215__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19215__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__19215__$1);
var G__19297 = cljs.core.chunk_rest(seq__19215__$1);
var G__19298 = c__4461__auto__;
var G__19299 = cljs.core.count(c__4461__auto__);
var G__19300 = (0);
seq__19215 = G__19297;
chunk__19216 = G__19298;
count__19217 = G__19299;
i__19218 = G__19300;
continue;
} else {
var event = cljs.core.first(seq__19215__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19301 = cljs.core.next(seq__19215__$1);
var G__19302 = null;
var G__19303 = (0);
var G__19304 = (0);
seq__19215 = G__19301;
chunk__19216 = G__19302;
count__19217 = G__19303;
i__19218 = G__19304;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.js.map
