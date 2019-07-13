(ns com.clupclup.app-script.home-subscription-form
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [com.clupclup.app-script.base.render :as base.render]))

(defn Root []
  [:div {:className "flex flex-column flex-row-ns bg-gold w-100"}
   [:div {:className ""}
    [:label {:className ""} "Update teknologi terkini langsung ke email Anda! All"]
    [:div {:className "flex flex-row"}
     [:input {:type "email"
              :placeholder "jhon.snow@gmail.com"}]
     [:input {:type "submit"
              :value "Daftar"}]]]
   [:div {:className ""}]])

(defn ^:export render []
  (base.render/render "custom_html-4" Root))

