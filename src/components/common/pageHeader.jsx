import React from "react";

export default function PageHeader({ title }) {
  return (
    <div>
      <div className="row">
        <div className="col-12 mt-4 text-center">
          <h1 style={{ color: "grey", fontFamily: "arial", fontWeight: 3 }}>
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
