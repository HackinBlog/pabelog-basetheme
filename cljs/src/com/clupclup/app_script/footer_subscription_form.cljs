(ns com.clupclup.app-script.footer-subscription-form
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [com.clupclup.app-script.base.render :as base.render]))

(defn HelloWorld []
  [:h3 "Hello Footer"])

(defn ^:export render []
  (base.render/render "custom_html-2" HelloWorld))
