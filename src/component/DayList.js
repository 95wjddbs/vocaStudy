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
    fetch("http://localhost:3001/days")
      .then((res) => {
        console.log("리스폰", res);
        return res.json();
      })
      .then((data) => {
        console.log("데이타", data);
        setDays(data);
      })
      .catch((e) => console.log(e));
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
    </>
  );
};

export default DayList;
