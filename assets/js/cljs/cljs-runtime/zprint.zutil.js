goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.skip_whitespace = rewrite_clj.zip.whitespace.skip_whitespace;
zprint.zutil.whitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
zprint.zutil.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
zprint.zutil.zremove = rewrite_clj.zip.removez.remove;
zprint.zutil.zreplace = rewrite_clj.zip.editz.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__21296 = (zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.find_root_and_path.call(null,zloc));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21296,(0),null);
var zpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21296,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus(zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return (rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.seq_QMARK_.call(null,zloc));
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc));
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return (zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc));
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5455__auto__ = zprint.zutil.zfirst(zloc);
if(cljs.core.truth_(temp__5455__auto__)){
var first_loc = temp__5455__auto__;
var temp__5455__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5455__auto____$1)){
var nloc = temp__5455__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__21299 = zprint.zutil.zfirst(zloc);
var G__21299__$1 = (((G__21299 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__21299) : zprint.zutil.right_STAR_.call(null,G__21299)));
var G__21299__$2 = (((G__21299__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__21299__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__21299__$1)));
var G__21299__$3 = (((G__21299__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__21299__$2) : zprint.zutil.right_STAR_.call(null,G__21299__$2)));
if((G__21299__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__21299__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__21299__$3));
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__21300 = zprint.zutil.zfirst(zloc);
var G__21300__$1 = (((G__21300 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__21300) : zprint.zutil.right_STAR_.call(null,G__21300)));
var G__21300__$2 = (((G__21300__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__21300__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__21300__$1)));
var G__21300__$3 = (((G__21300__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__21300__$2) : zprint.zutil.right_STAR_.call(null,G__21300__$2)));
var G__21300__$4 = (((G__21300__$3 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__21300__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__21300__$3)));
var G__21300__$5 = (((G__21300__$4 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__21300__$4) : zprint.zutil.right_STAR_.call(null,G__21300__$4)));
if((G__21300__$5 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__21300__$5) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__21300__$5));
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5455__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var nloc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__21450 = zprint.zutil.zrightnws(nloc);
var G__21451 = nloc;
nloc = G__21450;
ploc = G__21451;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5455__auto__ = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var nloc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__21454 = zprint.zutil.zleftnws(nloc);
var G__21455 = nloc;
nloc = G__21454;
ploc = G__21455;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.znextnws = (function zprint$zutil$znextnws(zloc){
if(cljs.core.truth_((rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.end_QMARK_.call(null,zloc)))){
return zloc;
} else {
var temp__5455__auto__ = (zprint.zutil.next_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.next_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.next_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var nloc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5455__auto__ = (zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.prev_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var ploc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc) : zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc));
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = (function (){var G__21301 = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
return (zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__21301) : zprint.zutil.skip_whitespace.call(null,G__21301));
})();
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))))){
return nloc;
} else {
var G__21456 = zprint.zutil.zrightnws(nloc);
var G__21457 = (i - (1));
nloc = G__21456;
i = G__21457;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = (function (){var G__21302 = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
return (zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__21302) : zprint.zutil.skip_whitespace.call(null,G__21302));
})();
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_((zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zthing_QMARK_.call(null,nloc)))){
return i;
} else {
var G__21461 = zprint.zutil.zrightnws(nloc);
var G__21462 = (i + (1));
nloc = G__21461;
i = G__21462;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__21463 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__21464 = (function (){var temp__5455__auto__ = ((cljs.core.not((function (){var and__4036__auto__ = (zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc));
if(cljs.core.truth_(and__4036__auto__)){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323))));
} else {
return and__4036__auto__;
}
})()))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5455__auto__)){
var result = temp__5455__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__21463;
out = G__21464;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__21468 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__21469 = (function (){var temp__5455__auto__ = ((cljs.core.not((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5455__auto__)){
var result = temp__5455__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__21468;
out = G__21469;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__21473 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__21474 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)));
nloc = G__21473;
out = G__21474;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__21475 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__21476 = (cljs.core.truth_((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc)))?out:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc))));
nloc = G__21475;
out = G__21476;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap(cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(cljs.core.truth_((zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.rightmost_QMARK_.call(null,nloc)))){
return nloc;
} else {
var G__21477 = (function (){var G__21303 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
return (zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1(G__21303) : zprint.zutil.zremove.call(null,G__21303));
})();
nloc = G__21477;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var index = (0);
while(true){
if((index >= n)){
var G__21304 = zprint.zutil.zremove_right((zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2(nloc,end_struct) : zprint.zutil.zreplace.call(null,nloc,end_struct)));
return (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(G__21304) : zprint.zutil.up_STAR_.call(null,G__21304));
} else {
var xloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__21480 = xloc;
var G__21481 = (cljs.core.truth_((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(xloc) : zprint.zutil.whitespace_QMARK_.call(null,xloc)))?index:(index + (1)));
nloc = G__21480;
index = G__21481;
continue;
}
break;
}
});
/**
 * How many non-whitespace children does zloc have?
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count(zprint.zutil.zseqnws(zloc));
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__21482 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__21483 = (0);
var G__21484 = cljs.core.cons(left,out);
nloc = G__21482;
left = G__21483;
out = G__21484;
continue;
}
} else {
var G__21485 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__21486 = (left + (1));
var G__21487 = out;
nloc = G__21485;
left = G__21486;
out = G__21487;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__21489 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__21490 = (0);
var G__21491 = cljs.core.cons(left,out);
nloc = G__21489;
left = G__21490;
out = G__21491;
continue;
}
} else {
var G__21492 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__21493 = (cljs.core.truth_((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc)))?left:(left + (1)));
var G__21494 = out;
nloc = G__21492;
left = G__21493;
out = G__21494;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not((rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc)))){
return nloc;
} else {
var G__21495 = (rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc));
nloc = G__21495;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__21496 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__21497 = (remaining_right - (1));
nloc = G__21496;
remaining_right = G__21497;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost(nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4036__auto__ = zloc;
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),(zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)))) && (cljs.core.not((function (){var G__21306 = (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.node.call(null,zloc));
return (rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21306) : rewrite_clj.node.printable_only_QMARK_.call(null,G__21306));
})())));
} else {
return and__4036__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4036__auto__ = zloc;
if(cljs.core.truth_(and__4036__auto__)){
return clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)),":");
} else {
return and__4036__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4036__auto__ = zloc;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4036__auto____$1)){
return ((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc)) instanceof cljs.core.Symbol);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4036__auto__ = zloc;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4036__auto____$1)){
return ((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.sexpr.call(null,zloc)) == null);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__21307 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__21307) : rewrite_clj.zip.down.call(null,G__21307));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.zsymbol_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__21308 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__21308) : rewrite_clj.zip.down.call(null,G__21308));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.z_coll_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
var G__21309 = rewrite_clj.parser.parse_string("...");
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__21309) : zprint.zutil.edn_STAR_.call(null,G__21309));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = (rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.tag.call(null,zloc));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
var G__21310 = zprint.zutil.zfirst(zloc);
return (zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21310) : zprint.zutil.zconstant_QMARK_.call(null,G__21310));
} else {
var and__4036__auto__ = cljs.core.not(zprint.zutil.z_coll_QMARK_(zloc));
if(and__4036__auto__){
var or__4047__auto__ = zprint.zutil.zkeyword_QMARK_(zloc);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_(zloc))){
var sexpr = (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc));
return ((typeof sexpr === 'string') || (typeof sexpr === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))));
} else {
return null;
}
}
} else {
return and__4036__auto__;
}
}
});
/**
 * If this is an inline comment, returns the amount of space that
 *   was between this and the previous element.  That means that if
 *   we go left, we get something other than whitespace before a
 *   newline.  Assumes zloc is a comment.
 */
