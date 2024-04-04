import PropTypes from "prop-types";
import React, { useState } from "react";

const CounterButton = ({ incBy, incParent, deccrementParent }) => {
  const [count, setCount] = useState(0);

  function incrementFunction() {
    setCount(count + incBy);
    incParent(incBy);
  }
  function decrementFunction() {
    setCount(count - incBy);
    deccrementParent(incBy);
  }

  return (
    <div className="Counter">
      <button className="counterBtn" onClick={incrementFunction}>
        +{incBy}
      </button>
      <button className="counterBtn" onClick={decrementFunction}>
        -{incBy}
      </button>
    </div>
  );
};

CounterButton.propTypes = {
  incBy: PropTypes.number,
};

export default CounterButton;
