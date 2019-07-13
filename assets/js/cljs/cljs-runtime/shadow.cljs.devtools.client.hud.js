goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_url_base()),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__26871__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto__,req){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto__,req){
return (function (state_30193){
var state_val_30194 = (state_30193[(1)]);
if((state_val_30194 === (7))){
var state_30193__$1 = state_30193;
var statearr_30195_30303 = state_30193__$1;
(statearr_30195_30303[(2)] = false);

(statearr_30195_30303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (1))){
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30193__$1,(2),req);
} else {
if((state_val_30194 === (4))){
var inst_30157 = (state_30193[(7)]);
var inst_30163 = (inst_30157 == null);
var inst_30164 = cljs.core.not(inst_30163);
var state_30193__$1 = state_30193;
if(inst_30164){
var statearr_30196_30304 = state_30193__$1;
(statearr_30196_30304[(1)] = (6));

} else {
var statearr_30197_30307 = state_30193__$1;
(statearr_30197_30307[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (15))){
var state_30193__$1 = state_30193;
var statearr_30198_30308 = state_30193__$1;
(statearr_30198_30308[(2)] = null);

(statearr_30198_30308[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (13))){
var inst_30157 = (state_30193[(7)]);
var state_30193__$1 = state_30193;
var statearr_30199_30309 = state_30193__$1;
(statearr_30199_30309[(2)] = inst_30157);

(statearr_30199_30309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (6))){
var inst_30157 = (state_30193[(7)]);
var inst_30166 = inst_30157.cljs$lang$protocol_mask$partition0$;
var inst_30167 = (inst_30166 & (64));
var inst_30168 = inst_30157.cljs$core$ISeq$;
var inst_30169 = (cljs.core.PROTOCOL_SENTINEL === inst_30168);
var inst_30170 = ((inst_30167) || (inst_30169));
var state_30193__$1 = state_30193;
if(cljs.core.truth_(inst_30170)){
var statearr_30200_30310 = state_30193__$1;
(statearr_30200_30310[(1)] = (9));

} else {
var statearr_30201_30311 = state_30193__$1;
(statearr_30201_30311[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (17))){
var inst_30189 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30202_30312 = state_30193__$1;
(statearr_30202_30312[(2)] = inst_30189);

(statearr_30202_30312[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (3))){
var state_30193__$1 = state_30193;
var statearr_30203_30313 = state_30193__$1;
(statearr_30203_30313[(2)] = null);

(statearr_30203_30313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (12))){
var inst_30157 = (state_30193[(7)]);
var inst_30179 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30157);
var state_30193__$1 = state_30193;
var statearr_30204_30315 = state_30193__$1;
(statearr_30204_30315[(2)] = inst_30179);

(statearr_30204_30315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (2))){
var inst_30157 = (state_30193[(7)]);
var inst_30157__$1 = (state_30193[(2)]);
var inst_30158 = (inst_30157__$1 == null);
var state_30193__$1 = (function (){var statearr_30205 = state_30193;
(statearr_30205[(7)] = inst_30157__$1);

return statearr_30205;
})();
if(cljs.core.truth_(inst_30158)){
var statearr_30206_30316 = state_30193__$1;
(statearr_30206_30316[(1)] = (3));

} else {
var statearr_30207_30317 = state_30193__$1;
(statearr_30207_30317[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (11))){
var inst_30174 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
var statearr_30208_30318 = state_30193__$1;
(statearr_30208_30318[(2)] = inst_30174);

(statearr_30208_30318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (9))){
var state_30193__$1 = state_30193;
var statearr_30209_30319 = state_30193__$1;
(statearr_30209_30319[(2)] = true);

(statearr_30209_30319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (5))){
var inst_30191 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30193__$1,inst_30191);
} else {
if((state_val_30194 === (14))){
var inst_30182 = (state_30193[(8)]);
var inst_30182__$1 = (state_30193[(2)]);
var inst_30183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30182__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_30184 = (inst_30183 === (0));
var state_30193__$1 = (function (){var statearr_30210 = state_30193;
(statearr_30210[(8)] = inst_30182__$1);

return statearr_30210;
})();
if(cljs.core.truth_(inst_30184)){
var statearr_30211_30323 = state_30193__$1;
(statearr_30211_30323[(1)] = (15));

} else {
var statearr_30212_30324 = state_30193__$1;
(statearr_30212_30324[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (16))){
var inst_30182 = (state_30193[(8)]);
var inst_30187 = console.warn("file open failed",inst_30182);
var state_30193__$1 = state_30193;
var statearr_30213_30325 = state_30193__$1;
(statearr_30213_30325[(2)] = inst_30187);

(statearr_30213_30325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (10))){
var state_30193__$1 = state_30193;
var statearr_30214_30326 = state_30193__$1;
(statearr_30214_30326[(2)] = false);

(statearr_30214_30326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30194 === (8))){
var inst_30177 = (state_30193[(2)]);
var state_30193__$1 = state_30193;
if(cljs.core.truth_(inst_30177)){
var statearr_30215_30327 = state_30193__$1;
(statearr_30215_30327[(1)] = (12));

} else {
var statearr_30216_30328 = state_30193__$1;
(statearr_30216_30328[(1)] = (13));

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
});})(c__26871__auto__,req))
;
return ((function (switch__26770__auto__,c__26871__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto____0 = (function (){
var statearr_30217 = [null,null,null,null,null,null,null,null,null];
(statearr_30217[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto__);

(statearr_30217[(1)] = (1));

return statearr_30217;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto____1 = (function (state_30193){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_30193);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e30218){if((e30218 instanceof Object)){
var ex__26774__auto__ = e30218;
var statearr_30219_30333 = state_30193;
(statearr_30219_30333[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30335 = state_30193;
state_30193 = G__30335;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto__ = function(state_30193){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto____1.call(this,state_30193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto__,req))
})();
var state__26873__auto__ = (function (){var statearr_30220 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_30220[(6)] = c__26871__auto__);

return statearr_30220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto__,req))
);

return c__26871__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__30222 = arguments.length;
switch (G__30222) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5461__auto___30338 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5461__auto___30338 == null)){
} else {
var x_30340 = temp__5461__auto___30338;
shadow.dom.remove(x_30340);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var container_el = temp__5461__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__26871__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26871__auto__,el,container_el,temp__5461__auto__){
return (function (){
var f__26872__auto__ = (function (){var switch__26770__auto__ = ((function (c__26871__auto__,el,container_el,temp__5461__auto__){
return (function (state_30235){
var state_val_30236 = (state_30235[(1)]);
if((state_val_30236 === (1))){
var inst_30223 = cljs.core.async.timeout((250));
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30235__$1,(2),inst_30223);
} else {
if((state_val_30236 === (2))){
var inst_30225 = (state_30235[(2)]);
var inst_30226 = [el];
var inst_30227 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_30228 = [inst_30227];
var inst_30229 = cljs.core.PersistentHashMap.fromArrays(inst_30226,inst_30228);
var inst_30230 = shadow.animate.start((250),inst_30229);
var state_30235__$1 = (function (){var statearr_30237 = state_30235;
(statearr_30237[(7)] = inst_30225);

return statearr_30237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30235__$1,(3),inst_30230);
} else {
if((state_val_30236 === (3))){
var inst_30232 = (state_30235[(2)]);
var inst_30233 = shadow.dom.remove(container_el);
var state_30235__$1 = (function (){var statearr_30238 = state_30235;
(statearr_30238[(8)] = inst_30232);

return statearr_30238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30235__$1,inst_30233);
} else {
return null;
}
}
}
});})(c__26871__auto__,el,container_el,temp__5461__auto__))
;
return ((function (switch__26770__auto__,c__26871__auto__,el,container_el,temp__5461__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto____0 = (function (){
var statearr_30239 = [null,null,null,null,null,null,null,null,null];
(statearr_30239[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto__);

(statearr_30239[(1)] = (1));

return statearr_30239;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto____1 = (function (state_30235){
while(true){
var ret_value__26772__auto__ = (function (){try{while(true){
var result__26773__auto__ = switch__26770__auto__(state_30235);
if(cljs.core.keyword_identical_QMARK_(result__26773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26773__auto__;
}
break;
}
}catch (e30240){if((e30240 instanceof Object)){
var ex__26774__auto__ = e30240;
var statearr_30241_30345 = state_30235;
(statearr_30241_30345[(5)] = ex__26774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30240;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30350 = state_30235;
state_30235 = G__30350;
continue;
} else {
return ret_value__26772__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto__ = function(state_30235){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto____1.call(this,state_30235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26771__auto__;
})()
;})(switch__26770__auto__,c__26871__auto__,el,container_el,temp__5461__auto__))
})();
var state__26873__auto__ = (function (){var statearr_30242 = (f__26872__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26872__auto__.cljs$core$IFn$_invoke$arity$0() : f__26872__auto__.call(null));
(statearr_30242[(6)] = c__26871__auto__);

return statearr_30242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26873__auto__);
});})(c__26871__auto__,el,container_el,temp__5461__auto__))
);

return c__26871__auto__;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var el = temp__5461__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var d = temp__5461__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4434__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__30258(s__30259){
return (new cljs.core.LazySeq(null,(function (){
var s__30259__$1 = s__30259;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__30259__$1);
if(temp__5457__auto__){
var s__30259__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30259__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__30259__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__30261 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__30260 = (0);
while(true){
if((i__30260 < size__4433__auto__)){
var vec__30262 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__30260);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30262,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30262,(1),null);
cljs.core.chunk_append(b__30261,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__30266 = "%4d | %s";
var G__30267 = (((1) + idx) + start_idx);
var G__30268 = text;
return goog.string.format(G__30266,G__30267,G__30268);
})()], null));

var G__30352 = (i__30260 + (1));
i__30260 = G__30352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30261),shadow$cljs$devtools$client$hud$source_line_html_$_iter__30258(cljs.core.chunk_rest(s__30259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30261),null);
}
} else {
var vec__30269 = cljs.core.first(s__30259__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__30272 = "%4d | %s";
var G__30273 = (((1) + idx) + start_idx);
var G__30274 = text;
return goog.string.format(G__30272,G__30273,G__30274);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__30258(cljs.core.rest(s__30259__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__30277 = arguments.length;
switch (G__30277) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__30278){
var map__30279 = p__30278;
var map__30279__$1 = (((((!((map__30279 == null))))?(((((map__30279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30279):map__30279);
var warning = map__30279__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30279__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30279__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30279__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30279__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__30279,map__30279__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__30279,map__30279__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__30281){
var map__30282 = p__30281;
var map__30282__$1 = (((((!((map__30282 == null))))?(((((map__30282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30282):map__30282);
var warning = map__30282__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30282__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30282__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30282__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30282__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30282__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30282__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__30284 = source_excerpt;
var map__30284__$1 = (((((!((map__30284 == null))))?(((((map__30284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30284):map__30284);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30284__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30284__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30284__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30284__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4047__auto__ = column;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__30287){
var map__30288 = p__30287;
var map__30288__$1 = (((((!((map__30288 == null))))?(((((map__30288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30288):map__30288);
var msg = map__30288__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30288__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30288__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__30290 = info;
var map__30290__$1 = (((((!((map__30290 == null))))?(((((map__30290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30290):map__30290);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30290__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__30290,map__30290__$1,sources,map__30288,map__30288__$1,msg,type,info){
return (function (p1__30286_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__30286_SHARP_));
});})(map__30290,map__30290__$1,sources,map__30288,map__30288__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4434__auto__ = ((function (map__30290,map__30290__$1,sources,sources_with_warnings,map__30288,map__30288__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__30292(s__30293){
return (new cljs.core.LazySeq(null,((function (map__30290,map__30290__$1,sources,sources_with_warnings,map__30288,map__30288__$1,msg,type,info){
return (function (){
var s__30293__$1 = s__30293;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__30293__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__30298 = cljs.core.first(xs__6012__auto__);
var map__30298__$1 = (((((!((map__30298 == null))))?(((((map__30298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30298):map__30298);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30298__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4430__auto__ = ((function (s__30293__$1,map__30298,map__30298__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__30290,map__30290__$1,sources,sources_with_warnings,map__30288,map__30288__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__30292_$_iter__30294(s__30295){
return (new cljs.core.LazySeq(null,((function (s__30293__$1,map__30298,map__30298__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__30290,map__30290__$1,sources,sources_with_warnings,map__30288,map__30288__$1,msg,type,info){
return (function (){
var s__30295__$1 = s__30295;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__30295__$1);
if(temp__5457__auto____$1){
var s__30295__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30295__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__30295__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__30297 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__30296 = (0);
while(true){
if((i__30296 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__30296);
cljs.core.chunk_append(b__30297,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__30423 = (i__30296 + (1));
i__30296 = G__30423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30297),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__30292_$_iter__30294(cljs.core.chunk_rest(s__30295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30297),null);
}
} else {
var warning = cljs.core.first(s__30295__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__30292_$_iter__30294(cljs.core.rest(s__30295__$2)));
}
} else {
return null;
}
break;
}
});})(s__30293__$1,map__30298,map__30298__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__30290,map__30290__$1,sources,sources_with_warnings,map__30288,map__30288__$1,msg,type,info))
,null,null));
});})(s__30293__$1,map__30298,map__30298__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__30290,map__30290__$1,sources,sources_with_warnings,map__30288,map__30288__$1,msg,type,info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__30292(cljs.core.rest(s__30293__$1)));
} else {
var G__30432 = cljs.core.rest(s__30293__$1);
s__30293__$1 = G__30432;
continue;
}
} else {
return null;
}
break;
}
});})(map__30290,map__30290__$1,sources,sources_with_warnings,map__30288,map__30288__$1,msg,type,info))
,null,null));
});})(map__30290,map__30290__$1,sources,sources_with_warnings,map__30288,map__30288__$1,msg,type,info))
;
return iter__4434__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__30300){
var map__30301 = p__30300;
var map__30301__$1 = (((((!((map__30301 == null))))?(((((map__30301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30301):map__30301);
var msg = map__30301__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30301__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var x = temp__5461__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
