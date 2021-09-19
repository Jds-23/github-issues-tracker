import React from "react";
import "./Issue.css";
const Issue = ({ issue }: any) => {
  return (
    <div className="issue">
      <div className="issue__row--1">
        <a className="issue__row--1__title" href="/">
          {issue.title}
        </a>
        {issue.labels.map((label: any) => {
          return (
            <span
              style={{
                borderColor: label.color,
              }}
              className="issue__row--1__label"
            >
              {label.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Issue;
