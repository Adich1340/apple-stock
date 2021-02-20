import React from "react";

function TimestampTab({ handleOnClick }) {
  return (
    <div>
      <div className="timestamps-tab-container">
        <button
          onClick={() => handleOnClick({ period: 1, precision: "Minutes" })}
        >
          1 Minute
        </button>
        <button
          onClick={() => handleOnClick({ period: 5, precision: "Minutes" })}
        >
          5 Minutes
        </button>
        <button
          onClick={() => handleOnClick({ period: 1, precision: "Hours" })}
        >
          1 Hour
        </button>
        <button
          onClick={() => handleOnClick({ period: 168, precision: "Hours" })}
        >
          1 Week
        </button>
      </div>
      <h1> Apple Inc</h1>
    </div>
  );
}

export default TimestampTab;
