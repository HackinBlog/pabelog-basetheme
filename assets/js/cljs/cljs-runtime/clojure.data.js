goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__12237){
var vec__12238 = p__12237;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12238,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__12244 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12244,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12244,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12244,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__12251 = arguments.length;
switch (G__12251) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4135__auto__ = cljs.core.count(a);
var y__4136__auto__ = cljs.core.count(b);
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4347__auto__ = (((x == null))?null:x);
var m__4348__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto__.call(null,x));
} else {
var m__4348__auto____$1 = (clojure.data.equality_partition["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4347__auto__ = (((a == null))?null:a);
var m__4348__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto__.call(null,a,b));
} else {
var m__4348__auto____$1 = (clojure.data.diff_similar["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__12261_12353 = clojure.data.equality_partition;
var G__12262_12354 = "null";
var G__12263_12355 = ((function (G__12261_12353,G__12262_12354){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__12261_12353,G__12262_12354))
;
goog.object.set(G__12261_12353,G__12262_12354,G__12263_12355);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__12264_12357 = clojure.data.equality_partition;
var G__12265_12358 = "string";
var G__12266_12359 = ((function (G__12264_12357,G__12265_12358){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__12264_12357,G__12265_12358))
;
goog.object.set(G__12264_12357,G__12265_12358,G__12266_12359);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__12271_12360 = clojure.data.equality_partition;
var G__12272_12361 = "number";
var G__12273_12362 = ((function (G__12271_12360,G__12272_12361){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__12271_12360,G__12272_12361))
;
goog.object.set(G__12271_12360,G__12272_12361,G__12273_12362);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__12274_12366 = clojure.data.equality_partition;
var G__12275_12367 = "array";
var G__12276_12368 = ((function (G__12274_12366,G__12275_12367){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__12274_12366,G__12275_12367))
;
goog.object.set(G__12274_12366,G__12275_12367,G__12276_12368);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__12278_12370 = clojure.data.equality_partition;
var G__12279_12371 = "function";
var G__12280_12372 = ((function (G__12278_12370,G__12279_12371){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__12278_12370,G__12279_12371))
;
goog.object.set(G__12278_12370,G__12279_12371,G__12280_12372);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__12289_12373 = clojure.data.equality_partition;
var G__12290_12374 = "boolean";
var G__12291_12375 = ((function (G__12289_12373,G__12290_12374){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__12289_12373,G__12290_12374))
;
goog.object.set(G__12289_12373,G__12290_12374,G__12291_12375);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__12292_12377 = clojure.data.equality_partition;
var G__12293_12378 = "_";
var G__12294_12379 = ((function (G__12292_12377,G__12293_12378){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__12292_12377,G__12293_12378))
;
goog.object.set(G__12292_12377,G__12293_12378,G__12294_12379);
goog.object.set(clojure.data.Diff,"null",true);

var G__12299_12383 = clojure.data.diff_similar;
var G__12300_12384 = "null";
var G__12301_12385 = ((function (G__12299_12383,G__12300_12384){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12299_12383,G__12300_12384))
;
goog.object.set(G__12299_12383,G__12300_12384,G__12301_12385);

goog.object.set(clojure.data.Diff,"string",true);

var G__12302_12386 = clojure.data.diff_similar;
var G__12303_12387 = "string";
var G__12304_12388 = ((function (G__12302_12386,G__12303_12387){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12302_12386,G__12303_12387))
;
goog.object.set(G__12302_12386,G__12303_12387,G__12304_12388);

goog.object.set(clojure.data.Diff,"number",true);

var G__12305_12390 = clojure.data.diff_similar;
var G__12306_12391 = "number";
var G__12307_12392 = ((function (G__12305_12390,G__12306_12391){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12305_12390,G__12306_12391))
;
goog.object.set(G__12305_12390,G__12306_12391,G__12307_12392);

goog.object.set(clojure.data.Diff,"array",true);

var G__12308_12393 = clojure.data.diff_similar;
var G__12309_12394 = "array";
var G__12310_12395 = ((function (G__12308_12393,G__12309_12394){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__12308_12393,G__12309_12394))
;
goog.object.set(G__12308_12393,G__12309_12394,G__12310_12395);

goog.object.set(clojure.data.Diff,"function",true);

var G__12311_12396 = clojure.data.diff_similar;
var G__12312_12397 = "function";
var G__12313_12398 = ((function (G__12311_12396,G__12312_12397){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12311_12396,G__12312_12397))
;
goog.object.set(G__12311_12396,G__12312_12397,G__12313_12398);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__12314_12403 = clojure.data.diff_similar;
var G__12315_12404 = "boolean";
var G__12316_12405 = ((function (G__12314_12403,G__12315_12404){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12314_12403,G__12315_12404))
;
goog.object.set(G__12314_12403,G__12315_12404,G__12316_12405);

goog.object.set(clojure.data.Diff,"_",true);

var G__12317_12406 = clojure.data.diff_similar;
var G__12318_12407 = "_";
var G__12319_12408 = ((function (G__12317_12406,G__12318_12407){
return (function (a,b){
var fexpr__12321 = (function (){var G__12322 = clojure.data.equality_partition(a);
var G__12322__$1 = (((G__12322 instanceof cljs.core.Keyword))?G__12322.fqn:null);
switch (G__12322__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12322__$1)].join('')));

}
})();
return (fexpr__12321.cljs$core$IFn$_invoke$arity$2 ? fexpr__12321.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__12321.call(null,a,b));
});})(G__12317_12406,G__12318_12407))
;
goog.object.set(G__12317_12406,G__12318_12407,G__12319_12408);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
