import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* import { useState } from "react";

export default function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  return (
    <>
      <section>
        <Title>Give feedback</Title>
        <Button handleClick={() => setGoodFeedback(goodFeedback + 1)}>
          Good
        </Button>
        <Button handleClick={() => setNeutralFeedback(goodFeedback + 1)}>
          Neutral
        </Button>
        <Button handleClick={() => setBadFeedback(goodFeedback + 1)}>
          Bad
        </Button>
      </section>

      <section>
        <Title>Statistics</Title>
        <Statistics
          good={goodFeedback}
          neutral={neutralFeedback}
          bad={badFeedback}
        />
      </section>
    </>
  );
}

function Statistics({ good, neutral, bad }) {
  const totalFeedback = good + neutral + bad;
  const averageFeedback = (good - bad) / totalFeedback;
  const positiveFeedback = (good / totalFeedback) * 100;

  if (totalFeedback === 0) {
    return (
      <>
        <p>No feedback given!</p>
      </>
    );
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={totalFeedback} />
        <StatisticLine text="Average" value={averageFeedback} />
        <StatisticLine text="Positive" value={positiveFeedback} />
      </tbody>
    </table>
  );
}
function StatisticLine({ value, text }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

function Title({ children }) {
  return <h1>{children}</h1>;
}

function Button({ children, handleClick }) {
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
 */
