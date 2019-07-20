(ns com.clupclup.app-script.modules.body-disqus-thread
  (:require [com.clupclup.app-script.components.disqus-react :as dr]
            [com.clupclup.app-script.base.utils :as u]
            [com.clupclup.app-script.base.log :refer [log]]
            [com.clupclup.app-script.base.render :as base.render]
            [goog.dom.xml :as gdom.xml]))

(defn Root []
  [:<>
   [dr/CommentCount* {:shortname "cara2"
                      :config    {:url        "https://clupclup.local/cara-mempercepat-google-chrome/"
                                  :identifier 112
                                  :title      "Google Chrome"}}]

   [dr/DiscussionEmbed* {:shortname "cara2"
                         :config    {:url        "https://clupclup.local/cara-mempercepat-google-chrome/"
                                     :identifier 112
                                     :title      "Google Chrome"}}]])

(defn ^:export render []
  (base.render/render "react-disqus-comments" Root))
