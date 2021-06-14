import React from "react";
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

class ExpandSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState(state => ({expanded: !state.expanded}));
  }

  render() {
    const icon = this.props.icon;
    return (
      <section className="border section-rounded-1 pl-3 p-2">
        <h5 className="section-header" data-bs-target={`#${this.props.id}`} data-bs-toggle="collapse" onClick={this.toggleExpand}>
          <Rotation image={icon.image} deg={icon.deg} rotated={this.state.expanded} />
          {this.props.title}
        </h5>
        <div className="collapse hide" id={this.props.id}>
          {this.props.contents}
        </div>
      </section>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(
  <div>
    <ExpandSection id="fps-club" icon={{image: "::", deg: 180}} title="FPS部" contents="hello" />
    <ExpandSection id="creative-club" icon={{image: "@", deg: 90}} title="クリエイティブ部" contents="hello" />
    </div>,
  app
);
