import React from "react";
import {IconImage} from "./IconImage";

export function Profile(props) {
  return (
    <div className="card" style={{width: "14rem"}}>
      <div className="card-body">
        <IconImage name={props.img} type="rounded-circle" />
        <h5 className="card-title">
          {props.name}
        </h5>
        <p>{props.intro}</p>
        {props.links.map((link) => <a key={props.name+link} href="#" className="card-link">{link}</a>)}
      </div>
    </div>
  );
}
