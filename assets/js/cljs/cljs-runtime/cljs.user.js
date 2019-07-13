goog.provide('cljs.user');
goog.require('cljs.core');
goog.require('shadow.loader');
cljs.user.cb_STAR_ = (function cljs$user$cb_STAR_(message){
return (function (){
return console.log(message);
});
});
if((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined') && (typeof cljs.user.render_STAR_ !== 'undefined')){
} else {
cljs.user.render_STAR_ = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__13558 = cljs.core.get_global_hierarchy;
return (fexpr__13558.cljs$core$IFn$_invoke$arity$0 ? fexpr__13558.cljs$core$IFn$_invoke$arity$0() : fexpr__13558.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.user","render*"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (modules){
return modules;
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.user.render_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"footer-subscription-form",(function (_){
return com.clupclup.app_script.footer_subscription_form.render();
}));
cljs.user.render_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"hamburger-menu",(function (_){
return com.clupclup.app_script.hamburger_menu.render();
}));
cljs.user.render_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"home-subscription-form",(function (_){
return com.clupclup.app_script.home_subscription_form.render();
}));
cljs.user.render_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.Keyword(null,"noop","noop",-673731258);
}));
cljs.user.render = (function cljs$user$render(module){
return (cljs.user.render_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.user.render_STAR_.cljs$core$IFn$_invoke$arity$1(module) : cljs.user.render_STAR_.call(null,module));
});
goog.exportSymbol('cljs.user.render', cljs.user.render);
cljs.user.reset = (function cljs$user$reset(var_args){
var G__13560 = arguments.length;
switch (G__13560) {
case 0:
return cljs.user.reset.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.user.reset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs.user.reset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('cljs.user.reset', cljs.user.reset);

cljs.user.reset.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.user.reset.cljs$core$IFn$_invoke$arity$1("dev");
});

cljs.user.reset.cljs$core$IFn$_invoke$arity$1 = (function (module){
return cljs.user.reset.cljs$core$IFn$_invoke$arity$3(module,cljs.user.cb_STAR_(["Module ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module)," loaded!"].join('')),cljs.user.cb_STAR_(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module)," module!"].join('')));
});

cljs.user.reset.cljs$core$IFn$_invoke$arity$3 = (function (module,ok_cb,err_cb){
return shadow.loader.load(module).then(ok_cb,err_cb);
});

cljs.user.reset.cljs$lang$maxFixedArity = 3;

cljs.user.reset_all_STAR_ = (function cljs$user$reset_all_STAR_(modules){
var temp__5455__auto__ = cljs.core.first(modules);
if(cljs.core.truth_(temp__5455__auto__)){
var module = temp__5455__auto__;
console.log(["Reseting ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module)].join(''));

return cljs.user.reset.cljs$core$IFn$_invoke$arity$3(module,((function (module,temp__5455__auto__){
return (function (){
cljs.user.render(module);

var G__13561 = cljs.core.rest(modules);
return (cljs.user.reset_all_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.user.reset_all_STAR_.cljs$core$IFn$_invoke$arity$1(G__13561) : cljs.user.reset_all_STAR_.call(null,G__13561));
});})(module,temp__5455__auto__))
,((function (module,temp__5455__auto__){
return (function (){
var G__13562 = cljs.core.PersistentVector.EMPTY;
return (cljs.user.reset_all_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.user.reset_all_STAR_.cljs$core$IFn$_invoke$arity$1(G__13562) : cljs.user.reset_all_STAR_.call(null,G__13562));
});})(module,temp__5455__auto__))
);
} else {
return console.log("Done!");
}
});
cljs.user.reset_all = (function cljs$user$reset_all(){
return cljs.user.reset_all_STAR_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dev","footer-subscription-form","hamburger-menu","home-subscription-form"], null));
});
cljs.user.init = (function cljs$user$init(){
return cljs.user.reset.cljs$core$IFn$_invoke$arity$0();
});
goog.exportSymbol('cljs.user.init', cljs.user.init);

//# sourceMappingURL=cljs.user.js.map
