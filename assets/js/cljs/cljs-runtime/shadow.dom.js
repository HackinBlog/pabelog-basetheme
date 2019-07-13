goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_dom["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_svg["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28469 = coll;
var G__28470 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28469,G__28470) : shadow.dom.lazy_native_coll_seq.call(null,G__28469,G__28470));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4047__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28481 = arguments.length;
switch (G__28481) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28483 = arguments.length;
switch (G__28483) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28485 = arguments.length;
switch (G__28485) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28487 = arguments.length;
switch (G__28487) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28489 = arguments.length;
switch (G__28489) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__28490 = document;
var G__28491 = shadow.dom.dom_node(el);
return goog.dom.contains(G__28490,G__28491);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__28492 = shadow.dom.dom_node(parent);
var G__28493 = shadow.dom.dom_node(el);
return goog.dom.contains(G__28492,G__28493);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__28494 = shadow.dom.dom_node(el);
var G__28495 = cls;
return goog.dom.classlist.add(G__28494,G__28495);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__28496 = shadow.dom.dom_node(el);
var G__28497 = cls;
return goog.dom.classlist.remove(G__28496,G__28497);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28499 = arguments.length;
switch (G__28499) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__28500 = shadow.dom.dom_node(el);
var G__28501 = cls;
return goog.dom.classlist.toggle(G__28500,G__28501);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e28502){if((e28502 instanceof Object)){
var e = e28502;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28502;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28503 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28504 = null;
var count__28505 = (0);
var i__28506 = (0);
while(true){
if((i__28506 < count__28505)){
var el = chunk__28504.cljs$core$IIndexed$_nth$arity$2(null,i__28506);
var handler_28952__$1 = ((function (seq__28503,chunk__28504,count__28505,i__28506,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28503,chunk__28504,count__28505,i__28506,el))
;
var G__28507_28954 = el;
var G__28508_28955 = cljs.core.name(ev);
var G__28509_28956 = handler_28952__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__28507_28954,G__28508_28955,G__28509_28956) : shadow.dom.dom_listen.call(null,G__28507_28954,G__28508_28955,G__28509_28956));


var G__28957 = seq__28503;
var G__28958 = chunk__28504;
var G__28959 = count__28505;
var G__28960 = (i__28506 + (1));
seq__28503 = G__28957;
chunk__28504 = G__28958;
count__28505 = G__28959;
i__28506 = G__28960;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28503);
if(temp__5457__auto__){
var seq__28503__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28503__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__28503__$1);
var G__28961 = cljs.core.chunk_rest(seq__28503__$1);
var G__28962 = c__4461__auto__;
var G__28963 = cljs.core.count(c__4461__auto__);
var G__28964 = (0);
seq__28503 = G__28961;
chunk__28504 = G__28962;
count__28505 = G__28963;
i__28506 = G__28964;
continue;
} else {
var el = cljs.core.first(seq__28503__$1);
var handler_28965__$1 = ((function (seq__28503,chunk__28504,count__28505,i__28506,el,seq__28503__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28503,chunk__28504,count__28505,i__28506,el,seq__28503__$1,temp__5457__auto__))
;
var G__28510_28975 = el;
var G__28511_28976 = cljs.core.name(ev);
var G__28512_28977 = handler_28965__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__28510_28975,G__28511_28976,G__28512_28977) : shadow.dom.dom_listen.call(null,G__28510_28975,G__28511_28976,G__28512_28977));


var G__28980 = cljs.core.next(seq__28503__$1);
var G__28981 = null;
var G__28982 = (0);
var G__28983 = (0);
seq__28503 = G__28980;
chunk__28504 = G__28981;
count__28505 = G__28982;
i__28506 = G__28983;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28514 = arguments.length;
switch (G__28514) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__28515 = shadow.dom.dom_node(el);
var G__28516 = cljs.core.name(ev);
var G__28517 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__28515,G__28516,G__28517) : shadow.dom.dom_listen.call(null,G__28515,G__28516,G__28517));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__28518 = shadow.dom.dom_node(el);
var G__28519 = cljs.core.name(ev);
var G__28520 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__28518,G__28519,G__28520) : shadow.dom.dom_listen_remove.call(null,G__28518,G__28519,G__28520));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28521 = cljs.core.seq(events);
var chunk__28522 = null;
var count__28523 = (0);
var i__28524 = (0);
while(true){
if((i__28524 < count__28523)){
var vec__28525 = chunk__28522.cljs$core$IIndexed$_nth$arity$2(null,i__28524);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28525,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__28992 = seq__28521;
var G__28993 = chunk__28522;
var G__28994 = count__28523;
var G__28995 = (i__28524 + (1));
seq__28521 = G__28992;
chunk__28522 = G__28993;
count__28523 = G__28994;
i__28524 = G__28995;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28521);
if(temp__5457__auto__){
var seq__28521__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28521__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__28521__$1);
var G__28999 = cljs.core.chunk_rest(seq__28521__$1);
var G__29000 = c__4461__auto__;
var G__29001 = cljs.core.count(c__4461__auto__);
var G__29002 = (0);
seq__28521 = G__28999;
chunk__28522 = G__29000;
count__28523 = G__29001;
i__28524 = G__29002;
continue;
} else {
var vec__28528 = cljs.core.first(seq__28521__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28528,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29003 = cljs.core.next(seq__28521__$1);
var G__29004 = null;
var G__29005 = (0);
var G__29006 = (0);
seq__28521 = G__29003;
chunk__28522 = G__29004;
count__28523 = G__29005;
i__28524 = G__29006;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28531 = cljs.core.seq(styles);
var chunk__28532 = null;
var count__28533 = (0);
var i__28534 = (0);
while(true){
if((i__28534 < count__28533)){
var vec__28535 = chunk__28532.cljs$core$IIndexed$_nth$arity$2(null,i__28534);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28535,(1),null);
var G__28538_29010 = dom;
var G__28539_29011 = cljs.core.name(k);
var G__28540_29012 = (((v == null))?"":v);
goog.style.setStyle(G__28538_29010,G__28539_29011,G__28540_29012);


var G__29013 = seq__28531;
var G__29014 = chunk__28532;
var G__29015 = count__28533;
var G__29016 = (i__28534 + (1));
seq__28531 = G__29013;
chunk__28532 = G__29014;
count__28533 = G__29015;
i__28534 = G__29016;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28531);
if(temp__5457__auto__){
var seq__28531__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28531__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__28531__$1);
var G__29017 = cljs.core.chunk_rest(seq__28531__$1);
var G__29018 = c__4461__auto__;
var G__29019 = cljs.core.count(c__4461__auto__);
var G__29020 = (0);
seq__28531 = G__29017;
chunk__28532 = G__29018;
count__28533 = G__29019;
i__28534 = G__29020;
continue;
} else {
var vec__28544 = cljs.core.first(seq__28531__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28544,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28544,(1),null);
var G__28547_29023 = dom;
var G__28548_29024 = cljs.core.name(k);
var G__28549_29025 = (((v == null))?"":v);
goog.style.setStyle(G__28547_29023,G__28548_29024,G__28549_29025);


var G__29026 = cljs.core.next(seq__28531__$1);
var G__29027 = null;
var G__29028 = (0);
var G__29029 = (0);
seq__28531 = G__29026;
chunk__28532 = G__29027;
count__28533 = G__29028;
i__28534 = G__29029;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28550_29030 = key;
var G__28550_29031__$1 = (((G__28550_29030 instanceof cljs.core.Keyword))?G__28550_29030.fqn:null);
switch (G__28550_29031__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29036 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4047__auto__ = goog.string.startsWith(ks_29036,"data-");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.string.startsWith(ks_29036,"aria-");
}
})())){
el.setAttribute(ks_29036,value);
} else {
(el[ks_29036] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__28559 = shadow.dom.dom_node(el);
var G__28560 = cls;
return goog.dom.classlist.contains(G__28559,G__28560);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28571){
var map__28572 = p__28571;
var map__28572__$1 = (((((!((map__28572 == null))))?(((((map__28572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28572):map__28572);
var props = map__28572__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28572__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28574 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28574,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28574,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28574,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28578 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28578,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28578;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28580 = arguments.length;
switch (G__28580) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28583){
var vec__28584 = p__28583;
var seq__28585 = cljs.core.seq(vec__28584);
var first__28586 = cljs.core.first(seq__28585);
var seq__28585__$1 = cljs.core.next(seq__28585);
var nn = first__28586;
var first__28586__$1 = cljs.core.first(seq__28585__$1);
var seq__28585__$2 = cljs.core.next(seq__28585__$1);
var np = first__28586__$1;
var nc = seq__28585__$2;
var node = vec__28584;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28591 = nn;
var G__28592 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28591,G__28592) : create_fn.call(null,G__28591,G__28592));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28595 = nn;
var G__28596 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28595,G__28596) : create_fn.call(null,G__28595,G__28596));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28598 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28598,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28598,(1),null);
var seq__28602_29060 = cljs.core.seq(node_children);
var chunk__28603_29061 = null;
var count__28604_29062 = (0);
var i__28605_29063 = (0);
while(true){
if((i__28605_29063 < count__28604_29062)){
var child_struct_29065 = chunk__28603_29061.cljs$core$IIndexed$_nth$arity$2(null,i__28605_29063);
var children_29066 = shadow.dom.dom_node(child_struct_29065);
if(cljs.core.seq_QMARK_(children_29066)){
var seq__28608_29068 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29066));
var chunk__28610_29069 = null;
var count__28611_29070 = (0);
var i__28612_29071 = (0);
while(true){
if((i__28612_29071 < count__28611_29070)){
var child_29073 = chunk__28610_29069.cljs$core$IIndexed$_nth$arity$2(null,i__28612_29071);
if(cljs.core.truth_(child_29073)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29073);


var G__29074 = seq__28608_29068;
var G__29075 = chunk__28610_29069;
var G__29076 = count__28611_29070;
var G__29077 = (i__28612_29071 + (1));
seq__28608_29068 = G__29074;
chunk__28610_29069 = G__29075;
count__28611_29070 = G__29076;
i__28612_29071 = G__29077;
continue;
} else {
var G__29078 = seq__28608_29068;
var G__29079 = chunk__28610_29069;
var G__29080 = count__28611_29070;
var G__29081 = (i__28612_29071 + (1));
seq__28608_29068 = G__29078;
chunk__28610_29069 = G__29079;
count__28611_29070 = G__29080;
i__28612_29071 = G__29081;
continue;
}
} else {
var temp__5457__auto___29083 = cljs.core.seq(seq__28608_29068);
if(temp__5457__auto___29083){
var seq__28608_29084__$1 = temp__5457__auto___29083;
if(cljs.core.chunked_seq_QMARK_(seq__28608_29084__$1)){
var c__4461__auto___29086 = cljs.core.chunk_first(seq__28608_29084__$1);
var G__29087 = cljs.core.chunk_rest(seq__28608_29084__$1);
var G__29088 = c__4461__auto___29086;
var G__29089 = cljs.core.count(c__4461__auto___29086);
var G__29090 = (0);
seq__28608_29068 = G__29087;
chunk__28610_29069 = G__29088;
count__28611_29070 = G__29089;
i__28612_29071 = G__29090;
continue;
} else {
var child_29092 = cljs.core.first(seq__28608_29084__$1);
if(cljs.core.truth_(child_29092)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29092);


var G__29094 = cljs.core.next(seq__28608_29084__$1);
var G__29095 = null;
var G__29096 = (0);
var G__29097 = (0);
seq__28608_29068 = G__29094;
chunk__28610_29069 = G__29095;
count__28611_29070 = G__29096;
i__28612_29071 = G__29097;
continue;
} else {
var G__29098 = cljs.core.next(seq__28608_29084__$1);
var G__29099 = null;
var G__29100 = (0);
var G__29101 = (0);
seq__28608_29068 = G__29098;
chunk__28610_29069 = G__29099;
count__28611_29070 = G__29100;
i__28612_29071 = G__29101;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29066);
}


var G__29103 = seq__28602_29060;
var G__29104 = chunk__28603_29061;
var G__29105 = count__28604_29062;
var G__29106 = (i__28605_29063 + (1));
seq__28602_29060 = G__29103;
chunk__28603_29061 = G__29104;
count__28604_29062 = G__29105;
i__28605_29063 = G__29106;
continue;
} else {
var temp__5457__auto___29107 = cljs.core.seq(seq__28602_29060);
if(temp__5457__auto___29107){
var seq__28602_29108__$1 = temp__5457__auto___29107;
if(cljs.core.chunked_seq_QMARK_(seq__28602_29108__$1)){
var c__4461__auto___29109 = cljs.core.chunk_first(seq__28602_29108__$1);
var G__29112 = cljs.core.chunk_rest(seq__28602_29108__$1);
var G__29113 = c__4461__auto___29109;
var G__29114 = cljs.core.count(c__4461__auto___29109);
var G__29115 = (0);
seq__28602_29060 = G__29112;
chunk__28603_29061 = G__29113;
count__28604_29062 = G__29114;
i__28605_29063 = G__29115;
continue;
} else {
var child_struct_29116 = cljs.core.first(seq__28602_29108__$1);
var children_29117 = shadow.dom.dom_node(child_struct_29116);
if(cljs.core.seq_QMARK_(children_29117)){
var seq__28616_29118 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29117));
var chunk__28618_29119 = null;
var count__28619_29120 = (0);
var i__28620_29121 = (0);
while(true){
if((i__28620_29121 < count__28619_29120)){
var child_29123 = chunk__28618_29119.cljs$core$IIndexed$_nth$arity$2(null,i__28620_29121);
if(cljs.core.truth_(child_29123)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29123);


var G__29136 = seq__28616_29118;
var G__29137 = chunk__28618_29119;
var G__29138 = count__28619_29120;
var G__29139 = (i__28620_29121 + (1));
seq__28616_29118 = G__29136;
chunk__28618_29119 = G__29137;
count__28619_29120 = G__29138;
i__28620_29121 = G__29139;
continue;
} else {
var G__29140 = seq__28616_29118;
var G__29141 = chunk__28618_29119;
var G__29142 = count__28619_29120;
var G__29143 = (i__28620_29121 + (1));
seq__28616_29118 = G__29140;
chunk__28618_29119 = G__29141;
count__28619_29120 = G__29142;
i__28620_29121 = G__29143;
continue;
}
} else {
var temp__5457__auto___29145__$1 = cljs.core.seq(seq__28616_29118);
if(temp__5457__auto___29145__$1){
var seq__28616_29146__$1 = temp__5457__auto___29145__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28616_29146__$1)){
var c__4461__auto___29148 = cljs.core.chunk_first(seq__28616_29146__$1);
var G__29149 = cljs.core.chunk_rest(seq__28616_29146__$1);
var G__29150 = c__4461__auto___29148;
var G__29151 = cljs.core.count(c__4461__auto___29148);
var G__29152 = (0);
seq__28616_29118 = G__29149;
chunk__28618_29119 = G__29150;
count__28619_29120 = G__29151;
i__28620_29121 = G__29152;
continue;
} else {
var child_29153 = cljs.core.first(seq__28616_29146__$1);
if(cljs.core.truth_(child_29153)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29153);


var G__29155 = cljs.core.next(seq__28616_29146__$1);
var G__29156 = null;
var G__29157 = (0);
var G__29158 = (0);
seq__28616_29118 = G__29155;
chunk__28618_29119 = G__29156;
count__28619_29120 = G__29157;
i__28620_29121 = G__29158;
continue;
} else {
var G__29159 = cljs.core.next(seq__28616_29146__$1);
var G__29160 = null;
var G__29161 = (0);
var G__29162 = (0);
seq__28616_29118 = G__29159;
chunk__28618_29119 = G__29160;
count__28619_29120 = G__29161;
i__28620_29121 = G__29162;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29117);
}


var G__29164 = cljs.core.next(seq__28602_29108__$1);
var G__29165 = null;
var G__29166 = (0);
var G__29167 = (0);
seq__28602_29060 = G__29164;
chunk__28603_29061 = G__29165;
count__28604_29062 = G__29166;
i__28605_29063 = G__29167;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__28631 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__28631);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28634 = cljs.core.seq(node);
var chunk__28635 = null;
var count__28636 = (0);
var i__28637 = (0);
while(true){
if((i__28637 < count__28636)){
var n = chunk__28635.cljs$core$IIndexed$_nth$arity$2(null,i__28637);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29179 = seq__28634;
var G__29180 = chunk__28635;
var G__29181 = count__28636;
var G__29182 = (i__28637 + (1));
seq__28634 = G__29179;
chunk__28635 = G__29180;
count__28636 = G__29181;
i__28637 = G__29182;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28634);
if(temp__5457__auto__){
var seq__28634__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28634__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__28634__$1);
var G__29183 = cljs.core.chunk_rest(seq__28634__$1);
var G__29184 = c__4461__auto__;
var G__29185 = cljs.core.count(c__4461__auto__);
var G__29186 = (0);
seq__28634 = G__29183;
chunk__28635 = G__29184;
count__28636 = G__29185;
i__28637 = G__29186;
continue;
} else {
var n = cljs.core.first(seq__28634__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29187 = cljs.core.next(seq__28634__$1);
var G__29188 = null;
var G__29189 = (0);
var G__29190 = (0);
seq__28634 = G__29187;
chunk__28635 = G__29188;
count__28636 = G__29189;
i__28637 = G__29190;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__28640 = shadow.dom.dom_node(new$);
var G__28641 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__28640,G__28641);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28644 = arguments.length;
switch (G__28644) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28649 = arguments.length;
switch (G__28649) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__28654 = arguments.length;
switch (G__28654) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4047__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29217 = arguments.length;
var i__4642__auto___29218 = (0);
while(true){
if((i__4642__auto___29218 < len__4641__auto___29217)){
args__4647__auto__.push((arguments[i__4642__auto___29218]));

var G__29219 = (i__4642__auto___29218 + (1));
i__4642__auto___29218 = G__29219;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28668_29221 = cljs.core.seq(nodes);
var chunk__28669_29222 = null;
var count__28670_29223 = (0);
var i__28671_29224 = (0);
while(true){
if((i__28671_29224 < count__28670_29223)){
var node_29225 = chunk__28669_29222.cljs$core$IIndexed$_nth$arity$2(null,i__28671_29224);
fragment.appendChild(shadow.dom._to_dom(node_29225));


var G__29226 = seq__28668_29221;
var G__29227 = chunk__28669_29222;
var G__29228 = count__28670_29223;
var G__29229 = (i__28671_29224 + (1));
seq__28668_29221 = G__29226;
chunk__28669_29222 = G__29227;
count__28670_29223 = G__29228;
i__28671_29224 = G__29229;
continue;
} else {
var temp__5457__auto___29230 = cljs.core.seq(seq__28668_29221);
if(temp__5457__auto___29230){
var seq__28668_29231__$1 = temp__5457__auto___29230;
if(cljs.core.chunked_seq_QMARK_(seq__28668_29231__$1)){
var c__4461__auto___29233 = cljs.core.chunk_first(seq__28668_29231__$1);
var G__29234 = cljs.core.chunk_rest(seq__28668_29231__$1);
var G__29235 = c__4461__auto___29233;
var G__29236 = cljs.core.count(c__4461__auto___29233);
var G__29237 = (0);
seq__28668_29221 = G__29234;
chunk__28669_29222 = G__29235;
count__28670_29223 = G__29236;
i__28671_29224 = G__29237;
continue;
} else {
var node_29241 = cljs.core.first(seq__28668_29231__$1);
fragment.appendChild(shadow.dom._to_dom(node_29241));


var G__29242 = cljs.core.next(seq__28668_29231__$1);
var G__29243 = null;
var G__29244 = (0);
var G__29245 = (0);
seq__28668_29221 = G__29242;
chunk__28669_29222 = G__29243;
count__28670_29223 = G__29244;
i__28671_29224 = G__29245;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq28666){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28666));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28679_29246 = cljs.core.seq(scripts);
var chunk__28680_29247 = null;
var count__28681_29248 = (0);
var i__28682_29249 = (0);
while(true){
if((i__28682_29249 < count__28681_29248)){
var vec__28684_29250 = chunk__28680_29247.cljs$core$IIndexed$_nth$arity$2(null,i__28682_29249);
var script_tag_29251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28684_29250,(0),null);
var script_body_29252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28684_29250,(1),null);
eval(script_body_29252);


var G__29253 = seq__28679_29246;
var G__29254 = chunk__28680_29247;
var G__29255 = count__28681_29248;
var G__29256 = (i__28682_29249 + (1));
seq__28679_29246 = G__29253;
chunk__28680_29247 = G__29254;
count__28681_29248 = G__29255;
i__28682_29249 = G__29256;
continue;
} else {
var temp__5457__auto___29257 = cljs.core.seq(seq__28679_29246);
if(temp__5457__auto___29257){
var seq__28679_29259__$1 = temp__5457__auto___29257;
if(cljs.core.chunked_seq_QMARK_(seq__28679_29259__$1)){
var c__4461__auto___29260 = cljs.core.chunk_first(seq__28679_29259__$1);
var G__29261 = cljs.core.chunk_rest(seq__28679_29259__$1);
var G__29262 = c__4461__auto___29260;
var G__29263 = cljs.core.count(c__4461__auto___29260);
var G__29264 = (0);
seq__28679_29246 = G__29261;
chunk__28680_29247 = G__29262;
count__28681_29248 = G__29263;
i__28682_29249 = G__29264;
continue;
} else {
var vec__28689_29265 = cljs.core.first(seq__28679_29259__$1);
var script_tag_29266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28689_29265,(0),null);
var script_body_29267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28689_29265,(1),null);
eval(script_body_29267);


var G__29270 = cljs.core.next(seq__28679_29259__$1);
var G__29271 = null;
var G__29272 = (0);
var G__29273 = (0);
seq__28679_29246 = G__29270;
chunk__28680_29247 = G__29271;
count__28681_29248 = G__29272;
i__28682_29249 = G__29273;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__28692){
var vec__28693 = p__28692;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28693,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28693,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__28699 = shadow.dom.dom_node(el);
var G__28700 = cls;
return goog.dom.getAncestorByClass(G__28699,G__28700);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__28702 = arguments.length;
switch (G__28702) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__28704 = shadow.dom.dom_node(el);
var G__28705 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__28704,G__28705);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__28706 = shadow.dom.dom_node(el);
var G__28707 = cljs.core.name(tag);
var G__28708 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__28706,G__28707,G__28708);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__28709 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__28709);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__28710 = shadow.dom.dom_node(dom);
var G__28711 = value;
return goog.dom.forms.setValue(G__28710,G__28711);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__28717 = cljs.core.seq(style_keys);
var chunk__28718 = null;
var count__28719 = (0);
var i__28720 = (0);
while(true){
if((i__28720 < count__28719)){
var it = chunk__28718.cljs$core$IIndexed$_nth$arity$2(null,i__28720);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29296 = seq__28717;
var G__29297 = chunk__28718;
var G__29298 = count__28719;
var G__29299 = (i__28720 + (1));
seq__28717 = G__29296;
chunk__28718 = G__29297;
count__28719 = G__29298;
i__28720 = G__29299;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28717);
if(temp__5457__auto__){
var seq__28717__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28717__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__28717__$1);
var G__29300 = cljs.core.chunk_rest(seq__28717__$1);
var G__29301 = c__4461__auto__;
var G__29302 = cljs.core.count(c__4461__auto__);
var G__29303 = (0);
seq__28717 = G__29300;
chunk__28718 = G__29301;
count__28719 = G__29302;
i__28720 = G__29303;
continue;
} else {
var it = cljs.core.first(seq__28717__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29304 = cljs.core.next(seq__28717__$1);
var G__29305 = null;
var G__29306 = (0);
var G__29307 = (0);
seq__28717 = G__29304;
chunk__28718 = G__29305;
count__28719 = G__29306;
i__28720 = G__29307;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k28724,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__28732 = k28724;
var G__28732__$1 = (((G__28732 instanceof cljs.core.Keyword))?G__28732.fqn:null);
switch (G__28732__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28724,else__4304__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__28734){
var vec__28736 = p__28734;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28736,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28736,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28723){
var self__ = this;
var G__28723__$1 = this;
return (new cljs.core.RecordIter((0),G__28723__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__28744 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__28744(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28725,other28726){
var self__ = this;
var this28725__$1 = this;
return (((!((other28726 == null)))) && ((this28725__$1.constructor === other28726.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28725__$1.x,other28726.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28725__$1.y,other28726.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28725__$1.__extmap,other28726.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__28723){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__28749 = cljs.core.keyword_identical_QMARK_;
var expr__28750 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__28752 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__28753 = expr__28750;
return (pred__28749.cljs$core$IFn$_invoke$arity$2 ? pred__28749.cljs$core$IFn$_invoke$arity$2(G__28752,G__28753) : pred__28749.call(null,G__28752,G__28753));
})())){
return (new shadow.dom.Coordinate(G__28723,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28754 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__28755 = expr__28750;
return (pred__28749.cljs$core$IFn$_invoke$arity$2 ? pred__28749.cljs$core$IFn$_invoke$arity$2(G__28754,G__28755) : pred__28749.call(null,G__28754,G__28755));
})())){
return (new shadow.dom.Coordinate(self__.x,G__28723,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__28723),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__28723){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28723,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28729){
var extmap__4340__auto__ = (function (){var G__28762 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28729,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28729)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28762);
} else {
return G__28762;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28729),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28729),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__28764 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__28764);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__28766 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__28766);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__28767 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__28767);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k28769,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__28776 = k28769;
var G__28776__$1 = (((G__28776 instanceof cljs.core.Keyword))?G__28776.fqn:null);
switch (G__28776__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28769,else__4304__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__28778){
var vec__28779 = p__28778;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28779,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28779,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Size{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28768){
var self__ = this;
var G__28768__$1 = this;
return (new cljs.core.RecordIter((0),G__28768__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__28786 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__28786(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28770,other28771){
var self__ = this;
var this28770__$1 = this;
return (((!((other28771 == null)))) && ((this28770__$1.constructor === other28771.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28770__$1.w,other28771.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28770__$1.h,other28771.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28770__$1.__extmap,other28771.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__28768){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__28795 = cljs.core.keyword_identical_QMARK_;
var expr__28796 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__28798 = new cljs.core.Keyword(null,"w","w",354169001);
var G__28799 = expr__28796;
return (pred__28795.cljs$core$IFn$_invoke$arity$2 ? pred__28795.cljs$core$IFn$_invoke$arity$2(G__28798,G__28799) : pred__28795.call(null,G__28798,G__28799));
})())){
return (new shadow.dom.Size(G__28768,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28801 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__28802 = expr__28796;
return (pred__28795.cljs$core$IFn$_invoke$arity$2 ? pred__28795.cljs$core$IFn$_invoke$arity$2(G__28801,G__28802) : pred__28795.call(null,G__28801,G__28802));
})())){
return (new shadow.dom.Size(self__.w,G__28768,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__28768),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__28768){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__28768,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__28773){
var extmap__4340__auto__ = (function (){var G__28805 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28773,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__28773)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28805);
} else {
return G__28805;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__28773),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__28773),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__28806 = shadow.dom.dom_node(el);
return goog.style.getSize(G__28806);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4515__auto__ = opts;
var l__4516__auto__ = a__4515__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4516__auto__)){
var G__29362 = (i + (1));
var G__29363 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29362;
ret = G__29363;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28807){
var vec__28808 = p__28807;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28808,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28808,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__28812 = arguments.length;
switch (G__28812) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__28817_29393 = new_node;
var G__28818_29394 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__28817_29393,G__28818_29394);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__28821_29399 = new_node;
var G__28822_29400 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__28821_29399,G__28822_29400);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__29409 = ps;
var G__29410 = (i + (1));
el__$1 = G__29409;
i = G__29410;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__28826 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__28826);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__28830 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__28830);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__28832 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__28832);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__28834 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28834,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28834,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28834,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28838_29418 = cljs.core.seq(props);
var chunk__28839_29419 = null;
var count__28840_29420 = (0);
var i__28841_29421 = (0);
while(true){
if((i__28841_29421 < count__28840_29420)){
var vec__28842_29427 = chunk__28839_29419.cljs$core$IIndexed$_nth$arity$2(null,i__28841_29421);
var k_29428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28842_29427,(0),null);
var v_29429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28842_29427,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_29428);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29428),v_29429);


var G__29432 = seq__28838_29418;
var G__29433 = chunk__28839_29419;
var G__29434 = count__28840_29420;
var G__29435 = (i__28841_29421 + (1));
seq__28838_29418 = G__29432;
chunk__28839_29419 = G__29433;
count__28840_29420 = G__29434;
i__28841_29421 = G__29435;
continue;
} else {
var temp__5457__auto___29436 = cljs.core.seq(seq__28838_29418);
if(temp__5457__auto___29436){
var seq__28838_29437__$1 = temp__5457__auto___29436;
if(cljs.core.chunked_seq_QMARK_(seq__28838_29437__$1)){
var c__4461__auto___29439 = cljs.core.chunk_first(seq__28838_29437__$1);
var G__29440 = cljs.core.chunk_rest(seq__28838_29437__$1);
var G__29441 = c__4461__auto___29439;
var G__29442 = cljs.core.count(c__4461__auto___29439);
var G__29443 = (0);
seq__28838_29418 = G__29440;
chunk__28839_29419 = G__29441;
count__28840_29420 = G__29442;
i__28841_29421 = G__29443;
continue;
} else {
var vec__28848_29444 = cljs.core.first(seq__28838_29437__$1);
var k_29445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848_29444,(0),null);
var v_29446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848_29444,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_29445);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29445),v_29446);


