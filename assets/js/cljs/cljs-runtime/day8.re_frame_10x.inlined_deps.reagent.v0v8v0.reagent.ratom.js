goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching');
goog.require('clojure.set');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.debug !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.debug = false;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.generation !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.generation = (0);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.reactive_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$reactive_QMARK_(){
return (!((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.running = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$running(){
return cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.arr_len = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.arr_eq = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$arr_eq(x,y){
var len = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.arr_len(x);
var and__4036__auto__ = (len === day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.arr_len(y));
if(and__4036__auto__){
var i = (0);
while(true){
var or__4047__auto__ = (i === len);
if(or__4047__auto__){
return or__4047__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__18302 = (i + (1));
i = G__18302;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__4036__auto__;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.in_context = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__18207 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__18208 = obj;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__18208;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__18207;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.deref_capture = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.generation = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.generation + (1));


var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.in_context(r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5461__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5461__auto__ == null)){
return null;
} else {
var r = temp__5461__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.check_watches = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$check_watches(old,new$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f));

return this$.watchesArr = null;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.remove_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key));

return this$.watchesArr = null;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv(((function (w){
return (function (p1__18209_SHARP_,p2__18210_SHARP_,p3__18211_SHARP_){
var G__18212 = p1__18209_SHARP_;
G__18212.push(p2__18210_SHARP_);

G__18212.push(p3__18211_SHARP_);

return G__18212;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_18313 = (a[i]);
var f_18314 = (a[(i + (1))]);
(f_18314.cljs$core$IFn$_invoke$arity$4 ? f_18314.cljs$core$IFn$_invoke$arity$4(k_18313,this$,old,new$) : f_18314.call(null,k_18313,this$,old,new$));

var G__18316 = ((2) + i);
i = G__18316;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write(writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR__orig_val__18213 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__18214 = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__18214;

try{return cljs.core._deref(a);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__18213;
}})(),writer,opts);

return cljs.core._write(writer,">");
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_enqueue = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$rea_enqueue(r){
if((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue == null)){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue = [];

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.schedule();
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue.push(r);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$flush_BANG_(){
while(true){
var q = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_queue = null;

var n__4518__auto___18323 = q.length;
var i_18324 = (0);
while(true){
if((i_18324 < n__4518__auto___18323)){
(q[i_18324])._queued_run();

var G__18325 = (i_18324 + (1));
i_18324 = G__18325;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.ratom_flush = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_;

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IWithMeta}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Atom:");
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RAtom";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RAtom");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RAtom.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_RAtom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$atom(var_args){
var G__18218 = arguments.length;
switch (G__18218) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___18338 = arguments.length;
var i__4642__auto___18339 = (0);
while(true){
if((i__4642__auto___18339 < len__4641__auto___18338)){
args_arr__4662__auto__.push((arguments[i__4642__auto___18339]));

var G__18340 = (i__4642__auto___18339 + (1));
i__4642__auto___18339 = G__18340;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4663__auto__);

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_RAtom(x,null,null,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__18221){
var map__18222 = p__18221;
var map__18222__$1 = (((((!((map__18222 == null))))?(((((map__18222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18222):map__18222);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18222__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18222__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_RAtom(x,meta,validator,null);
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq18216){
var G__18217 = cljs.core.first(seq18216);
var seq18216__$1 = cljs.core.next(seq18216);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18217,seq18216__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cache_key = "reagReactionCache";
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cached_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if((!((r == null)))){
return cljs.core._deref(r);
} else {
if((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__18227 = f;
var G__18228 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__18229 = ((function (G__18227,G__18228,m,m__$1,r){
return (function (x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __18346 = (o["reagReactionCache"]);
var __18347__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__18346,k);
(o["reagReactionCache"] = __18347__$1);

if((!((obj == null)))){
obj.reaction = null;
} else {
}

if((!((destroy == null)))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});})(G__18227,G__18228,m,m__$1,r))
;
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__18227,G__18228,G__18229) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.call(null,G__18227,G__18228,G__18229));
})();
var v = cljs.core._deref(r__$1);
(o["reagReactionCache"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cached_reaction(((function (temp__5459__auto__,this$__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
});})(temp__5459__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref(r);
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Track:");
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Track";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Track");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Track.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_Track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track(f,args,reaction));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$make_track(f,args){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Track(f,args,null));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$make_track_BANG_(f,args){
var t = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track(f,args);
var r = (function (){var G__18244 = ((function (t){
return (function (){
return t.cljs$core$IDeref$_deref$arity$1(null);
});})(t))
;
var G__18245 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__18246 = true;
return (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__18244,G__18245,G__18246) : day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.call(null,G__18244,G__18245,G__18246));
})();
cljs.core.deref(r);

return r;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$track(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18358 = arguments.length;
var i__4642__auto___18359 = (0);
while(true){
if((i__4642__auto___18359 < len__4641__auto___18358)){
args__4647__auto__.push((arguments[i__4642__auto___18359]));

var G__18360 = (i__4642__auto___18359 + (1));
i__4642__auto___18359 = G__18360;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track(f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq18248){
var G__18249 = cljs.core.first(seq18248);
var seq18248__$1 = cljs.core.next(seq18248);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18249,seq18248__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$track_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18362 = arguments.length;
var i__4642__auto___18363 = (0);
while(true){
if((i__4642__auto___18363 < len__4641__auto___18362)){
args__4647__auto__.push((arguments[i__4642__auto___18363]));

var G__18364 = (i__4642__auto___18363 + (1));
i__4642__auto___18363 = G__18364;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track_BANG_(f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq18253){
var G__18254 = cljs.core.first(seq18253);
var seq18253__$1 = cljs.core.next(seq18253);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18254,seq18253__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__18258 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__18259 = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__18259;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__18258;
}});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if((!((self__.watches == null)))){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__18261 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18261) : f.call(null,G__18261));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__18262 = a__$1._peek();
var G__18263 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18262,G__18263) : f.call(null,G__18262,G__18263));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__18264 = a__$1._peek();
var G__18265 = x;
var G__18266 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18264,G__18265,G__18266) : f.call(null,G__18264,G__18265,G__18266));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
});})(temp__5459__auto__,oldstate,this$__$1))
:((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
});})(temp__5459__auto__,oldstate,this$__$1))
);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RCursor";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RCursor");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/RCursor.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_RCursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$cursor(src,path){
if((function (){var or__4047__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom,src));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && ((!(cljs.core.vector_QMARK_(src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["src must be a reactive atom or a function, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)))].join('')),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.with_let_destroy = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$with_let_destroy(v){
var temp__5461__auto__ = v.destroy;
if((temp__5461__auto__ == null)){
return null;
} else {
var f = temp__5461__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.with_let_values = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$with_let_values(key){
var temp__5459__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5459__auto__ == null)){
return [];
} else {
var c = temp__5459__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cached_reaction(cljs.core.array,c,key,null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IDisposable = function(){};

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.dispose_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4348__auto__.call(null,this$,f));
} else {
var m__4348__auto____$1 = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4348__auto____$1.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IRunnable = function(){};

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.run = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.run[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.run["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.handle_reaction_change = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IDisposable}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.IRunnable}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__18270 = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__18271 = null;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__18271;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__18270;
}});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
self__.watching = derefed;

var seq__18272_18429 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__18273_18430 = null;
var count__18274_18431 = (0);
var i__18275_18432 = (0);
while(true){
if((i__18275_18432 < count__18274_18431)){
var w_18433 = chunk__18273_18430.cljs$core$IIndexed$_nth$arity$2(null,i__18275_18432);
cljs.core._add_watch(w_18433,this$,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.handle_reaction_change);


var G__18434 = seq__18272_18429;
var G__18435 = chunk__18273_18430;
var G__18436 = count__18274_18431;
var G__18437 = (i__18275_18432 + (1));
seq__18272_18429 = G__18434;
chunk__18273_18430 = G__18435;
count__18274_18431 = G__18436;
i__18275_18432 = G__18437;
continue;
} else {
var temp__5457__auto___18438 = cljs.core.seq(seq__18272_18429);
if(temp__5457__auto___18438){
var seq__18272_18439__$1 = temp__5457__auto___18438;
if(cljs.core.chunked_seq_QMARK_(seq__18272_18439__$1)){
var c__4461__auto___18443 = cljs.core.chunk_first(seq__18272_18439__$1);
var G__18445 = cljs.core.chunk_rest(seq__18272_18439__$1);
var G__18446 = c__4461__auto___18443;
var G__18447 = cljs.core.count(c__4461__auto___18443);
var G__18448 = (0);
seq__18272_18429 = G__18445;
chunk__18273_18430 = G__18446;
count__18274_18431 = G__18447;
i__18275_18432 = G__18448;
continue;
} else {
var w_18449 = cljs.core.first(seq__18272_18439__$1);
cljs.core._add_watch(w_18449,this$,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.handle_reaction_change);


var G__18450 = cljs.core.next(seq__18272_18439__$1);
var G__18451 = null;
var G__18452 = (0);
var G__18453 = (0);
seq__18272_18429 = G__18450;
chunk__18273_18430 = G__18451;
count__18274_18431 = G__18452;
i__18275_18432 = G__18453;
continue;
}
} else {
}
}
break;
}

var seq__18276 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__18277 = null;
var count__18278 = (0);
var i__18279 = (0);
while(true){
if((i__18279 < count__18278)){
var w = chunk__18277.cljs$core$IIndexed$_nth$arity$2(null,i__18279);
cljs.core._remove_watch(w,this$);


var G__18454 = seq__18276;
var G__18455 = chunk__18277;
var G__18456 = count__18278;
var G__18457 = (i__18279 + (1));
seq__18276 = G__18454;
chunk__18277 = G__18455;
count__18278 = G__18456;
i__18279 = G__18457;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18276);
if(temp__5457__auto__){
var seq__18276__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18276__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18276__$1);
var G__18459 = cljs.core.chunk_rest(seq__18276__$1);
var G__18460 = c__4461__auto__;
var G__18461 = cljs.core.count(c__4461__auto__);
var G__18462 = (0);
seq__18276 = G__18459;
chunk__18277 = G__18460;
count__18278 = G__18461;
i__18279 = G__18462;
continue;
} else {
var w = cljs.core.first(seq__18276__$1);
cljs.core._remove_watch(w,this$);


var G__18466 = cljs.core.next(seq__18276__$1);
var G__18467 = null;
var G__18468 = (0);
var G__18469 = (0);
seq__18276 = G__18466;
chunk__18277 = G__18467;
count__18278 = G__18468;
i__18279 = G__18469;
continue;
}
} else {
return null;
}
}
break;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.deref_capture(f__$1,this$);
}catch (e18280){var e = e18280;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__18281){
var self__ = this;
var map__18282 = p__18281;
var map__18282__$1 = (((((!((map__18282 == null))))?(((((map__18282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18282):map__18282);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18282__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
this$.auto_run = auto_run__$1;
} else {
}

if((!((on_set == null)))){
this$.on_set = on_set;
} else {
}

if((!((on_dispose == null)))){
this$.on_dispose = on_dispose;
} else {
}

if((!((no_cache == null)))){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(a__$1)),":"].join(''));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__18284_18480 = cljs.core.seq(cljs.core.set(wg));
var chunk__18285_18481 = null;
var count__18286_18482 = (0);
var i__18287_18483 = (0);
while(true){
if((i__18287_18483 < count__18286_18482)){
var w_18485 = chunk__18285_18481.cljs$core$IIndexed$_nth$arity$2(null,i__18287_18483);
cljs.core._remove_watch(w_18485,this$__$1);


var G__18486 = seq__18284_18480;
var G__18487 = chunk__18285_18481;
var G__18488 = count__18286_18482;
var G__18489 = (i__18287_18483 + (1));
seq__18284_18480 = G__18486;
chunk__18285_18481 = G__18487;
count__18286_18482 = G__18488;
i__18287_18483 = G__18489;
continue;
} else {
var temp__5457__auto___18490 = cljs.core.seq(seq__18284_18480);
if(temp__5457__auto___18490){
var seq__18284_18491__$1 = temp__5457__auto___18490;
if(cljs.core.chunked_seq_QMARK_(seq__18284_18491__$1)){
var c__4461__auto___18492 = cljs.core.chunk_first(seq__18284_18491__$1);
var G__18493 = cljs.core.chunk_rest(seq__18284_18491__$1);
var G__18494 = c__4461__auto___18492;
var G__18495 = cljs.core.count(c__4461__auto___18492);
var G__18496 = (0);
seq__18284_18480 = G__18493;
chunk__18285_18481 = G__18494;
count__18286_18482 = G__18495;
i__18287_18483 = G__18496;
continue;
} else {
var w_18497 = cljs.core.first(seq__18284_18491__$1);
cljs.core._remove_watch(w_18497,this$__$1);


var G__18498 = cljs.core.next(seq__18284_18491__$1);
var G__18499 = null;
var G__18500 = (0);
var G__18501 = (0);
seq__18284_18480 = G__18498;
chunk__18285_18481 = G__18499;
count__18286_18482 = G__18500;
i__18287_18483 = G__18501;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5461__auto__ = this$__$1.on_dispose_arr;
if((temp__5461__auto__ == null)){
return null;
} else {
var a = temp__5461__auto__;
var n__4518__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4518__auto__)){
var fexpr__18288_18502 = (a[i]);
(fexpr__18288_18502.cljs$core$IFn$_invoke$arity$1 ? fexpr__18288_18502.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__18288_18502.call(null,this$__$1));

var G__18505 = (i + (1));
i = G__18505;
continue;
} else {
return null;
}
break;
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = this$__$1.on_dispose_arr;
if((temp__5459__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__5459__auto__;
return a.push(f__$1);
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__18289 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__18289) : f__$1.call(null,G__18289));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__18290 = a__$1._peek_at();
var G__18291 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__18290,G__18291) : f__$1.call(null,G__18290,G__18291));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__18292 = a__$1._peek_at();
var G__18293 = x;
var G__18294 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__18292,G__18293,G__18294) : f__$1.call(null,G__18292,G__18293,G__18294));
})());
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_();

return this$__$1._run(false);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);

if((((!(was_empty))) && (cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))){
return this$__$1.day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(null);
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5461__auto___18514 = self__.caught;
if((temp__5461__auto___18514 == null)){
} else {
var e_18515 = temp__5461__auto___18514;
throw e_18515;
}

var non_reactive_18516 = (day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_18516){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_();
} else {
}

if(((non_reactive_18516) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_18517 = self__.state;
self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_18517,self__.state)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,oldstate_18517,self__.state);
}
} else {
}
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Reaction";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Reaction");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Reaction.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_Reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$make_reaction(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18523 = arguments.length;
var i__4642__auto___18524 = (0);
while(true){
if((i__4642__auto___18524 < len__4641__auto___18523)){
args__4647__auto__.push((arguments[i__4642__auto___18524]));

var G__18530 = (i__4642__auto___18524 + (1));
i__4642__auto___18524 = G__18530;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__18297){
var map__18298 = p__18297;
var map__18298__$1 = (((((!((map__18298 == null))))?(((((map__18298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18298):map__18298);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18298__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18298__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18298__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq18295){
var G__18296 = cljs.core.first(seq18295);
var seq18295__$1 = cljs.core.next(seq18295);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18296,seq18295__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction(null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.run_in_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.temp_reaction;
var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_reaction(null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
});})(r,res))
;

(obj[key] = r);
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.check_derefs = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$check_derefs(f){
var ctx = {};
var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0)))].join(''));
} else {
}
} else {
}


return self__.state;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((!((self__.watches == null)))){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper)) && ((!(self__.changed))) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Wrap:");
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Wrapper";

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Wrapper");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v0.reagent.ratom/Wrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_Wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.__GT_Wrapper(value,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.js.map