(ns com.clupclup.app-script.modules.home-subscription-form
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [com.clupclup.app-script.components.subscription-form :refer [SubscriptionForm]]
            [com.clupclup.app-script.base.render :as base.render]))

(defn Root []
  [:div {:className "flex flex-column flex-row-ns bg-gold w-100 pa3 mt4 br2"}
   [SubscriptionForm {:containerClass "flex flex-column w-100 w-70-ns"
                      :labelClass "lh-copy fw7"
                      :buttonClass "outline-0 bg-dark-gray white hover-bg-1"
                      :infoClass "mt1 i dark-gray fw5"}]
   [:div {:className "flex flex-column w-100 w-30-ns"
          :style     {:backgroundImage    "url(/wp-content/themes/basetheme/assets/images/emails.png)"
                      :backgroundRepeat   "no-repeat"
                      :backgroundPosition "right"
                      :backgroundSize     "contain"}}]])

(defn ^:export render []
  (base.render/render "custom_html-4" Root))

