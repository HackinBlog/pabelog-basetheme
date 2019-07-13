(ns com.clupclup.app-script.base.utils
  (:require [goog.dom :as gdom]
            [com.clupclup.app-script.base.log :refer [log]]))

(defn safe-get-element-id [element-id]
  (try
    (gdom/getRequiredElement element-id)
    (catch js/Error. e nil)))
