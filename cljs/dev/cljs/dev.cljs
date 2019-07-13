(ns cljs.dev
  ;(:require [shadow.loader :as loader])
  )

(defn ^:export init []
  (js/console.log :initialize))

(defn ^:export setup []
  (js/console.log :setup))