zprint.zutil.zinlinecomment_QMARK_ = (function zprint$zutil$zinlinecomment_QMARK_(zloc){
var nloc = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
var spaces = (0);
while(true){
var tnloc = (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.tag.call(null,nloc));
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))){
return null;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
return spaces;
} else {
var G__21525 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__21526 = ((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.length.call(null,nloc)) + spaces);
nloc = G__21525;
spaces = G__21526;
continue;

}
}
}
}
break;
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4036__auto__ = zprint.zutil.zkeyword_QMARK_(nloc);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc)),":doc");
} else {
return and__4036__auto__;
}
})())){
if(typeof (function (){var G__21311 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(G__21311) : zprint.zutil.sexpr.call(null,G__21311));
})() === 'string'){
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
} else {
return null;
}
} else {
var G__21529 = (function (){var G__21312 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__21312) : rewrite_clj.zip.right.call(null,G__21312));
})();
nloc = G__21529;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = (function (){var G__21313 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(G__21313) : rewrite_clj.zip.string.call(null,G__21313));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defn")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defmacro")))){
var docloc = (function (){var G__21314 = (function (){var G__21315 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__21315) : rewrite_clj.zip.right.call(null,G__21315));
})();
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__21314) : rewrite_clj.zip.right.call(null,G__21314));
})();
if(typeof (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(docloc) : zprint.zutil.sexpr.call(null,docloc)) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"def")){
var maploc = (function (){var G__21316 = (function (){var G__21317 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__21317) : rewrite_clj.zip.right.call(null,G__21317));
})();
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__21316) : rewrite_clj.zip.down.call(null,G__21316));
})();
if(cljs.core.truth_((rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1(maploc) : rewrite_clj.zip.map_QMARK_.call(null,maploc)))){
return zprint.zutil.find_doc_in_map(maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5455__auto__ = zprint.zutil.find_docstring(zloc);
if(cljs.core.truth_(temp__5455__auto__)){
var doc_zloc = temp__5455__auto__;
var new_doc_zloc = (function (){var G__21318 = doc_zloc;
var G__21319 = (function (){var G__21320 = (function (){var G__21321 = rewrite_clj.parser.parse_string(["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(doc_zloc) : zprint.zutil.sexpr.call(null,doc_zloc)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join(''));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__21321) : zprint.zutil.edn_STAR_.call(null,G__21321));
})();
return (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(G__21320) : rewrite_clj.zip.node.call(null,G__21320));
})();
return (zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2(G__21318,G__21319) : zprint.zutil.replace_STAR_.call(null,G__21318,G__21319));
})();
var G__21322 = (rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1(new_doc_zloc) : rewrite_clj.zip.root.call(null,new_doc_zloc));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__21322) : zprint.zutil.edn_STAR_.call(null,G__21322));
} else {
return zloc;
}
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
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(pair_seq){
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
var vec__21323 = cljs.core.first(pair_seq__$1);
var seq__21324 = cljs.core.seq(vec__21323);
var first__21325 = cljs.core.first(seq__21324);
var seq__21324__$1 = cljs.core.next(seq__21324);
var k = first__21325;
var rest_of_pair = seq__21324__$1;
var pair = vec__21323;
var current_ns = (cljs.core.truth_((function (){var and__4036__auto__ = rest_of_pair;
if(and__4036__auto__){
var and__4036__auto____$1 = (!(clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),"::")));
if(and__4036__auto____$1){
var or__4047__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
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
var G__21554 = ns;
var G__21555 = cljs.core.next(pair_seq__$1);
var G__21556 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__21326 = (function (){var G__21327 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__21327) : rewrite_clj.node.token_node.call(null,G__21327));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__21326) : zprint.zutil.edn_STAR_.call(null,G__21326));
})(),rest_of_pair));
ns = G__21554;
pair_seq__$1 = G__21555;
out = G__21556;
continue;
} else {
return null;
}
} else {
var G__21558 = current_ns;
var G__21559 = cljs.core.next(pair_seq__$1);
var G__21560 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__21328 = (function (){var G__21329 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__21329) : rewrite_clj.node.token_node.call(null,G__21329));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__21328) : zprint.zutil.edn_STAR_.call(null,G__21328));
})(),rest_of_pair));
ns = G__21558;
pair_seq__$1 = G__21559;
out = G__21560;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__21569 = ns;
var G__21570 = cljs.core.next(pair_seq__$1);
var G__21571 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns = G__21569;
pair_seq__$1 = G__21570;
out = G__21571;
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
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__21330 = zprint.zfns.zstring;
var znumstr_orig_val__21331 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__21332 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__21333 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__21334 = zprint.zfns.zsexpr;
var zseqnws_orig_val__21335 = zprint.zfns.zseqnws;
var zmap_right_orig_val__21336 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__21337 = zprint.zfns.zfocus_style;
var zfirst_orig_val__21338 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__21339 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__21340 = zprint.zfns.zsecond;
var zthird_orig_val__21341 = zprint.zfns.zthird;
var zfourth_orig_val__21342 = zprint.zfns.zfourth;
var znthnext_orig_val__21343 = zprint.zfns.znthnext;
var zcount_orig_val__21344 = zprint.zfns.zcount;
var zmap_orig_val__21345 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__21346 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__21347 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__21348 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__21349 = zprint.zfns.zfocus;
var zfind_path_orig_val__21350 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__21351 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__21352 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__21353 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__21354 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__21355 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__21356 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__21357 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__21358 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__21359 = zprint.zfns.ztag;
var zlast_orig_val__21360 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__21361 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__21362 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__21363 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__21364 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__21365 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__21366 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__21367 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__21368 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__21369 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__21370 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__21371 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__21372 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__21373 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__21374 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__21375 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__21376 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__21377 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__21378 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__21379 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__21380 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__21381 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__21382 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__21383 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__21384 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__21385 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__21386 = zprint.zfns.zfind;
var ztake_append_orig_val__21387 = zprint.zfns.ztake_append;
var zstring_temp_val__21388 = rewrite_clj.zip.string;
var znumstr_temp_val__21389 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__21390 = cljs.core.constantly(false);
var zcomment_QMARK__temp_val__21391 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__21392 = zprint.zutil.sexpr;
var zseqnws_temp_val__21393 = zprint.zutil.zseqnws;
var zmap_right_temp_val__21394 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__21395 = zprint.zutil.zfocus_style;
var zfirst_temp_val__21396 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__21397 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__21398 = zprint.zutil.zsecond;
var zthird_temp_val__21399 = zprint.zutil.zthird;
var zfourth_temp_val__21400 = zprint.zutil.zfourth;
var znthnext_temp_val__21401 = zprint.zutil.znthnext;
var zcount_temp_val__21402 = zprint.zutil.zcount;
var zmap_temp_val__21403 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__21404 = zprint.zutil.zmap_w_nl;
var zanonfn_QMARK__temp_val__21405 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__21406 = cljs.core.constantly(false);
var zfocus_temp_val__21407 = zprint.zutil.zfocus;
var zfind_path_temp_val__21408 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__21409 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__21410 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__21411 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__21412 = rewrite_clj.zip.map_QMARK_;
var zset_QMARK__temp_val__21413 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__21414 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__21415 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__21416 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__21417 = zprint.zutil.ztag;
var zlast_temp_val__21418 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__21419 = cljs.core.constantly(false);
var zatom_QMARK__temp_val__21420 = cljs.core.constantly(false);
var zderef_temp_val__21421 = cljs.core.constantly(false);
var zrecord_QMARK__temp_val__21422 = cljs.core.constantly(false);
var zns_QMARK__temp_val__21423 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__21424 = cljs.core.constantly(null);
var zexpandarray_temp_val__21425 = cljs.core.constantly(null);
var znewline_QMARK__temp_val__21426 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__21427 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__21428 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__21429 = cljs.core.constantly(false);
var zfuture_QMARK__temp_val__21430 = cljs.core.constantly(false);
var zdelay_QMARK__temp_val__21431 = cljs.core.constantly(false);
var zkeyword_QMARK__temp_val__21432 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__21433 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__21434 = cljs.core.constantly(false);
var zreader_macro_QMARK__temp_val__21435 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__21436 = cljs.core.constantly(null);
var zdotdotdot_temp_val__21437 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__21438 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__21439 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__21440 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__21441 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__21442 = zprint.zutil.zlift_ns;
var zinlinecomment_QMARK__temp_val__21443 = zprint.zutil.zinlinecomment_QMARK_;
var zfind_temp_val__21444 = zprint.zutil.zfind;
var ztake_append_temp_val__21445 = zprint.zutil.ztake_append;
zprint.zfns.zstring = zstring_temp_val__21388;

