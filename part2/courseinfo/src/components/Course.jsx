import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

export default function Course({ courses }) {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total
            total={course.parts.reduce((acc, curr) => acc + curr.exercises, 0)}
          />
        </div>
      ))}
    </>
  );
}
