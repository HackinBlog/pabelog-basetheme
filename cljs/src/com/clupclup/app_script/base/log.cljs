(ns com.clupclup.app-script.base.log)

(defn log [& messages]
  (when goog/DEBUG
    (apply js/console messages)))



