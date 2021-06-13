import React from "react";
import ReactDOM from "react-dom";

class Rotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotated: false,
    };
    this.rotate = this.rotate.bind(this);
  }

  rotate() {
    this.setState((state) => {
      return { rotated: !state.rotated };
    });
  }

  render() {
    const deg = `${this.props.deg}deg`;
    const rotated = this.state.rotated ? "rotated" : "";
    return (
      <span className={`to-rotate ${rotated}`} style={{ "--deg": deg }}>
        {this.props.image}
      </span>
    );
  }
}

class SectionNode extends React.Component {
  constructor(props) {
    super(props);
    this.RotationRef = React.createRef();
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.RotationRef.current.rotate();
  }

  render() {
    return (
      <section className="border section-rounded-1 pl-3 p-2">
        <div
          className="section-header"
          data-bs-target="#section-body-1"
          data-bs-toggle="collapse"
          onClick={this.toggleExpand}
        >
          <h5>
            <Rotation
              ref={this.RotationRef}
              image={this.props.icon.image}
              deg={this.props.icon.rotateDeg}
            />
            {this.props.title}
          </h5>
        </div>
        <div className="collapse hide" id="section-body-1">
          {this.props.contents}
        </div>
      </section>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(
  <SectionNode icon={{ image: ">", rotateDeg: 90 }} title="FPS部" contents="hello" />,
  app
);
