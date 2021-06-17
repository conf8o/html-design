import React from "react";
import ReactDOM from "react-dom";
import { IconImage } from "./IconImage";
import { ExpandSection } from "./SectionNode";

function Main(props) {
  const apex = <IconImage name="apex.png" type="icon-content"/>;
  return (
    <div>
      <ExpandSection id="fps-club" icon={{image: "(^o^)", rotateDeg: 180}} title="FPS部" contents={apex} show={true} />
      <ExpandSection id="creative-club" icon={{image: ":3", rotateDeg: 90}} title="クリエイティブ部" contents={apex} />
    </div>
  );
}
const app = document.getElementById("app");

ReactDOM.render(
  <Main />,
  app
);
