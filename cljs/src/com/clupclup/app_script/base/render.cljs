(ns com.clupclup.app-script.base.render
  (:require [reagent.core :as r]
            [com.clupclup.app-script.base.utils :as u]))

(defn ^:export render [id root]
  (when-let [elm (u/safe-get-element-id id)]
    (r/render [root] elm)))
