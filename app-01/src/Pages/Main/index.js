import "./style.css";
import React, { useState, useEffect } from "react";

function Main() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  //useEffect sem array de depedência
  // useEffect(() => {
  //   console.log("useEffect sem array de depedência");
  // });

  //useEffect com array de depedência vazio
  // useEffect(() => {
  //   console.log("useEffect com array de depedência vazio");
  // }, []);

  //useEffect com array de depedência e com parâmetro
  useEffect(() => {
    console.log("useEffect com array de depedência e com parâmetro");
  }, [count, count2]);

  return (
    <div className="container">
      <div className="container-count">
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
      <div className="container-count">
        <h1>{count2}</h1>
        <button
          onClick={() => {
            setCount2(count2 - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Main;
