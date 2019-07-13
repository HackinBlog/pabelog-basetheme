(ns shadow.user
  (:require [shadow.cljs.devtools.api :as shadow]))

(defn enter-browser-repl
  ([]
   (enter-browser-repl :app))
  ([profile]
   (do (shadow/watch-compile! profile)
       (shadow/repl profile))))