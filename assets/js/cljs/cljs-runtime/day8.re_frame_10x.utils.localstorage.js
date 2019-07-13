goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__23907 = arguments.length;
switch (G__23907) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__23920 = cljs.core.seq(Object.keys(localStorage));
var chunk__23921 = null;
var count__23922 = (0);
var i__23923 = (0);
while(true){
if((i__23923 < count__23922)){
var k = chunk__23921.cljs$core$IIndexed$_nth$arity$2(null,i__23923);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__23926 = seq__23920;
var G__23927 = chunk__23921;
var G__23928 = count__23922;
var G__23929 = (i__23923 + (1));
seq__23920 = G__23926;
chunk__23921 = G__23927;
count__23922 = G__23928;
i__23923 = G__23929;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23920);
if(temp__5457__auto__){
var seq__23920__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23920__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__23920__$1);
var G__23930 = cljs.core.chunk_rest(seq__23920__$1);
var G__23931 = c__4461__auto__;
var G__23932 = cljs.core.count(c__4461__auto__);
var G__23933 = (0);
seq__23920 = G__23930;
chunk__23921 = G__23931;
count__23922 = G__23932;
i__23923 = G__23933;
continue;
} else {
var k = cljs.core.first(seq__23920__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__23942 = cljs.core.next(seq__23920__$1);
var G__23943 = null;
var G__23944 = (0);
var G__23945 = (0);
seq__23920 = G__23942;
chunk__23921 = G__23943;
count__23922 = G__23944;
i__23923 = G__23945;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
