(ns cljs.dev
  (:require [shadow.loader :as loader]))

(defn cb* [message]
  (fn []
    (js/console.log message)))

(defmulti render* (fn [modules] modules))

(defmethod render* "footer-subscription-form" [_]
  ((resolve 'com.clupclup.app-script.modules.footer-subscription-form/render)))

(defmethod render* "header-hamburger-menu" [_]
  ((resolve 'com.clupclup.app-script.modules.header-hamburger-menu/render)))

(defmethod render* "body-subscription-form" [_]
  ((resolve 'com.clupclup.app-script.modules.body-subscription-form/render)))

(defmethod render* "body-disqus-thread" [_]
  ((resolve 'com.clupclup.app-script.modules.body-disqus-thread/render)))

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
  (reset-all* ["dev" "footer-subscription-form" "header-hamburger-menu" "body-subscription-form" "body-disqus-thread"]))

(defn ^:export init [] (reset))