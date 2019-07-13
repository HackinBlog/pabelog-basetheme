goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26931 = arguments.length;
switch (G__26931) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26932 = (function (f,blockable,meta26933){
this.f = f;
this.blockable = blockable;
this.meta26933 = meta26933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26934,meta26933__$1){
var self__ = this;
var _26934__$1 = this;
return (new cljs.core.async.t_cljs$core$async26932(self__.f,self__.blockable,meta26933__$1));
});

cljs.core.async.t_cljs$core$async26932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26934){
var self__ = this;
var _26934__$1 = this;
return self__.meta26933;
});

cljs.core.async.t_cljs$core$async26932.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26932.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26933","meta26933",400548465,null)], null);
});

cljs.core.async.t_cljs$core$async26932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26932";

cljs.core.async.t_cljs$core$async26932.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async26932");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26932.
 */
cljs.core.async.__GT_t_cljs$core$async26932 = (function cljs$core$async$__GT_t_cljs$core$async26932(f__$1,blockable__$1,meta26933){
return (new cljs.core.async.t_cljs$core$async26932(f__$1,blockable__$1,meta26933));
});

}

return (new cljs.core.async.t_cljs$core$async26932(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26937 = arguments.length;
switch (G__26937) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26939 = arguments.length;
switch (G__26939) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26941 = arguments.length;
switch (G__26941) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_28414 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28414) : fn1.call(null,val_28414));
} else {
cljs.core.async.impl.dispatch.run(((function (val_28414,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28414) : fn1.call(null,val_28414));
});})(val_28414,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26943 = arguments.length;
switch (G__26943) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___28426 = n;
var x_28427 = (0);
while(true){
if((x_28427 < n__4518__auto___28426)){
(a[x_28427] = (0));

var G__28428 = (x_28427 + (1));
x_28427 = G__28428;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__28431 = (i + (1));
i = G__28431;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26944 = (function (flag,meta26945){
this.flag = flag;
this.meta26945 = meta26945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26946,meta26945__$1){
var self__ = this;
var _26946__$1 = this;
return (new cljs.core.async.t_cljs$core$async26944(self__.flag,meta26945__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26946){
var self__ = this;
var _26946__$1 = this;
return self__.meta26945;
});})(flag))
;

cljs.core.async.t_cljs$core$async26944.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26944.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26944.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26945","meta26945",-1190943758,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26944";

cljs.core.async.t_cljs$core$async26944.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async26944");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26944.
 */
cljs.core.async.__GT_t_cljs$core$async26944 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26944(flag__$1,meta26945){
return (new cljs.core.async.t_cljs$core$async26944(flag__$1,meta26945));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26944(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26947 = (function (flag,cb,meta26948){
this.flag = flag;
this.cb = cb;
this.meta26948 = meta26948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26949,meta26948__$1){
var self__ = this;
var _26949__$1 = this;
return (new cljs.core.async.t_cljs$core$async26947(self__.flag,self__.cb,meta26948__$1));
});

cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26949){
var self__ = this;
var _26949__$1 = this;
return self__.meta26948;
});

cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26948","meta26948",1985455768,null)], null);
});

cljs.core.async.t_cljs$core$async26947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26947";

cljs.core.async.t_cljs$core$async26947.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async26947");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26947.
 */
cljs.core.async.__GT_t_cljs$core$async26947 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26947(flag__$1,cb__$1,meta26948){
return (new cljs.core.async.t_cljs$core$async26947(flag__$1,cb__$1,meta26948));
});

}

