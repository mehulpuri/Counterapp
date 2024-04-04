import PropTypes from "prop-types";
import React from "react";

const CounterButton = ({ incBy, incParent, deccrementParent }) => {
  function incrementFunction() {
    incParent(incBy);
  }
  function decrementFunction() {
    deccrementParent(incBy);
  }

  return (
    <div className="Counter">
      <button className="counterBtn" onClick={() => incParent(incBy)}>
        +{incBy}
      </button>
      <button className="counterBtn" onClick={() => deccrementParent(incBy)}>
        -{incBy}
      </button>
    </div>
  );
};

CounterButton.propTypes = {
  incBy: PropTypes.number,
};

export default CounterButton;
