import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dummy from "../DB/data.json";

const DayList = () => {
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(0);

  const onclick = () => {
    setCount(count + 1);
  };

  const onclick2 = () => {
    setDays([
      ...days,
      {
        id: Math.random(),
        day: 1,
      },
    ]);
  };

  useEffect(() => {
    console.log("Count change");
  }, []);
  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onclick}>{count}</button>
      <button onClick={onclick2}>day change</button>
    </>
  );
};

export default DayList;
