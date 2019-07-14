(ns com.clupclup.app-script.components.subscription-form)

(defn SubscriptionForm [{:keys [containerClass buttonClass infoClass labelClass] :as params}]
  [:div {:className containerClass}
   [:div {:className "mb1"}
    [:label {:className labelClass} "Update teknologi terkini langsung ke email Anda!"]]
   [:div {:className "flex flex-row dark-grey"}
    [:input {:type             "email"
             :className        "outline-0"
             :placeholder      "elon.musk@email.com"}]
    [:input {:type      "submit"
             :className buttonClass
             :value     "Daftar"}]]
   [:small {:className infoClass} "Kami sangat menghargai privasi Anda"]])