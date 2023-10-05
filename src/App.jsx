import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const increaseStep = () => {
    setStep(step + 1);
  };
  const decreaseStep = () => {
    setStep(step - 1);
  };
  const decreaseCount = () => {
    if (step >= 0) {
      setCount(count - step);
    }
  };
  const increaseCount = () => {
    setCount(count + step);
  };
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="container">
      <div className="step">
        <button onClick={() => decreaseStep()}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <span>Step: {step}</span>
        <button onClick={() => increaseStep()}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="count">
        <button onClick={() => decreaseCount()}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <span>Count: {count}</span>
        <button onClick={() => increaseCount()}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="date">
        <p>
          <span>
            {count === 0
              ? "Today is"
              : count > 0
              ? `${count} days from today is `
              : `${-count} days age was `}
          </span>
          {date.toDateString()}
        </p>
      </div>
    </div>
  );
}
