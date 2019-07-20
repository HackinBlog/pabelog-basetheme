(ns com.clupclup.app-script.components.disqus-react
  (:require [reagent.core :as r]
            [com.clupclup.app-script.base.log :refer [log]]
            ["disqus-react" :refer [DiscussionEmbed CommentCount CommentEmbed]]))

(def DiscussionEmbed* (r/adapt-react-class DiscussionEmbed))

(def CommentCount* (r/adapt-react-class CommentCount))

(def CommentEmbed* (r/adapt-react-class CommentEmbed))