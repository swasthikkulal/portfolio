import React from "react";
import { useState, useEffect } from "react";
const Counter = () => {
  const [exp, setExp] = useState(0);
  useEffect(() => {
    const timeout1 = setTimeout(() => setExp(0), 1000);
    const timeout2 = setTimeout(() => setExp(1), 2000);
    const timeout3 = setTimeout(() => setExp(2), 3000);
    const timeout4 = setTimeout(() => setExp(3), 4000);
    const timeout5 = setTimeout(() => setExp(4), 5000);
    const timeout6 = setTimeout(() => setExp(5), 6000);
    const timeout7 = setTimeout(() => setExp(6), 7000);
    const timeout8 = setTimeout(() => setExp(7), 8000);
    const timeout9 = setTimeout(() => setExp(8), 9000);
    const timeout10 = setTimeout(() => setExp(9), 10000);
    const timeout11 = setTimeout(() => setExp(10), 11000);
    const timeout12 = setTimeout(() => setExp(9), 12000);
    const timeout13 = setTimeout(() => setExp(8), 13000);
    const timeout14 = setTimeout(() => setExp(7), 14000);
    const timeout15 = setTimeout(() => setExp(6), 15000);
    const timeout16 = setTimeout(() => setExp(5), 16000);
    const timeout17 = setTimeout(() => setExp(4), 17000);
    const timeout18 = setTimeout(() => setExp(3), 18000);
    const timeout19 = setTimeout(() => setExp(2), 19000);
    const timeout20 = setTimeout(() => setExp(1), 20000);
    const timeout21 = setTimeout(() => setExp(0), 21000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      clearTimeout(timeout7);
      clearTimeout(timeout8);
      clearTimeout(timeout9);
      clearTimeout(timeout10);
      clearTimeout(timeout11);
      clearTimeout(timeout12);
      clearTimeout(timeout13);
      clearTimeout(timeout14);
      clearTimeout(timeout15);
      clearTimeout(timeout16);
      clearTimeout(timeout17);
      clearTimeout(timeout18);
      clearTimeout(timeout19);
      clearTimeout(timeout20);
      clearTimeout(timeout21);
    };
  }, []);
  const [tech, settech] = useState(0);

  useEffect(() => {
    const timeout1 = setTimeout(() => settech(0), 1000);
    const timeout2 = setTimeout(() => settech(1), 2000);
    const timeout3 = setTimeout(() => settech(2), 3000);
    const timeout4 = setTimeout(() => settech(3), 4000);
    const timeout5 = setTimeout(() => settech(4), 5000);
    const timeout6 = setTimeout(() => settech(5), 6000);
    const timeout7 = setTimeout(() => settech(6), 7000);
    const timeout8 = setTimeout(() => settech(7), 8000);
    const timeout9 = setTimeout(() => settech(8), 9000);
    const timeout10 = setTimeout(() => settech(9), 10000);
    const timeout11 = setTimeout(() => settech(10), 11000);
    const timeout12 = setTimeout(() => settech(9), 12000);
    const timeout13 = setTimeout(() => settech(8), 13000);
    const timeout14 = setTimeout(() => settech(7), 14000);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      clearTimeout(timeout7);
      clearTimeout(timeout8);
      clearTimeout(timeout9);
      clearTimeout(timeout10);
      clearTimeout(timeout11);
      clearTimeout(timeout12);
      clearTimeout(timeout13);
      clearTimeout(timeout14);
    };
  }, []);

  const [project, setproject] = useState(0);
  useEffect(() => {
    const timeout1 = setTimeout(() => setproject(0), 1000);
    const timeout2 = setTimeout(() => setproject(1), 2000);
    const timeout3 = setTimeout(() => setproject(2), 3000);
    const timeout4 = setTimeout(() => setproject(3), 4000);
    const timeout5 = setTimeout(() => setproject(4), 5000);
    const timeout6 = setTimeout(() => setproject(5), 6000);
    const timeout7 = setTimeout(() => setproject(6), 7000);
    const timeout8 = setTimeout(() => setproject(7), 8000);
    const timeout9 = setTimeout(() => setproject(8), 9000);
    const timeout10 = setTimeout(() => setproject(9), 10000);
    const timeout11 = setTimeout(() => setproject(10), 11000);
    const timeout12 = setTimeout(() => setproject(9), 12000);
    const timeout13 = setTimeout(() => setproject(8), 13000);
    const timeout14 = setTimeout(() => setproject(7), 14000);
    const timeout15 = setTimeout(() => setproject(6), 15000);
    const timeout16 = setTimeout(() => setproject(5), 16000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      clearTimeout(timeout7);
      clearTimeout(timeout8);
      clearTimeout(timeout9);
      clearTimeout(timeout10);
      clearTimeout(timeout11);
      clearTimeout(timeout12);
      clearTimeout(timeout13);
      clearTimeout(timeout14);
      clearTimeout(timeout15);
      clearTimeout(timeout16);
    };
  }, []);
  const [intern, setintern] = useState(0);
  useEffect(() => {
    const timeout1 = setTimeout(() => setintern(0), 1000);
    const timeout2 = setTimeout(() => setintern(1), 2000);
    const timeout3 = setTimeout(() => setintern(2), 3000);
    const timeout4 = setTimeout(() => setintern(3), 4000);
    const timeout5 = setTimeout(() => setintern(4), 5000);
    const timeout6 = setTimeout(() => setintern(5), 6000);
    const timeout7 = setTimeout(() => setintern(6), 7000);
    const timeout8 = setTimeout(() => setintern(7), 8000);
    const timeout9 = setTimeout(() => setintern(8), 9000);
    const timeout10 = setTimeout(() => setintern(9), 10000);
    const timeout11 = setTimeout(() => setintern(10), 11000);
    const timeout12 = setTimeout(() => setintern(9), 12000);
    const timeout13 = setTimeout(() => setintern(8), 13000);
    const timeout14 = setTimeout(() => setintern(7), 14000);
    const timeout15 = setTimeout(() => setintern(6), 15000);
    const timeout16 = setTimeout(() => setintern(5), 16000);
    const timeout17 = setTimeout(() => setintern(4), 17000);
    const timeout18 = setTimeout(() => setintern(3), 18000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      clearTimeout(timeout7);
      clearTimeout(timeout8);
      clearTimeout(timeout9);
      clearTimeout(timeout10);
      clearTimeout(timeout11);
      clearTimeout(timeout12);
      clearTimeout(timeout13);
      clearTimeout(timeout14);
      clearTimeout(timeout15);
      clearTimeout(timeout16);
      clearTimeout(timeout17);
      clearTimeout(timeout18);
    };
  }, []);

  return (
    <div className="split-counter">
      <div className="counter-items">
        <div className="exp">
          <h1 id="exp">{exp}</h1>
          <p className="joint-font" id="size">
            Years of <br />
            experience
          </p>
        </div>
        <div className="tech">
          <h1 id="tech">{tech}</h1>
          <p className="joint-font" id="size">
            Technologies <br />
            mastered
          </p>
        </div>
        <div className="project">
          <h1 id="project">{project} </h1>
          <p className="joint-font" id="size">
            Projects <br />
            completed
          </p>
        </div>
        <div className="intern">
          <h1 id="intern">{intern} </h1>
          <p className="joint-font" id="size">
            Internship <br />
            completed
          </p>
        </div>
      </div>
      <div className="counter2">
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Counter;
