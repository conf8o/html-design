import React from "react";
import ReactDOM from "react-dom";

export function Profile(props) {
  return (
    <div className="card" style={{width: "14rem"}}>
      <div className="card-body">
        <IconImage name={props.img} type="rounded-circle" />
        <h5 className="card-title">
          {props.name}
        </h5>
        <p>{props.intro}</p>
        {props.links.map((link) => <a key={link} href="#" className="card-link">{link}</a>)}
      </div>
    </div>
  );
}

function IconImage(props) {
  return (
    <img className={`${props.type}`} src={`img/${props.name}`} />
  );
}

const main = document.getElementById("main");

ReactDOM.render(
  <Profile img="apex_square.png" name="バンガロール" intro="私は大砲よ。" links={["a","b","c"]}/>,
  main
);