zprint.zfns.znumstr = znumstr_temp_val__21389;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__21390;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__21391;

zprint.zfns.zsexpr = zsexpr_temp_val__21392;

zprint.zfns.zseqnws = zseqnws_temp_val__21393;

zprint.zfns.zmap_right = zmap_right_temp_val__21394;

zprint.zfns.zfocus_style = zfocus_style_temp_val__21395;

zprint.zfns.zfirst = zfirst_temp_val__21396;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__21397;

zprint.zfns.zsecond = zsecond_temp_val__21398;

zprint.zfns.zthird = zthird_temp_val__21399;

zprint.zfns.zfourth = zfourth_temp_val__21400;

zprint.zfns.znthnext = znthnext_temp_val__21401;

zprint.zfns.zcount = zcount_temp_val__21402;

zprint.zfns.zmap = zmap_temp_val__21403;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__21404;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__21405;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__21406;

zprint.zfns.zfocus = zfocus_temp_val__21407;

zprint.zfns.zfind_path = zfind_path_temp_val__21408;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__21409;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__21410;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__21411;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__21412;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__21413;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__21414;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__21415;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__21416;

zprint.zfns.ztag = ztag_temp_val__21417;

zprint.zfns.zlast = zlast_temp_val__21418;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__21419;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__21420;

