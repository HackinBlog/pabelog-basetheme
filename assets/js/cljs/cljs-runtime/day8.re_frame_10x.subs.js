goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__23881_24482 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__23882_24483 = ((function (G__23881_24482){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__23881_24482))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23881_24482,G__23882_24483) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23881_24482,G__23882_24483));
var G__23883_24484 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__23884_24485 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23885_24486 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23886_24487 = ((function (G__23883_24484,G__23884_24485,G__23885_24486){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__23883_24484,G__23884_24485,G__23885_24486))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23883_24484,G__23884_24485,G__23885_24486,G__23886_24487) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23883_24484,G__23884_24485,G__23885_24486,G__23886_24487));
var G__23887_24491 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__23888_24492 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23889_24493 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__23890_24494 = ((function (G__23887_24491,G__23888_24492,G__23889_24493){
return (function (panel_width_PERCENT_,p__23891){
var vec__23892 = p__23891;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23892,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23892,(1),null);
return (((function (){var G__23895 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__23895);
})() * n) / 100.0);
});})(G__23887_24491,G__23888_24492,G__23889_24493))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23887_24491,G__23888_24492,G__23889_24493,G__23890_24494) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23887_24491,G__23888_24492,G__23889_24493,G__23890_24494));
var G__23896_24499 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__23897_24500 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23898_24501 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23899_24502 = ((function (G__23896_24499,G__23897_24500,G__23898_24501){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});})(G__23896_24499,G__23897_24500,G__23898_24501))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23896_24499,G__23897_24500,G__23898_24501,G__23899_24502) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23896_24499,G__23897_24500,G__23898_24501,G__23899_24502));
var G__23901_24503 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__23902_24504 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23903_24505 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__23904_24506 = ((function (G__23901_24503,G__23902_24504,G__23903_24505){
return (function (width,p__23906){
var vec__23908 = p__23906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23908,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23908,(1),null);
return ((function (){var G__23911 = (width / n);
return Math.ceil(G__23911);
})() * n);
});})(G__23901_24503,G__23902_24504,G__23903_24505))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23901_24503,G__23902_24504,G__23903_24505,G__23904_24506) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23901_24503,G__23902_24504,G__23903_24505,G__23904_24506));
var G__23912_24523 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__23913_24524 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23914_24525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23915_24526 = ((function (G__23912_24523,G__23913_24524,G__23914_24525){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__23912_24523,G__23913_24524,G__23914_24525))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23912_24523,G__23913_24524,G__23914_24525,G__23915_24526) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23912_24523,G__23913_24524,G__23914_24525,G__23915_24526));
var G__23916_24530 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__23917_24531 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23918_24532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23919_24533 = ((function (G__23916_24530,G__23917_24531,G__23918_24532){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__23916_24530,G__23917_24531,G__23918_24532))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23916_24530,G__23917_24531,G__23918_24532,G__23919_24533) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23916_24530,G__23917_24531,G__23918_24532,G__23919_24533));
var G__23934_24534 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__23935_24535 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23936_24536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23937_24537 = ((function (G__23934_24534,G__23935_24535,G__23936_24536){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23934_24534,G__23935_24535,G__23936_24536))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23934_24534,G__23935_24535,G__23936_24536,G__23937_24537) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23934_24534,G__23935_24535,G__23936_24536,G__23937_24537));
var G__23938_24538 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__23939_24539 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23940_24540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23941_24541 = ((function (G__23938_24538,G__23939_24539,G__23940_24540){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23938_24538,G__23939_24539,G__23940_24540))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23938_24538,G__23939_24539,G__23940_24540,G__23941_24541) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23938_24538,G__23939_24539,G__23940_24540,G__23941_24541));
var G__23946_24542 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__23947_24543 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23948_24544 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23949_24545 = ((function (G__23946_24542,G__23947_24543,G__23948_24544){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__23946_24542,G__23947_24543,G__23948_24544))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23946_24542,G__23947_24543,G__23948_24544,G__23949_24545) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23946_24542,G__23947_24543,G__23948_24544,G__23949_24545));
var G__23950_24546 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__23951_24547 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23952_24548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23953_24549 = ((function (G__23950_24546,G__23951_24547,G__23952_24548){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23950_24546,G__23951_24547,G__23952_24548))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23950_24546,G__23951_24547,G__23952_24548,G__23953_24549) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23950_24546,G__23951_24547,G__23952_24548,G__23953_24549));
var G__23954_24550 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__23955_24551 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23956_24552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23957_24553 = ((function (G__23954_24550,G__23955_24551,G__23956_24552){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23954_24550,G__23955_24551,G__23956_24552))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23954_24550,G__23955_24551,G__23956_24552,G__23957_24553) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23954_24550,G__23955_24551,G__23956_24552,G__23957_24553));
var G__23958_24554 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__23959_24555 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23960_24556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__23961_24557 = ((function (G__23958_24554,G__23959_24555,G__23960_24556){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__23958_24554,G__23959_24555,G__23960_24556))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23958_24554,G__23959_24555,G__23960_24556,G__23961_24557) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23958_24554,G__23959_24555,G__23960_24556,G__23961_24557));
var G__23962_24558 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__23963_24559 = ((function (G__23962_24558){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__23962_24558))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23962_24558,G__23963_24559) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23962_24558,G__23963_24559));
var G__23964_24560 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__23965_24561 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23966_24562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23967_24563 = ((function (G__23964_24560,G__23965_24561,G__23966_24562){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__23964_24560,G__23965_24561,G__23966_24562))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23964_24560,G__23965_24561,G__23966_24562,G__23967_24563) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23964_24560,G__23965_24561,G__23966_24562,G__23967_24563));
var G__23968_24564 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__23969_24565 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23970_24566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__23971_24567 = ((function (G__23968_24564,G__23969_24565,G__23970_24566){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__23968_24564,G__23969_24565,G__23970_24566))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23968_24564,G__23969_24565,G__23970_24566,G__23971_24567) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23968_24564,G__23969_24565,G__23970_24566,G__23971_24567));
var G__23973_24573 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__23974_24574 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23975_24575 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23976_24576 = ((function (G__23973_24573,G__23974_24574,G__23975_24575){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__23973_24573,G__23974_24574,G__23975_24575){
return (function (p1__23972_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__23972_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__23972_SHARP_));
});})(G__23973_24573,G__23974_24574,G__23975_24575))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__23973_24573,G__23974_24574,G__23975_24575))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23973_24573,G__23974_24574,G__23975_24575,G__23976_24576) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23973_24573,G__23974_24574,G__23975_24575,G__23976_24576));
var G__23977_24578 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__23978_24579 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23979_24580 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23980_24581 = ((function (G__23977_24578,G__23978_24579,G__23979_24580){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__23977_24578,G__23978_24579,G__23979_24580))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23977_24578,G__23978_24579,G__23979_24580,G__23980_24581) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23977_24578,G__23978_24579,G__23979_24580,G__23980_24581));
var G__23981_24582 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__23982_24583 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23983_24584 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23984_24585 = ((function (G__23981_24582,G__23982_24583,G__23983_24584){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__23981_24582,G__23982_24583,G__23983_24584))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23981_24582,G__23982_24583,G__23983_24584,G__23984_24585) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23981_24582,G__23982_24583,G__23983_24584,G__23984_24585));
var G__23985_24590 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__23986_24591 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23987_24592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__23988_24593 = ((function (G__23985_24590,G__23986_24591,G__23987_24592){
return (function (expansions,p__23989){
var vec__23990 = p__23989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23990,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23990,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__23985_24590,G__23986_24591,G__23987_24592))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23985_24590,G__23986_24591,G__23987_24592,G__23988_24593) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23985_24590,G__23986_24591,G__23987_24592,G__23988_24593));
var G__23993_24598 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__23994_24599 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__23995_24600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__23996_24601 = ((function (G__23993_24598,G__23994_24599,G__23995_24600){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__23993_24598,G__23994_24599,G__23995_24600))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__23993_24598,G__23994_24599,G__23995_24600,G__23996_24601) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23993_24598,G__23994_24599,G__23995_24600,G__23996_24601));
var G__23997_24602 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__23998_24603 = ((function (G__23997_24602){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23997_24602))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23997_24602,G__23998_24603) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23997_24602,G__23998_24603));
var G__23999_24604 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__24000_24605 = ((function (G__23999_24604){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__23999_24604))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23999_24604,G__24000_24605) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__23999_24604,G__24000_24605));
var G__24001_24606 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__24002_24607 = ((function (G__24001_24606){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__24001_24606))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__24001_24606,G__24002_24607) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24001_24606,G__24002_24607));
var G__24003_24608 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__24004_24609 = ((function (G__24003_24608){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__24003_24608))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__24003_24608,G__24004_24609) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24003_24608,G__24004_24609));
var G__24005_24611 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__24006_24612 = ((function (G__24005_24611){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__24005_24611))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__24005_24611,G__24006_24612) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24005_24611,G__24006_24612));
var G__24007_24618 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__24008_24619 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24009_24620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__24010_24621 = ((function (G__24007_24618,G__24008_24619,G__24009_24620){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__24007_24618,G__24008_24619,G__24009_24620))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24007_24618,G__24008_24619,G__24009_24620,G__24010_24621) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24007_24618,G__24008_24619,G__24009_24620,G__24010_24621));
var G__24011_24622 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__24012_24623 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24013_24624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__24014_24625 = ((function (G__24011_24622,G__24012_24623,G__24013_24624){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__24011_24622,G__24012_24623,G__24013_24624))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24011_24622,G__24012_24623,G__24013_24624,G__24014_24625) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24011_24622,G__24012_24623,G__24013_24624,G__24014_24625));
var G__24015_24630 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__24016_24631 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24017_24632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__24018_24633 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24019_24634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__24020_24635 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24021_24636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__24022_24637 = ((function (G__24015_24630,G__24016_24631,G__24017_24632,G__24018_24633,G__24019_24634,G__24020_24635,G__24021_24636){
return (function (p__24023,_){
var vec__24024 = p__24023;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24024,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24024,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24024,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__24015_24630,G__24016_24631,G__24017_24632,G__24018_24633,G__24019_24634,G__24020_24635,G__24021_24636))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__24015_24630,G__24016_24631,G__24017_24632,G__24018_24633,G__24019_24634,G__24020_24635,G__24021_24636,G__24022_24637) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24015_24630,G__24016_24631,G__24017_24632,G__24018_24633,G__24019_24634,G__24020_24635,G__24021_24636,G__24022_24637));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__24030,_){
var vec__24031 = p__24030;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24031,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24031,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__24031,traces,filtered_views){
return (function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
});})(munged_ns,vec__24031,traces,filtered_views))
),traces);
});
var G__24034_24646 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__24035_24647 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24036_24648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__24037_24649 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24038_24650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__24039_24651 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24034_24646,G__24035_24647,G__24036_24648,G__24037_24649,G__24038_24650,G__24039_24651) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24034_24646,G__24035_24647,G__24036_24648,G__24037_24649,G__24038_24650,G__24039_24651));
var G__24040_24654 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__24041_24655 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24042_24656 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__24043_24657 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24044_24658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__24045_24659 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24040_24654,G__24041_24655,G__24042_24656,G__24043_24657,G__24044_24658,G__24045_24659) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24040_24654,G__24041_24655,G__24042_24656,G__24043_24657,G__24044_24658,G__24045_24659));
var G__24046_24660 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__24047_24661 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24048_24662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__24049_24663 = ((function (G__24046_24660,G__24047_24661,G__24048_24662){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__24046_24660,G__24047_24661,G__24048_24662))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24046_24660,G__24047_24661,G__24048_24662,G__24049_24663) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24046_24660,G__24047_24661,G__24048_24662,G__24049_24663));
var G__24050_24668 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__24051_24669 = ((function (G__24050_24668){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__24050_24668))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__24050_24668,G__24051_24669) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24050_24668,G__24051_24669));
var G__24052_24670 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__24053_24671 = ((function (G__24052_24670){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__24052_24670))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__24052_24670,G__24053_24671) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24052_24670,G__24053_24671));
var G__24054_24673 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__24055_24674 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24056_24675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__24057_24676 = ((function (G__24054_24673,G__24055_24674,G__24056_24675){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__24054_24673,G__24055_24674,G__24056_24675))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24054_24673,G__24055_24674,G__24056_24675,G__24057_24676) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24054_24673,G__24055_24674,G__24056_24675,G__24057_24676));
var G__24058_24686 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__24059_24687 = ((function (G__24058_24686){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__24058_24686))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__24058_24686,G__24059_24687) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24058_24686,G__24059_24687));
var G__24070_24688 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__24071_24689 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24072_24690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__24073_24691 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24074_24692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__24075_24693 = ((function (G__24070_24688,G__24071_24689,G__24072_24690,G__24073_24691,G__24074_24692){
return (function (p__24076,_){
var vec__24077 = p__24076;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24077,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24077,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__24070_24688,G__24071_24689,G__24072_24690,G__24073_24691,G__24074_24692))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24070_24688,G__24071_24689,G__24072_24690,G__24073_24691,G__24074_24692,G__24075_24693) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24070_24688,G__24071_24689,G__24072_24690,G__24073_24691,G__24074_24692,G__24075_24693));
var G__24080_24694 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__24081_24695 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24082_24696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__24083_24697 = ((function (G__24080_24694,G__24081_24695,G__24082_24696){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__24080_24694,G__24081_24695,G__24082_24696))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24080_24694,G__24081_24695,G__24082_24696,G__24083_24697) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24080_24694,G__24081_24695,G__24082_24696,G__24083_24697));
var G__24086_24699 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__24087_24700 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24088_24701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__24089_24702 = ((function (G__24086_24699,G__24087_24700,G__24088_24701){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__24086_24699,G__24087_24700,G__24088_24701))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24086_24699,G__24087_24700,G__24088_24701,G__24089_24702) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24086_24699,G__24087_24700,G__24088_24701,G__24089_24702));
var G__24092_24706 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__24093_24707 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24094_24708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__24095_24709 = ((function (G__24092_24706,G__24093_24707,G__24094_24708){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__24092_24706,G__24093_24707,G__24094_24708))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24092_24706,G__24093_24707,G__24094_24708,G__24095_24709) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24092_24706,G__24093_24707,G__24094_24708,G__24095_24709));
var G__24096_24710 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__24097_24711 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24098_24712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__24099_24713 = ((function (G__24096_24710,G__24097_24711,G__24098_24712){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__24096_24710,G__24097_24711,G__24098_24712))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24096_24710,G__24097_24711,G__24098_24712,G__24099_24713) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24096_24710,G__24097_24711,G__24098_24712,G__24099_24713));
var G__24100_24714 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__24101_24715 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24102_24716 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__24103_24717 = ((function (G__24100_24714,G__24101_24715,G__24102_24716){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__24100_24714,G__24101_24715,G__24102_24716))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24100_24714,G__24101_24715,G__24102_24716,G__24103_24717) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24100_24714,G__24101_24715,G__24102_24716,G__24103_24717));
var G__24104_24720 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__24105_24721 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24106_24722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__24107_24723 = ((function (G__24104_24720,G__24105_24721,G__24106_24722){
return (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});})(G__24104_24720,G__24105_24721,G__24106_24722))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24104_24720,G__24105_24721,G__24106_24722,G__24107_24723) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24104_24720,G__24105_24721,G__24106_24722,G__24107_24723));
var G__24108_24732 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__24109_24733 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24110_24734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__24111_24735 = ((function (G__24108_24732,G__24109_24733,G__24110_24734){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__24108_24732,G__24109_24733,G__24110_24734))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24108_24732,G__24109_24733,G__24110_24734,G__24111_24735) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24108_24732,G__24109_24733,G__24110_24734,G__24111_24735));
var G__24112_24737 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__24113_24738 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24114_24739 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__24115_24740 = ((function (G__24112_24737,G__24113_24738,G__24114_24739){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__24112_24737,G__24113_24738,G__24114_24739))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24112_24737,G__24113_24738,G__24114_24739,G__24115_24740) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24112_24737,G__24113_24738,G__24114_24739,G__24115_24740));
var G__24116_24744 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__24117_24745 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24118_24746 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__24119_24747 = ((function (G__24116_24744,G__24117_24745,G__24118_24746){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__24116_24744,G__24117_24745,G__24118_24746))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24116_24744,G__24117_24745,G__24118_24746,G__24119_24747) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24116_24744,G__24117_24745,G__24118_24746,G__24119_24747));
var G__24125_24748 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__24126_24749 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24127_24750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__24128_24751 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24129_24752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__24130_24753 = ((function (G__24125_24748,G__24126_24749,G__24127_24750,G__24128_24751,G__24129_24752){
return (function (p__24131){
var vec__24132 = p__24131;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__24125_24748,G__24126_24749,G__24127_24750,G__24128_24751,G__24129_24752))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24125_24748,G__24126_24749,G__24127_24750,G__24128_24751,G__24129_24752,G__24130_24753) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24125_24748,G__24126_24749,G__24127_24750,G__24128_24751,G__24129_24752,G__24130_24753));
var G__24135_24757 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__24136_24758 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24137_24759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__24138_24760 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24139_24761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__24140_24762 = ((function (G__24135_24757,G__24136_24758,G__24137_24759,G__24138_24760,G__24139_24761){
return (function (p__24141){
var vec__24142 = p__24141;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24142,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24142,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__24135_24757,G__24136_24758,G__24137_24759,G__24138_24760,G__24139_24761))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24135_24757,G__24136_24758,G__24137_24759,G__24138_24760,G__24139_24761,G__24140_24762) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24135_24757,G__24136_24758,G__24137_24759,G__24138_24760,G__24139_24761,G__24140_24762));
var G__24145_24770 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__24146_24771 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24147_24772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__24148_24773 = ((function (G__24145_24770,G__24146_24771,G__24147_24772){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__24145_24770,G__24146_24771,G__24147_24772))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24145_24770,G__24146_24771,G__24147_24772,G__24148_24773) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24145_24770,G__24146_24771,G__24147_24772,G__24148_24773));
var G__24150_24777 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__24151_24778 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24152_24779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__24153_24780 = ((function (G__24150_24777,G__24151_24778,G__24152_24779){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__24150_24777,G__24151_24778,G__24152_24779){
return (function (p1__24149_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__24149_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__24149_SHARP_)));
});})(G__24150_24777,G__24151_24778,G__24152_24779))
,traces);
});})(G__24150_24777,G__24151_24778,G__24152_24779))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24150_24777,G__24151_24778,G__24152_24779,G__24153_24780) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24150_24777,G__24151_24778,G__24152_24779,G__24153_24780));
var G__24154_24789 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__24155_24790 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24156_24791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__24157_24792 = ((function (G__24154_24789,G__24155_24790,G__24156_24791){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__24154_24789,G__24155_24790,G__24156_24791))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24154_24789,G__24155_24790,G__24156_24791,G__24157_24792) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24154_24789,G__24155_24790,G__24156_24791,G__24157_24792));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__24162 = arguments.length;
switch (G__24162) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___24801 = arguments.length;
var i__4642__auto___24802 = (0);
while(true){
if((i__4642__auto___24802 < len__4641__auto___24801)){
args_arr__4662__auto__.push((arguments[i__4642__auto___24802]));

var G__24804 = (i__4642__auto___24802 + (1));
i__4642__auto___24802 = G__24804;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4663__auto__);

}
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
});

