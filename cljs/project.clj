(defproject com.clupclup.app-script "0.1.1"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [re-frame "0.10.7"]
                 [day8.re-frame/trace "0.1.22"]
                 [day8.re-frame/http-fx "0.1.6"]
                 [re-view/re-frame-simple "0.1.4"]
                 [binaryage/devtools "0.9.10"]]

  :min-lein-version "2.5.3"

  :source-paths ["src" "dev" "test"]

  :clean-targets ^{:protect false} ["../assets/js/cljs" "target"])
