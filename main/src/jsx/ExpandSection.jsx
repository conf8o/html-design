import React, { useState } from "react";
import { Rotation } from "./Rotation";

export function ExpandSection(props) {
  const [expanded, setExpanded] = useState(props.show);
  const icon = props.icon;
  const initCollapseState = props.show ? "show" : "hide";

  return (
    <section className="border section-rounded-1 pl-3 p-2">
      <h5 className="section-header" data-bs-target={`#${props.id}`} data-bs-toggle="collapse" onClick={() => setExpanded(!expanded)}>
        <Rotation image={icon.image} deg={icon.rotateDeg} rotated={expanded} />
        {props.title}
      </h5>
      <div className={`collapse ${initCollapseState}`} id={props.id}>
        {props.contents}
      </div>
    </section>
  );
}