/** @this {Function} */
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq24159){
var G__24160 = cljs.core.first(seq24159);
var seq24159__$1 = cljs.core.next(seq24159);
var G__24161 = cljs.core.first(seq24159__$1);
var seq24159__$2 = cljs.core.next(seq24159__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24160,G__24161,seq24159__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__24167_24809 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__24168_24810 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24169_24811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__24170_24812 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24171_24813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__24172_24814 = ((function (G__24167_24809,G__24168_24810,G__24169_24811,G__24170_24812,G__24171_24813){
return (function (p__24173,p__24174){
var vec__24175 = p__24173;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24175,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24175,(1),null);
var vec__24178 = p__24174;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24178,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24178,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__24183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24183,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24183,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__24167_24809,G__24168_24810,G__24169_24811,G__24170_24812,G__24171_24813))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24167_24809,G__24168_24810,G__24169_24811,G__24170_24812,G__24171_24813,G__24172_24814) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24167_24809,G__24168_24810,G__24169_24811,G__24170_24812,G__24171_24813,G__24172_24814));
var G__24186_24827 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__24187_24828 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24188_24829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__24189_24830 = ((function (G__24186_24827,G__24187_24828,G__24188_24829){
return (function (match){
var map__24190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__24190__$1 = (((((!((map__24190 == null))))?(((((map__24190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24190):map__24190);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24190__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24190__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24190__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24190__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__24186_24827,G__24187_24828,G__24188_24829))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24186_24827,G__24187_24828,G__24188_24829,G__24189_24830) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24186_24827,G__24187_24828,G__24188_24829,G__24189_24830));
var G__24193_24833 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__24194_24834 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24195_24835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__24196_24836 = ((function (G__24193_24833,G__24194_24834,G__24195_24835){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__24193_24833,G__24194_24834,G__24195_24835))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24193_24833,G__24194_24834,G__24195_24835,G__24196_24836) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24193_24833,G__24194_24834,G__24195_24835,G__24196_24836));
var G__24197_24841 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__24198_24842 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24199_24843 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__24200_24844 = ((function (G__24197_24841,G__24198_24842,G__24199_24843){
return (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});})(G__24197_24841,G__24198_24842,G__24199_24843))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24197_24841,G__24198_24842,G__24199_24843,G__24200_24844) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24197_24841,G__24198_24842,G__24199_24843,G__24200_24844));
var G__24201_24845 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__24202_24846 = ((function (G__24201_24845){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__24201_24845))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__24201_24845,G__24202_24846) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24201_24845,G__24202_24846));
var G__24203_24848 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__24204_24849 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24205_24850 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__24206_24851 = ((function (G__24203_24848,G__24204_24849,G__24205_24850){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__24203_24848,G__24204_24849,G__24205_24850))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24203_24848,G__24204_24849,G__24205_24850,G__24206_24851) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24203_24848,G__24204_24849,G__24205_24850,G__24206_24851));
var G__24207_24854 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__24208_24855 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24209_24856 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__24210_24857 = ((function (G__24207_24854,G__24208_24855,G__24209_24856){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__24207_24854,G__24208_24855,G__24209_24856))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24207_24854,G__24208_24855,G__24209_24856,G__24210_24857) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24207_24854,G__24208_24855,G__24209_24856,G__24210_24857));
var G__24211_24862 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__24212_24863 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24213_24864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__24214_24865 = ((function (G__24211_24862,G__24212_24863,G__24213_24864){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__24211_24862,G__24212_24863,G__24213_24864))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24211_24862,G__24212_24863,G__24213_24864,G__24214_24865) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24211_24862,G__24212_24863,G__24213_24864,G__24214_24865));
var G__24215_24867 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__24216_24868 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24217_24869 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__24218_24870 = ((function (G__24215_24867,G__24216_24868,G__24217_24869){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__24215_24867,G__24216_24868,G__24217_24869))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24215_24867,G__24216_24868,G__24217_24869,G__24218_24870) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24215_24867,G__24216_24868,G__24217_24869,G__24218_24870));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__24219_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__24219_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__24225){
return cljs.core.coll_QMARK_(G__24225);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__24229){
return cljs.core.map_QMARK_(G__24229);
}),(function (G__24229){
return cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__24229){
return cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__24229){
return cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__24229){
return cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__24229){
return cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__24229){
return cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__24229){
return ((cljs.core.map_QMARK_(G__24229)) && (cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__24229,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__24237){
return cljs.core.coll_QMARK_(G__24237);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__24238 = sub_type;
var G__24238__$1 = (((G__24238 instanceof cljs.core.Keyword))?G__24238.fqn:null);
switch (G__24238__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5455__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var sub_type = temp__5455__auto__;
var G__24907 = (exp - (1));
var G__24908 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__24909 = cljs.core.rest(order__$1);
exp = G__24907;
total = G__24908;
order__$1 = G__24909;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__24239 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__24239__$1 = (((G__24239 instanceof cljs.core.Keyword))?G__24239.fqn:null);
switch (G__24239__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__24240,p__24241){
var vec__24246 = p__24240;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24246,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24246,(1),null);
var vec__24249 = p__24241;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24249,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__24246,sub_info,sub_state,vec__24249,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__24246,sub_info,sub_state,vec__24249,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__24246,sub_info,sub_state,vec__24249,subscription){
return (function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
});})(remove_fn,vec__24246,sub_info,sub_state,vec__24249,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__24254_24931 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__24255_24932 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24256_24933 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__24257_24934 = ((function (G__24254_24931,G__24255_24932,G__24256_24933){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__24254_24931,G__24255_24932,G__24256_24933))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24254_24931,G__24255_24932,G__24256_24933,G__24257_24934) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24254_24931,G__24255_24932,G__24256_24933,G__24257_24934));
var G__24258_24939 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__24259_24940 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24260_24941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__24261_24942 = ((function (G__24258_24939,G__24259_24940,G__24260_24941){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__24258_24939,G__24259_24940,G__24260_24941))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24258_24939,G__24259_24940,G__24260_24941,G__24261_24942) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24258_24939,G__24259_24940,G__24260_24941,G__24261_24942));
var G__24262_24944 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__24263_24945 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24264_24946 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__24265_24947 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24266_24948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__24267_24949 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24262_24944,G__24263_24945,G__24264_24946,G__24265_24947,G__24266_24948,G__24267_24949) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24262_24944,G__24263_24945,G__24264_24946,G__24265_24947,G__24266_24948,G__24267_24949));
var G__24268_24954 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__24269_24955 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24270_24956 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__24271_24957 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24272_24958 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__24273_24959 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24268_24954,G__24269_24955,G__24270_24956,G__24271_24957,G__24272_24958,G__24273_24959) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24268_24954,G__24269_24955,G__24270_24956,G__24271_24957,G__24272_24958,G__24273_24959));
var G__24274_24960 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__24275_24961 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24276_24962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__24277_24963 = ((function (G__24274_24960,G__24275_24961,G__24276_24962){
return (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});})(G__24274_24960,G__24275_24961,G__24276_24962))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24274_24960,G__24275_24961,G__24276_24962,G__24277_24963) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24274_24960,G__24275_24961,G__24276_24962,G__24277_24963));
var G__24278_24964 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__24279_24965 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24280_24966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__24281_24967 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24282_24968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__24283_24969 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24284_24970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__24285_24971 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24286_24972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__24287_24973 = ((function (G__24278_24964,G__24279_24965,G__24280_24966,G__24281_24967,G__24282_24968,G__24283_24969,G__24284_24970,G__24285_24971,G__24286_24972){
return (function (p__24288){
var vec__24289 = p__24288;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24289,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24289,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24289,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24289,(3),null);
var compare_fn = ((function (vec__24289,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__24278_24964,G__24279_24965,G__24280_24966,G__24281_24967,G__24282_24968,G__24283_24969,G__24284_24970,G__24285_24971,G__24286_24972){
return (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});})(vec__24289,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__24278_24964,G__24279_24965,G__24280_24966,G__24281_24967,G__24282_24968,G__24283_24969,G__24284_24970,G__24285_24971,G__24286_24972))
;
var G__24296 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__24296__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__24296):G__24296);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__24296,G__24296__$1,compare_fn,vec__24289,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__24278_24964,G__24279_24965,G__24280_24966,G__24281_24967,G__24282_24968,G__24283_24969,G__24284_24970,G__24285_24971,G__24286_24972){
return (function (p__24297){
var map__24298 = p__24297;
var map__24298__$1 = (((((!((map__24298 == null))))?(((((map__24298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24298):map__24298);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24298__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24298__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4047__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
});})(G__24296,G__24296__$1,compare_fn,vec__24289,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins,G__24278_24964,G__24279_24965,G__24280_24966,G__24281_24967,G__24282_24968,G__24283_24969,G__24284_24970,G__24285_24971,G__24286_24972))
,G__24296__$1);
} else {
return G__24296__$1;
}
});})(G__24278_24964,G__24279_24965,G__24280_24966,G__24281_24967,G__24282_24968,G__24283_24969,G__24284_24970,G__24285_24971,G__24286_24972))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__24278_24964,G__24279_24965,G__24280_24966,G__24281_24967,G__24282_24968,G__24283_24969,G__24284_24970,G__24285_24971,G__24286_24972,G__24287_24973) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24278_24964,G__24279_24965,G__24280_24966,G__24281_24967,G__24282_24968,G__24283_24969,G__24284_24970,G__24285_24971,G__24286_24972,G__24287_24973));
var G__24300_24984 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__24301_24985 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24302_24986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__24303_24987 = ((function (G__24300_24984,G__24301_24985,G__24302_24986){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__24300_24984,G__24301_24985,G__24302_24986))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24300_24984,G__24301_24985,G__24302_24986,G__24303_24987) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24300_24984,G__24301_24985,G__24302_24986,G__24303_24987));
var G__24304_24988 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__24305_24989 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24306_24990 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__24307_24991 = ((function (G__24304_24988,G__24305_24989,G__24306_24990){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__24304_24988,G__24305_24989,G__24306_24990))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24304_24988,G__24305_24989,G__24306_24990,G__24307_24991) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24304_24988,G__24305_24989,G__24306_24990,G__24307_24991));
var G__24308_24992 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__24309_24993 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24310_24994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__24311_24995 = ((function (G__24308_24992,G__24309_24993,G__24310_24994){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__24308_24992,G__24309_24993,G__24310_24994))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24308_24992,G__24309_24993,G__24310_24994,G__24311_24995) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24308_24992,G__24309_24993,G__24310_24994,G__24311_24995));
var G__24312_24996 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__24313_24997 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24314_24998 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__24315_24999 = ((function (G__24312_24996,G__24313_24997,G__24314_24998){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__24312_24996,G__24313_24997,G__24314_24998))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24312_24996,G__24313_24997,G__24314_24998,G__24315_24999) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24312_24996,G__24313_24997,G__24314_24998,G__24315_24999));
var G__24316_25000 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__24317_25001 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24318_25002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__24319_25003 = ((function (G__24316_25000,G__24317_25001,G__24318_25002){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__24316_25000,G__24317_25001,G__24318_25002))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24316_25000,G__24317_25001,G__24318_25002,G__24319_25003) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24316_25000,G__24317_25001,G__24318_25002,G__24319_25003));
var G__24320_25004 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__24321_25005 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24322_25006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__24323_25007 = ((function (G__24320_25004,G__24321_25005,G__24322_25006){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__24320_25004,G__24321_25005,G__24322_25006))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24320_25004,G__24321_25005,G__24322_25006,G__24323_25007) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24320_25004,G__24321_25005,G__24322_25006,G__24323_25007));
var G__24324_25008 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__24325_25009 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24326_25010 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__24327_25011 = ((function (G__24324_25008,G__24325_25009,G__24326_25010){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__24324_25008,G__24325_25009,G__24326_25010))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24324_25008,G__24325_25009,G__24326_25010,G__24327_25011) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24324_25008,G__24325_25009,G__24326_25010,G__24327_25011));
var G__24328_25012 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__24329_25013 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24330_25014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__24331_25015 = ((function (G__24328_25012,G__24329_25013,G__24330_25014){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__24328_25012,G__24329_25013,G__24330_25014))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24328_25012,G__24329_25013,G__24330_25014,G__24331_25015) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24328_25012,G__24329_25013,G__24330_25014,G__24331_25015));
var G__24334_25016 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__24335_25017 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24336_25018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__24337_25019 = ((function (G__24334_25016,G__24335_25017,G__24336_25018){
return (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__24334_25016,G__24335_25017,G__24336_25018))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24334_25016,G__24335_25017,G__24336_25018,G__24337_25019) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24334_25016,G__24335_25017,G__24336_25018,G__24337_25019));
var G__24363_25020 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__24364_25021 = ((function (G__24363_25020){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__24363_25020))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__24363_25020,G__24364_25021) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24363_25020,G__24364_25021));
var G__24369_25022 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__24370_25023 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24371_25024 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__24372_25025 = ((function (G__24369_25022,G__24370_25023,G__24371_25024){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__24369_25022,G__24370_25023,G__24371_25024){
return (function (i,trace){
var temp__5461__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5461__auto__ == null)){
return null;
} else {
var code = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5461__auto__,G__24369_25022,G__24370_25023,G__24371_25024){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5461__auto__,G__24369_25022,G__24370_25023,G__24371_25024))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__24369_25022,G__24370_25023,G__24371_25024))
,traces);
});})(G__24369_25022,G__24370_25023,G__24371_25024))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24369_25022,G__24370_25023,G__24371_25024,G__24372_25025) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24369_25022,G__24370_25023,G__24371_25024,G__24372_25025));
var G__24373_25030 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__24374_25031 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24375_25032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__24376_25033 = ((function (G__24373_25030,G__24374_25031,G__24375_25032){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__24373_25030,G__24374_25031,G__24375_25032))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24373_25030,G__24374_25031,G__24375_25032,G__24376_25033) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24373_25030,G__24374_25031,G__24375_25032,G__24376_25033));
var G__24378_25034 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__24379_25035 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24380_25036 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__24381_25037 = ((function (G__24378_25034,G__24379_25035,G__24380_25036){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__24378_25034,G__24379_25035,G__24380_25036))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24378_25034,G__24379_25035,G__24380_25036,G__24381_25037) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24378_25034,G__24379_25035,G__24380_25036,G__24381_25037));
var G__24382_25038 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__24383_25039 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24384_25040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__24385_25041 = ((function (G__24382_25038,G__24383_25039,G__24384_25040){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__24382_25038,G__24383_25039,G__24384_25040))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24382_25038,G__24383_25039,G__24384_25040,G__24385_25041) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24382_25038,G__24383_25039,G__24384_25040,G__24385_25041));
var G__24387_25042 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__24388_25043 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24389_25044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__24390_25045 = ((function (G__24387_25042,G__24388_25043,G__24389_25044){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__24387_25042,G__24388_25043,G__24389_25044))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24387_25042,G__24388_25043,G__24389_25044,G__24390_25045) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24387_25042,G__24388_25043,G__24389_25044,G__24390_25045));
var G__24392_25047 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__24393_25048 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24394_25049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__24395_25050 = ((function (G__24392_25047,G__24393_25048,G__24394_25049){
return (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});})(G__24392_25047,G__24393_25048,G__24394_25049))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24392_25047,G__24393_25048,G__24394_25049,G__24395_25050) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24392_25047,G__24393_25048,G__24394_25049,G__24395_25050));
var G__24396_25054 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__24397_25055 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24398_25056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__24399_25057 = ((function (G__24396_25054,G__24397_25055,G__24398_25056){
return (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});})(G__24396_25054,G__24397_25055,G__24398_25056))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24396_25054,G__24397_25055,G__24398_25056,G__24399_25057) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24396_25054,G__24397_25055,G__24398_25056,G__24399_25057));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__24427_25058 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__24428_25059 = ((function (G__24427_25058){
return (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
});})(G__24427_25058))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__24427_25058,G__24428_25059) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24427_25058,G__24428_25059));
var G__24430_25060 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__24431_25061 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24432_25062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__24433_25063 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24434_25064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__24435_25065 = ((function (G__24430_25060,G__24431_25061,G__24432_25062,G__24433_25063,G__24434_25064){
return (function (p__24437,_){
var vec__24439 = p__24437;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24439,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24439,(1),null);
var G__24443 = (window_width / char_width);
return Math.ceil(G__24443);
});})(G__24430_25060,G__24431_25061,G__24432_25062,G__24433_25063,G__24434_25064))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__24430_25060,G__24431_25061,G__24432_25062,G__24433_25063,G__24434_25064,G__24435_25065) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24430_25060,G__24431_25061,G__24432_25062,G__24433_25063,G__24434_25064,G__24435_25065));
var G__24448_25067 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__24449_25068 = ((function (G__24448_25067){
return (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});})(G__24448_25067))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__24448_25067,G__24449_25068) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24448_25067,G__24449_25068));
var G__24457_25072 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__24458_25073 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24459_25074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__24460_25075 = ((function (G__24457_25072,G__24458_25073,G__24459_25074){
return (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});})(G__24457_25072,G__24458_25073,G__24459_25074))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24457_25072,G__24458_25073,G__24459_25074,G__24460_25075) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24457_25072,G__24458_25073,G__24459_25074,G__24460_25075));
var G__24464_25080 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__24465_25081 = ((function (G__24464_25080){
return (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});})(G__24464_25080))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__24464_25080,G__24465_25081) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24464_25080,G__24465_25081));
var G__24471_25085 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__24472_25086 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__24473_25087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__24474_25088 = ((function (G__24471_25085,G__24472_25086,G__24473_25087){
return (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});})(G__24471_25085,G__24472_25086,G__24473_25087))
;
(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__24471_25085,G__24472_25086,G__24473_25087,G__24474_25088) : day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.core.reg_sub.call(null,G__24471_25085,G__24472_25086,G__24473_25087,G__24474_25088));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
