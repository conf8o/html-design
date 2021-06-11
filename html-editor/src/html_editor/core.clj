(ns html-editor.core
  (:require [clojure.java.io :as io]))

(defn resource-dir [dir]
  (fn [file-name] (io/resource (str dir "/" file-name))))
(def input-file (resource-dir "input"))
(def output-file (resource-dir "output"))

(defn h [file-name]
  (let [input (str file-name ".clj")
        output (str file-name ".html")
        html (load-file (.getPath (input-file input)))]
    (when-not (output-file output)
      (spit (str (output-file "") output) ""))
    (spit (output-file output)
          html)))

