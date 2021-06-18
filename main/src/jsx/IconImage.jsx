import React from "react";

export function IconImage(props) {
  return (
    <img className={`${props.type}`} src={`img/${props.name}`} />
  );
}

