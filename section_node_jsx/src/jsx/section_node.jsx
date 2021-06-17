import React, { useState } from "react";
import ReactDOM from "react-dom";

function Rotation(props) {
  const deg = `${props.deg}deg`;
  const rotated = props.rotated ? "rotated" : "";
  return (
    <span className={`to-rotate ${rotated}`} style={{ "--deg": deg}}>
      {props.image}
    </span>
  );
}

function ExpandSection(props) {
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

const app = document.getElementById("app");
ReactDOM.render(
  <div>
    <ExpandSection id="fps-club" icon={{image: "(^o^)", rotateDeg: 180}} title="FPS部" contents="hello" show={true} />
    <ExpandSection id="creative-club" icon={{image: ":3", rotateDeg: 90}} title="クリエイティブ部" contents="hello" />
  </div>,
  app
);
