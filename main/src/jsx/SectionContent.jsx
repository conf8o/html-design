import React from "react";

export function SectionContent(props) {
  const icon = props.icon;
  const contents = props.contents;

  return (
    <div>
      <p>{icon}</p>
      <div className="d-flex flex-row">
        {contents.map((content) => {
          return (
            <div key={content.props.name}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
