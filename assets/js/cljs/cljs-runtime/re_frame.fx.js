goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23663 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23664 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23664;

try{try{var seq__23666 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23667 = null;
var count__23668 = (0);
var i__23669 = (0);
while(true){
if((i__23669 < count__23668)){
var vec__23670 = chunk__23667.cljs$core$IIndexed$_nth$arity$2(null,i__23669);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23670,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23670,(1),null);
var temp__5455__auto___23713 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23713)){
var effect_fn_23714 = temp__5455__auto___23713;
(effect_fn_23714.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23714.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23714.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23715 = seq__23666;
var G__23716 = chunk__23667;
var G__23717 = count__23668;
var G__23718 = (i__23669 + (1));
seq__23666 = G__23715;
chunk__23667 = G__23716;
count__23668 = G__23717;
i__23669 = G__23718;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23666);
if(temp__5457__auto__){
var seq__23666__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23666__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__23666__$1);
var G__23719 = cljs.core.chunk_rest(seq__23666__$1);
var G__23720 = c__4461__auto__;
var G__23721 = cljs.core.count(c__4461__auto__);
var G__23722 = (0);
seq__23666 = G__23719;
chunk__23667 = G__23720;
count__23668 = G__23721;
i__23669 = G__23722;
continue;
} else {
var vec__23675 = cljs.core.first(seq__23666__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23675,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23675,(1),null);
var temp__5455__auto___23723 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23723)){
var effect_fn_23724 = temp__5455__auto___23723;
(effect_fn_23724.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23724.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23724.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23725 = cljs.core.next(seq__23666__$1);
var G__23726 = null;
var G__23727 = (0);
var G__23728 = (0);
seq__23666 = G__23725;
chunk__23667 = G__23726;
count__23668 = G__23727;
i__23669 = G__23728;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23423__auto___23730 = re_frame.interop.now();
var duration__23424__auto___23731 = (end__23423__auto___23730 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23424__auto___23731,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23423__auto___23730);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23663;
}} else {
var seq__23678 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23679 = null;
var count__23680 = (0);
var i__23681 = (0);
while(true){
if((i__23681 < count__23680)){
var vec__23682 = chunk__23679.cljs$core$IIndexed$_nth$arity$2(null,i__23681);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23682,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23682,(1),null);
var temp__5455__auto___23736 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23736)){
var effect_fn_23737 = temp__5455__auto___23736;
(effect_fn_23737.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23737.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23737.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23738 = seq__23678;
var G__23739 = chunk__23679;
var G__23740 = count__23680;
var G__23741 = (i__23681 + (1));
seq__23678 = G__23738;
chunk__23679 = G__23739;
count__23680 = G__23740;
i__23681 = G__23741;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23678);
if(temp__5457__auto__){
var seq__23678__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23678__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__23678__$1);
var G__23745 = cljs.core.chunk_rest(seq__23678__$1);
var G__23746 = c__4461__auto__;
var G__23747 = cljs.core.count(c__4461__auto__);
var G__23748 = (0);
seq__23678 = G__23745;
chunk__23679 = G__23746;
count__23680 = G__23747;
i__23681 = G__23748;
continue;
} else {
var vec__23685 = cljs.core.first(seq__23678__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23685,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23685,(1),null);
var temp__5455__auto___23751 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23751)){
var effect_fn_23755 = temp__5455__auto___23751;
(effect_fn_23755.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23755.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23755.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23756 = cljs.core.next(seq__23678__$1);
var G__23757 = null;
var G__23758 = (0);
var G__23759 = (0);
seq__23678 = G__23756;
chunk__23679 = G__23757;
count__23680 = G__23758;
i__23681 = G__23759;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__23688 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23689 = null;
var count__23690 = (0);
var i__23691 = (0);
while(true){
if((i__23691 < count__23690)){
var map__23692 = chunk__23689.cljs$core$IIndexed$_nth$arity$2(null,i__23691);
var map__23692__$1 = (((((!((map__23692 == null))))?(((((map__23692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23692):map__23692);
var effect = map__23692__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23692__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23692__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23688,chunk__23689,count__23690,i__23691,map__23692,map__23692__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23688,chunk__23689,count__23690,i__23691,map__23692,map__23692__$1,effect,ms,dispatch))
,ms);
}


var G__23764 = seq__23688;
var G__23765 = chunk__23689;
var G__23766 = count__23690;
var G__23767 = (i__23691 + (1));
seq__23688 = G__23764;
chunk__23689 = G__23765;
count__23690 = G__23766;
i__23691 = G__23767;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23688);
if(temp__5457__auto__){
var seq__23688__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23688__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__23688__$1);
var G__23768 = cljs.core.chunk_rest(seq__23688__$1);
var G__23769 = c__4461__auto__;
var G__23770 = cljs.core.count(c__4461__auto__);
var G__23771 = (0);
seq__23688 = G__23768;
chunk__23689 = G__23769;
count__23690 = G__23770;
i__23691 = G__23771;
continue;
} else {
var map__23695 = cljs.core.first(seq__23688__$1);
var map__23695__$1 = (((((!((map__23695 == null))))?(((((map__23695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23695):map__23695);
var effect = map__23695__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23695__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23695__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__23688,chunk__23689,count__23690,i__23691,map__23695,map__23695__$1,effect,ms,dispatch,seq__23688__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__23688,chunk__23689,count__23690,i__23691,map__23695,map__23695__$1,effect,ms,dispatch,seq__23688__$1,temp__5457__auto__))
,ms);
}


var G__23778 = cljs.core.next(seq__23688__$1);
var G__23779 = null;
var G__23780 = (0);
var G__23781 = (0);
seq__23688 = G__23778;
chunk__23689 = G__23779;
count__23690 = G__23780;
i__23691 = G__23781;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__23700 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23701 = null;
var count__23702 = (0);
var i__23703 = (0);
while(true){
if((i__23703 < count__23702)){
var event = chunk__23701.cljs$core$IIndexed$_nth$arity$2(null,i__23703);
re_frame.router.dispatch(event);


var G__23782 = seq__23700;
var G__23783 = chunk__23701;
var G__23784 = count__23702;
var G__23785 = (i__23703 + (1));
seq__23700 = G__23782;
chunk__23701 = G__23783;
count__23702 = G__23784;
i__23703 = G__23785;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23700);
if(temp__5457__auto__){
var seq__23700__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23700__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__23700__$1);
var G__23786 = cljs.core.chunk_rest(seq__23700__$1);
var G__23787 = c__4461__auto__;
var G__23788 = cljs.core.count(c__4461__auto__);
var G__23789 = (0);
seq__23700 = G__23786;
chunk__23701 = G__23787;
count__23702 = G__23788;
i__23703 = G__23789;
continue;
} else {
var event = cljs.core.first(seq__23700__$1);
re_frame.router.dispatch(event);


var G__23790 = cljs.core.next(seq__23700__$1);
var G__23791 = null;
var G__23792 = (0);
var G__23793 = (0);
seq__23700 = G__23790;
chunk__23701 = G__23791;
count__23702 = G__23792;
i__23703 = G__23793;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__23706 = cljs.core.seq(value);
var chunk__23707 = null;
var count__23708 = (0);
var i__23709 = (0);
while(true){
if((i__23709 < count__23708)){
var event = chunk__23707.cljs$core$IIndexed$_nth$arity$2(null,i__23709);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23794 = seq__23706;
var G__23795 = chunk__23707;
var G__23796 = count__23708;
var G__23797 = (i__23709 + (1));
seq__23706 = G__23794;
chunk__23707 = G__23795;
count__23708 = G__23796;
i__23709 = G__23797;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23706);
if(temp__5457__auto__){
var seq__23706__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23706__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__23706__$1);
var G__23798 = cljs.core.chunk_rest(seq__23706__$1);
var G__23799 = c__4461__auto__;
var G__23800 = cljs.core.count(c__4461__auto__);
var G__23801 = (0);
seq__23706 = G__23798;
chunk__23707 = G__23799;
count__23708 = G__23800;
i__23709 = G__23801;
continue;
} else {
var event = cljs.core.first(seq__23706__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__23803 = cljs.core.next(seq__23706__$1);
var G__23804 = null;
var G__23805 = (0);
var G__23806 = (0);
seq__23706 = G__23803;
chunk__23707 = G__23804;
count__23708 = G__23805;
i__23709 = G__23806;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
