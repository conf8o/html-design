import React from "react";

export function Rotation(props) {
  const deg = `${props.deg}deg`;
  const rotated = props.rotated ? "rotated" : "";
  return (
    <span className={`to-rotate ${rotated}`} style={{ "--deg": deg}}>
      {props.image}
    </span>
  );
}
