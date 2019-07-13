goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.interop');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.is_client = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$create_element(var_args){
var G__18689 = arguments.length;
switch (G__18689) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___18734 = arguments.length;
var i__4642__auto___18735 = (0);
while(true){
if((i__4642__auto___18735 < len__4641__auto___18734)){
args_arr__4662__auto__.push((arguments[i__4642__auto___18735]));

var G__18736 = (i__4642__auto___18735 + (1));
i__4642__auto___18735 = G__18736;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((3)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4663__auto__);

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(type,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props,child);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(module$node_modules$react$index.createElement,type,props,child,children);
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$lang$applyTo = (function (seq18685){
var G__18686 = cljs.core.first(seq18685);
var seq18685__$1 = cljs.core.next(seq18685);
var G__18687 = cljs.core.first(seq18685__$1);
var seq18685__$2 = cljs.core.next(seq18685__$1);
var G__18688 = cljs.core.first(seq18685__$2);
var seq18685__$3 = cljs.core.next(seq18685__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18686,G__18687,G__18688,seq18685__$3);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_element.cljs$lang$maxFixedArity = (3);

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$as_element(form){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.as_element(form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Component"," must not be nil"].join('')),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.template.adapt_react_class(c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Component"," must not be nil"].join('')),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reactify_component(c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$render(var_args){
var G__18696 = arguments.length;
switch (G__18696) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2(comp,container);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,callback);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.unmount_component_at_node(container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.as_component = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.as_element;
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render_component = day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.render;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_();

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.force_update_all();

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.flush_after_render();
});
goog.exportSymbol('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update_all', day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$create_class(spec){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.create_class(spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.current_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$current_component(){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$state_atom(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.state = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$state(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.state_atom(this$));
});
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.replace_state = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$replace_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a valid new state, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0)))].join('')),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.state_atom(this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.set_state = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$set_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a valid new state, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0)))].join('')),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$force_update(var_args){
var G__18706 = arguments.length;
switch (G__18706) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.flush_BANG_();

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.force_update(this$,deep);

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.flush_after_render();
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Returns the props passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$props(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.children = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$children(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.argv = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$argv(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.get_argv(this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$dom_node(this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.dom.dom_node(this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.merge_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$merge_props(defaults,props){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.merge_props(defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.flush = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$flush(){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$atom(var_args){
var G__18713 = arguments.length;
switch (G__18713) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___18748 = arguments.length;
var i__4642__auto___18749 = (0);
while(true){
if((i__4642__auto___18749 < len__4641__auto___18748)){
args_arr__4662__auto__.push((arguments[i__4642__auto___18749]));

var G__18753 = (i__4642__auto___18749 + (1));
i__4642__auto___18749 = G__18753;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4663__auto__);

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.atom,x,rest);
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$lang$applyTo = (function (seq18711){
var G__18712 = cljs.core.first(seq18711);
var seq18711__$1 = cljs.core.next(seq18711);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18712,seq18711__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.atom.cljs$lang$maxFixedArity = (1);

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$track(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18754 = arguments.length;
var i__4642__auto___18755 = (0);
while(true){
if((i__4642__auto___18755 < len__4641__auto___18754)){
args__4647__auto__.push((arguments[i__4642__auto___18755]));

var G__18756 = (i__4642__auto___18755 + (1));
i__4642__auto___18755 = G__18756;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track(f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track.cljs$lang$applyTo = (function (seq18714){
var G__18715 = cljs.core.first(seq18714);
var seq18714__$1 = cljs.core.next(seq18714);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18715,seq18714__$1);
});

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$track_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18764 = arguments.length;
var i__4642__auto___18765 = (0);
while(true){
if((i__4642__auto___18765 < len__4641__auto___18764)){
args__4647__auto__.push((arguments[i__4642__auto___18765]));

var G__18766 = (i__4642__auto___18765 + (1));
i__4642__auto___18765 = G__18766;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_track_BANG_(f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq18716){
var G__18717 = cljs.core.first(seq18716);
var seq18716__$1 = cljs.core.next(seq18716);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18717,seq18716__$1);
});

/**
 * Stop the result of track! from updating.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$dispose_BANG_(x){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.dispose_BANG_(x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.wrap = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$wrap(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18769 = arguments.length;
var i__4642__auto___18770 = (0);
while(true){
if((i__4642__auto___18770 < len__4641__auto___18769)){
args__4647__auto__.push((arguments[i__4642__auto___18770]));

var G__18771 = (i__4642__auto___18770 + (1));
i__4642__auto___18770 = G__18771;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reset_fn], 0)))].join('')),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.make_wrapper(value,reset_fn,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.wrap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.wrap.cljs$lang$applyTo = (function (seq18718){
var G__18719 = cljs.core.first(seq18718);
var seq18718__$1 = cljs.core.next(seq18718);
var G__18720 = cljs.core.first(seq18718__$1);
var seq18718__$2 = cljs.core.next(seq18718__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18719,G__18720,seq18718__$2);
});

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$cursor(src,path){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.ratom.cursor(src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.rswap_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$rswap_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18773 = arguments.length;
var i__4642__auto___18774 = (0);
while(true){
if((i__4642__auto___18774 < len__4641__auto___18773)){
args__4647__auto__.push((arguments[i__4642__auto___18774]));

var G__18776 = (i__4642__auto___18774 + (1));
i__4642__auto___18774 = G__18776;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__4047__auto__ = a.rswapfs;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__18721_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__18721_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (state){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
while(true){
var temp__5459__auto__ = (function (){var G__18726 = a.rswapfs;
if((G__18726 == null)){
return null;
} else {
return G__18726.shift();
}
})();
if((temp__5459__auto__ == null)){
return s;
} else {
var sf = temp__5459__auto__;
var G__18782 = (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(s) : sf.call(null,s));
s = G__18782;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq18722){
var G__18723 = cljs.core.first(seq18722);
var seq18722__$1 = cljs.core.next(seq18722);
var G__18724 = cljs.core.first(seq18722__$1);
var seq18722__$2 = cljs.core.next(seq18722__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18723,G__18724,seq18722__$2);
});

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.next_tick = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$next_tick(f){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.do_before_flush(f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.after_render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$after_render(f){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.batching.do_after_render(f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.partial = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$partial(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18792 = arguments.length;
var i__4642__auto___18795 = (0);
while(true){
if((i__4642__auto___18795 < len__4641__auto___18792)){
args__4647__auto__.push((arguments[i__4642__auto___18795]));

var G__18797 = (i__4642__auto___18795 + (1));
i__4642__auto___18795 = G__18797;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.util.make_partial_fn(f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.partial.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.partial.cljs$lang$applyTo = (function (seq18727){
var G__18728 = cljs.core.first(seq18727);
var seq18727__$1 = cljs.core.next(seq18727);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18728,seq18727__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.component_path = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$core$component_path(c){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.impl.component.component_path(c);
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.core.js.map