var G__29448 = cljs.core.next(seq__28838_29437__$1);
var G__29449 = null;
var G__29450 = (0);
var G__29451 = (0);
seq__28838_29418 = G__29448;
chunk__28839_29419 = G__29449;
count__28840_29420 = G__29450;
i__28841_29421 = G__29451;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__28854 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(1),null);
var seq__28857_29457 = cljs.core.seq(node_children);
var chunk__28859_29458 = null;
var count__28860_29459 = (0);
var i__28861_29460 = (0);
while(true){
if((i__28861_29460 < count__28860_29459)){
var child_struct_29461 = chunk__28859_29458.cljs$core$IIndexed$_nth$arity$2(null,i__28861_29460);
if((!((child_struct_29461 == null)))){
if(typeof child_struct_29461 === 'string'){
var text_29467 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29467),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_29461)].join(''));
} else {
var children_29468 = shadow.dom.svg_node(child_struct_29461);
if(cljs.core.seq_QMARK_(children_29468)){
var seq__28864_29469 = cljs.core.seq(children_29468);
var chunk__28866_29470 = null;
var count__28867_29471 = (0);
var i__28868_29472 = (0);
while(true){
if((i__28868_29472 < count__28867_29471)){
var child_29480 = chunk__28866_29470.cljs$core$IIndexed$_nth$arity$2(null,i__28868_29472);
if(cljs.core.truth_(child_29480)){
node.appendChild(child_29480);


var G__29481 = seq__28864_29469;
var G__29482 = chunk__28866_29470;
var G__29483 = count__28867_29471;
var G__29484 = (i__28868_29472 + (1));
seq__28864_29469 = G__29481;
chunk__28866_29470 = G__29482;
count__28867_29471 = G__29483;
i__28868_29472 = G__29484;
continue;
} else {
var G__29486 = seq__28864_29469;
var G__29487 = chunk__28866_29470;
var G__29488 = count__28867_29471;
var G__29489 = (i__28868_29472 + (1));
seq__28864_29469 = G__29486;
chunk__28866_29470 = G__29487;
count__28867_29471 = G__29488;
i__28868_29472 = G__29489;
continue;
}
} else {
var temp__5457__auto___29490 = cljs.core.seq(seq__28864_29469);
if(temp__5457__auto___29490){
var seq__28864_29492__$1 = temp__5457__auto___29490;
if(cljs.core.chunked_seq_QMARK_(seq__28864_29492__$1)){
var c__4461__auto___29493 = cljs.core.chunk_first(seq__28864_29492__$1);
var G__29494 = cljs.core.chunk_rest(seq__28864_29492__$1);
var G__29495 = c__4461__auto___29493;
var G__29496 = cljs.core.count(c__4461__auto___29493);
var G__29498 = (0);
seq__28864_29469 = G__29494;
chunk__28866_29470 = G__29495;
count__28867_29471 = G__29496;
i__28868_29472 = G__29498;
continue;
} else {
var child_29505 = cljs.core.first(seq__28864_29492__$1);
if(cljs.core.truth_(child_29505)){
node.appendChild(child_29505);


var G__29506 = cljs.core.next(seq__28864_29492__$1);
var G__29507 = null;
var G__29508 = (0);
var G__29509 = (0);
seq__28864_29469 = G__29506;
chunk__28866_29470 = G__29507;
count__28867_29471 = G__29508;
i__28868_29472 = G__29509;
continue;
} else {
var G__29511 = cljs.core.next(seq__28864_29492__$1);
var G__29512 = null;
var G__29513 = (0);
var G__29514 = (0);
seq__28864_29469 = G__29511;
chunk__28866_29470 = G__29512;
count__28867_29471 = G__29513;
i__28868_29472 = G__29514;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29468);
}
}


var G__29515 = seq__28857_29457;
var G__29516 = chunk__28859_29458;
var G__29517 = count__28860_29459;
var G__29518 = (i__28861_29460 + (1));
seq__28857_29457 = G__29515;
chunk__28859_29458 = G__29516;
count__28860_29459 = G__29517;
i__28861_29460 = G__29518;
continue;
} else {
var G__29519 = seq__28857_29457;
var G__29520 = chunk__28859_29458;
var G__29521 = count__28860_29459;
var G__29522 = (i__28861_29460 + (1));
seq__28857_29457 = G__29519;
chunk__28859_29458 = G__29520;
count__28860_29459 = G__29521;
i__28861_29460 = G__29522;
continue;
}
} else {
var temp__5457__auto___29523 = cljs.core.seq(seq__28857_29457);
if(temp__5457__auto___29523){
var seq__28857_29524__$1 = temp__5457__auto___29523;
if(cljs.core.chunked_seq_QMARK_(seq__28857_29524__$1)){
var c__4461__auto___29526 = cljs.core.chunk_first(seq__28857_29524__$1);
var G__29527 = cljs.core.chunk_rest(seq__28857_29524__$1);
var G__29528 = c__4461__auto___29526;
var G__29529 = cljs.core.count(c__4461__auto___29526);
var G__29530 = (0);
seq__28857_29457 = G__29527;
chunk__28859_29458 = G__29528;
count__28860_29459 = G__29529;
i__28861_29460 = G__29530;
continue;
} else {
var child_struct_29531 = cljs.core.first(seq__28857_29524__$1);
if((!((child_struct_29531 == null)))){
if(typeof child_struct_29531 === 'string'){
var text_29532 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29532),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_29531)].join(''));
} else {
var children_29533 = shadow.dom.svg_node(child_struct_29531);
if(cljs.core.seq_QMARK_(children_29533)){
var seq__28874_29535 = cljs.core.seq(children_29533);
var chunk__28876_29536 = null;
var count__28877_29537 = (0);
var i__28878_29538 = (0);
while(true){
if((i__28878_29538 < count__28877_29537)){
var child_29540 = chunk__28876_29536.cljs$core$IIndexed$_nth$arity$2(null,i__28878_29538);
if(cljs.core.truth_(child_29540)){
node.appendChild(child_29540);


var G__29542 = seq__28874_29535;
var G__29543 = chunk__28876_29536;
var G__29544 = count__28877_29537;
var G__29545 = (i__28878_29538 + (1));
seq__28874_29535 = G__29542;
chunk__28876_29536 = G__29543;
count__28877_29537 = G__29544;
i__28878_29538 = G__29545;
continue;
} else {
var G__29546 = seq__28874_29535;
var G__29547 = chunk__28876_29536;
var G__29548 = count__28877_29537;
var G__29549 = (i__28878_29538 + (1));
seq__28874_29535 = G__29546;
chunk__28876_29536 = G__29547;
count__28877_29537 = G__29548;
i__28878_29538 = G__29549;
continue;
}
} else {
var temp__5457__auto___29550__$1 = cljs.core.seq(seq__28874_29535);
if(temp__5457__auto___29550__$1){
var seq__28874_29552__$1 = temp__5457__auto___29550__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28874_29552__$1)){
var c__4461__auto___29553 = cljs.core.chunk_first(seq__28874_29552__$1);
var G__29554 = cljs.core.chunk_rest(seq__28874_29552__$1);
var G__29555 = c__4461__auto___29553;
var G__29556 = cljs.core.count(c__4461__auto___29553);
var G__29557 = (0);
seq__28874_29535 = G__29554;
chunk__28876_29536 = G__29555;
count__28877_29537 = G__29556;
i__28878_29538 = G__29557;
continue;
} else {
var child_29558 = cljs.core.first(seq__28874_29552__$1);
if(cljs.core.truth_(child_29558)){
node.appendChild(child_29558);


var G__29559 = cljs.core.next(seq__28874_29552__$1);
var G__29560 = null;
var G__29561 = (0);
var G__29562 = (0);
seq__28874_29535 = G__29559;
chunk__28876_29536 = G__29560;
count__28877_29537 = G__29561;
i__28878_29538 = G__29562;
continue;
} else {
var G__29563 = cljs.core.next(seq__28874_29552__$1);
var G__29564 = null;
var G__29565 = (0);
var G__29566 = (0);
seq__28874_29535 = G__29563;
chunk__28876_29536 = G__29564;
count__28877_29537 = G__29565;
i__28878_29538 = G__29566;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29533);
}
}


var G__29567 = cljs.core.next(seq__28857_29524__$1);
var G__29568 = null;
var G__29569 = (0);
var G__29570 = (0);
seq__28857_29457 = G__29567;
chunk__28859_29458 = G__29568;
count__28860_29459 = G__29569;
i__28861_29460 = G__29570;
continue;
} else {
var G__29571 = cljs.core.next(seq__28857_29524__$1);
var G__29572 = null;
var G__29573 = (0);
var G__29574 = (0);
seq__28857_29457 = G__29571;
chunk__28859_29458 = G__29572;
count__28860_29459 = G__29573;
i__28861_29460 = G__29574;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__28881_29575 = shadow.dom._to_svg;
var G__28882_29576 = "string";
var G__28883_29577 = ((function (G__28881_29575,G__28882_29576){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__28881_29575,G__28882_29576))
;
goog.object.set(G__28881_29575,G__28882_29576,G__28883_29577);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__28890_29579 = shadow.dom._to_svg;
var G__28891_29580 = "null";
var G__28892_29581 = ((function (G__28890_29579,G__28891_29580){
return (function (_){
return null;
});})(G__28890_29579,G__28891_29580))
;
goog.object.set(G__28890_29579,G__28891_29580,G__28892_29581);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29583 = arguments.length;
var i__4642__auto___29584 = (0);
while(true){
if((i__4642__auto___29584 < len__4641__auto___29583)){
args__4647__auto__.push((arguments[i__4642__auto___29584]));

var G__29585 = (i__4642__auto___29584 + (1));
i__4642__auto___29584 = G__29585;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq28895){
var G__28896 = cljs.core.first(seq28895);
var seq28895__$1 = cljs.core.next(seq28895);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28896,seq28895__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__28903 = arguments.length;
switch (G__28903) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__28909_29589 = shadow.dom.dom_node(el);
var G__28910_29590 = cljs.core.name(event);
var G__28911_29591 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__28909_29589,G__28910_29590,G__28911_29591) : shadow.dom.dom_listen.call(null,G__28909_29589,G__28910_29590,G__28911_29591));

if(cljs.core.truth_((function (){var and__4036__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4036__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4036__auto__;
}
})())){
var c__26871__auto___29593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto___29593,buf,chan,event_fn){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto___29593,buf,chan,event_fn){
return (function (state_28919){
var state_val_28920 = (state_28919[(1)]);
if((state_val_28920 === (1))){
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28919__$1,(2),once_or_cleanup);
} else {
if((state_val_28920 === (2))){
var inst_28916 = (state_28919[(2)]);
var inst_28917 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_28919__$1 = (function (){var statearr_28925 = state_28919;
(statearr_28925[(7)] = inst_28916);

return statearr_28925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28919__$1,inst_28917);
} else {
return null;
}
}
});})(c__26871__auto___29593,buf,chan,event_fn))
;
return ((function (switch__26770__auto__,c__26871__auto___29593,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__26771__auto__ = null;
var shadow$dom$state_machine__26771__auto____0 = (function (){
var statearr_28926 = [null,null,null,null,null,null,null,null];
(statearr_28926[(0)] = shadow$dom$state_machine__26771__auto__);

(statearr_28926[(1)] = (1));

return statearr_28926;
});
var shadow$dom$state_machine__26771__auto____1 = (function (state_28919){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_28919);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e28929){if((e28929 instanceof Object)){
var ex__26774__auto__ = e28929;
var statearr_28930_29607 = state_28919;
(statearr_28930_29607[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29608 = state_28919;
state_28919 = G__29608;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
shadow$dom$state_machine__26771__auto__ = function(state_28919){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__26771__auto____0.call(this);
case 1:
return shadow$dom$state_machine__26771__auto____1.call(this,state_28919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__26771__auto____0;
shadow$dom$state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__26771__auto____1;
return shadow$dom$state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto___29593,buf,chan,event_fn))
})();
var state__26873__auto__ = (function (){var statearr_28933 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_28933[(6)] = c__26871__auto___29593);

return statearr_28933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto___29593,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
