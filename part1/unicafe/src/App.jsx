import { useState } from "react";

export default function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  return (
    <>
      <Title>Give feedback</Title>
      <Button handleClick={() => setGoodFeedback((prev) => prev + 1)}>
        Good
      </Button>
      <Button handleClick={() => setNeutralFeedback((prev) => prev + 1)}>
        Neutral
      </Button>
      <Button handleClick={() => setBadFeedback((prev) => prev + 1)}>
        Bad
      </Button>
      <Statistics
        goodFeedback={goodFeedback}
        neutralFeedback={neutralFeedback}
        badFeedback={badFeedback}
      />
    </>
  );
}

// Statistics component
function Statistics({ goodFeedback, neutralFeedback, badFeedback }) {
  const allFeedback = goodFeedback + neutralFeedback + badFeedback;
  const averageFeedback = (goodFeedback - badFeedback) / allFeedback;
  const positiveFeedback = (goodFeedback / allFeedback) * 100;
  if (allFeedback === 0) {
    return (
      <>
        <Title>Statistics</Title>
        <p>No feedback given!</p>
      </>
    );
  }
  return (
    <>
      <Title>Statistics</Title>
      <table>
        <tbody>
          <StatisticLine text="Good" value={goodFeedback} />
          <StatisticLine text="Neutral" value={neutralFeedback} />
          <StatisticLine text="Bad" value={badFeedback} />
          <StatisticLine text="All" value={allFeedback} />
          <StatisticLine text="Average" value={averageFeedback} />
          <StatisticLine text="Positive" value={`${positiveFeedback}%`} />
        </tbody>
      </table>
    </>
  );
}

// StatisticLine Component
function StatisticLine({ text, value }) {
  return (
    <tr>
      <td> {text} </td>
      <td>{value}</td>
    </tr>
  );
}

// Title Component
function Title({ children }) {
  return <h1>{children}</h1>;
}

// Button Component
function Button({ children, handleClick }) {
  return <button onClick={handleClick}>{children}</button>;
}
