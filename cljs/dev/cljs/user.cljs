(ns cljs.user
  (:require [shadow.loader :as loader]))

(defn ^:export dev []
  (-> (loader/load "dev")
      (.then #(js/console.info "cljs.dev loaded!") #(js/console.info "cljs.dev failed to load!"))))