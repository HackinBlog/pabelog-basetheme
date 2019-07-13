goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$core$css(var_args){
var args__4647__auto__ = [];
var len__4641__auto___17999 = arguments.length;
var i__4642__auto___18000 = (0);
while(true){
if((i__4642__auto___18000 < len__4641__auto___17999)){
args__4647__auto__.push((arguments[i__4642__auto___18000]));

var G__18001 = (i__4642__auto___18000 + (1));
i__4642__auto___18000 = G__18001;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css,rules);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq17997){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17997));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$core$style(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18002 = arguments.length;
var i__4642__auto___18003 = (0);
while(true){
if((i__4642__auto___18003 < len__4641__auto___18002)){
args__4647__auto__.push((arguments[i__4642__auto___18003]));

var G__18004 = (i__4642__auto___18003 + (1));
i__4642__auto___18003 = G__18004;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_style(maps);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq17998){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17998));
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.js.map
