import { Link } from "react-router-dom";
import React, { useState, useEffect, useMemo } from "react";
import SearchBar from "../SearchBar";
import CarteRobot from "../CarteRobot";

import "./style.css";

export default function CarteList() {
  const [robots, setRobots] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getRobots = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const robots = await response.json();
        setRobots(robots);
      } catch (error) {
        console.log("error", error);
      }
    };
    getRobots();
  }, []);

  const filtredRobots = useMemo(() => {
    if (robots?.length && searchText.length >= 3) {
      return robots.filter((robot) =>
        robot.name.toUpperCase().includes(searchText.toUpperCase())
      );
    }
    return robots;
  }, [robots, searchText]);

  return (
    <>
      <SearchBar value={searchText} onChange={setSearchText} />
      <div className="list-container">
        {filtredRobots?.map((robot) => (
          <Link className="back-link" to={`/RobotsDetails/${robot.id}`}>
            <CarteRobot key={robot.id} robot={robot} />
          </Link>
        ))}
      </div>
    </>
  );
}
