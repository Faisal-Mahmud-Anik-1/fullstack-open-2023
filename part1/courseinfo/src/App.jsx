// ------------ Parent Component
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;

// ---------------- Child Components

const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p></p>
    </>
  );
};

const Total = ({ course }) => {
  const totalNumOfExercise = course.parts.reduce(
    (acc, curr) => acc + curr.exercises,
    0
  );
  console.log(totalNumOfExercise);
  return (
    <>
      <p>Number of exercises {totalNumOfExercise}</p>
    </>
  );
};