zprint.zfns.zderef = zderef_temp_val__21421;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__21422;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__21423;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__21424;

zprint.zfns.zexpandarray = zexpandarray_temp_val__21425;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__21426;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__21427;

zprint.zfns.zmap_all = zmap_all_temp_val__21428;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__21429;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__21430;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__21431;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__21432;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__21433;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__21434;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__21435;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__21436;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__21437;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__21438;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__21439;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__21440;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__21441;

zprint.zfns.zlift_ns = zlift_ns_temp_val__21442;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__21443;

zprint.zfns.zfind = zfind_temp_val__21444;

zprint.zfns.ztake_append = ztake_append_temp_val__21445;

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__21387;

zprint.zfns.zfind = zfind_orig_val__21386;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__21385;

zprint.zfns.zlift_ns = zlift_ns_orig_val__21384;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__21383;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__21382;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__21381;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__21380;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__21379;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__21378;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__21377;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__21376;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__21375;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__21374;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__21373;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__21372;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__21371;

zprint.zfns.zmap_all = zmap_all_orig_val__21370;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__21369;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__21368;

zprint.zfns.zexpandarray = zexpandarray_orig_val__21367;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__21366;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__21365;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__21364;

zprint.zfns.zderef = zderef_orig_val__21363;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__21362;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__21361;

