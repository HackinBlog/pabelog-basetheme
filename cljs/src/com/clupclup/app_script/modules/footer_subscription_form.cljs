(ns com.clupclup.app-script.modules.footer-subscription-form
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [com.clupclup.app-script.components.subscription-form :refer [SubscriptionForm]]
            [com.clupclup.app-script.base.render :as base.render]))

(defn Root []
  [:div {:className "flex flex-column items-center justify-center pt5-ns mb3 mb0-ns"}
   [SubscriptionForm {:containerClass "flex-flex-column"
                      :labelClass "lh-copy fw7"
                      :buttonClass "outline-0 bg-orange white hover-bg-1"
                      :infoClass "mt1 i dark-gray fw5 white"}]])

(defn ^:export render []
  (base.render/render "custom_html-2" Root))
