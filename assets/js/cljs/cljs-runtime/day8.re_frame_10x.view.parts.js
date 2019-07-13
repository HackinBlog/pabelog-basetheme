goog.provide('day8.re_frame_10x.view.parts');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('re_frame.registrar');
goog.require('re_frame.events');
goog.require('re_frame.subs');
goog.require('re_frame.fx');
goog.require('re_frame.cofx');
goog.require('day8.re_frame_10x.common_styles');
day8.re_frame_10x.view.parts.render_registered = (function day8$re_frame_10x$view$parts$render_registered(kind){
var iter__4434__auto__ = (function day8$re_frame_10x$view$parts$render_registered_$_iter__23732(s__23733){
return (new cljs.core.LazySeq(null,(function (){
var s__23733__$1 = s__23733;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__23733__$1);
if(temp__5457__auto__){
var s__23733__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23733__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__23733__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__23735 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__23734 = (0);
while(true){
if((i__23734 < size__4433__auto__)){
var vec__23742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__23734);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23742,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23742,(1),null);
cljs.core.chunk_append(b__23735,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__23807 = (i__23734 + (1));
i__23734 = G__23807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23735),day8$re_frame_10x$view$parts$render_registered_$_iter__23732(cljs.core.chunk_rest(s__23733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23735),null);
}
} else {
var vec__23752 = cljs.core.first(s__23733__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23752,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23752,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_registered_$_iter__23732(cljs.core.rest(s__23733__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render_subs = (function day8$re_frame_10x$view$parts$render_subs(kind){
var iter__4434__auto__ = (function day8$re_frame_10x$view$parts$render_subs_$_iter__23760(s__23761){
return (new cljs.core.LazySeq(null,(function (){
var s__23761__$1 = s__23761;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__23761__$1);
if(temp__5457__auto__){
var s__23761__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23761__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__23761__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__23763 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__23762 = (0);
while(true){
if((i__23762 < size__4433__auto__)){
var vec__23772 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__23762);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23772,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23772,(1),null);
cljs.core.chunk_append(b__23763,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__23808 = (i__23762 + (1));
i__23762 = G__23808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23763),day8$re_frame_10x$view$parts$render_subs_$_iter__23760(cljs.core.chunk_rest(s__23761__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23763),null);
}
} else {
var vec__23775 = cljs.core.first(s__23761__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23775,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23775,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_subs_$_iter__23760(cljs.core.rest(s__23761__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render = (function day8$re_frame_10x$view$parts$render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Events"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.events.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Subscriptions"], null),day8.re_frame_10x.view.parts.render_subs(re_frame.subs.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"FX"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.fx.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"co-fx"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.cofx.kind),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.common_styles.gs_19s], null)], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.view.parts.js.map
