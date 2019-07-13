(ns cljs.user
  (:require [shadow.loader :as loader]))

(defn cb* [message]
  (fn []
    (js/console.log message)))

(defmulti render* (fn [modules] modules))

(defmethod render* "footer-subscription-form" [_]
  (com.clupclup.app-script.footer-subscription-form/render))

(defmethod render* "hamburger-menu" [_]
  (com.clupclup.app-script.hamburger-menu/render))

(defmethod render* "home-subscription-form" [_]
  (com.clupclup.app-script.home-subscription-form/render))

(defmethod render* :default [_] :noop)

(defn ^:export render [module]
  (render* module))


(defn ^:export reset
  ([]
   (reset "dev"))
  ([module]
   (reset module (cb* (str "Module " module " loaded!")) (cb* (str "Failed to load " module " module!"))))
  ([module ok-cb err-cb]
   (-> (loader/load module)
       (.then ok-cb err-cb))))

(defn reset-all*
  [modules]
  (if-let [module (first modules)]
    (do (js/console.log (str "Reseting " module))
        (reset module
               #(do (render module)
                    (reset-all* (rest modules)))
               #(reset-all* [])))
    (js/console.log "Done!")))

(defn ^:dev/after-load reset-all []
  (reset-all* ["dev" "footer-subscription-form" "hamburger-menu" "home-subscription-form"]))

(defn ^:export init [] (reset))