zprint.zfns.zlast = zlast_orig_val__21360;

zprint.zfns.ztag = ztag_orig_val__21359;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__21358;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__21357;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__21356;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__21355;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__21354;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__21353;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__21352;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__21351;

zprint.zfns.zfind_path = zfind_path_orig_val__21350;

zprint.zfns.zfocus = zfocus_orig_val__21349;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__21348;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__21347;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__21346;

zprint.zfns.zmap = zmap_orig_val__21345;

zprint.zfns.zcount = zcount_orig_val__21344;

zprint.zfns.znthnext = znthnext_orig_val__21343;

zprint.zfns.zfourth = zfourth_orig_val__21342;

zprint.zfns.zthird = zthird_orig_val__21341;

zprint.zfns.zsecond = zsecond_orig_val__21340;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__21339;

zprint.zfns.zfirst = zfirst_orig_val__21338;

zprint.zfns.zfocus_style = zfocus_style_orig_val__21337;

zprint.zfns.zmap_right = zmap_right_orig_val__21336;

zprint.zfns.zseqnws = zseqnws_orig_val__21335;

zprint.zfns.zsexpr = zsexpr_orig_val__21334;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__21333;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__21332;

zprint.zfns.znumstr = znumstr_orig_val__21331;

zprint.zfns.zstring = zstring_orig_val__21330;
}});

//# sourceMappingURL=zprint.zutil.js.map
