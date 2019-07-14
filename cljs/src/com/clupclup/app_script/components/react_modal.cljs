(ns com.clupclup.app-script.components.react-modal
  (:require [reagent.core :as r]
            [com.clupclup.app-script.base.log :refer [log]]
            ["react-modal" :as Modal]))

(def Modal* (r/adapt-react-class Modal))

(def Dialog
  (r/create-class
    {:component-will-mount
     (fn [this]
       (.setAppElement Modal (str "#" (:id (r/props this)))))
     :reagent-render
     (fn
       ([attributes]
        [Modal* attributes []])
       ([attributes & nodes]
        (into [Modal* attributes] nodes)))}))