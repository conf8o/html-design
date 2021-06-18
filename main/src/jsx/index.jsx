import React from "react";
import ReactDOM from "react-dom";
import { IconImage } from "./IconImage";
import { ExpandSection } from "./ExpandSection";

function Main(props) {
  const apex = <IconImage name="apex_square.png" type="rounded-circle"/>;
  return (
    <div>
      <ExpandSection id="fps-club" icon={{image: "(^o^)", rotateDeg: 200}} title="FPS部" contents={apex} show={true} />
      <ExpandSection id="creative-club" icon={{image: ":3", rotateDeg: 90}} title="クリエイティブ部" contents={apex} />
    </div>
  );
}
const main = document.getElementById("main");

ReactDOM.render(
  <Main />,
  main
);
