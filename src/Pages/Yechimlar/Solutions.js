import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { solutions } from "../../Data/Data";
import { BsSearch } from "react-icons/bs";
import "./Solutions.css";
import { Link, Outlet } from "react-router-dom";
const Solutions = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const searchFunction = () => {
    console.log(search.toLowerCase());
    setSearch("");
  };
  useEffect(() => {
    if (search.length == 0) setItems(solutions);
    else {
      const res = solutions.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setItems(res);
    }
  }, [search]);
  console.log("solutions");
  return (
    <div className="">
      <Container>
        <div className="searchBox">
          <input
            placeholder="Search"
            className="searchInput"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => searchFunction()}>
            <BsSearch color="#fff" />
          </button>
        </div>

        <section className="category">
          <ul className="course-item-group flex">
            {items.map((solution, index) => (
              <li key={index} className="course-category-item">
                <div className="wrapper">
                  <img
                    src={solution.src1}
                    alt="category icon"
                    className="category-icon default"
                  />

                  <img
                    src={solution.src2}
                    alt="category icon white"
                    className="category-icon hover"
                  />
                </div>

                <div className="course-category-content">
                  <h3 className="category-title">
                    <Link to={`/solutions/${solution.title}`}>
                      {solution.title}
                    </Link>
                  </h3>

                  <p className="category-subtitle">{solution.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
};

export default Solutions;
