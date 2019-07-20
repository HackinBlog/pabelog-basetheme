(ns com.clupclup.app-script.modules.header-hamburger-menu
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [day8.re-frame.http-fx]
            [ajax.core :as ajax]
            [re-view.re-frame-simple :as db]
            [com.clupclup.app-script.base.render :as base.render]
            [com.clupclup.app-script.components.react-modal :refer [Dialog]]
            [com.clupclup.app-script.base.log :refer [log]]))

;; Ajax Request for JSON menu
;; =========================================

(rf/reg-event-db
  ::request-main-menu-ok
  (fn [db [_ response]]
    (-> (assoc-in db [::react-burger-menu ::ajax ::loading?] false)
        (assoc-in [::react-burger-menu ::ajax ::ok] response))))

(rf/reg-event-db
  ::request-main-menu-err
  (fn [db [_ response]]
    (-> (assoc-in db [::react-burger-menu ::ajax ::loading?] false)
        (assoc-in [::react-burger-menu ::ajax :err] response))))

(rf/reg-event-fx
  ::request-main-menu
  (fn [{:keys [db]} _]
    {:db         (assoc-in db [::react-burger-menu ::ajax ::loading?] true)
     :http-xhrio {:method          :get
                  :uri             "/wp-json/wp-api-menus/v2/menus/4"
                  :timeout         8000
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [::request-main-menu-ok]
                  :on-failure      [::request-main-menu-err]}}))

;; View
;; =========================================

(defmulti background-image (fn [category] (:id category)))

(defmethod background-image 463 [category] "/wp-content/uploads/2019/07/Internet-dark-1.png")

(defmethod background-image 464 [category] "/wp-content/uploads/2019/07/Books-dark-1.png")

(defmethod background-image 465 [category] "/wp-content/uploads/2019/07/Idea-dark-1.png")

(defmethod background-image 466 [category] "/wp-content/uploads/2019/07/Reading-dark.png")

(defmethod background-image :default [category] "/wp-content/uploads/2019/07/Reading-dark.png")

(defn MenuItem [{:keys [id description url title] :or {description ""}}]
  [:a {:key id :href url :title title
       :aria-describedby description
       :className "white hover-color-3 no-underline fw5"}
   title])

(defn MenuGroup [{:keys [id description children url title] :as category :or {description ""}}]
  [:div {:key       id
         :className "w-100 w-50-l ph4"}
   [:div {:className "bb b--gray"
          :style {:backgroundImage (str "url(" (background-image category) ")")
                  :backgroundRepeat "no-repeat"
                  :backgroundPosition "right"
                  :backgroundSize "100px 100px"}}
    [:h3 {:className "fw7 mb0 lh-title mt3 pt4"}
     [:a {:href url :title title
          :className "white hover-color-3 no-underline"}
      title]]]
   (into [:nav {:aria-labelledby (str "Navigation for " title)
                :aria-describedby description
                :className "mt3 flex flex-column"}]
         (map MenuItem children))])

(defn CloseButton [{:keys [onClick]}]
  [:button {:className "db dn-l white f2 pointer bg-dark-gray outline-0 absolute top-0 right-0"
            :onClick onClick}
   [:i {:className "icon-x"}]])

(def Root
  (r/create-class
    {:component-will-mount
     (fn [this]
       (rf/dispatch [::request-main-menu]))
     :reagent-render
     (fn []
       (let [open? (db/get-in [::react-burger-menu ::open?])
             menus (db/get-in [::react-burger-menu ::ajax ::ok :items])
             onClickMenu #(db/update-in! [::react-burger-menu ::open?] not)]
         [:<>
          [:i {:onClick   onClickMenu
               :className (if open? "icon-x f2 mr3 pointer" "icon-menu f2 mr3 pointer")}]
          [Dialog {:id               "child_main_menu"
                   :className        "w-100 w-80-m w-50-l outline-0"
                   :contentLabel     "onRequestClose Example"
                   :overlayClassName "fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-999 bg-dark-gray relative"
                   :isOpen           (or open? false)}
           [CloseButton {:onClick onClickMenu}]
           (if (db/get-in [::react-burger-menu ::ajax ::loading?])
             [:span "Loading..."]
             (if (db/get-in [::react-burger-menu ::ajax ::ok])
               [:div {:className "center"}

                (into [:nav {:aria-labelledby "primary-navigation"
                             :className "flex flex-wrap w-100 vh-75 h-auto-l overflow-auto overflow-hidden-l tl"}]
                      (map MenuGroup menus))]))]]))}))

(defn ^:export render []
  (base.render/render "child_main_menu" Root))
