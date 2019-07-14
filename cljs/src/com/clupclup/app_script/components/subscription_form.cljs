(ns com.clupclup.app-script.components.subscription-form
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [re-view.re-frame-simple :as db]))

(defn SubscriptionForm [{:keys [containerClass buttonClass infoClass labelClass] :as params}]
  [:div {:className containerClass}
   [:div {:className "mb1"}
    [:label {:className labelClass} "Update teknologi terkini langsung ke email Anda!"]]
   [:div {:className "flex flex-row dark-grey"}
    (if (db/get-in [::subscription-form ::submit?])
      [:span {:className "fw5 lh-copy f3"}
       "Maaf, saat ini kami belum bisa menerima email berlangganan. Mohon coba dilain waktu."]
      [:<>
       [:input {:type        "email"
                :className   "outline-0"
                :placeholder "elon.musk@email.com"}]
       [:input {:type      "submit"
                :className buttonClass
                :value     "Daftar"
                :onClick   #(db/assoc-in! [::subscription-form ::submit?] true)}]])]
   [:small {:className infoClass} "Kami sangat menghargai privasi Anda"]])