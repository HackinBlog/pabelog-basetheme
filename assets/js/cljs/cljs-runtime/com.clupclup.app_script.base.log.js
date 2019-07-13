goog.provide('com.clupclup.app_script.base.log');
goog.require('cljs.core');
com.clupclup.app_script.base.log.log = (function com$clupclup$app_script$base$log$log(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30460 = arguments.length;
var i__4642__auto___30461 = (0);
while(true){
if((i__4642__auto___30461 < len__4641__auto___30460)){
args__4647__auto__.push((arguments[i__4642__auto___30461]));

var G__30462 = (i__4642__auto___30461 + (1));
i__4642__auto___30461 = G__30462;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return com.clupclup.app_script.base.log.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

com.clupclup.app_script.base.log.log.cljs$core$IFn$_invoke$arity$variadic = (function (messages){
if(cljs.core.truth_(goog.DEBUG)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console,messages);
} else {
return null;
}
});

com.clupclup.app_script.base.log.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.clupclup.app_script.base.log.log.cljs$lang$applyTo = (function (seq30459){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30459));
});


//# sourceMappingURL=com.clupclup.app_script.base.log.js.map
