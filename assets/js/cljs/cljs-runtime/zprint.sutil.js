goog.provide('zprint.sutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('cljs.reader');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sexpr], 0));
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zloc], 0));
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_(sexpr)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(sexpr));
} else {
return cljs.core.seq(sexpr);
}
});
/**
 * Map a function of all of the elements to ther right
 *   of this.
 */
zprint.sutil.smap_right = (function zprint$sutil$smap_right(zfn,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,cljs.core.next(sexpr));
} else {
return null;
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.nthnext(sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_((function (){var G__21846 = cljs.core.first(sloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21846) : zthing_QMARK_.call(null,G__21846));
})())){
return i;
} else {
var G__22006 = cljs.core.next(sloc);
var G__22007 = (i + (1));
sloc = G__22006;
i = G__22007;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.count(sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_(sexpr))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_(sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first(sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second(sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_(sexpr)) || (cljs.core.seq_QMARK_(sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.last(sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_(x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return null;
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref(x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns(x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__21858 = arguments.length;
switch (G__21858) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),val], null);
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj_term,(2)))], null);
});

zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2;

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string') || (typeof x === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__21870 = cljs.core.first(pair_seq__$1);
var seq__21871 = cljs.core.seq(vec__21870);
var first__21872 = cljs.core.first(seq__21871);
var seq__21871__$1 = cljs.core.next(seq__21871);
var k = first__21872;
var rest_of_pair = seq__21871__$1;
var pair = vec__21870;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace(k):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,current_ns)){
var G__22024 = ns;
var G__22025 = cljs.core.next(pair_seq__$1);
var G__22026 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns = G__22024;
pair_seq__$1 = G__22025;
out = G__22026;
continue;
} else {
return null;
}
} else {
var G__22027 = current_ns;
var G__22028 = cljs.core.next(pair_seq__$1);
var G__22029 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns = G__22027;
pair_seq__$1 = G__22028;
out = G__22029;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__22030 = ns;
var G__22031 = cljs.core.next(pair_seq__$1);
var G__22032 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns = G__22030;
pair_seq__$1 = G__22031;
out = G__22032;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__21877 = zprint.zfns.zstring;
var znumstr_orig_val__21878 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__21879 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__21880 = zprint.zfns.zsexpr;
var zseqnws_orig_val__21881 = zprint.zfns.zseqnws;
var zmap_right_orig_val__21882 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__21883 = zprint.zfns.zfocus_style;
var zfirst_orig_val__21884 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__21885 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__21886 = zprint.zfns.zsecond;
var zthird_orig_val__21887 = zprint.zfns.zthird;
var zfourth_orig_val__21888 = zprint.zfns.zfourth;
var znthnext_orig_val__21889 = zprint.zfns.znthnext;
var zcount_orig_val__21890 = zprint.zfns.zcount;
var zmap_orig_val__21891 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__21892 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__21893 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__21894 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__21895 = zprint.zfns.zfocus;
var zfind_path_orig_val__21896 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__21897 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__21898 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__21899 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__21900 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__21901 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__21902 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__21903 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__21904 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__21905 = zprint.zfns.ztag;
var zlast_orig_val__21906 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__21907 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__21908 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__21909 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__21910 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__21911 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__21912 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__21913 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__21914 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__21915 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__21916 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__21917 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__21918 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__21919 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__21920 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__21921 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__21922 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__21923 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__21924 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__21925 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__21926 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__21927 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__21928 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__21929 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__21930 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__21931 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__21932 = zprint.zfns.zfind;
var ztake_append_orig_val__21933 = zprint.zfns.ztake_append;
var zstring_temp_val__21934 = zprint.sutil.sstring;
var znumstr_temp_val__21935 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__21936 = cljs.core.constantly(false);
var zsexpr_temp_val__21937 = cljs.core.identity;
var zseqnws_temp_val__21938 = zprint.sutil.sseqnws;
var zmap_right_temp_val__21939 = zprint.sutil.smap_right;
var zfocus_style_temp_val__21940 = zprint.sutil.sfocus_style;
var zfirst_temp_val__21941 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__21942 = zprint.sutil.sfirst;
var zsecond_temp_val__21943 = zprint.sutil.ssecond;
var zthird_temp_val__21944 = zprint.sutil.sthird;
var zfourth_temp_val__21945 = zprint.sutil.sfourth;
var znthnext_temp_val__21946 = zprint.sutil.snthnext;
var zcount_temp_val__21947 = zprint.sutil.scount;
var zmap_temp_val__21948 = zprint.sutil.smap;
var zmap_w_nl_temp_val__21949 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__21950 = cljs.core.constantly(false);
var zfn_obj_QMARK__temp_val__21951 = cljs.core.fn_QMARK_;
var zfocus_temp_val__21952 = zprint.sutil.sfocus;
var zfind_path_temp_val__21953 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__21954 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__21955 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__21956 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__21957 = cljs.core.map_QMARK_;
var zset_QMARK__temp_val__21958 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__21959 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__21960 = cljs.core.constantly(false);
var zuneval_QMARK__temp_val__21961 = cljs.core.constantly(false);
var ztag_temp_val__21962 = cljs.core.constantly(null);
var zlast_temp_val__21963 = zprint.sutil.slast;
var zarray_QMARK__temp_val__21964 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__21965 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__21966 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__21967 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__21968 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__21969 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__21970 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__21971 = cljs.core.constantly(false);
var zwhitespaceorcomment_QMARK__temp_val__21972 = cljs.core.constantly(false);
var zmap_all_temp_val__21973 = cljs.core.map;
var zfuture_QMARK__temp_val__21974 = cljs.core.constantly(false);
var zpromise_QMARK__temp_val__21975 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__21976 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__21977 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__21978 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__21979 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__21980 = cljs.core.constantly(false);
var zarray_to_shift_seq_temp_val__21981 = null;
var zdotdotdot_temp_val__21982 = cljs.core.constantly(new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__21983 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__21984 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__21985 = cljs.core.constantly(false);
var zreader_cond_w_coll_QMARK__temp_val__21986 = cljs.core.constantly(false);
var zlift_ns_temp_val__21987 = zprint.sutil.slift_ns;
var zinlinecomment_QMARK__temp_val__21988 = cljs.core.constantly(false);
var zfind_temp_val__21989 = zprint.sutil.sfind;
var ztake_append_temp_val__21990 = zprint.sutil.stake_append;
zprint.zfns.zstring = zstring_temp_val__21934;

zprint.zfns.znumstr = znumstr_temp_val__21935;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__21936;

zprint.zfns.zsexpr = zsexpr_temp_val__21937;

zprint.zfns.zseqnws = zseqnws_temp_val__21938;

zprint.zfns.zmap_right = zmap_right_temp_val__21939;

zprint.zfns.zfocus_style = zfocus_style_temp_val__21940;

zprint.zfns.zfirst = zfirst_temp_val__21941;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__21942;

zprint.zfns.zsecond = zsecond_temp_val__21943;

zprint.zfns.zthird = zthird_temp_val__21944;

zprint.zfns.zfourth = zfourth_temp_val__21945;

zprint.zfns.znthnext = znthnext_temp_val__21946;

zprint.zfns.zcount = zcount_temp_val__21947;

zprint.zfns.zmap = zmap_temp_val__21948;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__21949;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__21950;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__21951;

zprint.zfns.zfocus = zfocus_temp_val__21952;

zprint.zfns.zfind_path = zfind_path_temp_val__21953;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__21954;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__21955;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__21956;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__21957;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__21958;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__21959;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__21960;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__21961;

zprint.zfns.ztag = ztag_temp_val__21962;

zprint.zfns.zlast = zlast_temp_val__21963;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__21964;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__21965;

zprint.zfns.zderef = zderef_temp_val__21966;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__21967;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__21968;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__21969;

zprint.zfns.zexpandarray = zexpandarray_temp_val__21970;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__21971;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__21972;

zprint.zfns.zmap_all = zmap_all_temp_val__21973;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__21974;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__21975;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__21976;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__21977;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__21978;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__21979;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__21980;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__21981;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__21982;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__21983;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__21984;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__21985;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__21986;

zprint.zfns.zlift_ns = zlift_ns_temp_val__21987;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__21988;

zprint.zfns.zfind = zfind_temp_val__21989;

zprint.zfns.ztake_append = ztake_append_temp_val__21990;

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__21933;

zprint.zfns.zfind = zfind_orig_val__21932;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__21931;

zprint.zfns.zlift_ns = zlift_ns_orig_val__21930;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__21929;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__21928;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__21927;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__21926;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__21925;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__21924;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__21923;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__21922;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__21921;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__21920;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__21919;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__21918;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__21917;

zprint.zfns.zmap_all = zmap_all_orig_val__21916;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__21915;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__21914;

zprint.zfns.zexpandarray = zexpandarray_orig_val__21913;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__21912;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__21911;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__21910;

zprint.zfns.zderef = zderef_orig_val__21909;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__21908;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__21907;

zprint.zfns.zlast = zlast_orig_val__21906;

zprint.zfns.ztag = ztag_orig_val__21905;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__21904;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__21903;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__21902;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__21901;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__21900;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__21899;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__21898;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__21897;

zprint.zfns.zfind_path = zfind_path_orig_val__21896;

zprint.zfns.zfocus = zfocus_orig_val__21895;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__21894;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__21893;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__21892;

zprint.zfns.zmap = zmap_orig_val__21891;

zprint.zfns.zcount = zcount_orig_val__21890;

zprint.zfns.znthnext = znthnext_orig_val__21889;

zprint.zfns.zfourth = zfourth_orig_val__21888;

zprint.zfns.zthird = zthird_orig_val__21887;

zprint.zfns.zsecond = zsecond_orig_val__21886;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__21885;

zprint.zfns.zfirst = zfirst_orig_val__21884;

zprint.zfns.zfocus_style = zfocus_style_orig_val__21883;

zprint.zfns.zmap_right = zmap_right_orig_val__21882;

zprint.zfns.zseqnws = zseqnws_orig_val__21881;

zprint.zfns.zsexpr = zsexpr_orig_val__21880;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__21879;

zprint.zfns.znumstr = znumstr_orig_val__21878;

zprint.zfns.zstring = zstring_orig_val__21877;
}});

//# sourceMappingURL=zprint.sutil.js.map