return (new cljs.core.async.t_cljs$core$async26947(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26950_SHARP_){
var G__26952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26950_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26952) : fret.call(null,G__26952));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26951_SHARP_){
var G__26953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26951_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26953) : fret.call(null,G__26953));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28475 = (i + (1));
i = G__28475;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4036__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28541 = arguments.length;
var i__4642__auto___28542 = (0);
while(true){
if((i__4642__auto___28542 < len__4641__auto___28541)){
args__4647__auto__.push((arguments[i__4642__auto___28542]));

var G__28543 = (i__4642__auto___28542 + (1));
i__4642__auto___28542 = G__28543;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26956){
var map__26957 = p__26956;
var map__26957__$1 = (((((!((map__26957 == null))))?(((((map__26957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26957):map__26957);
var opts = map__26957__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26954){
var G__26955 = cljs.core.first(seq26954);
var seq26954__$1 = cljs.core.next(seq26954);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26955,seq26954__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26960 = arguments.length;
switch (G__26960) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26871__auto___28552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___28552){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___28552){
return (function (state_26984){
var state_val_26985 = (state_26984[(1)]);
if((state_val_26985 === (7))){
var inst_26980 = (state_26984[(2)]);
var state_26984__$1 = state_26984;
var statearr_26986_28553 = state_26984__$1;
(statearr_26986_28553[(2)] = inst_26980);

(statearr_26986_28553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26985 === (1))){
var state_26984__$1 = state_26984;
var statearr_26987_28554 = state_26984__$1;
(statearr_26987_28554[(2)] = null);

(statearr_26987_28554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26985 === (4))){
var inst_26963 = (state_26984[(7)]);
var inst_26963__$1 = (state_26984[(2)]);
var inst_26964 = (inst_26963__$1 == null);
var state_26984__$1 = (function (){var statearr_26988 = state_26984;
(statearr_26988[(7)] = inst_26963__$1);

return statearr_26988;
})();
if(cljs.core.truth_(inst_26964)){
var statearr_26989_28555 = state_26984__$1;
(statearr_26989_28555[(1)] = (5));

} else {
var statearr_26990_28556 = state_26984__$1;
(statearr_26990_28556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26985 === (13))){
var state_26984__$1 = state_26984;
var statearr_26991_28557 = state_26984__$1;
(statearr_26991_28557[(2)] = null);

(statearr_26991_28557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26985 === (6))){
var inst_26963 = (state_26984[(7)]);
var state_26984__$1 = state_26984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26984__$1,(11),to,inst_26963);
} else {
if((state_val_26985 === (3))){
var inst_26982 = (state_26984[(2)]);
var state_26984__$1 = state_26984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26984__$1,inst_26982);
} else {
if((state_val_26985 === (12))){
var state_26984__$1 = state_26984;
var statearr_26992_28558 = state_26984__$1;
(statearr_26992_28558[(2)] = null);

(statearr_26992_28558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26985 === (2))){
var state_26984__$1 = state_26984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26984__$1,(4),from);
} else {
if((state_val_26985 === (11))){
var inst_26973 = (state_26984[(2)]);
var state_26984__$1 = state_26984;
if(cljs.core.truth_(inst_26973)){
var statearr_26993_28561 = state_26984__$1;
(statearr_26993_28561[(1)] = (12));

} else {
var statearr_26994_28562 = state_26984__$1;
(statearr_26994_28562[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26985 === (9))){
var state_26984__$1 = state_26984;
var statearr_26995_28563 = state_26984__$1;
(statearr_26995_28563[(2)] = null);

(statearr_26995_28563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26985 === (5))){
var state_26984__$1 = state_26984;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26996_28564 = state_26984__$1;
(statearr_26996_28564[(1)] = (8));

} else {
var statearr_26997_28565 = state_26984__$1;
(statearr_26997_28565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26985 === (14))){
var inst_26978 = (state_26984[(2)]);
var state_26984__$1 = state_26984;
var statearr_26998_28566 = state_26984__$1;
(statearr_26998_28566[(2)] = inst_26978);

(statearr_26998_28566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26985 === (10))){
var inst_26970 = (state_26984[(2)]);
var state_26984__$1 = state_26984;
var statearr_26999_28567 = state_26984__$1;
(statearr_26999_28567[(2)] = inst_26970);

(statearr_26999_28567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26985 === (8))){
var inst_26967 = cljs.core.async.close_BANG_(to);
var state_26984__$1 = state_26984;
var statearr_27000_28568 = state_26984__$1;
(statearr_27000_28568[(2)] = inst_26967);

(statearr_27000_28568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___28552))
;
return ((function (switch__26770__auto__,c__26871__auto___28552){
return (function() {
var cljs$core$async$state_machine__26771__auto__ = null;
var cljs$core$async$state_machine__26771__auto____0 = (function (){
var statearr_27001 = [null,null,null,null,null,null,null,null];
(statearr_27001[(0)] = cljs$core$async$state_machine__26771__auto__);

(statearr_27001[(1)] = (1));

return statearr_27001;
});
var cljs$core$async$state_machine__26771__auto____1 = (function (state_26984){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_26984);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27002){if((e27002 instanceof Object)){
var ex__26774__auto__ = e27002;
var statearr_27003_28569 = state_26984;
(statearr_27003_28569[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28570 = state_26984;
state_26984 = G__28570;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$state_machine__26771__auto__ = function(state_26984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26771__auto____1.call(this,state_26984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26771__auto____0;
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26771__auto____1;
return cljs$core$async$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___28552))
})();
var state__26873__auto__ = (function (){var statearr_27004 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27004[(6)] = c__26871__auto___28552);

return statearr_27004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___28552))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__27005){
var vec__27006 = p__27005;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27006,(1),null);
var job = vec__27006;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26871__auto___28577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___28577,res,vec__27006,v,p,job,jobs,results){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___28577,res,vec__27006,v,p,job,jobs,results){
return (function (state_27013){
var state_val_27014 = (state_27013[(1)]);
if((state_val_27014 === (1))){
var state_27013__$1 = state_27013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27013__$1,(2),res,v);
} else {
if((state_val_27014 === (2))){
var inst_27010 = (state_27013[(2)]);
var inst_27011 = cljs.core.async.close_BANG_(res);
var state_27013__$1 = (function (){var statearr_27015 = state_27013;
(statearr_27015[(7)] = inst_27010);

return statearr_27015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27013__$1,inst_27011);
} else {
return null;
}
}
});})(c__26871__auto___28577,res,vec__27006,v,p,job,jobs,results))
;
return ((function (switch__26770__auto__,c__26871__auto___28577,res,vec__27006,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0 = (function (){
var statearr_27016 = [null,null,null,null,null,null,null,null];
(statearr_27016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__);

(statearr_27016[(1)] = (1));

return statearr_27016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1 = (function (state_27013){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27013);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27017){if((e27017 instanceof Object)){
var ex__26774__auto__ = e27017;
var statearr_27018_28581 = state_27013;
(statearr_27018_28581[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27017;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28582 = state_27013;
state_27013 = G__28582;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__ = function(state_27013){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1.call(this,state_27013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___28577,res,vec__27006,v,p,job,jobs,results))
})();
var state__26873__auto__ = (function (){var statearr_27019 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27019[(6)] = c__26871__auto___28577);

return statearr_27019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___28577,res,vec__27006,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27020){
var vec__27021 = p__27020;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27021,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27021,(1),null);
var job = vec__27021;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___28587 = n;
var __28588 = (0);
while(true){
if((__28588 < n__4518__auto___28587)){
var G__27024_28589 = type;
var G__27024_28590__$1 = (((G__27024_28589 instanceof cljs.core.Keyword))?G__27024_28589.fqn:null);
switch (G__27024_28590__$1) {
case "compute":
var c__26871__auto___28594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28588,c__26871__auto___28594,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (__28588,c__26871__auto___28594,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async){
return (function (state_27037){
var state_val_27038 = (state_27037[(1)]);
if((state_val_27038 === (1))){
var state_27037__$1 = state_27037;
var statearr_27039_28597 = state_27037__$1;
(statearr_27039_28597[(2)] = null);

(statearr_27039_28597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27038 === (2))){
var state_27037__$1 = state_27037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27037__$1,(4),jobs);
} else {
if((state_val_27038 === (3))){
var inst_27035 = (state_27037[(2)]);
var state_27037__$1 = state_27037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27037__$1,inst_27035);
} else {
if((state_val_27038 === (4))){
var inst_27027 = (state_27037[(2)]);
var inst_27028 = process(inst_27027);
var state_27037__$1 = state_27037;
if(cljs.core.truth_(inst_27028)){
var statearr_27040_28601 = state_27037__$1;
(statearr_27040_28601[(1)] = (5));

} else {
var statearr_27041_28606 = state_27037__$1;
(statearr_27041_28606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27038 === (5))){
var state_27037__$1 = state_27037;
var statearr_27042_28607 = state_27037__$1;
(statearr_27042_28607[(2)] = null);

(statearr_27042_28607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27038 === (6))){
var state_27037__$1 = state_27037;
var statearr_27043_28614 = state_27037__$1;
(statearr_27043_28614[(2)] = null);

(statearr_27043_28614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27038 === (7))){
var inst_27033 = (state_27037[(2)]);
var state_27037__$1 = state_27037;
var statearr_27044_28615 = state_27037__$1;
(statearr_27044_28615[(2)] = inst_27033);

(statearr_27044_28615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28588,c__26871__auto___28594,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async))
;
return ((function (__28588,switch__26770__auto__,c__26871__auto___28594,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0 = (function (){
var statearr_27045 = [null,null,null,null,null,null,null];
(statearr_27045[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__);

(statearr_27045[(1)] = (1));

return statearr_27045;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1 = (function (state_27037){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27037);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27046){if((e27046 instanceof Object)){
var ex__26774__auto__ = e27046;
var statearr_27047_28622 = state_27037;
(statearr_27047_28622[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28623 = state_27037;
state_27037 = G__28623;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__ = function(state_27037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1.call(this,state_27037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__;
})()
;})(__28588,switch__26770__auto__,c__26871__auto___28594,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async))
})();
var state__26873__auto__ = (function (){var statearr_27048 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27048[(6)] = c__26871__auto___28594);

return statearr_27048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(__28588,c__26871__auto___28594,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async))
);


break;
case "async":
var c__26871__auto___28624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28588,c__26871__auto___28624,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (__28588,c__26871__auto___28624,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async){
return (function (state_27061){
var state_val_27062 = (state_27061[(1)]);
if((state_val_27062 === (1))){
var state_27061__$1 = state_27061;
var statearr_27063_28625 = state_27061__$1;
(statearr_27063_28625[(2)] = null);

(statearr_27063_28625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (2))){
var state_27061__$1 = state_27061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27061__$1,(4),jobs);
} else {
if((state_val_27062 === (3))){
var inst_27059 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27061__$1,inst_27059);
} else {
if((state_val_27062 === (4))){
var inst_27051 = (state_27061[(2)]);
var inst_27052 = async(inst_27051);
var state_27061__$1 = state_27061;
if(cljs.core.truth_(inst_27052)){
var statearr_27064_28626 = state_27061__$1;
(statearr_27064_28626[(1)] = (5));

} else {
var statearr_27065_28627 = state_27061__$1;
(statearr_27065_28627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (5))){
var state_27061__$1 = state_27061;
var statearr_27066_28628 = state_27061__$1;
(statearr_27066_28628[(2)] = null);

(statearr_27066_28628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (6))){
var state_27061__$1 = state_27061;
var statearr_27067_28629 = state_27061__$1;
(statearr_27067_28629[(2)] = null);

(statearr_27067_28629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27062 === (7))){
var inst_27057 = (state_27061[(2)]);
var state_27061__$1 = state_27061;
var statearr_27068_28630 = state_27061__$1;
(statearr_27068_28630[(2)] = inst_27057);

(statearr_27068_28630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28588,c__26871__auto___28624,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async))
;
return ((function (__28588,switch__26770__auto__,c__26871__auto___28624,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0 = (function (){
var statearr_27069 = [null,null,null,null,null,null,null];
(statearr_27069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__);

(statearr_27069[(1)] = (1));

return statearr_27069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1 = (function (state_27061){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27061);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27070){if((e27070 instanceof Object)){
var ex__26774__auto__ = e27070;
var statearr_27071_28632 = state_27061;
(statearr_27071_28632[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28638 = state_27061;
state_27061 = G__28638;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__ = function(state_27061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1.call(this,state_27061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__;
})()
;})(__28588,switch__26770__auto__,c__26871__auto___28624,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async))
})();
var state__26873__auto__ = (function (){var statearr_27072 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27072[(6)] = c__26871__auto___28624);

return statearr_27072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(__28588,c__26871__auto___28624,G__27024_28589,G__27024_28590__$1,n__4518__auto___28587,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27024_28590__$1)].join('')));

}

var G__28639 = (__28588 + (1));
__28588 = G__28639;
continue;
} else {
}
break;
}

var c__26871__auto___28642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___28642,jobs,results,process,async){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___28642,jobs,results,process,async){
return (function (state_27094){
var state_val_27095 = (state_27094[(1)]);
if((state_val_27095 === (1))){
var state_27094__$1 = state_27094;
var statearr_27096_28645 = state_27094__$1;
(statearr_27096_28645[(2)] = null);

(statearr_27096_28645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (2))){
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27094__$1,(4),from);
} else {
if((state_val_27095 === (3))){
var inst_27092 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27094__$1,inst_27092);
} else {
if((state_val_27095 === (4))){
var inst_27075 = (state_27094[(7)]);
var inst_27075__$1 = (state_27094[(2)]);
var inst_27076 = (inst_27075__$1 == null);
var state_27094__$1 = (function (){var statearr_27097 = state_27094;
(statearr_27097[(7)] = inst_27075__$1);

return statearr_27097;
})();
if(cljs.core.truth_(inst_27076)){
var statearr_27098_28646 = state_27094__$1;
(statearr_27098_28646[(1)] = (5));

} else {
var statearr_27099_28647 = state_27094__$1;
(statearr_27099_28647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (5))){
var inst_27078 = cljs.core.async.close_BANG_(jobs);
var state_27094__$1 = state_27094;
var statearr_27100_28650 = state_27094__$1;
(statearr_27100_28650[(2)] = inst_27078);

(statearr_27100_28650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (6))){
var inst_27075 = (state_27094[(7)]);
var inst_27080 = (state_27094[(8)]);
var inst_27080__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27081 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27082 = [inst_27075,inst_27080__$1];
var inst_27083 = (new cljs.core.PersistentVector(null,2,(5),inst_27081,inst_27082,null));
var state_27094__$1 = (function (){var statearr_27101 = state_27094;
(statearr_27101[(8)] = inst_27080__$1);

return statearr_27101;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27094__$1,(8),jobs,inst_27083);
} else {
if((state_val_27095 === (7))){
var inst_27090 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
var statearr_27102_28651 = state_27094__$1;
(statearr_27102_28651[(2)] = inst_27090);

(statearr_27102_28651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (8))){
var inst_27080 = (state_27094[(8)]);
var inst_27085 = (state_27094[(2)]);
var state_27094__$1 = (function (){var statearr_27103 = state_27094;
(statearr_27103[(9)] = inst_27085);

return statearr_27103;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27094__$1,(9),results,inst_27080);
} else {
if((state_val_27095 === (9))){
var inst_27087 = (state_27094[(2)]);
var state_27094__$1 = (function (){var statearr_27104 = state_27094;
(statearr_27104[(10)] = inst_27087);

return statearr_27104;
})();
var statearr_27105_28652 = state_27094__$1;
(statearr_27105_28652[(2)] = null);

(statearr_27105_28652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___28642,jobs,results,process,async))
;
return ((function (switch__26770__auto__,c__26871__auto___28642,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0 = (function (){
var statearr_27106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__);

(statearr_27106[(1)] = (1));

return statearr_27106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1 = (function (state_27094){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27094);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27107){if((e27107 instanceof Object)){
var ex__26774__auto__ = e27107;
var statearr_27108_28655 = state_27094;
(statearr_27108_28655[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28656 = state_27094;
state_27094 = G__28656;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__ = function(state_27094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1.call(this,state_27094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___28642,jobs,results,process,async))
})();
var state__26873__auto__ = (function (){var statearr_27109 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27109[(6)] = c__26871__auto___28642);

return statearr_27109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___28642,jobs,results,process,async))
);


var c__26871__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto__,jobs,results,process,async){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto__,jobs,results,process,async){
return (function (state_27147){
var state_val_27148 = (state_27147[(1)]);
if((state_val_27148 === (7))){
var inst_27143 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
var statearr_27149_28657 = state_27147__$1;
(statearr_27149_28657[(2)] = inst_27143);

(statearr_27149_28657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (20))){
var state_27147__$1 = state_27147;
var statearr_27150_28658 = state_27147__$1;
(statearr_27150_28658[(2)] = null);

(statearr_27150_28658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (1))){
var state_27147__$1 = state_27147;
var statearr_27151_28659 = state_27147__$1;
(statearr_27151_28659[(2)] = null);

(statearr_27151_28659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (4))){
var inst_27112 = (state_27147[(7)]);
var inst_27112__$1 = (state_27147[(2)]);
var inst_27113 = (inst_27112__$1 == null);
var state_27147__$1 = (function (){var statearr_27152 = state_27147;
(statearr_27152[(7)] = inst_27112__$1);

return statearr_27152;
})();
if(cljs.core.truth_(inst_27113)){
var statearr_27153_28660 = state_27147__$1;
(statearr_27153_28660[(1)] = (5));

} else {
var statearr_27154_28661 = state_27147__$1;
(statearr_27154_28661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (15))){
var inst_27125 = (state_27147[(8)]);
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27147__$1,(18),to,inst_27125);
} else {
if((state_val_27148 === (21))){
var inst_27138 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
var statearr_27155_28662 = state_27147__$1;
(statearr_27155_28662[(2)] = inst_27138);

(statearr_27155_28662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (13))){
var inst_27140 = (state_27147[(2)]);
var state_27147__$1 = (function (){var statearr_27156 = state_27147;
(statearr_27156[(9)] = inst_27140);

return statearr_27156;
})();
var statearr_27157_28663 = state_27147__$1;
(statearr_27157_28663[(2)] = null);

(statearr_27157_28663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (6))){
var inst_27112 = (state_27147[(7)]);
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27147__$1,(11),inst_27112);
} else {
if((state_val_27148 === (17))){
var inst_27133 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
if(cljs.core.truth_(inst_27133)){
var statearr_27158_28664 = state_27147__$1;
(statearr_27158_28664[(1)] = (19));

} else {
var statearr_27159_28665 = state_27147__$1;
(statearr_27159_28665[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (3))){
var inst_27145 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27147__$1,inst_27145);
} else {
if((state_val_27148 === (12))){
var inst_27122 = (state_27147[(10)]);
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27147__$1,(14),inst_27122);
} else {
if((state_val_27148 === (2))){
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27147__$1,(4),results);
} else {
if((state_val_27148 === (19))){
var state_27147__$1 = state_27147;
var statearr_27160_28667 = state_27147__$1;
(statearr_27160_28667[(2)] = null);

(statearr_27160_28667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (11))){
var inst_27122 = (state_27147[(2)]);
var state_27147__$1 = (function (){var statearr_27161 = state_27147;
(statearr_27161[(10)] = inst_27122);

return statearr_27161;
})();
var statearr_27162_28672 = state_27147__$1;
(statearr_27162_28672[(2)] = null);

(statearr_27162_28672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (9))){
var state_27147__$1 = state_27147;
var statearr_27163_28673 = state_27147__$1;
(statearr_27163_28673[(2)] = null);

(statearr_27163_28673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (5))){
var state_27147__$1 = state_27147;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27164_28674 = state_27147__$1;
(statearr_27164_28674[(1)] = (8));

} else {
var statearr_27165_28675 = state_27147__$1;
(statearr_27165_28675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (14))){
var inst_27127 = (state_27147[(11)]);
var inst_27125 = (state_27147[(8)]);
var inst_27125__$1 = (state_27147[(2)]);
var inst_27126 = (inst_27125__$1 == null);
var inst_27127__$1 = cljs.core.not(inst_27126);
var state_27147__$1 = (function (){var statearr_27166 = state_27147;
(statearr_27166[(11)] = inst_27127__$1);

(statearr_27166[(8)] = inst_27125__$1);

return statearr_27166;
})();
if(inst_27127__$1){
var statearr_27167_28676 = state_27147__$1;
(statearr_27167_28676[(1)] = (15));

} else {
var statearr_27168_28677 = state_27147__$1;
(statearr_27168_28677[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (16))){
var inst_27127 = (state_27147[(11)]);
var state_27147__$1 = state_27147;
var statearr_27169_28678 = state_27147__$1;
(statearr_27169_28678[(2)] = inst_27127);

(statearr_27169_28678[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (10))){
var inst_27119 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
var statearr_27170_28683 = state_27147__$1;
(statearr_27170_28683[(2)] = inst_27119);

(statearr_27170_28683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (18))){
var inst_27130 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
var statearr_27171_28687 = state_27147__$1;
(statearr_27171_28687[(2)] = inst_27130);

(statearr_27171_28687[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (8))){
var inst_27116 = cljs.core.async.close_BANG_(to);
var state_27147__$1 = state_27147;
var statearr_27172_28688 = state_27147__$1;
(statearr_27172_28688[(2)] = inst_27116);

(statearr_27172_28688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto__,jobs,results,process,async))
;
return ((function (switch__26770__auto__,c__26871__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0 = (function (){
var statearr_27173 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__);

(statearr_27173[(1)] = (1));

return statearr_27173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1 = (function (state_27147){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27147);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27174){if((e27174 instanceof Object)){
var ex__26774__auto__ = e27174;
var statearr_27175_28696 = state_27147;
(statearr_27175_28696[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28697 = state_27147;
state_27147 = G__28697;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__ = function(state_27147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1.call(this,state_27147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto__,jobs,results,process,async))
})();
var state__26873__auto__ = (function (){var statearr_27176 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27176[(6)] = c__26871__auto__);

return statearr_27176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto__,jobs,results,process,async))
);

return c__26871__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27178 = arguments.length;
switch (G__27178) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27180 = arguments.length;
switch (G__27180) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27182 = arguments.length;
switch (G__27182) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__26871__auto___28713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___28713,tc,fc){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___28713,tc,fc){
return (function (state_27208){
var state_val_27209 = (state_27208[(1)]);
if((state_val_27209 === (7))){
var inst_27204 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27210_28714 = state_27208__$1;
(statearr_27210_28714[(2)] = inst_27204);

(statearr_27210_28714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (1))){
var state_27208__$1 = state_27208;
var statearr_27211_28715 = state_27208__$1;
(statearr_27211_28715[(2)] = null);

(statearr_27211_28715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (4))){
var inst_27185 = (state_27208[(7)]);
var inst_27185__$1 = (state_27208[(2)]);
var inst_27186 = (inst_27185__$1 == null);
var state_27208__$1 = (function (){var statearr_27212 = state_27208;
(statearr_27212[(7)] = inst_27185__$1);

return statearr_27212;
})();
if(cljs.core.truth_(inst_27186)){
var statearr_27213_28716 = state_27208__$1;
(statearr_27213_28716[(1)] = (5));

} else {
var statearr_27214_28721 = state_27208__$1;
(statearr_27214_28721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (13))){
var state_27208__$1 = state_27208;
var statearr_27215_28722 = state_27208__$1;
(statearr_27215_28722[(2)] = null);

(statearr_27215_28722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (6))){
var inst_27185 = (state_27208[(7)]);
var inst_27191 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27185) : p.call(null,inst_27185));
var state_27208__$1 = state_27208;
if(cljs.core.truth_(inst_27191)){
var statearr_27216_28727 = state_27208__$1;
(statearr_27216_28727[(1)] = (9));

} else {
var statearr_27217_28728 = state_27208__$1;
(statearr_27217_28728[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (3))){
var inst_27206 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27208__$1,inst_27206);
} else {
if((state_val_27209 === (12))){
var state_27208__$1 = state_27208;
var statearr_27218_28730 = state_27208__$1;
(statearr_27218_28730[(2)] = null);

(statearr_27218_28730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (2))){
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27208__$1,(4),ch);
} else {
if((state_val_27209 === (11))){
var inst_27185 = (state_27208[(7)]);
var inst_27195 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27208__$1,(8),inst_27195,inst_27185);
} else {
if((state_val_27209 === (9))){
var state_27208__$1 = state_27208;
var statearr_27219_28731 = state_27208__$1;
(statearr_27219_28731[(2)] = tc);

(statearr_27219_28731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (5))){
var inst_27188 = cljs.core.async.close_BANG_(tc);
var inst_27189 = cljs.core.async.close_BANG_(fc);
var state_27208__$1 = (function (){var statearr_27220 = state_27208;
(statearr_27220[(8)] = inst_27188);

return statearr_27220;
})();
var statearr_27221_28733 = state_27208__$1;
(statearr_27221_28733[(2)] = inst_27189);

(statearr_27221_28733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (14))){
var inst_27202 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27222_28735 = state_27208__$1;
(statearr_27222_28735[(2)] = inst_27202);

(statearr_27222_28735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (10))){
var state_27208__$1 = state_27208;
var statearr_27223_28739 = state_27208__$1;
(statearr_27223_28739[(2)] = fc);

(statearr_27223_28739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (8))){
var inst_27197 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
if(cljs.core.truth_(inst_27197)){
var statearr_27224_28740 = state_27208__$1;
(statearr_27224_28740[(1)] = (12));

} else {
var statearr_27225_28741 = state_27208__$1;
(statearr_27225_28741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___28713,tc,fc))
;
return ((function (switch__26770__auto__,c__26871__auto___28713,tc,fc){
return (function() {
var cljs$core$async$state_machine__26771__auto__ = null;
var cljs$core$async$state_machine__26771__auto____0 = (function (){
var statearr_27226 = [null,null,null,null,null,null,null,null,null];
(statearr_27226[(0)] = cljs$core$async$state_machine__26771__auto__);

(statearr_27226[(1)] = (1));

return statearr_27226;
});
var cljs$core$async$state_machine__26771__auto____1 = (function (state_27208){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27208);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27227){if((e27227 instanceof Object)){
var ex__26774__auto__ = e27227;
var statearr_27228_28742 = state_27208;
(statearr_27228_28742[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27227;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28743 = state_27208;
state_27208 = G__28743;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$state_machine__26771__auto__ = function(state_27208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26771__auto____1.call(this,state_27208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26771__auto____0;
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26771__auto____1;
return cljs$core$async$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___28713,tc,fc))
})();
var state__26873__auto__ = (function (){var statearr_27229 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27229[(6)] = c__26871__auto___28713);

return statearr_27229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___28713,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26871__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto__){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto__){
return (function (state_27250){
var state_val_27251 = (state_27250[(1)]);
if((state_val_27251 === (7))){
var inst_27246 = (state_27250[(2)]);
var state_27250__$1 = state_27250;
var statearr_27252_28745 = state_27250__$1;
(statearr_27252_28745[(2)] = inst_27246);

(statearr_27252_28745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (1))){
var inst_27230 = init;
var state_27250__$1 = (function (){var statearr_27253 = state_27250;
(statearr_27253[(7)] = inst_27230);

return statearr_27253;
})();
var statearr_27254_28746 = state_27250__$1;
(statearr_27254_28746[(2)] = null);

(statearr_27254_28746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (4))){
var inst_27233 = (state_27250[(8)]);
var inst_27233__$1 = (state_27250[(2)]);
var inst_27234 = (inst_27233__$1 == null);
var state_27250__$1 = (function (){var statearr_27255 = state_27250;
(statearr_27255[(8)] = inst_27233__$1);

return statearr_27255;
})();
if(cljs.core.truth_(inst_27234)){
var statearr_27256_28747 = state_27250__$1;
(statearr_27256_28747[(1)] = (5));

} else {
var statearr_27257_28748 = state_27250__$1;
(statearr_27257_28748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (6))){
var inst_27237 = (state_27250[(9)]);
var inst_27233 = (state_27250[(8)]);
var inst_27230 = (state_27250[(7)]);
var inst_27237__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27230,inst_27233) : f.call(null,inst_27230,inst_27233));
var inst_27238 = cljs.core.reduced_QMARK_(inst_27237__$1);
var state_27250__$1 = (function (){var statearr_27258 = state_27250;
(statearr_27258[(9)] = inst_27237__$1);

return statearr_27258;
})();
if(inst_27238){
var statearr_27259_28756 = state_27250__$1;
(statearr_27259_28756[(1)] = (8));

} else {
var statearr_27260_28757 = state_27250__$1;
(statearr_27260_28757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (3))){
var inst_27248 = (state_27250[(2)]);
var state_27250__$1 = state_27250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27250__$1,inst_27248);
} else {
if((state_val_27251 === (2))){
var state_27250__$1 = state_27250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27250__$1,(4),ch);
} else {
if((state_val_27251 === (9))){
var inst_27237 = (state_27250[(9)]);
var inst_27230 = inst_27237;
var state_27250__$1 = (function (){var statearr_27261 = state_27250;
(statearr_27261[(7)] = inst_27230);

return statearr_27261;
})();
var statearr_27262_28758 = state_27250__$1;
(statearr_27262_28758[(2)] = null);

(statearr_27262_28758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (5))){
var inst_27230 = (state_27250[(7)]);
var state_27250__$1 = state_27250;
var statearr_27263_28759 = state_27250__$1;
(statearr_27263_28759[(2)] = inst_27230);

(statearr_27263_28759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (10))){
var inst_27244 = (state_27250[(2)]);
var state_27250__$1 = state_27250;
var statearr_27264_28760 = state_27250__$1;
(statearr_27264_28760[(2)] = inst_27244);

(statearr_27264_28760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27251 === (8))){
var inst_27237 = (state_27250[(9)]);
var inst_27240 = cljs.core.deref(inst_27237);
var state_27250__$1 = state_27250;
var statearr_27265_28761 = state_27250__$1;
(statearr_27265_28761[(2)] = inst_27240);

(statearr_27265_28761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto__))
;
return ((function (switch__26770__auto__,c__26871__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26771__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26771__auto____0 = (function (){
var statearr_27266 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27266[(0)] = cljs$core$async$reduce_$_state_machine__26771__auto__);

(statearr_27266[(1)] = (1));

return statearr_27266;
});
var cljs$core$async$reduce_$_state_machine__26771__auto____1 = (function (state_27250){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27250);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27267){if((e27267 instanceof Object)){
var ex__26774__auto__ = e27267;
var statearr_27268_28763 = state_27250;
(statearr_27268_28763[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28765 = state_27250;
state_27250 = G__28765;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26771__auto__ = function(state_27250){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26771__auto____1.call(this,state_27250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26771__auto____0;
cljs$core$async$reduce_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26771__auto____1;
return cljs$core$async$reduce_$_state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto__))
})();
var state__26873__auto__ = (function (){var statearr_27269 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27269[(6)] = c__26871__auto__);

return statearr_27269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto__))
);

return c__26871__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26871__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto__,f__$1){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto__,f__$1){
return (function (state_27275){
var state_val_27276 = (state_27275[(1)]);
if((state_val_27276 === (1))){
var inst_27270 = cljs.core.async.reduce(f__$1,init,ch);
var state_27275__$1 = state_27275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27275__$1,(2),inst_27270);
} else {
if((state_val_27276 === (2))){
var inst_27272 = (state_27275[(2)]);
var inst_27273 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_27272) : f__$1.call(null,inst_27272));
var state_27275__$1 = state_27275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27275__$1,inst_27273);
} else {
return null;
}
}
});})(c__26871__auto__,f__$1))
;
return ((function (switch__26770__auto__,c__26871__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26771__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26771__auto____0 = (function (){
var statearr_27277 = [null,null,null,null,null,null,null];
(statearr_27277[(0)] = cljs$core$async$transduce_$_state_machine__26771__auto__);

(statearr_27277[(1)] = (1));

return statearr_27277;
});
var cljs$core$async$transduce_$_state_machine__26771__auto____1 = (function (state_27275){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27275);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27278){if((e27278 instanceof Object)){
var ex__26774__auto__ = e27278;
var statearr_27279_28772 = state_27275;
(statearr_27279_28772[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28774 = state_27275;
state_27275 = G__28774;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26771__auto__ = function(state_27275){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26771__auto____1.call(this,state_27275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26771__auto____0;
cljs$core$async$transduce_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26771__auto____1;
return cljs$core$async$transduce_$_state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto__,f__$1))
})();
var state__26873__auto__ = (function (){var statearr_27280 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27280[(6)] = c__26871__auto__);

return statearr_27280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto__,f__$1))
);

return c__26871__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27282 = arguments.length;
switch (G__27282) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26871__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto__){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto__){
return (function (state_27307){
var state_val_27308 = (state_27307[(1)]);
if((state_val_27308 === (7))){
var inst_27289 = (state_27307[(2)]);
var state_27307__$1 = state_27307;
var statearr_27309_28777 = state_27307__$1;
(statearr_27309_28777[(2)] = inst_27289);

(statearr_27309_28777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27308 === (1))){
var inst_27283 = cljs.core.seq(coll);
var inst_27284 = inst_27283;
var state_27307__$1 = (function (){var statearr_27310 = state_27307;
(statearr_27310[(7)] = inst_27284);

return statearr_27310;
})();
var statearr_27311_28782 = state_27307__$1;
(statearr_27311_28782[(2)] = null);

(statearr_27311_28782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27308 === (4))){
var inst_27284 = (state_27307[(7)]);
var inst_27287 = cljs.core.first(inst_27284);
var state_27307__$1 = state_27307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27307__$1,(7),ch,inst_27287);
} else {
if((state_val_27308 === (13))){
var inst_27301 = (state_27307[(2)]);
var state_27307__$1 = state_27307;
var statearr_27312_28783 = state_27307__$1;
(statearr_27312_28783[(2)] = inst_27301);

(statearr_27312_28783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27308 === (6))){
var inst_27292 = (state_27307[(2)]);
var state_27307__$1 = state_27307;
if(cljs.core.truth_(inst_27292)){
var statearr_27313_28784 = state_27307__$1;
(statearr_27313_28784[(1)] = (8));

} else {
var statearr_27314_28785 = state_27307__$1;
(statearr_27314_28785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27308 === (3))){
var inst_27305 = (state_27307[(2)]);
var state_27307__$1 = state_27307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27307__$1,inst_27305);
} else {
if((state_val_27308 === (12))){
var state_27307__$1 = state_27307;
var statearr_27315_28787 = state_27307__$1;
(statearr_27315_28787[(2)] = null);

(statearr_27315_28787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27308 === (2))){
var inst_27284 = (state_27307[(7)]);
var state_27307__$1 = state_27307;
if(cljs.core.truth_(inst_27284)){
var statearr_27316_28788 = state_27307__$1;
(statearr_27316_28788[(1)] = (4));

} else {
var statearr_27317_28789 = state_27307__$1;
(statearr_27317_28789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27308 === (11))){
var inst_27298 = cljs.core.async.close_BANG_(ch);
var state_27307__$1 = state_27307;
var statearr_27318_28790 = state_27307__$1;
(statearr_27318_28790[(2)] = inst_27298);

(statearr_27318_28790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27308 === (9))){
var state_27307__$1 = state_27307;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27319_28791 = state_27307__$1;
(statearr_27319_28791[(1)] = (11));

} else {
var statearr_27320_28792 = state_27307__$1;
(statearr_27320_28792[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27308 === (5))){
var inst_27284 = (state_27307[(7)]);
var state_27307__$1 = state_27307;
var statearr_27321_28793 = state_27307__$1;
(statearr_27321_28793[(2)] = inst_27284);

(statearr_27321_28793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27308 === (10))){
var inst_27303 = (state_27307[(2)]);
var state_27307__$1 = state_27307;
var statearr_27322_28794 = state_27307__$1;
(statearr_27322_28794[(2)] = inst_27303);

(statearr_27322_28794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27308 === (8))){
var inst_27284 = (state_27307[(7)]);
var inst_27294 = cljs.core.next(inst_27284);
var inst_27284__$1 = inst_27294;
var state_27307__$1 = (function (){var statearr_27323 = state_27307;
(statearr_27323[(7)] = inst_27284__$1);

return statearr_27323;
})();
var statearr_27324_28800 = state_27307__$1;
(statearr_27324_28800[(2)] = null);

(statearr_27324_28800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto__))
;
return ((function (switch__26770__auto__,c__26871__auto__){
return (function() {
var cljs$core$async$state_machine__26771__auto__ = null;
var cljs$core$async$state_machine__26771__auto____0 = (function (){
var statearr_27325 = [null,null,null,null,null,null,null,null];
(statearr_27325[(0)] = cljs$core$async$state_machine__26771__auto__);

(statearr_27325[(1)] = (1));

return statearr_27325;
});
var cljs$core$async$state_machine__26771__auto____1 = (function (state_27307){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27307);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27326){if((e27326 instanceof Object)){
var ex__26774__auto__ = e27326;
var statearr_27327_28803 = state_27307;
(statearr_27327_28803[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28804 = state_27307;
state_27307 = G__28804;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$state_machine__26771__auto__ = function(state_27307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26771__auto____1.call(this,state_27307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26771__auto____0;
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26771__auto____1;
return cljs$core$async$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto__))
})();
var state__26873__auto__ = (function (){var statearr_27328 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27328[(6)] = c__26871__auto__);

return statearr_27328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto__))
);

return c__26871__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto__.call(null,_));
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27329 = (function (ch,cs,meta27330){
this.ch = ch;
this.cs = cs;
this.meta27330 = meta27330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27331,meta27330__$1){
var self__ = this;
var _27331__$1 = this;
return (new cljs.core.async.t_cljs$core$async27329(self__.ch,self__.cs,meta27330__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27331){
var self__ = this;
var _27331__$1 = this;
return self__.meta27330;
});})(cs))
;

cljs.core.async.t_cljs$core$async27329.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27329.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27329.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27329.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27329.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27329.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27330","meta27330",-946484821,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27329";

cljs.core.async.t_cljs$core$async27329.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async27329");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27329.
 */
cljs.core.async.__GT_t_cljs$core$async27329 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27329(ch__$1,cs__$1,meta27330){
return (new cljs.core.async.t_cljs$core$async27329(ch__$1,cs__$1,meta27330));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27329(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26871__auto___28813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___28813,cs,m,dchan,dctr,done){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___28813,cs,m,dchan,dctr,done){
return (function (state_27466){
var state_val_27467 = (state_27466[(1)]);
if((state_val_27467 === (7))){
var inst_27462 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27468_28814 = state_27466__$1;
(statearr_27468_28814[(2)] = inst_27462);

(statearr_27468_28814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (20))){
var inst_27365 = (state_27466[(7)]);
var inst_27377 = cljs.core.first(inst_27365);
var inst_27378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27377,(0),null);
var inst_27379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27377,(1),null);
var state_27466__$1 = (function (){var statearr_27469 = state_27466;
(statearr_27469[(8)] = inst_27378);

return statearr_27469;
})();
if(cljs.core.truth_(inst_27379)){
var statearr_27470_28815 = state_27466__$1;
(statearr_27470_28815[(1)] = (22));

} else {
var statearr_27471_28816 = state_27466__$1;
(statearr_27471_28816[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (27))){
var inst_27414 = (state_27466[(9)]);
var inst_27407 = (state_27466[(10)]);
var inst_27334 = (state_27466[(11)]);
var inst_27409 = (state_27466[(12)]);
var inst_27414__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27407,inst_27409);
var inst_27415 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27414__$1,inst_27334,done);
var state_27466__$1 = (function (){var statearr_27472 = state_27466;
(statearr_27472[(9)] = inst_27414__$1);

return statearr_27472;
})();
if(cljs.core.truth_(inst_27415)){
var statearr_27473_28819 = state_27466__$1;
(statearr_27473_28819[(1)] = (30));

} else {
var statearr_27474_28820 = state_27466__$1;
(statearr_27474_28820[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (1))){
var state_27466__$1 = state_27466;
var statearr_27475_28823 = state_27466__$1;
(statearr_27475_28823[(2)] = null);

(statearr_27475_28823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (24))){
var inst_27365 = (state_27466[(7)]);
var inst_27384 = (state_27466[(2)]);
var inst_27385 = cljs.core.next(inst_27365);
var inst_27343 = inst_27385;
var inst_27344 = null;
var inst_27345 = (0);
var inst_27346 = (0);
var state_27466__$1 = (function (){var statearr_27476 = state_27466;
(statearr_27476[(13)] = inst_27384);

(statearr_27476[(14)] = inst_27346);

(statearr_27476[(15)] = inst_27345);

(statearr_27476[(16)] = inst_27344);

(statearr_27476[(17)] = inst_27343);

return statearr_27476;
})();
var statearr_27477_28824 = state_27466__$1;
(statearr_27477_28824[(2)] = null);

(statearr_27477_28824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (39))){
var state_27466__$1 = state_27466;
var statearr_27481_28825 = state_27466__$1;
(statearr_27481_28825[(2)] = null);

(statearr_27481_28825[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (4))){
var inst_27334 = (state_27466[(11)]);
var inst_27334__$1 = (state_27466[(2)]);
var inst_27335 = (inst_27334__$1 == null);
var state_27466__$1 = (function (){var statearr_27482 = state_27466;
(statearr_27482[(11)] = inst_27334__$1);

return statearr_27482;
})();
if(cljs.core.truth_(inst_27335)){
var statearr_27483_28827 = state_27466__$1;
(statearr_27483_28827[(1)] = (5));

} else {
var statearr_27484_28828 = state_27466__$1;
(statearr_27484_28828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (15))){
var inst_27346 = (state_27466[(14)]);
var inst_27345 = (state_27466[(15)]);
var inst_27344 = (state_27466[(16)]);
var inst_27343 = (state_27466[(17)]);
var inst_27361 = (state_27466[(2)]);
var inst_27362 = (inst_27346 + (1));
var tmp27478 = inst_27345;
var tmp27479 = inst_27344;
var tmp27480 = inst_27343;
var inst_27343__$1 = tmp27480;
var inst_27344__$1 = tmp27479;
var inst_27345__$1 = tmp27478;
var inst_27346__$1 = inst_27362;
var state_27466__$1 = (function (){var statearr_27485 = state_27466;
(statearr_27485[(14)] = inst_27346__$1);

(statearr_27485[(15)] = inst_27345__$1);

(statearr_27485[(16)] = inst_27344__$1);

(statearr_27485[(17)] = inst_27343__$1);

(statearr_27485[(18)] = inst_27361);

return statearr_27485;
})();
var statearr_27486_28829 = state_27466__$1;
(statearr_27486_28829[(2)] = null);

(statearr_27486_28829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (21))){
var inst_27388 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27490_28831 = state_27466__$1;
(statearr_27490_28831[(2)] = inst_27388);

(statearr_27490_28831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (31))){
var inst_27414 = (state_27466[(9)]);
var inst_27418 = done(null);
var inst_27419 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27414);
var state_27466__$1 = (function (){var statearr_27491 = state_27466;
(statearr_27491[(19)] = inst_27418);

return statearr_27491;
})();
var statearr_27492_28833 = state_27466__$1;
(statearr_27492_28833[(2)] = inst_27419);

(statearr_27492_28833[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (32))){
var inst_27408 = (state_27466[(20)]);
var inst_27407 = (state_27466[(10)]);
var inst_27409 = (state_27466[(12)]);
var inst_27406 = (state_27466[(21)]);
var inst_27421 = (state_27466[(2)]);
var inst_27422 = (inst_27409 + (1));
var tmp27487 = inst_27408;
var tmp27488 = inst_27407;
var tmp27489 = inst_27406;
var inst_27406__$1 = tmp27489;
var inst_27407__$1 = tmp27488;
var inst_27408__$1 = tmp27487;
var inst_27409__$1 = inst_27422;
var state_27466__$1 = (function (){var statearr_27493 = state_27466;
(statearr_27493[(20)] = inst_27408__$1);

(statearr_27493[(10)] = inst_27407__$1);

(statearr_27493[(12)] = inst_27409__$1);

(statearr_27493[(22)] = inst_27421);

(statearr_27493[(21)] = inst_27406__$1);

return statearr_27493;
})();
var statearr_27494_28837 = state_27466__$1;
(statearr_27494_28837[(2)] = null);

(statearr_27494_28837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (40))){
var inst_27434 = (state_27466[(23)]);
var inst_27438 = done(null);
var inst_27439 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27434);
var state_27466__$1 = (function (){var statearr_27495 = state_27466;
(statearr_27495[(24)] = inst_27438);

return statearr_27495;
})();
var statearr_27496_28845 = state_27466__$1;
(statearr_27496_28845[(2)] = inst_27439);

(statearr_27496_28845[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (33))){
var inst_27425 = (state_27466[(25)]);
var inst_27427 = cljs.core.chunked_seq_QMARK_(inst_27425);
var state_27466__$1 = state_27466;
if(inst_27427){
var statearr_27497_28846 = state_27466__$1;
(statearr_27497_28846[(1)] = (36));

} else {
var statearr_27498_28847 = state_27466__$1;
(statearr_27498_28847[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (13))){
var inst_27355 = (state_27466[(26)]);
var inst_27358 = cljs.core.async.close_BANG_(inst_27355);
var state_27466__$1 = state_27466;
var statearr_27499_28852 = state_27466__$1;
(statearr_27499_28852[(2)] = inst_27358);

(statearr_27499_28852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (22))){
var inst_27378 = (state_27466[(8)]);
var inst_27381 = cljs.core.async.close_BANG_(inst_27378);
var state_27466__$1 = state_27466;
var statearr_27500_28853 = state_27466__$1;
(statearr_27500_28853[(2)] = inst_27381);

(statearr_27500_28853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (36))){
var inst_27425 = (state_27466[(25)]);
var inst_27429 = cljs.core.chunk_first(inst_27425);
var inst_27430 = cljs.core.chunk_rest(inst_27425);
var inst_27431 = cljs.core.count(inst_27429);
var inst_27406 = inst_27430;
var inst_27407 = inst_27429;
var inst_27408 = inst_27431;
var inst_27409 = (0);
var state_27466__$1 = (function (){var statearr_27501 = state_27466;
(statearr_27501[(20)] = inst_27408);

(statearr_27501[(10)] = inst_27407);

(statearr_27501[(12)] = inst_27409);

(statearr_27501[(21)] = inst_27406);

return statearr_27501;
})();
var statearr_27502_28863 = state_27466__$1;
(statearr_27502_28863[(2)] = null);

(statearr_27502_28863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (41))){
var inst_27425 = (state_27466[(25)]);
var inst_27441 = (state_27466[(2)]);
var inst_27442 = cljs.core.next(inst_27425);
var inst_27406 = inst_27442;
var inst_27407 = null;
var inst_27408 = (0);
var inst_27409 = (0);
var state_27466__$1 = (function (){var statearr_27503 = state_27466;
(statearr_27503[(20)] = inst_27408);

(statearr_27503[(10)] = inst_27407);

(statearr_27503[(12)] = inst_27409);

(statearr_27503[(27)] = inst_27441);

(statearr_27503[(21)] = inst_27406);

return statearr_27503;
})();
var statearr_27504_28870 = state_27466__$1;
(statearr_27504_28870[(2)] = null);

(statearr_27504_28870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (43))){
var state_27466__$1 = state_27466;
var statearr_27505_28871 = state_27466__$1;
(statearr_27505_28871[(2)] = null);

(statearr_27505_28871[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (29))){
var inst_27450 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27506_28872 = state_27466__$1;
(statearr_27506_28872[(2)] = inst_27450);

(statearr_27506_28872[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (44))){
var inst_27459 = (state_27466[(2)]);
var state_27466__$1 = (function (){var statearr_27507 = state_27466;
(statearr_27507[(28)] = inst_27459);

return statearr_27507;
})();
var statearr_27508_28873 = state_27466__$1;
(statearr_27508_28873[(2)] = null);

(statearr_27508_28873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (6))){
var inst_27398 = (state_27466[(29)]);
var inst_27397 = cljs.core.deref(cs);
var inst_27398__$1 = cljs.core.keys(inst_27397);
var inst_27399 = cljs.core.count(inst_27398__$1);
var inst_27400 = cljs.core.reset_BANG_(dctr,inst_27399);
var inst_27405 = cljs.core.seq(inst_27398__$1);
var inst_27406 = inst_27405;
var inst_27407 = null;
var inst_27408 = (0);
var inst_27409 = (0);
var state_27466__$1 = (function (){var statearr_27509 = state_27466;
(statearr_27509[(20)] = inst_27408);

(statearr_27509[(10)] = inst_27407);

(statearr_27509[(29)] = inst_27398__$1);

(statearr_27509[(12)] = inst_27409);

(statearr_27509[(30)] = inst_27400);

(statearr_27509[(21)] = inst_27406);

return statearr_27509;
})();
var statearr_27510_28880 = state_27466__$1;
(statearr_27510_28880[(2)] = null);

(statearr_27510_28880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (28))){
var inst_27425 = (state_27466[(25)]);
var inst_27406 = (state_27466[(21)]);
var inst_27425__$1 = cljs.core.seq(inst_27406);
var state_27466__$1 = (function (){var statearr_27511 = state_27466;
(statearr_27511[(25)] = inst_27425__$1);

return statearr_27511;
})();
if(inst_27425__$1){
var statearr_27512_28884 = state_27466__$1;
(statearr_27512_28884[(1)] = (33));

} else {
var statearr_27513_28885 = state_27466__$1;
(statearr_27513_28885[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (25))){
var inst_27408 = (state_27466[(20)]);
var inst_27409 = (state_27466[(12)]);
var inst_27411 = (inst_27409 < inst_27408);
var inst_27412 = inst_27411;
var state_27466__$1 = state_27466;
if(cljs.core.truth_(inst_27412)){
var statearr_27514_28886 = state_27466__$1;
(statearr_27514_28886[(1)] = (27));

} else {
var statearr_27515_28887 = state_27466__$1;
(statearr_27515_28887[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (34))){
var state_27466__$1 = state_27466;
var statearr_27516_28888 = state_27466__$1;
(statearr_27516_28888[(2)] = null);

(statearr_27516_28888[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (17))){
var state_27466__$1 = state_27466;
var statearr_27517_28889 = state_27466__$1;
(statearr_27517_28889[(2)] = null);

(statearr_27517_28889[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (3))){
var inst_27464 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27466__$1,inst_27464);
} else {
if((state_val_27467 === (12))){
var inst_27393 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27518_28893 = state_27466__$1;
(statearr_27518_28893[(2)] = inst_27393);

(statearr_27518_28893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (2))){
var state_27466__$1 = state_27466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27466__$1,(4),ch);
} else {
if((state_val_27467 === (23))){
var state_27466__$1 = state_27466;
var statearr_27519_28894 = state_27466__$1;
(statearr_27519_28894[(2)] = null);

(statearr_27519_28894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (35))){
var inst_27448 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27520_28897 = state_27466__$1;
(statearr_27520_28897[(2)] = inst_27448);

(statearr_27520_28897[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (19))){
var inst_27365 = (state_27466[(7)]);
var inst_27369 = cljs.core.chunk_first(inst_27365);
var inst_27370 = cljs.core.chunk_rest(inst_27365);
var inst_27371 = cljs.core.count(inst_27369);
var inst_27343 = inst_27370;
var inst_27344 = inst_27369;
var inst_27345 = inst_27371;
var inst_27346 = (0);
var state_27466__$1 = (function (){var statearr_27521 = state_27466;
(statearr_27521[(14)] = inst_27346);

(statearr_27521[(15)] = inst_27345);

(statearr_27521[(16)] = inst_27344);

(statearr_27521[(17)] = inst_27343);

return statearr_27521;
})();
var statearr_27522_28898 = state_27466__$1;
(statearr_27522_28898[(2)] = null);

(statearr_27522_28898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (11))){
var inst_27365 = (state_27466[(7)]);
var inst_27343 = (state_27466[(17)]);
var inst_27365__$1 = cljs.core.seq(inst_27343);
var state_27466__$1 = (function (){var statearr_27523 = state_27466;
(statearr_27523[(7)] = inst_27365__$1);

return statearr_27523;
})();
if(inst_27365__$1){
var statearr_27524_28899 = state_27466__$1;
(statearr_27524_28899[(1)] = (16));

} else {
var statearr_27525_28900 = state_27466__$1;
(statearr_27525_28900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (9))){
var inst_27395 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27526_28901 = state_27466__$1;
(statearr_27526_28901[(2)] = inst_27395);

(statearr_27526_28901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (5))){
var inst_27341 = cljs.core.deref(cs);
var inst_27342 = cljs.core.seq(inst_27341);
var inst_27343 = inst_27342;
var inst_27344 = null;
var inst_27345 = (0);
var inst_27346 = (0);
var state_27466__$1 = (function (){var statearr_27527 = state_27466;
(statearr_27527[(14)] = inst_27346);

(statearr_27527[(15)] = inst_27345);

(statearr_27527[(16)] = inst_27344);

(statearr_27527[(17)] = inst_27343);

return statearr_27527;
})();
var statearr_27528_28904 = state_27466__$1;
(statearr_27528_28904[(2)] = null);

(statearr_27528_28904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (14))){
var state_27466__$1 = state_27466;
var statearr_27529_28905 = state_27466__$1;
(statearr_27529_28905[(2)] = null);

(statearr_27529_28905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (45))){
var inst_27456 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27530_28906 = state_27466__$1;
(statearr_27530_28906[(2)] = inst_27456);

(statearr_27530_28906[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (26))){
var inst_27398 = (state_27466[(29)]);
var inst_27452 = (state_27466[(2)]);
var inst_27453 = cljs.core.seq(inst_27398);
var state_27466__$1 = (function (){var statearr_27531 = state_27466;
(statearr_27531[(31)] = inst_27452);

return statearr_27531;
})();
if(inst_27453){
var statearr_27532_28907 = state_27466__$1;
(statearr_27532_28907[(1)] = (42));

} else {
var statearr_27533_28908 = state_27466__$1;
(statearr_27533_28908[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (16))){
var inst_27365 = (state_27466[(7)]);
var inst_27367 = cljs.core.chunked_seq_QMARK_(inst_27365);
var state_27466__$1 = state_27466;
if(inst_27367){
var statearr_27534_28912 = state_27466__$1;
(statearr_27534_28912[(1)] = (19));

} else {
var statearr_27535_28913 = state_27466__$1;
(statearr_27535_28913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (38))){
var inst_27445 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27536_28915 = state_27466__$1;
(statearr_27536_28915[(2)] = inst_27445);

(statearr_27536_28915[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (30))){
var state_27466__$1 = state_27466;
var statearr_27537_28921 = state_27466__$1;
(statearr_27537_28921[(2)] = null);

(statearr_27537_28921[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (10))){
var inst_27346 = (state_27466[(14)]);
var inst_27344 = (state_27466[(16)]);
var inst_27354 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27344,inst_27346);
var inst_27355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27354,(0),null);
var inst_27356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27354,(1),null);
var state_27466__$1 = (function (){var statearr_27538 = state_27466;
(statearr_27538[(26)] = inst_27355);

return statearr_27538;
})();
if(cljs.core.truth_(inst_27356)){
var statearr_27539_28922 = state_27466__$1;
(statearr_27539_28922[(1)] = (13));

} else {
var statearr_27540_28923 = state_27466__$1;
(statearr_27540_28923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (18))){
var inst_27391 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27541_28924 = state_27466__$1;
(statearr_27541_28924[(2)] = inst_27391);

(statearr_27541_28924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (42))){
var state_27466__$1 = state_27466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27466__$1,(45),dchan);
} else {
if((state_val_27467 === (37))){
var inst_27434 = (state_27466[(23)]);
var inst_27334 = (state_27466[(11)]);
var inst_27425 = (state_27466[(25)]);
var inst_27434__$1 = cljs.core.first(inst_27425);
var inst_27435 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27434__$1,inst_27334,done);
var state_27466__$1 = (function (){var statearr_27542 = state_27466;
(statearr_27542[(23)] = inst_27434__$1);

return statearr_27542;
})();
if(cljs.core.truth_(inst_27435)){
var statearr_27543_28927 = state_27466__$1;
(statearr_27543_28927[(1)] = (39));

} else {
var statearr_27544_28928 = state_27466__$1;
(statearr_27544_28928[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (8))){
var inst_27346 = (state_27466[(14)]);
var inst_27345 = (state_27466[(15)]);
var inst_27348 = (inst_27346 < inst_27345);
var inst_27349 = inst_27348;
var state_27466__$1 = state_27466;
if(cljs.core.truth_(inst_27349)){
var statearr_27545_28931 = state_27466__$1;
(statearr_27545_28931[(1)] = (10));

} else {
var statearr_27546_28932 = state_27466__$1;
(statearr_27546_28932[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___28813,cs,m,dchan,dctr,done))
;
return ((function (switch__26770__auto__,c__26871__auto___28813,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26771__auto__ = null;
var cljs$core$async$mult_$_state_machine__26771__auto____0 = (function (){
var statearr_27547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27547[(0)] = cljs$core$async$mult_$_state_machine__26771__auto__);

(statearr_27547[(1)] = (1));

return statearr_27547;
});
var cljs$core$async$mult_$_state_machine__26771__auto____1 = (function (state_27466){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27466);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27548){if((e27548 instanceof Object)){
var ex__26774__auto__ = e27548;
var statearr_27549_28934 = state_27466;
(statearr_27549_28934[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28935 = state_27466;
state_27466 = G__28935;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26771__auto__ = function(state_27466){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26771__auto____1.call(this,state_27466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26771__auto____0;
cljs$core$async$mult_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26771__auto____1;
return cljs$core$async$mult_$_state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___28813,cs,m,dchan,dctr,done))
})();
var state__26873__auto__ = (function (){var statearr_27550 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27550[(6)] = c__26871__auto___28813);

return statearr_27550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___28813,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27552 = arguments.length;
switch (G__27552) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto__.call(null,m,state_map));
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto__.call(null,m,mode));
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28940 = arguments.length;
var i__4642__auto___28941 = (0);
while(true){
if((i__4642__auto___28941 < len__4641__auto___28940)){
args__4647__auto__.push((arguments[i__4642__auto___28941]));

var G__28942 = (i__4642__auto___28941 + (1));
i__4642__auto___28941 = G__28942;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27557){
var map__27558 = p__27557;
var map__27558__$1 = (((((!((map__27558 == null))))?(((((map__27558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27558):map__27558);
var opts = map__27558__$1;
var statearr_27560_28944 = state;
(statearr_27560_28944[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__27558,map__27558__$1,opts){
return (function (val){
var statearr_27561_28946 = state;
(statearr_27561_28946[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__27558,map__27558__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27562_28947 = state;
(statearr_27562_28947[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27553){
var G__27554 = cljs.core.first(seq27553);
var seq27553__$1 = cljs.core.next(seq27553);
var G__27555 = cljs.core.first(seq27553__$1);
var seq27553__$2 = cljs.core.next(seq27553__$1);
var G__27556 = cljs.core.first(seq27553__$2);
var seq27553__$3 = cljs.core.next(seq27553__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27554,G__27555,G__27556,seq27553__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27563 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27564){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27564 = meta27564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27565,meta27564__$1){
var self__ = this;
var _27565__$1 = this;
return (new cljs.core.async.t_cljs$core$async27563(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27564__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27565){
var self__ = this;
var _27565__$1 = this;
return self__.meta27564;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27563.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27563.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27563.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27563.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27563.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27563.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27563.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27563.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27564","meta27564",-740083716,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27563";

cljs.core.async.t_cljs$core$async27563.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async27563");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27563.
 */
cljs.core.async.__GT_t_cljs$core$async27563 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27563(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27564){
return (new cljs.core.async.t_cljs$core$async27563(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27564));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27563(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26871__auto___28966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___28966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___28966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27667){
var state_val_27668 = (state_27667[(1)]);
if((state_val_27668 === (7))){
var inst_27582 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27669_28969 = state_27667__$1;
(statearr_27669_28969[(2)] = inst_27582);

(statearr_27669_28969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (20))){
var inst_27594 = (state_27667[(7)]);
var state_27667__$1 = state_27667;
var statearr_27670_28970 = state_27667__$1;
(statearr_27670_28970[(2)] = inst_27594);

(statearr_27670_28970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (27))){
var state_27667__$1 = state_27667;
var statearr_27671_28971 = state_27667__$1;
(statearr_27671_28971[(2)] = null);

(statearr_27671_28971[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (1))){
var inst_27569 = (state_27667[(8)]);
var inst_27569__$1 = calc_state();
var inst_27571 = (inst_27569__$1 == null);
var inst_27572 = cljs.core.not(inst_27571);
var state_27667__$1 = (function (){var statearr_27672 = state_27667;
(statearr_27672[(8)] = inst_27569__$1);

return statearr_27672;
})();
if(inst_27572){
var statearr_27673_28972 = state_27667__$1;
(statearr_27673_28972[(1)] = (2));

} else {
var statearr_27674_28973 = state_27667__$1;
(statearr_27674_28973[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (24))){
var inst_27618 = (state_27667[(9)]);
var inst_27641 = (state_27667[(10)]);
var inst_27627 = (state_27667[(11)]);
var inst_27641__$1 = (inst_27618.cljs$core$IFn$_invoke$arity$1 ? inst_27618.cljs$core$IFn$_invoke$arity$1(inst_27627) : inst_27618.call(null,inst_27627));
var state_27667__$1 = (function (){var statearr_27675 = state_27667;
(statearr_27675[(10)] = inst_27641__$1);

return statearr_27675;
})();
if(cljs.core.truth_(inst_27641__$1)){
var statearr_27676_28978 = state_27667__$1;
(statearr_27676_28978[(1)] = (29));

} else {
var statearr_27677_28979 = state_27667__$1;
(statearr_27677_28979[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (4))){
var inst_27585 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
if(cljs.core.truth_(inst_27585)){
var statearr_27678_28984 = state_27667__$1;
(statearr_27678_28984[(1)] = (8));

} else {
var statearr_27679_28985 = state_27667__$1;
(statearr_27679_28985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (15))){
var inst_27612 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
if(cljs.core.truth_(inst_27612)){
var statearr_27680_28988 = state_27667__$1;
(statearr_27680_28988[(1)] = (19));

} else {
var statearr_27681_28989 = state_27667__$1;
(statearr_27681_28989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (21))){
var inst_27617 = (state_27667[(12)]);
var inst_27617__$1 = (state_27667[(2)]);
var inst_27618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27617__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27617__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27617__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27667__$1 = (function (){var statearr_27682 = state_27667;
(statearr_27682[(12)] = inst_27617__$1);

(statearr_27682[(13)] = inst_27619);

(statearr_27682[(9)] = inst_27618);

return statearr_27682;
})();
return cljs.core.async.ioc_alts_BANG_(state_27667__$1,(22),inst_27620);
} else {
if((state_val_27668 === (31))){
var inst_27649 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
if(cljs.core.truth_(inst_27649)){
var statearr_27683_29021 = state_27667__$1;
(statearr_27683_29021[(1)] = (32));

} else {
var statearr_27684_29022 = state_27667__$1;
(statearr_27684_29022[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (32))){
var inst_27626 = (state_27667[(14)]);
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27667__$1,(35),out,inst_27626);
} else {
if((state_val_27668 === (33))){
var inst_27617 = (state_27667[(12)]);
var inst_27594 = inst_27617;
var state_27667__$1 = (function (){var statearr_27685 = state_27667;
(statearr_27685[(7)] = inst_27594);

return statearr_27685;
})();
var statearr_27686_29048 = state_27667__$1;
(statearr_27686_29048[(2)] = null);

(statearr_27686_29048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (13))){
var inst_27594 = (state_27667[(7)]);
var inst_27601 = inst_27594.cljs$lang$protocol_mask$partition0$;
var inst_27602 = (inst_27601 & (64));
var inst_27603 = inst_27594.cljs$core$ISeq$;
var inst_27604 = (cljs.core.PROTOCOL_SENTINEL === inst_27603);
var inst_27605 = ((inst_27602) || (inst_27604));
var state_27667__$1 = state_27667;
if(cljs.core.truth_(inst_27605)){
var statearr_27687_29052 = state_27667__$1;
(statearr_27687_29052[(1)] = (16));

} else {
var statearr_27688_29053 = state_27667__$1;
(statearr_27688_29053[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (22))){
var inst_27626 = (state_27667[(14)]);
var inst_27627 = (state_27667[(11)]);
var inst_27625 = (state_27667[(2)]);
var inst_27626__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27625,(0),null);
var inst_27627__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27625,(1),null);
var inst_27628 = (inst_27626__$1 == null);
var inst_27629 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27627__$1,change);
var inst_27630 = ((inst_27628) || (inst_27629));
var state_27667__$1 = (function (){var statearr_27689 = state_27667;
(statearr_27689[(14)] = inst_27626__$1);

(statearr_27689[(11)] = inst_27627__$1);

return statearr_27689;
})();
if(cljs.core.truth_(inst_27630)){
var statearr_27690_29055 = state_27667__$1;
(statearr_27690_29055[(1)] = (23));

} else {
var statearr_27691_29056 = state_27667__$1;
(statearr_27691_29056[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (36))){
var inst_27617 = (state_27667[(12)]);
var inst_27594 = inst_27617;
var state_27667__$1 = (function (){var statearr_27692 = state_27667;
(statearr_27692[(7)] = inst_27594);

return statearr_27692;
})();
var statearr_27693_29064 = state_27667__$1;
(statearr_27693_29064[(2)] = null);

(statearr_27693_29064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (29))){
var inst_27641 = (state_27667[(10)]);
var state_27667__$1 = state_27667;
var statearr_27694_29067 = state_27667__$1;
(statearr_27694_29067[(2)] = inst_27641);

(statearr_27694_29067[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (6))){
var state_27667__$1 = state_27667;
var statearr_27695_29072 = state_27667__$1;
(statearr_27695_29072[(2)] = false);

(statearr_27695_29072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (28))){
var inst_27637 = (state_27667[(2)]);
var inst_27638 = calc_state();
var inst_27594 = inst_27638;
var state_27667__$1 = (function (){var statearr_27696 = state_27667;
(statearr_27696[(7)] = inst_27594);

(statearr_27696[(15)] = inst_27637);

return statearr_27696;
})();
var statearr_27697_29082 = state_27667__$1;
(statearr_27697_29082[(2)] = null);

(statearr_27697_29082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (25))){
var inst_27663 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27698_29085 = state_27667__$1;
(statearr_27698_29085[(2)] = inst_27663);

(statearr_27698_29085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (34))){
var inst_27661 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27699_29091 = state_27667__$1;
(statearr_27699_29091[(2)] = inst_27661);

(statearr_27699_29091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (17))){
var state_27667__$1 = state_27667;
var statearr_27700_29093 = state_27667__$1;
(statearr_27700_29093[(2)] = false);

(statearr_27700_29093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (3))){
var state_27667__$1 = state_27667;
var statearr_27701_29102 = state_27667__$1;
(statearr_27701_29102[(2)] = false);

(statearr_27701_29102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (12))){
var inst_27665 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27667__$1,inst_27665);
} else {
if((state_val_27668 === (2))){
var inst_27569 = (state_27667[(8)]);
var inst_27574 = inst_27569.cljs$lang$protocol_mask$partition0$;
var inst_27575 = (inst_27574 & (64));
var inst_27576 = inst_27569.cljs$core$ISeq$;
var inst_27577 = (cljs.core.PROTOCOL_SENTINEL === inst_27576);
var inst_27578 = ((inst_27575) || (inst_27577));
var state_27667__$1 = state_27667;
if(cljs.core.truth_(inst_27578)){
var statearr_27702_29124 = state_27667__$1;
(statearr_27702_29124[(1)] = (5));

} else {
var statearr_27703_29126 = state_27667__$1;
(statearr_27703_29126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (23))){
var inst_27626 = (state_27667[(14)]);
var inst_27632 = (inst_27626 == null);
var state_27667__$1 = state_27667;
if(cljs.core.truth_(inst_27632)){
var statearr_27704_29127 = state_27667__$1;
(statearr_27704_29127[(1)] = (26));

} else {
var statearr_27705_29128 = state_27667__$1;
(statearr_27705_29128[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (35))){
var inst_27652 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
if(cljs.core.truth_(inst_27652)){
var statearr_27706_29129 = state_27667__$1;
(statearr_27706_29129[(1)] = (36));

} else {
var statearr_27707_29131 = state_27667__$1;
(statearr_27707_29131[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (19))){
var inst_27594 = (state_27667[(7)]);
var inst_27614 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27594);
var state_27667__$1 = state_27667;
var statearr_27708_29135 = state_27667__$1;
(statearr_27708_29135[(2)] = inst_27614);

(statearr_27708_29135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (11))){
var inst_27594 = (state_27667[(7)]);
var inst_27598 = (inst_27594 == null);
var inst_27599 = cljs.core.not(inst_27598);
var state_27667__$1 = state_27667;
if(inst_27599){
var statearr_27709_29144 = state_27667__$1;
(statearr_27709_29144[(1)] = (13));

} else {
var statearr_27710_29147 = state_27667__$1;
(statearr_27710_29147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (9))){
var inst_27569 = (state_27667[(8)]);
var state_27667__$1 = state_27667;
var statearr_27711_29154 = state_27667__$1;
(statearr_27711_29154[(2)] = inst_27569);

(statearr_27711_29154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (5))){
var state_27667__$1 = state_27667;
var statearr_27712_29163 = state_27667__$1;
(statearr_27712_29163[(2)] = true);

(statearr_27712_29163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (14))){
var state_27667__$1 = state_27667;
var statearr_27713_29168 = state_27667__$1;
(statearr_27713_29168[(2)] = false);

(statearr_27713_29168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (26))){
var inst_27627 = (state_27667[(11)]);
var inst_27634 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_27627);
var state_27667__$1 = state_27667;
var statearr_27714_29172 = state_27667__$1;
(statearr_27714_29172[(2)] = inst_27634);

(statearr_27714_29172[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (16))){
var state_27667__$1 = state_27667;
var statearr_27715_29173 = state_27667__$1;
(statearr_27715_29173[(2)] = true);

(statearr_27715_29173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (38))){
var inst_27657 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27716_29174 = state_27667__$1;
(statearr_27716_29174[(2)] = inst_27657);

(statearr_27716_29174[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (30))){
var inst_27619 = (state_27667[(13)]);
var inst_27618 = (state_27667[(9)]);
var inst_27627 = (state_27667[(11)]);
var inst_27644 = cljs.core.empty_QMARK_(inst_27618);
var inst_27645 = (inst_27619.cljs$core$IFn$_invoke$arity$1 ? inst_27619.cljs$core$IFn$_invoke$arity$1(inst_27627) : inst_27619.call(null,inst_27627));
var inst_27646 = cljs.core.not(inst_27645);
var inst_27647 = ((inst_27644) && (inst_27646));
var state_27667__$1 = state_27667;
var statearr_27717_29175 = state_27667__$1;
(statearr_27717_29175[(2)] = inst_27647);

(statearr_27717_29175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (10))){
var inst_27569 = (state_27667[(8)]);
var inst_27590 = (state_27667[(2)]);
var inst_27591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27590,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27590,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27590,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27594 = inst_27569;
var state_27667__$1 = (function (){var statearr_27718 = state_27667;
(statearr_27718[(16)] = inst_27593);

(statearr_27718[(17)] = inst_27591);

(statearr_27718[(7)] = inst_27594);

(statearr_27718[(18)] = inst_27592);

return statearr_27718;
})();
var statearr_27719_29191 = state_27667__$1;
(statearr_27719_29191[(2)] = null);

(statearr_27719_29191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (18))){
var inst_27609 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27720_29192 = state_27667__$1;
(statearr_27720_29192[(2)] = inst_27609);

(statearr_27720_29192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (37))){
var state_27667__$1 = state_27667;
var statearr_27721_29194 = state_27667__$1;
(statearr_27721_29194[(2)] = null);

(statearr_27721_29194[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (8))){
var inst_27569 = (state_27667[(8)]);
var inst_27587 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27569);
var state_27667__$1 = state_27667;
var statearr_27722_29199 = state_27667__$1;
(statearr_27722_29199[(2)] = inst_27587);

(statearr_27722_29199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___28966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26770__auto__,c__26871__auto___28966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26771__auto__ = null;
var cljs$core$async$mix_$_state_machine__26771__auto____0 = (function (){
var statearr_27723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27723[(0)] = cljs$core$async$mix_$_state_machine__26771__auto__);

(statearr_27723[(1)] = (1));

return statearr_27723;
});
var cljs$core$async$mix_$_state_machine__26771__auto____1 = (function (state_27667){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27667);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27724){if((e27724 instanceof Object)){
var ex__26774__auto__ = e27724;
var statearr_27725_29200 = state_27667;
(statearr_27725_29200[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29201 = state_27667;
state_27667 = G__29201;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26771__auto__ = function(state_27667){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26771__auto____1.call(this,state_27667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26771__auto____0;
cljs$core$async$mix_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26771__auto____1;
return cljs$core$async$mix_$_state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___28966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26873__auto__ = (function (){var statearr_27726 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27726[(6)] = c__26871__auto___28966);

return statearr_27726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___28966,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto__.call(null,p,v,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27728 = arguments.length;
switch (G__27728) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto__.call(null,p));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto__.call(null,p,v));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27731 = arguments.length;
switch (G__27731) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4047__auto__,mults){
return (function (p1__27729_SHARP_){
if(cljs.core.truth_((p1__27729_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27729_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__27729_SHARP_.call(null,topic)))){
return p1__27729_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27729_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27732 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27733){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27733 = meta27733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27734,meta27733__$1){
var self__ = this;
var _27734__$1 = this;
return (new cljs.core.async.t_cljs$core$async27732(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27733__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27734){
var self__ = this;
var _27734__$1 = this;
return self__.meta27733;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27732.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27732.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27733","meta27733",-1670526130,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27732";

cljs.core.async.t_cljs$core$async27732.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async27732");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27732.
 */
cljs.core.async.__GT_t_cljs$core$async27732 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27732(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27733){
return (new cljs.core.async.t_cljs$core$async27732(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27733));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27732(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26871__auto___29258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___29258,mults,ensure_mult,p){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___29258,mults,ensure_mult,p){
return (function (state_27806){
var state_val_27807 = (state_27806[(1)]);
if((state_val_27807 === (7))){
var inst_27802 = (state_27806[(2)]);
var state_27806__$1 = state_27806;
var statearr_27808_29268 = state_27806__$1;
(statearr_27808_29268[(2)] = inst_27802);

(statearr_27808_29268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (20))){
var state_27806__$1 = state_27806;
var statearr_27809_29269 = state_27806__$1;
(statearr_27809_29269[(2)] = null);

(statearr_27809_29269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (1))){
var state_27806__$1 = state_27806;
var statearr_27810_29274 = state_27806__$1;
(statearr_27810_29274[(2)] = null);

(statearr_27810_29274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (24))){
var inst_27785 = (state_27806[(7)]);
var inst_27794 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27785);
var state_27806__$1 = state_27806;
var statearr_27811_29275 = state_27806__$1;
(statearr_27811_29275[(2)] = inst_27794);

(statearr_27811_29275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (4))){
var inst_27737 = (state_27806[(8)]);
var inst_27737__$1 = (state_27806[(2)]);
var inst_27738 = (inst_27737__$1 == null);
var state_27806__$1 = (function (){var statearr_27812 = state_27806;
(statearr_27812[(8)] = inst_27737__$1);

return statearr_27812;
})();
if(cljs.core.truth_(inst_27738)){
var statearr_27813_29277 = state_27806__$1;
(statearr_27813_29277[(1)] = (5));

} else {
var statearr_27814_29278 = state_27806__$1;
(statearr_27814_29278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (15))){
var inst_27779 = (state_27806[(2)]);
var state_27806__$1 = state_27806;
var statearr_27815_29280 = state_27806__$1;
(statearr_27815_29280[(2)] = inst_27779);

(statearr_27815_29280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (21))){
var inst_27799 = (state_27806[(2)]);
var state_27806__$1 = (function (){var statearr_27816 = state_27806;
(statearr_27816[(9)] = inst_27799);

return statearr_27816;
})();
var statearr_27817_29281 = state_27806__$1;
(statearr_27817_29281[(2)] = null);

(statearr_27817_29281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (13))){
var inst_27761 = (state_27806[(10)]);
var inst_27763 = cljs.core.chunked_seq_QMARK_(inst_27761);
var state_27806__$1 = state_27806;
if(inst_27763){
var statearr_27818_29282 = state_27806__$1;
(statearr_27818_29282[(1)] = (16));

} else {
var statearr_27819_29283 = state_27806__$1;
(statearr_27819_29283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (22))){
var inst_27791 = (state_27806[(2)]);
var state_27806__$1 = state_27806;
if(cljs.core.truth_(inst_27791)){
var statearr_27820_29284 = state_27806__$1;
(statearr_27820_29284[(1)] = (23));

} else {
var statearr_27821_29285 = state_27806__$1;
(statearr_27821_29285[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (6))){
var inst_27785 = (state_27806[(7)]);
var inst_27787 = (state_27806[(11)]);
var inst_27737 = (state_27806[(8)]);
var inst_27785__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_27737) : topic_fn.call(null,inst_27737));
var inst_27786 = cljs.core.deref(mults);
var inst_27787__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27786,inst_27785__$1);
var state_27806__$1 = (function (){var statearr_27822 = state_27806;
(statearr_27822[(7)] = inst_27785__$1);

(statearr_27822[(11)] = inst_27787__$1);

return statearr_27822;
})();
if(cljs.core.truth_(inst_27787__$1)){
var statearr_27823_29291 = state_27806__$1;
(statearr_27823_29291[(1)] = (19));

} else {
var statearr_27824_29292 = state_27806__$1;
(statearr_27824_29292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (25))){
var inst_27796 = (state_27806[(2)]);
var state_27806__$1 = state_27806;
var statearr_27825_29295 = state_27806__$1;
(statearr_27825_29295[(2)] = inst_27796);

(statearr_27825_29295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (17))){
var inst_27761 = (state_27806[(10)]);
var inst_27770 = cljs.core.first(inst_27761);
var inst_27771 = cljs.core.async.muxch_STAR_(inst_27770);
var inst_27772 = cljs.core.async.close_BANG_(inst_27771);
var inst_27773 = cljs.core.next(inst_27761);
var inst_27747 = inst_27773;
var inst_27748 = null;
var inst_27749 = (0);
var inst_27750 = (0);
var state_27806__$1 = (function (){var statearr_27826 = state_27806;
(statearr_27826[(12)] = inst_27748);

(statearr_27826[(13)] = inst_27750);

(statearr_27826[(14)] = inst_27747);

(statearr_27826[(15)] = inst_27749);

(statearr_27826[(16)] = inst_27772);

return statearr_27826;
})();
var statearr_27827_29311 = state_27806__$1;
(statearr_27827_29311[(2)] = null);

(statearr_27827_29311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (3))){
var inst_27804 = (state_27806[(2)]);
var state_27806__$1 = state_27806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27806__$1,inst_27804);
} else {
if((state_val_27807 === (12))){
var inst_27781 = (state_27806[(2)]);
var state_27806__$1 = state_27806;
var statearr_27828_29318 = state_27806__$1;
(statearr_27828_29318[(2)] = inst_27781);

(statearr_27828_29318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (2))){
var state_27806__$1 = state_27806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27806__$1,(4),ch);
} else {
if((state_val_27807 === (23))){
var state_27806__$1 = state_27806;
var statearr_27829_29319 = state_27806__$1;
(statearr_27829_29319[(2)] = null);

(statearr_27829_29319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (19))){
var inst_27787 = (state_27806[(11)]);
var inst_27737 = (state_27806[(8)]);
var inst_27789 = cljs.core.async.muxch_STAR_(inst_27787);
var state_27806__$1 = state_27806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27806__$1,(22),inst_27789,inst_27737);
} else {
if((state_val_27807 === (11))){
var inst_27761 = (state_27806[(10)]);
var inst_27747 = (state_27806[(14)]);
var inst_27761__$1 = cljs.core.seq(inst_27747);
var state_27806__$1 = (function (){var statearr_27830 = state_27806;
(statearr_27830[(10)] = inst_27761__$1);

return statearr_27830;
})();
if(inst_27761__$1){
var statearr_27831_29322 = state_27806__$1;
(statearr_27831_29322[(1)] = (13));

} else {
var statearr_27832_29323 = state_27806__$1;
(statearr_27832_29323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (9))){
var inst_27783 = (state_27806[(2)]);
var state_27806__$1 = state_27806;
var statearr_27833_29324 = state_27806__$1;
(statearr_27833_29324[(2)] = inst_27783);

(statearr_27833_29324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (5))){
var inst_27744 = cljs.core.deref(mults);
var inst_27745 = cljs.core.vals(inst_27744);
var inst_27746 = cljs.core.seq(inst_27745);
var inst_27747 = inst_27746;
var inst_27748 = null;
var inst_27749 = (0);
var inst_27750 = (0);
var state_27806__$1 = (function (){var statearr_27834 = state_27806;
(statearr_27834[(12)] = inst_27748);

(statearr_27834[(13)] = inst_27750);

(statearr_27834[(14)] = inst_27747);

(statearr_27834[(15)] = inst_27749);

return statearr_27834;
})();
var statearr_27835_29329 = state_27806__$1;
(statearr_27835_29329[(2)] = null);

(statearr_27835_29329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (14))){
var state_27806__$1 = state_27806;
var statearr_27839_29330 = state_27806__$1;
(statearr_27839_29330[(2)] = null);

(statearr_27839_29330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (16))){
var inst_27761 = (state_27806[(10)]);
var inst_27765 = cljs.core.chunk_first(inst_27761);
var inst_27766 = cljs.core.chunk_rest(inst_27761);
var inst_27767 = cljs.core.count(inst_27765);
var inst_27747 = inst_27766;
var inst_27748 = inst_27765;
var inst_27749 = inst_27767;
var inst_27750 = (0);
var state_27806__$1 = (function (){var statearr_27840 = state_27806;
(statearr_27840[(12)] = inst_27748);

(statearr_27840[(13)] = inst_27750);

(statearr_27840[(14)] = inst_27747);

(statearr_27840[(15)] = inst_27749);

return statearr_27840;
})();
var statearr_27841_29331 = state_27806__$1;
(statearr_27841_29331[(2)] = null);

(statearr_27841_29331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (10))){
var inst_27748 = (state_27806[(12)]);
var inst_27750 = (state_27806[(13)]);
var inst_27747 = (state_27806[(14)]);
var inst_27749 = (state_27806[(15)]);
var inst_27755 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27748,inst_27750);
var inst_27756 = cljs.core.async.muxch_STAR_(inst_27755);
var inst_27757 = cljs.core.async.close_BANG_(inst_27756);
var inst_27758 = (inst_27750 + (1));
var tmp27836 = inst_27748;
var tmp27837 = inst_27747;
var tmp27838 = inst_27749;
var inst_27747__$1 = tmp27837;
var inst_27748__$1 = tmp27836;
var inst_27749__$1 = tmp27838;
var inst_27750__$1 = inst_27758;
var state_27806__$1 = (function (){var statearr_27842 = state_27806;
(statearr_27842[(17)] = inst_27757);

(statearr_27842[(12)] = inst_27748__$1);

(statearr_27842[(13)] = inst_27750__$1);

(statearr_27842[(14)] = inst_27747__$1);

(statearr_27842[(15)] = inst_27749__$1);

return statearr_27842;
})();
var statearr_27843_29332 = state_27806__$1;
(statearr_27843_29332[(2)] = null);

(statearr_27843_29332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (18))){
var inst_27776 = (state_27806[(2)]);
var state_27806__$1 = state_27806;
var statearr_27844_29339 = state_27806__$1;
(statearr_27844_29339[(2)] = inst_27776);

(statearr_27844_29339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (8))){
var inst_27750 = (state_27806[(13)]);
var inst_27749 = (state_27806[(15)]);
var inst_27752 = (inst_27750 < inst_27749);
var inst_27753 = inst_27752;
var state_27806__$1 = state_27806;
if(cljs.core.truth_(inst_27753)){
var statearr_27845_29340 = state_27806__$1;
(statearr_27845_29340[(1)] = (10));

} else {
var statearr_27846_29341 = state_27806__$1;
(statearr_27846_29341[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___29258,mults,ensure_mult,p))
;
return ((function (switch__26770__auto__,c__26871__auto___29258,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26771__auto__ = null;
var cljs$core$async$state_machine__26771__auto____0 = (function (){
var statearr_27847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27847[(0)] = cljs$core$async$state_machine__26771__auto__);

(statearr_27847[(1)] = (1));

return statearr_27847;
});
var cljs$core$async$state_machine__26771__auto____1 = (function (state_27806){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27806);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27848){if((e27848 instanceof Object)){
var ex__26774__auto__ = e27848;
var statearr_27849_29342 = state_27806;
(statearr_27849_29342[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27848;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29343 = state_27806;
state_27806 = G__29343;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$state_machine__26771__auto__ = function(state_27806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26771__auto____1.call(this,state_27806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26771__auto____0;
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26771__auto____1;
return cljs$core$async$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___29258,mults,ensure_mult,p))
})();
var state__26873__auto__ = (function (){var statearr_27850 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27850[(6)] = c__26871__auto___29258);

return statearr_27850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___29258,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27852 = arguments.length;
switch (G__27852) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27854 = arguments.length;
switch (G__27854) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27856 = arguments.length;
switch (G__27856) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__26871__auto___29366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___29366,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___29366,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27895){
var state_val_27896 = (state_27895[(1)]);
if((state_val_27896 === (7))){
var state_27895__$1 = state_27895;
var statearr_27897_29367 = state_27895__$1;
(statearr_27897_29367[(2)] = null);

(statearr_27897_29367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (1))){
var state_27895__$1 = state_27895;
var statearr_27898_29369 = state_27895__$1;
(statearr_27898_29369[(2)] = null);

(statearr_27898_29369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (4))){
var inst_27859 = (state_27895[(7)]);
var inst_27861 = (inst_27859 < cnt);
var state_27895__$1 = state_27895;
if(cljs.core.truth_(inst_27861)){
var statearr_27899_29370 = state_27895__$1;
(statearr_27899_29370[(1)] = (6));

} else {
var statearr_27900_29371 = state_27895__$1;
(statearr_27900_29371[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (15))){
var inst_27891 = (state_27895[(2)]);
var state_27895__$1 = state_27895;
var statearr_27901_29372 = state_27895__$1;
(statearr_27901_29372[(2)] = inst_27891);

(statearr_27901_29372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (13))){
var inst_27884 = cljs.core.async.close_BANG_(out);
var state_27895__$1 = state_27895;
var statearr_27902_29373 = state_27895__$1;
(statearr_27902_29373[(2)] = inst_27884);

(statearr_27902_29373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (6))){
var state_27895__$1 = state_27895;
var statearr_27903_29374 = state_27895__$1;
(statearr_27903_29374[(2)] = null);

(statearr_27903_29374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (3))){
var inst_27893 = (state_27895[(2)]);
var state_27895__$1 = state_27895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27895__$1,inst_27893);
} else {
if((state_val_27896 === (12))){
var inst_27881 = (state_27895[(8)]);
var inst_27881__$1 = (state_27895[(2)]);
var inst_27882 = cljs.core.some(cljs.core.nil_QMARK_,inst_27881__$1);
var state_27895__$1 = (function (){var statearr_27904 = state_27895;
(statearr_27904[(8)] = inst_27881__$1);

return statearr_27904;
})();
if(cljs.core.truth_(inst_27882)){
var statearr_27905_29375 = state_27895__$1;
(statearr_27905_29375[(1)] = (13));

} else {
var statearr_27906_29376 = state_27895__$1;
(statearr_27906_29376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (2))){
var inst_27858 = cljs.core.reset_BANG_(dctr,cnt);
var inst_27859 = (0);
var state_27895__$1 = (function (){var statearr_27907 = state_27895;
(statearr_27907[(9)] = inst_27858);

(statearr_27907[(7)] = inst_27859);

return statearr_27907;
})();
var statearr_27908_29379 = state_27895__$1;
(statearr_27908_29379[(2)] = null);

(statearr_27908_29379[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (11))){
var inst_27859 = (state_27895[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_27895,(10),Object,null,(9));
var inst_27868 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_27859) : chs__$1.call(null,inst_27859));
var inst_27869 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_27859) : done.call(null,inst_27859));
var inst_27870 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_27868,inst_27869);
var state_27895__$1 = state_27895;
var statearr_27909_29384 = state_27895__$1;
(statearr_27909_29384[(2)] = inst_27870);


cljs.core.async.impl.ioc_helpers.process_exception(state_27895__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (9))){
var inst_27859 = (state_27895[(7)]);
var inst_27872 = (state_27895[(2)]);
var inst_27873 = (inst_27859 + (1));
var inst_27859__$1 = inst_27873;
var state_27895__$1 = (function (){var statearr_27910 = state_27895;
(statearr_27910[(7)] = inst_27859__$1);

(statearr_27910[(10)] = inst_27872);

return statearr_27910;
})();
var statearr_27911_29385 = state_27895__$1;
(statearr_27911_29385[(2)] = null);

(statearr_27911_29385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (5))){
var inst_27879 = (state_27895[(2)]);
var state_27895__$1 = (function (){var statearr_27912 = state_27895;
(statearr_27912[(11)] = inst_27879);

return statearr_27912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27895__$1,(12),dchan);
} else {
if((state_val_27896 === (14))){
var inst_27881 = (state_27895[(8)]);
var inst_27886 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_27881);
var state_27895__$1 = state_27895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27895__$1,(16),out,inst_27886);
} else {
if((state_val_27896 === (16))){
var inst_27888 = (state_27895[(2)]);
var state_27895__$1 = (function (){var statearr_27913 = state_27895;
(statearr_27913[(12)] = inst_27888);

return statearr_27913;
})();
var statearr_27914_29390 = state_27895__$1;
(statearr_27914_29390[(2)] = null);

(statearr_27914_29390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (10))){
var inst_27863 = (state_27895[(2)]);
var inst_27864 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_27895__$1 = (function (){var statearr_27915 = state_27895;
(statearr_27915[(13)] = inst_27863);

return statearr_27915;
})();
var statearr_27916_29391 = state_27895__$1;
(statearr_27916_29391[(2)] = inst_27864);


cljs.core.async.impl.ioc_helpers.process_exception(state_27895__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (8))){
var inst_27877 = (state_27895[(2)]);
var state_27895__$1 = state_27895;
var statearr_27917_29392 = state_27895__$1;
(statearr_27917_29392[(2)] = inst_27877);

(statearr_27917_29392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___29366,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26770__auto__,c__26871__auto___29366,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26771__auto__ = null;
var cljs$core$async$state_machine__26771__auto____0 = (function (){
var statearr_27918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27918[(0)] = cljs$core$async$state_machine__26771__auto__);

(statearr_27918[(1)] = (1));

return statearr_27918;
});
var cljs$core$async$state_machine__26771__auto____1 = (function (state_27895){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27895);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27919){if((e27919 instanceof Object)){
var ex__26774__auto__ = e27919;
var statearr_27920_29401 = state_27895;
(statearr_27920_29401[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29402 = state_27895;
state_27895 = G__29402;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$state_machine__26771__auto__ = function(state_27895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26771__auto____1.call(this,state_27895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26771__auto____0;
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26771__auto____1;
return cljs$core$async$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___29366,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26873__auto__ = (function (){var statearr_27921 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27921[(6)] = c__26871__auto___29366);

return statearr_27921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___29366,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27924 = arguments.length;
switch (G__27924) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26871__auto___29411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___29411,out){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___29411,out){
return (function (state_27956){
var state_val_27957 = (state_27956[(1)]);
if((state_val_27957 === (7))){
var inst_27935 = (state_27956[(7)]);
var inst_27936 = (state_27956[(8)]);
var inst_27935__$1 = (state_27956[(2)]);
var inst_27936__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27935__$1,(0),null);
var inst_27937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27935__$1,(1),null);
var inst_27938 = (inst_27936__$1 == null);
var state_27956__$1 = (function (){var statearr_27958 = state_27956;
(statearr_27958[(9)] = inst_27937);

(statearr_27958[(7)] = inst_27935__$1);

(statearr_27958[(8)] = inst_27936__$1);

return statearr_27958;
})();
if(cljs.core.truth_(inst_27938)){
var statearr_27959_29412 = state_27956__$1;
(statearr_27959_29412[(1)] = (8));

} else {
var statearr_27960_29413 = state_27956__$1;
(statearr_27960_29413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27957 === (1))){
var inst_27925 = cljs.core.vec(chs);
var inst_27926 = inst_27925;
var state_27956__$1 = (function (){var statearr_27961 = state_27956;
(statearr_27961[(10)] = inst_27926);

return statearr_27961;
})();
var statearr_27962_29417 = state_27956__$1;
(statearr_27962_29417[(2)] = null);

(statearr_27962_29417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27957 === (4))){
var inst_27926 = (state_27956[(10)]);
var state_27956__$1 = state_27956;
return cljs.core.async.ioc_alts_BANG_(state_27956__$1,(7),inst_27926);
} else {
if((state_val_27957 === (6))){
var inst_27952 = (state_27956[(2)]);
var state_27956__$1 = state_27956;
var statearr_27963_29426 = state_27956__$1;
(statearr_27963_29426[(2)] = inst_27952);

(statearr_27963_29426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27957 === (3))){
var inst_27954 = (state_27956[(2)]);
var state_27956__$1 = state_27956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27956__$1,inst_27954);
} else {
if((state_val_27957 === (2))){
var inst_27926 = (state_27956[(10)]);
var inst_27928 = cljs.core.count(inst_27926);
var inst_27929 = (inst_27928 > (0));
var state_27956__$1 = state_27956;
if(cljs.core.truth_(inst_27929)){
var statearr_27965_29430 = state_27956__$1;
(statearr_27965_29430[(1)] = (4));

} else {
var statearr_27966_29431 = state_27956__$1;
(statearr_27966_29431[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27957 === (11))){
var inst_27926 = (state_27956[(10)]);
var inst_27945 = (state_27956[(2)]);
var tmp27964 = inst_27926;
var inst_27926__$1 = tmp27964;
var state_27956__$1 = (function (){var statearr_27967 = state_27956;
(statearr_27967[(11)] = inst_27945);

(statearr_27967[(10)] = inst_27926__$1);

return statearr_27967;
})();
var statearr_27968_29438 = state_27956__$1;
(statearr_27968_29438[(2)] = null);

(statearr_27968_29438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27957 === (9))){
var inst_27936 = (state_27956[(8)]);
var state_27956__$1 = state_27956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27956__$1,(11),out,inst_27936);
} else {
if((state_val_27957 === (5))){
var inst_27950 = cljs.core.async.close_BANG_(out);
var state_27956__$1 = state_27956;
var statearr_27969_29447 = state_27956__$1;
(statearr_27969_29447[(2)] = inst_27950);

(statearr_27969_29447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27957 === (10))){
var inst_27948 = (state_27956[(2)]);
var state_27956__$1 = state_27956;
var statearr_27970_29452 = state_27956__$1;
(statearr_27970_29452[(2)] = inst_27948);

(statearr_27970_29452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27957 === (8))){
var inst_27937 = (state_27956[(9)]);
var inst_27935 = (state_27956[(7)]);
var inst_27936 = (state_27956[(8)]);
var inst_27926 = (state_27956[(10)]);
var inst_27940 = (function (){var cs = inst_27926;
var vec__27931 = inst_27935;
var v = inst_27936;
var c = inst_27937;
return ((function (cs,vec__27931,v,c,inst_27937,inst_27935,inst_27936,inst_27926,state_val_27957,c__26871__auto___29411,out){
return (function (p1__27922_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__27922_SHARP_);
});
;})(cs,vec__27931,v,c,inst_27937,inst_27935,inst_27936,inst_27926,state_val_27957,c__26871__auto___29411,out))
})();
var inst_27941 = cljs.core.filterv(inst_27940,inst_27926);
var inst_27926__$1 = inst_27941;
var state_27956__$1 = (function (){var statearr_27971 = state_27956;
(statearr_27971[(10)] = inst_27926__$1);

return statearr_27971;
})();
var statearr_27972_29462 = state_27956__$1;
(statearr_27972_29462[(2)] = null);

(statearr_27972_29462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___29411,out))
;
return ((function (switch__26770__auto__,c__26871__auto___29411,out){
return (function() {
var cljs$core$async$state_machine__26771__auto__ = null;
var cljs$core$async$state_machine__26771__auto____0 = (function (){
var statearr_27973 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27973[(0)] = cljs$core$async$state_machine__26771__auto__);

(statearr_27973[(1)] = (1));

return statearr_27973;
});
var cljs$core$async$state_machine__26771__auto____1 = (function (state_27956){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_27956);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e27974){if((e27974 instanceof Object)){
var ex__26774__auto__ = e27974;
var statearr_27975_29485 = state_27956;
(statearr_27975_29485[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27974;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29491 = state_27956;
state_27956 = G__29491;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$state_machine__26771__auto__ = function(state_27956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26771__auto____1.call(this,state_27956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26771__auto____0;
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26771__auto____1;
return cljs$core$async$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___29411,out))
})();
var state__26873__auto__ = (function (){var statearr_27976 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_27976[(6)] = c__26871__auto___29411);

return statearr_27976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___29411,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27978 = arguments.length;
switch (G__27978) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26871__auto___29525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___29525,out){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___29525,out){
return (function (state_28002){
var state_val_28003 = (state_28002[(1)]);
if((state_val_28003 === (7))){
var inst_27984 = (state_28002[(7)]);
var inst_27984__$1 = (state_28002[(2)]);
var inst_27985 = (inst_27984__$1 == null);
var inst_27986 = cljs.core.not(inst_27985);
var state_28002__$1 = (function (){var statearr_28004 = state_28002;
(statearr_28004[(7)] = inst_27984__$1);

return statearr_28004;
})();
if(inst_27986){
var statearr_28005_29534 = state_28002__$1;
(statearr_28005_29534[(1)] = (8));

} else {
var statearr_28006_29539 = state_28002__$1;
(statearr_28006_29539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (1))){
var inst_27979 = (0);
var state_28002__$1 = (function (){var statearr_28007 = state_28002;
(statearr_28007[(8)] = inst_27979);

return statearr_28007;
})();
var statearr_28008_29541 = state_28002__$1;
(statearr_28008_29541[(2)] = null);

(statearr_28008_29541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (4))){
var state_28002__$1 = state_28002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28002__$1,(7),ch);
} else {
if((state_val_28003 === (6))){
var inst_27997 = (state_28002[(2)]);
var state_28002__$1 = state_28002;
var statearr_28009_29551 = state_28002__$1;
(statearr_28009_29551[(2)] = inst_27997);

(statearr_28009_29551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (3))){
var inst_27999 = (state_28002[(2)]);
var inst_28000 = cljs.core.async.close_BANG_(out);
var state_28002__$1 = (function (){var statearr_28010 = state_28002;
(statearr_28010[(9)] = inst_27999);

return statearr_28010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28002__$1,inst_28000);
} else {
if((state_val_28003 === (2))){
var inst_27979 = (state_28002[(8)]);
var inst_27981 = (inst_27979 < n);
var state_28002__$1 = state_28002;
if(cljs.core.truth_(inst_27981)){
var statearr_28011_29586 = state_28002__$1;
(statearr_28011_29586[(1)] = (4));

} else {
var statearr_28012_29587 = state_28002__$1;
(statearr_28012_29587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (11))){
var inst_27979 = (state_28002[(8)]);
var inst_27989 = (state_28002[(2)]);
var inst_27990 = (inst_27979 + (1));
var inst_27979__$1 = inst_27990;
var state_28002__$1 = (function (){var statearr_28013 = state_28002;
(statearr_28013[(10)] = inst_27989);

(statearr_28013[(8)] = inst_27979__$1);

return statearr_28013;
})();
var statearr_28014_29611 = state_28002__$1;
(statearr_28014_29611[(2)] = null);

(statearr_28014_29611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (9))){
var state_28002__$1 = state_28002;
var statearr_28015_29612 = state_28002__$1;
(statearr_28015_29612[(2)] = null);

(statearr_28015_29612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (5))){
var state_28002__$1 = state_28002;
var statearr_28016_29615 = state_28002__$1;
(statearr_28016_29615[(2)] = null);

(statearr_28016_29615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (10))){
var inst_27994 = (state_28002[(2)]);
var state_28002__$1 = state_28002;
var statearr_28017_29617 = state_28002__$1;
(statearr_28017_29617[(2)] = inst_27994);

(statearr_28017_29617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (8))){
var inst_27984 = (state_28002[(7)]);
var state_28002__$1 = state_28002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28002__$1,(11),out,inst_27984);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___29525,out))
;
return ((function (switch__26770__auto__,c__26871__auto___29525,out){
return (function() {
var cljs$core$async$state_machine__26771__auto__ = null;
var cljs$core$async$state_machine__26771__auto____0 = (function (){
var statearr_28018 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28018[(0)] = cljs$core$async$state_machine__26771__auto__);

(statearr_28018[(1)] = (1));

return statearr_28018;
});
var cljs$core$async$state_machine__26771__auto____1 = (function (state_28002){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_28002);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e28019){if((e28019 instanceof Object)){
var ex__26774__auto__ = e28019;
var statearr_28020_29622 = state_28002;
(statearr_28020_29622[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28019;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29627 = state_28002;
state_28002 = G__29627;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$state_machine__26771__auto__ = function(state_28002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26771__auto____1.call(this,state_28002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26771__auto____0;
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26771__auto____1;
return cljs$core$async$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___29525,out))
})();
var state__26873__auto__ = (function (){var statearr_28021 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_28021[(6)] = c__26871__auto___29525);

return statearr_28021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___29525,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28023 = (function (f,ch,meta28024){
this.f = f;
this.ch = ch;
this.meta28024 = meta28024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28025,meta28024__$1){
var self__ = this;
var _28025__$1 = this;
return (new cljs.core.async.t_cljs$core$async28023(self__.f,self__.ch,meta28024__$1));
});

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28025){
var self__ = this;
var _28025__$1 = this;
return self__.meta28024;
});

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28026 = (function (f,ch,meta28024,_,fn1,meta28027){
this.f = f;
this.ch = ch;
this.meta28024 = meta28024;
this._ = _;
this.fn1 = fn1;
this.meta28027 = meta28027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28028,meta28027__$1){
var self__ = this;
var _28028__$1 = this;
return (new cljs.core.async.t_cljs$core$async28026(self__.f,self__.ch,self__.meta28024,self__._,self__.fn1,meta28027__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28028){
var self__ = this;
var _28028__$1 = this;
return self__.meta28027;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28022_SHARP_){
var G__28029 = (((p1__28022_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28022_SHARP_) : self__.f.call(null,p1__28022_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28029) : f1.call(null,G__28029));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28026.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28024","meta28024",-313560293,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28023","cljs.core.async/t_cljs$core$async28023",422298298,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28027","meta28027",1896388472,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28026";

cljs.core.async.t_cljs$core$async28026.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async28026");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28026.
 */
cljs.core.async.__GT_t_cljs$core$async28026 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28026(f__$1,ch__$1,meta28024__$1,___$2,fn1__$1,meta28027){
return (new cljs.core.async.t_cljs$core$async28026(f__$1,ch__$1,meta28024__$1,___$2,fn1__$1,meta28027));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28026(self__.f,self__.ch,self__.meta28024,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28030 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28030) : self__.f.call(null,G__28030));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28024","meta28024",-313560293,null)], null);
});

cljs.core.async.t_cljs$core$async28023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28023";

cljs.core.async.t_cljs$core$async28023.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async28023");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28023.
 */
cljs.core.async.__GT_t_cljs$core$async28023 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28023(f__$1,ch__$1,meta28024){
return (new cljs.core.async.t_cljs$core$async28023(f__$1,ch__$1,meta28024));
});

}

return (new cljs.core.async.t_cljs$core$async28023(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28031 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28031 = (function (f,ch,meta28032){
this.f = f;
this.ch = ch;
this.meta28032 = meta28032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28033,meta28032__$1){
var self__ = this;
var _28033__$1 = this;
return (new cljs.core.async.t_cljs$core$async28031(self__.f,self__.ch,meta28032__$1));
});

cljs.core.async.t_cljs$core$async28031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28033){
var self__ = this;
var _28033__$1 = this;
return self__.meta28032;
});

cljs.core.async.t_cljs$core$async28031.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28031.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28031.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28031.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28031.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28031.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async28031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28032","meta28032",1748011869,null)], null);
});

cljs.core.async.t_cljs$core$async28031.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28031";

cljs.core.async.t_cljs$core$async28031.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async28031");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28031.
 */
cljs.core.async.__GT_t_cljs$core$async28031 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28031(f__$1,ch__$1,meta28032){
return (new cljs.core.async.t_cljs$core$async28031(f__$1,ch__$1,meta28032));
});

}

return (new cljs.core.async.t_cljs$core$async28031(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28034 = (function (p,ch,meta28035){
this.p = p;
this.ch = ch;
this.meta28035 = meta28035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28036,meta28035__$1){
var self__ = this;
var _28036__$1 = this;
return (new cljs.core.async.t_cljs$core$async28034(self__.p,self__.ch,meta28035__$1));
});

cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28036){
var self__ = this;
var _28036__$1 = this;
return self__.meta28035;
});

cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28035","meta28035",-555848871,null)], null);
});

cljs.core.async.t_cljs$core$async28034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28034";

cljs.core.async.t_cljs$core$async28034.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async28034");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28034.
 */
cljs.core.async.__GT_t_cljs$core$async28034 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28034(p__$1,ch__$1,meta28035){
return (new cljs.core.async.t_cljs$core$async28034(p__$1,ch__$1,meta28035));
});

}

return (new cljs.core.async.t_cljs$core$async28034(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28038 = arguments.length;
switch (G__28038) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26871__auto___29745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___29745,out){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___29745,out){
return (function (state_28059){
var state_val_28060 = (state_28059[(1)]);
if((state_val_28060 === (7))){
var inst_28055 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28061_29746 = state_28059__$1;
(statearr_28061_29746[(2)] = inst_28055);

(statearr_28061_29746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (1))){
var state_28059__$1 = state_28059;
var statearr_28062_29747 = state_28059__$1;
(statearr_28062_29747[(2)] = null);

(statearr_28062_29747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (4))){
var inst_28041 = (state_28059[(7)]);
var inst_28041__$1 = (state_28059[(2)]);
var inst_28042 = (inst_28041__$1 == null);
var state_28059__$1 = (function (){var statearr_28063 = state_28059;
(statearr_28063[(7)] = inst_28041__$1);

return statearr_28063;
})();
if(cljs.core.truth_(inst_28042)){
var statearr_28064_29748 = state_28059__$1;
(statearr_28064_29748[(1)] = (5));

} else {
var statearr_28065_29749 = state_28059__$1;
(statearr_28065_29749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (6))){
var inst_28041 = (state_28059[(7)]);
var inst_28046 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28041) : p.call(null,inst_28041));
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28046)){
var statearr_28066_29754 = state_28059__$1;
(statearr_28066_29754[(1)] = (8));

} else {
var statearr_28067_29755 = state_28059__$1;
(statearr_28067_29755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (3))){
var inst_28057 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28059__$1,inst_28057);
} else {
if((state_val_28060 === (2))){
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28059__$1,(4),ch);
} else {
if((state_val_28060 === (11))){
var inst_28049 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28068_29757 = state_28059__$1;
(statearr_28068_29757[(2)] = inst_28049);

(statearr_28068_29757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (9))){
var state_28059__$1 = state_28059;
var statearr_28069_29758 = state_28059__$1;
(statearr_28069_29758[(2)] = null);

(statearr_28069_29758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (5))){
var inst_28044 = cljs.core.async.close_BANG_(out);
var state_28059__$1 = state_28059;
var statearr_28070_29759 = state_28059__$1;
(statearr_28070_29759[(2)] = inst_28044);

(statearr_28070_29759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (10))){
var inst_28052 = (state_28059[(2)]);
var state_28059__$1 = (function (){var statearr_28071 = state_28059;
(statearr_28071[(8)] = inst_28052);

return statearr_28071;
})();
var statearr_28072_29760 = state_28059__$1;
(statearr_28072_29760[(2)] = null);

(statearr_28072_29760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (8))){
var inst_28041 = (state_28059[(7)]);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28059__$1,(11),out,inst_28041);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___29745,out))
;
return ((function (switch__26770__auto__,c__26871__auto___29745,out){
return (function() {
var cljs$core$async$state_machine__26771__auto__ = null;
var cljs$core$async$state_machine__26771__auto____0 = (function (){
var statearr_28073 = [null,null,null,null,null,null,null,null,null];
(statearr_28073[(0)] = cljs$core$async$state_machine__26771__auto__);

(statearr_28073[(1)] = (1));

return statearr_28073;
});
var cljs$core$async$state_machine__26771__auto____1 = (function (state_28059){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_28059);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e28074){if((e28074 instanceof Object)){
var ex__26774__auto__ = e28074;
var statearr_28075_29765 = state_28059;
(statearr_28075_29765[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29767 = state_28059;
state_28059 = G__29767;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$state_machine__26771__auto__ = function(state_28059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26771__auto____1.call(this,state_28059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26771__auto____0;
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26771__auto____1;
return cljs$core$async$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___29745,out))
})();
var state__26873__auto__ = (function (){var statearr_28076 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_28076[(6)] = c__26871__auto___29745);

return statearr_28076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___29745,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28078 = arguments.length;
switch (G__28078) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26871__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto__){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto__){
return (function (state_28140){
var state_val_28141 = (state_28140[(1)]);
if((state_val_28141 === (7))){
var inst_28136 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
var statearr_28142_29769 = state_28140__$1;
(statearr_28142_29769[(2)] = inst_28136);

(statearr_28142_29769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (20))){
var inst_28106 = (state_28140[(7)]);
var inst_28117 = (state_28140[(2)]);
var inst_28118 = cljs.core.next(inst_28106);
var inst_28092 = inst_28118;
var inst_28093 = null;
var inst_28094 = (0);
var inst_28095 = (0);
var state_28140__$1 = (function (){var statearr_28143 = state_28140;
(statearr_28143[(8)] = inst_28092);

(statearr_28143[(9)] = inst_28094);

(statearr_28143[(10)] = inst_28095);

(statearr_28143[(11)] = inst_28093);

(statearr_28143[(12)] = inst_28117);

return statearr_28143;
})();
var statearr_28144_29770 = state_28140__$1;
(statearr_28144_29770[(2)] = null);

(statearr_28144_29770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (1))){
var state_28140__$1 = state_28140;
var statearr_28145_29772 = state_28140__$1;
(statearr_28145_29772[(2)] = null);

(statearr_28145_29772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (4))){
var inst_28081 = (state_28140[(13)]);
var inst_28081__$1 = (state_28140[(2)]);
var inst_28082 = (inst_28081__$1 == null);
var state_28140__$1 = (function (){var statearr_28146 = state_28140;
(statearr_28146[(13)] = inst_28081__$1);

return statearr_28146;
})();
if(cljs.core.truth_(inst_28082)){
var statearr_28147_29775 = state_28140__$1;
(statearr_28147_29775[(1)] = (5));

} else {
var statearr_28148_29776 = state_28140__$1;
(statearr_28148_29776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (15))){
var state_28140__$1 = state_28140;
var statearr_28152_29781 = state_28140__$1;
(statearr_28152_29781[(2)] = null);

(statearr_28152_29781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (21))){
var state_28140__$1 = state_28140;
var statearr_28153_29786 = state_28140__$1;
(statearr_28153_29786[(2)] = null);

(statearr_28153_29786[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (13))){
var inst_28092 = (state_28140[(8)]);
var inst_28094 = (state_28140[(9)]);
var inst_28095 = (state_28140[(10)]);
var inst_28093 = (state_28140[(11)]);
var inst_28102 = (state_28140[(2)]);
var inst_28103 = (inst_28095 + (1));
var tmp28149 = inst_28092;
var tmp28150 = inst_28094;
var tmp28151 = inst_28093;
var inst_28092__$1 = tmp28149;
var inst_28093__$1 = tmp28151;
var inst_28094__$1 = tmp28150;
var inst_28095__$1 = inst_28103;
var state_28140__$1 = (function (){var statearr_28154 = state_28140;
(statearr_28154[(14)] = inst_28102);

(statearr_28154[(8)] = inst_28092__$1);

(statearr_28154[(9)] = inst_28094__$1);

(statearr_28154[(10)] = inst_28095__$1);

(statearr_28154[(11)] = inst_28093__$1);

return statearr_28154;
})();
var statearr_28155_29802 = state_28140__$1;
(statearr_28155_29802[(2)] = null);

(statearr_28155_29802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (22))){
var state_28140__$1 = state_28140;
var statearr_28156_29809 = state_28140__$1;
(statearr_28156_29809[(2)] = null);

(statearr_28156_29809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (6))){
var inst_28081 = (state_28140[(13)]);
var inst_28090 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28081) : f.call(null,inst_28081));
var inst_28091 = cljs.core.seq(inst_28090);
var inst_28092 = inst_28091;
var inst_28093 = null;
var inst_28094 = (0);
var inst_28095 = (0);
var state_28140__$1 = (function (){var statearr_28157 = state_28140;
(statearr_28157[(8)] = inst_28092);

(statearr_28157[(9)] = inst_28094);

(statearr_28157[(10)] = inst_28095);

(statearr_28157[(11)] = inst_28093);

return statearr_28157;
})();
var statearr_28158_29810 = state_28140__$1;
(statearr_28158_29810[(2)] = null);

(statearr_28158_29810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (17))){
var inst_28106 = (state_28140[(7)]);
var inst_28110 = cljs.core.chunk_first(inst_28106);
var inst_28111 = cljs.core.chunk_rest(inst_28106);
var inst_28112 = cljs.core.count(inst_28110);
var inst_28092 = inst_28111;
var inst_28093 = inst_28110;
var inst_28094 = inst_28112;
var inst_28095 = (0);
var state_28140__$1 = (function (){var statearr_28159 = state_28140;
(statearr_28159[(8)] = inst_28092);

(statearr_28159[(9)] = inst_28094);

(statearr_28159[(10)] = inst_28095);

(statearr_28159[(11)] = inst_28093);

return statearr_28159;
})();
var statearr_28160_29811 = state_28140__$1;
(statearr_28160_29811[(2)] = null);

(statearr_28160_29811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (3))){
var inst_28138 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28140__$1,inst_28138);
} else {
if((state_val_28141 === (12))){
var inst_28126 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
var statearr_28161_29812 = state_28140__$1;
(statearr_28161_29812[(2)] = inst_28126);

(statearr_28161_29812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (2))){
var state_28140__$1 = state_28140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28140__$1,(4),in$);
} else {
if((state_val_28141 === (23))){
var inst_28134 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
var statearr_28162_29813 = state_28140__$1;
(statearr_28162_29813[(2)] = inst_28134);

(statearr_28162_29813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (19))){
var inst_28121 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
var statearr_28163_29814 = state_28140__$1;
(statearr_28163_29814[(2)] = inst_28121);

(statearr_28163_29814[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (11))){
var inst_28092 = (state_28140[(8)]);
var inst_28106 = (state_28140[(7)]);
var inst_28106__$1 = cljs.core.seq(inst_28092);
var state_28140__$1 = (function (){var statearr_28164 = state_28140;
(statearr_28164[(7)] = inst_28106__$1);

return statearr_28164;
})();
if(inst_28106__$1){
var statearr_28165_29815 = state_28140__$1;
(statearr_28165_29815[(1)] = (14));

} else {
var statearr_28166_29816 = state_28140__$1;
(statearr_28166_29816[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (9))){
var inst_28128 = (state_28140[(2)]);
var inst_28129 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_28140__$1 = (function (){var statearr_28167 = state_28140;
(statearr_28167[(15)] = inst_28128);

return statearr_28167;
})();
if(cljs.core.truth_(inst_28129)){
var statearr_28168_29817 = state_28140__$1;
(statearr_28168_29817[(1)] = (21));

} else {
var statearr_28169_29818 = state_28140__$1;
(statearr_28169_29818[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (5))){
var inst_28084 = cljs.core.async.close_BANG_(out);
var state_28140__$1 = state_28140;
var statearr_28170_29819 = state_28140__$1;
(statearr_28170_29819[(2)] = inst_28084);

(statearr_28170_29819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (14))){
var inst_28106 = (state_28140[(7)]);
var inst_28108 = cljs.core.chunked_seq_QMARK_(inst_28106);
var state_28140__$1 = state_28140;
if(inst_28108){
var statearr_28171_29820 = state_28140__$1;
(statearr_28171_29820[(1)] = (17));

} else {
var statearr_28172_29821 = state_28140__$1;
(statearr_28172_29821[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (16))){
var inst_28124 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
var statearr_28173_29822 = state_28140__$1;
(statearr_28173_29822[(2)] = inst_28124);

(statearr_28173_29822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (10))){
var inst_28095 = (state_28140[(10)]);
var inst_28093 = (state_28140[(11)]);
var inst_28100 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28093,inst_28095);
var state_28140__$1 = state_28140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28140__$1,(13),out,inst_28100);
} else {
if((state_val_28141 === (18))){
var inst_28106 = (state_28140[(7)]);
var inst_28115 = cljs.core.first(inst_28106);
var state_28140__$1 = state_28140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28140__$1,(20),out,inst_28115);
} else {
if((state_val_28141 === (8))){
var inst_28094 = (state_28140[(9)]);
var inst_28095 = (state_28140[(10)]);
var inst_28097 = (inst_28095 < inst_28094);
var inst_28098 = inst_28097;
var state_28140__$1 = state_28140;
if(cljs.core.truth_(inst_28098)){
var statearr_28174_29823 = state_28140__$1;
(statearr_28174_29823[(1)] = (10));

} else {
var statearr_28175_29824 = state_28140__$1;
(statearr_28175_29824[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto__))
;
return ((function (switch__26770__auto__,c__26871__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26771__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26771__auto____0 = (function (){
var statearr_28176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28176[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26771__auto__);

(statearr_28176[(1)] = (1));

return statearr_28176;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26771__auto____1 = (function (state_28140){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_28140);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e28177){if((e28177 instanceof Object)){
var ex__26774__auto__ = e28177;
var statearr_28178_29829 = state_28140;
(statearr_28178_29829[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28177;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29830 = state_28140;
state_28140 = G__29830;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26771__auto__ = function(state_28140){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26771__auto____1.call(this,state_28140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26771__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26771__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto__))
})();
var state__26873__auto__ = (function (){var statearr_28179 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_28179[(6)] = c__26871__auto__);

return statearr_28179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto__))
);

return c__26871__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28181 = arguments.length;
switch (G__28181) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28183 = arguments.length;
switch (G__28183) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28185 = arguments.length;
switch (G__28185) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26871__auto___29865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___29865,out){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___29865,out){
return (function (state_28209){
var state_val_28210 = (state_28209[(1)]);
if((state_val_28210 === (7))){
var inst_28204 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28211_29866 = state_28209__$1;
(statearr_28211_29866[(2)] = inst_28204);

(statearr_28211_29866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (1))){
var inst_28186 = null;
var state_28209__$1 = (function (){var statearr_28212 = state_28209;
(statearr_28212[(7)] = inst_28186);

return statearr_28212;
})();
var statearr_28213_29867 = state_28209__$1;
(statearr_28213_29867[(2)] = null);

(statearr_28213_29867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (4))){
var inst_28189 = (state_28209[(8)]);
var inst_28189__$1 = (state_28209[(2)]);
var inst_28190 = (inst_28189__$1 == null);
var inst_28191 = cljs.core.not(inst_28190);
var state_28209__$1 = (function (){var statearr_28214 = state_28209;
(statearr_28214[(8)] = inst_28189__$1);

return statearr_28214;
})();
if(inst_28191){
var statearr_28215_29869 = state_28209__$1;
(statearr_28215_29869[(1)] = (5));

} else {
var statearr_28216_29870 = state_28209__$1;
(statearr_28216_29870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (6))){
var state_28209__$1 = state_28209;
var statearr_28217_29871 = state_28209__$1;
(statearr_28217_29871[(2)] = null);

(statearr_28217_29871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (3))){
var inst_28206 = (state_28209[(2)]);
var inst_28207 = cljs.core.async.close_BANG_(out);
var state_28209__$1 = (function (){var statearr_28218 = state_28209;
(statearr_28218[(9)] = inst_28206);

return statearr_28218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28209__$1,inst_28207);
} else {
if((state_val_28210 === (2))){
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28209__$1,(4),ch);
} else {
if((state_val_28210 === (11))){
var inst_28189 = (state_28209[(8)]);
var inst_28198 = (state_28209[(2)]);
var inst_28186 = inst_28189;
var state_28209__$1 = (function (){var statearr_28219 = state_28209;
(statearr_28219[(7)] = inst_28186);

(statearr_28219[(10)] = inst_28198);

return statearr_28219;
})();
var statearr_28220_29872 = state_28209__$1;
(statearr_28220_29872[(2)] = null);

(statearr_28220_29872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (9))){
var inst_28189 = (state_28209[(8)]);
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28209__$1,(11),out,inst_28189);
} else {
if((state_val_28210 === (5))){
var inst_28189 = (state_28209[(8)]);
var inst_28186 = (state_28209[(7)]);
var inst_28193 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28189,inst_28186);
var state_28209__$1 = state_28209;
if(inst_28193){
var statearr_28222_29873 = state_28209__$1;
(statearr_28222_29873[(1)] = (8));

} else {
var statearr_28223_29874 = state_28209__$1;
(statearr_28223_29874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (10))){
var inst_28201 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28224_29879 = state_28209__$1;
(statearr_28224_29879[(2)] = inst_28201);

(statearr_28224_29879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (8))){
var inst_28186 = (state_28209[(7)]);
var tmp28221 = inst_28186;
var inst_28186__$1 = tmp28221;
var state_28209__$1 = (function (){var statearr_28225 = state_28209;
(statearr_28225[(7)] = inst_28186__$1);

return statearr_28225;
})();
var statearr_28226_29880 = state_28209__$1;
(statearr_28226_29880[(2)] = null);

(statearr_28226_29880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___29865,out))
;
return ((function (switch__26770__auto__,c__26871__auto___29865,out){
return (function() {
var cljs$core$async$state_machine__26771__auto__ = null;
var cljs$core$async$state_machine__26771__auto____0 = (function (){
var statearr_28227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28227[(0)] = cljs$core$async$state_machine__26771__auto__);

(statearr_28227[(1)] = (1));

return statearr_28227;
});
var cljs$core$async$state_machine__26771__auto____1 = (function (state_28209){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_28209);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e28228){if((e28228 instanceof Object)){
var ex__26774__auto__ = e28228;
var statearr_28229_29881 = state_28209;
(statearr_28229_29881[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28228;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29882 = state_28209;
state_28209 = G__29882;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$state_machine__26771__auto__ = function(state_28209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26771__auto____1.call(this,state_28209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26771__auto____0;
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26771__auto____1;
return cljs$core$async$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___29865,out))
})();
var state__26873__auto__ = (function (){var statearr_28230 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_28230[(6)] = c__26871__auto___29865);

return statearr_28230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___29865,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28232 = arguments.length;
switch (G__28232) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26871__auto___29884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___29884,out){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___29884,out){
return (function (state_28270){
var state_val_28271 = (state_28270[(1)]);
if((state_val_28271 === (7))){
var inst_28266 = (state_28270[(2)]);
var state_28270__$1 = state_28270;
var statearr_28272_29885 = state_28270__$1;
(statearr_28272_29885[(2)] = inst_28266);

(statearr_28272_29885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (1))){
var inst_28233 = (new Array(n));
var inst_28234 = inst_28233;
var inst_28235 = (0);
var state_28270__$1 = (function (){var statearr_28273 = state_28270;
(statearr_28273[(7)] = inst_28234);

(statearr_28273[(8)] = inst_28235);

return statearr_28273;
})();
var statearr_28274_29886 = state_28270__$1;
(statearr_28274_29886[(2)] = null);

(statearr_28274_29886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (4))){
var inst_28238 = (state_28270[(9)]);
var inst_28238__$1 = (state_28270[(2)]);
var inst_28239 = (inst_28238__$1 == null);
var inst_28240 = cljs.core.not(inst_28239);
var state_28270__$1 = (function (){var statearr_28275 = state_28270;
(statearr_28275[(9)] = inst_28238__$1);

return statearr_28275;
})();
if(inst_28240){
var statearr_28276_29887 = state_28270__$1;
(statearr_28276_29887[(1)] = (5));

} else {
var statearr_28277_29888 = state_28270__$1;
(statearr_28277_29888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (15))){
var inst_28260 = (state_28270[(2)]);
var state_28270__$1 = state_28270;
var statearr_28278_29889 = state_28270__$1;
(statearr_28278_29889[(2)] = inst_28260);

(statearr_28278_29889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (13))){
var state_28270__$1 = state_28270;
var statearr_28279_29890 = state_28270__$1;
(statearr_28279_29890[(2)] = null);

(statearr_28279_29890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (6))){
var inst_28235 = (state_28270[(8)]);
var inst_28256 = (inst_28235 > (0));
var state_28270__$1 = state_28270;
if(cljs.core.truth_(inst_28256)){
var statearr_28280_29894 = state_28270__$1;
(statearr_28280_29894[(1)] = (12));

} else {
var statearr_28281_29895 = state_28270__$1;
(statearr_28281_29895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (3))){
var inst_28268 = (state_28270[(2)]);
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28270__$1,inst_28268);
} else {
if((state_val_28271 === (12))){
var inst_28234 = (state_28270[(7)]);
var inst_28258 = cljs.core.vec(inst_28234);
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28270__$1,(15),out,inst_28258);
} else {
if((state_val_28271 === (2))){
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28270__$1,(4),ch);
} else {
if((state_val_28271 === (11))){
var inst_28250 = (state_28270[(2)]);
var inst_28251 = (new Array(n));
var inst_28234 = inst_28251;
var inst_28235 = (0);
var state_28270__$1 = (function (){var statearr_28282 = state_28270;
(statearr_28282[(7)] = inst_28234);

(statearr_28282[(10)] = inst_28250);

(statearr_28282[(8)] = inst_28235);

return statearr_28282;
})();
var statearr_28283_29896 = state_28270__$1;
(statearr_28283_29896[(2)] = null);

(statearr_28283_29896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (9))){
var inst_28234 = (state_28270[(7)]);
var inst_28248 = cljs.core.vec(inst_28234);
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28270__$1,(11),out,inst_28248);
} else {
if((state_val_28271 === (5))){
var inst_28238 = (state_28270[(9)]);
var inst_28234 = (state_28270[(7)]);
var inst_28243 = (state_28270[(11)]);
var inst_28235 = (state_28270[(8)]);
var inst_28242 = (inst_28234[inst_28235] = inst_28238);
var inst_28243__$1 = (inst_28235 + (1));
var inst_28244 = (inst_28243__$1 < n);
var state_28270__$1 = (function (){var statearr_28284 = state_28270;
(statearr_28284[(11)] = inst_28243__$1);

(statearr_28284[(12)] = inst_28242);

return statearr_28284;
})();
if(cljs.core.truth_(inst_28244)){
var statearr_28285_29923 = state_28270__$1;
(statearr_28285_29923[(1)] = (8));

} else {
var statearr_28286_29924 = state_28270__$1;
(statearr_28286_29924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (14))){
var inst_28263 = (state_28270[(2)]);
var inst_28264 = cljs.core.async.close_BANG_(out);
var state_28270__$1 = (function (){var statearr_28288 = state_28270;
(statearr_28288[(13)] = inst_28263);

return statearr_28288;
})();
var statearr_28289_29925 = state_28270__$1;
(statearr_28289_29925[(2)] = inst_28264);

(statearr_28289_29925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (10))){
var inst_28254 = (state_28270[(2)]);
var state_28270__$1 = state_28270;
var statearr_28290_29933 = state_28270__$1;
(statearr_28290_29933[(2)] = inst_28254);

(statearr_28290_29933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28271 === (8))){
var inst_28234 = (state_28270[(7)]);
var inst_28243 = (state_28270[(11)]);
var tmp28287 = inst_28234;
var inst_28234__$1 = tmp28287;
var inst_28235 = inst_28243;
var state_28270__$1 = (function (){var statearr_28291 = state_28270;
(statearr_28291[(7)] = inst_28234__$1);

(statearr_28291[(8)] = inst_28235);

return statearr_28291;
})();
var statearr_28292_29942 = state_28270__$1;
(statearr_28292_29942[(2)] = null);

(statearr_28292_29942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___29884,out))
;
return ((function (switch__26770__auto__,c__26871__auto___29884,out){
return (function() {
var cljs$core$async$state_machine__26771__auto__ = null;
var cljs$core$async$state_machine__26771__auto____0 = (function (){
var statearr_28293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28293[(0)] = cljs$core$async$state_machine__26771__auto__);

(statearr_28293[(1)] = (1));

return statearr_28293;
});
var cljs$core$async$state_machine__26771__auto____1 = (function (state_28270){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_28270);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e28294){if((e28294 instanceof Object)){
var ex__26774__auto__ = e28294;
var statearr_28295_29951 = state_28270;
(statearr_28295_29951[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29952 = state_28270;
state_28270 = G__29952;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$state_machine__26771__auto__ = function(state_28270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26771__auto____1.call(this,state_28270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26771__auto____0;
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26771__auto____1;
return cljs$core$async$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___29884,out))
})();
var state__26873__auto__ = (function (){var statearr_28296 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_28296[(6)] = c__26871__auto___29884);

return statearr_28296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___29884,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28298 = arguments.length;
switch (G__28298) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26871__auto___29955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___29955,out){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___29955,out){
return (function (state_28340){
var state_val_28341 = (state_28340[(1)]);
if((state_val_28341 === (7))){
var inst_28336 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
var statearr_28342_29956 = state_28340__$1;
(statearr_28342_29956[(2)] = inst_28336);

(statearr_28342_29956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (1))){
var inst_28299 = [];
var inst_28300 = inst_28299;
var inst_28301 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28340__$1 = (function (){var statearr_28343 = state_28340;
(statearr_28343[(7)] = inst_28300);

(statearr_28343[(8)] = inst_28301);

return statearr_28343;
})();
var statearr_28344_29957 = state_28340__$1;
(statearr_28344_29957[(2)] = null);

(statearr_28344_29957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (4))){
var inst_28304 = (state_28340[(9)]);
var inst_28304__$1 = (state_28340[(2)]);
var inst_28305 = (inst_28304__$1 == null);
var inst_28306 = cljs.core.not(inst_28305);
var state_28340__$1 = (function (){var statearr_28345 = state_28340;
(statearr_28345[(9)] = inst_28304__$1);

return statearr_28345;
})();
if(inst_28306){
var statearr_28346_29958 = state_28340__$1;
(statearr_28346_29958[(1)] = (5));

} else {
var statearr_28347_29959 = state_28340__$1;
(statearr_28347_29959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (15))){
var inst_28330 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
var statearr_28348_29960 = state_28340__$1;
(statearr_28348_29960[(2)] = inst_28330);

(statearr_28348_29960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (13))){
var state_28340__$1 = state_28340;
var statearr_28349_29961 = state_28340__$1;
(statearr_28349_29961[(2)] = null);

(statearr_28349_29961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (6))){
var inst_28300 = (state_28340[(7)]);
var inst_28325 = inst_28300.length;
var inst_28326 = (inst_28325 > (0));
var state_28340__$1 = state_28340;
if(cljs.core.truth_(inst_28326)){
var statearr_28350_29976 = state_28340__$1;
(statearr_28350_29976[(1)] = (12));

} else {
var statearr_28351_29977 = state_28340__$1;
(statearr_28351_29977[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (3))){
var inst_28338 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28340__$1,inst_28338);
} else {
if((state_val_28341 === (12))){
var inst_28300 = (state_28340[(7)]);
var inst_28328 = cljs.core.vec(inst_28300);
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28340__$1,(15),out,inst_28328);
} else {
if((state_val_28341 === (2))){
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28340__$1,(4),ch);
} else {
if((state_val_28341 === (11))){
var inst_28304 = (state_28340[(9)]);
var inst_28308 = (state_28340[(10)]);
var inst_28318 = (state_28340[(2)]);
var inst_28319 = [];
var inst_28320 = inst_28319.push(inst_28304);
var inst_28300 = inst_28319;
var inst_28301 = inst_28308;
var state_28340__$1 = (function (){var statearr_28352 = state_28340;
(statearr_28352[(11)] = inst_28318);

(statearr_28352[(7)] = inst_28300);

(statearr_28352[(12)] = inst_28320);

(statearr_28352[(8)] = inst_28301);

return statearr_28352;
})();
var statearr_28353_29978 = state_28340__$1;
(statearr_28353_29978[(2)] = null);

(statearr_28353_29978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (9))){
var inst_28300 = (state_28340[(7)]);
var inst_28316 = cljs.core.vec(inst_28300);
var state_28340__$1 = state_28340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28340__$1,(11),out,inst_28316);
} else {
if((state_val_28341 === (5))){
var inst_28304 = (state_28340[(9)]);
var inst_28301 = (state_28340[(8)]);
var inst_28308 = (state_28340[(10)]);
var inst_28308__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28304) : f.call(null,inst_28304));
var inst_28309 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28308__$1,inst_28301);
var inst_28310 = cljs.core.keyword_identical_QMARK_(inst_28301,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28311 = ((inst_28309) || (inst_28310));
var state_28340__$1 = (function (){var statearr_28354 = state_28340;
(statearr_28354[(10)] = inst_28308__$1);

return statearr_28354;
})();
if(cljs.core.truth_(inst_28311)){
var statearr_28355_29979 = state_28340__$1;
(statearr_28355_29979[(1)] = (8));

} else {
var statearr_28356_29980 = state_28340__$1;
(statearr_28356_29980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (14))){
var inst_28333 = (state_28340[(2)]);
var inst_28334 = cljs.core.async.close_BANG_(out);
var state_28340__$1 = (function (){var statearr_28358 = state_28340;
(statearr_28358[(13)] = inst_28333);

return statearr_28358;
})();
var statearr_28359_29982 = state_28340__$1;
(statearr_28359_29982[(2)] = inst_28334);

(statearr_28359_29982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (10))){
var inst_28323 = (state_28340[(2)]);
var state_28340__$1 = state_28340;
var statearr_28360_29983 = state_28340__$1;
(statearr_28360_29983[(2)] = inst_28323);

(statearr_28360_29983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28341 === (8))){
var inst_28304 = (state_28340[(9)]);
var inst_28300 = (state_28340[(7)]);
var inst_28308 = (state_28340[(10)]);
var inst_28313 = inst_28300.push(inst_28304);
var tmp28357 = inst_28300;
var inst_28300__$1 = tmp28357;
var inst_28301 = inst_28308;
var state_28340__$1 = (function (){var statearr_28361 = state_28340;
(statearr_28361[(7)] = inst_28300__$1);

(statearr_28361[(8)] = inst_28301);

(statearr_28361[(14)] = inst_28313);

return statearr_28361;
})();
var statearr_28362_29998 = state_28340__$1;
(statearr_28362_29998[(2)] = null);

(statearr_28362_29998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26871__auto___29955,out))
;
return ((function (switch__26770__auto__,c__26871__auto___29955,out){
return (function() {
var cljs$core$async$state_machine__26771__auto__ = null;
var cljs$core$async$state_machine__26771__auto____0 = (function (){
var statearr_28363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28363[(0)] = cljs$core$async$state_machine__26771__auto__);

(statearr_28363[(1)] = (1));

return statearr_28363;
});
var cljs$core$async$state_machine__26771__auto____1 = (function (state_28340){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_28340);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e28364){if((e28364 instanceof Object)){
var ex__26774__auto__ = e28364;
var statearr_28365_30012 = state_28340;
(statearr_28365_30012[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30013 = state_28340;
state_28340 = G__30013;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
cljs$core$async$state_machine__26771__auto__ = function(state_28340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26771__auto____1.call(this,state_28340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26771__auto____0;
cljs$core$async$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26771__auto____1;
return cljs$core$async$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___29955,out))
})();
var state__26873__auto__ = (function (){var statearr_28366 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_28366[(6)] = c__26871__auto___29955);

return statearr_28366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___29955,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
