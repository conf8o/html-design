import React from "react";
import ReactDOM from "react-dom";

function ImageIcon(props) {
  return (
    <img className={`${props.type}`} src={`images/${props.name}`} />
  );
}

const app = document.getElementById("app");
ReactDOM.render(
  <div>
    <ImageIcon name="apex.png" type="icon-content"/>
  </div>,
  app
);
