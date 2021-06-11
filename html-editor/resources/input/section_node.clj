(require '[hiccup.core :refer [html]])

(html
 [:section {:class "border section-rounded-1 pl-3 p-2"}
  [:div {:class "section-header"
         :data-toggle "collapse"
         :data-target "#section-body-1"}
   [:h5
    [:span {:class "to-rotate-90"} "&gt;"]
    "{title}"]]
  [:div {:id "section-body-1"
         :class "collapse hide"}
   "{contents}"]])