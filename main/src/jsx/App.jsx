import React from "react";
import ReactDOM from "react-dom";
import { IconImage } from "./IconImage";
import { ExpandSection } from "./ExpandSection";
import { Profile } from "./Profile";
import { SectionContent } from "./SectionContent";

function App(props) {
  const apex = <IconImage name="apex_square.png" type="rounded-circle"/>;
  const banga = <Profile img="apex_square.png" name="バンガロール" intro="私は大砲よ。" links={["a","b","c"]}/>;
  const crypt = <Profile img="apex_square.png" name="クリプト" intro="ｸﾘｨ～" links={["a","b","c"]}/>;
  const contents = <SectionContent icon={apex} contents={[banga, crypt]} />;
  return (
    <div>
      <ExpandSection id="fps-club" icon={{image: "(^o^)", rotateDeg: 200}} title="FPS部" contents={contents} show={true} />
      <ExpandSection id="creative-club" icon={{image: ":3", rotateDeg: 90}} title="クリエイティブ部" contents={apex} />
    </div>
  );
}
const app = document.getElementById("app");

ReactDOM.render(
  <App />,
  app
);
