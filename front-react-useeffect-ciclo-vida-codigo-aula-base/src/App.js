import React, { useEffect, useState } from "react";
import "./App.css";
import PauseImage from "./assets/pause.svg";
import PlayImage from "./assets/play.svg";
import ResetImage from "./assets/reset.svg";

function Timer() {
  const [finish, setFinish] = useState(false);
  const [initialTime, setInitialTime] = useState(0);
  const [timer, setTimer] = useState({ running: false, time: 0 });

  const handleDecrement = () => {
    if (initialTime <= 0) {
      return;
    }
    setInitialTime(initialTime - 1);
  };
  const handleIncrement = () => {
    setInitialTime(initialTime + 1);
  };

  const handleStart = () => {
    if (initialTime <= 0) {
      return;
    }
    setTimer({ ...timer, running: true });
  };

  const handlePause = () => {
    setTimer({ ...timer, running: false });
  };

  const handleReset = () => {
    setTimer({ running: false, time: 0 });
    setInitialTime(0);
    setFinish(false);
  };

  useEffect(() => {
    let interval;
    let localTime = initialTime * 6000;

    if (timer.running) {
      interval = setInterval(() => {
        if (localTime <= 0) {
          setTimer({ running: false, time: 0 });
          clearInterval(interval);
          setTimeout(() => {
            setFinish(true);
          }, 3000);
          return;
        }
        setTimer((prevTimer) => ({ ...prevTimer, time: localTime }));
        localTime -= 1;
      }, 10);
      return () => clearInterval(interval);
    }
  }, [timer.running]);

  return (
    <main>
      {!finish && (
        <div>
          <img src="/logo.svg" alt="logo" />
          <h1>Cubos Timer</h1>
        </div>
      )}
      <div className="container">
        <div className="content">
          {!finish ? (
            <>
              <h2>Informe o tempo em minutos:</h2>
              <div className="container-buttons">
                <button onClick={handleDecrement}>-</button>
                <input
                  type="number"
                  value={initialTime}
                  onChange={(e) => setInitialTime(e.target.valueAsNumber)}
                />
                <button onClick={handleIncrement}>+</button>
              </div>
              <hr />
              <div className="timer">
                <div>
                  <h1>{timer.time}</h1>
                  <span>ms</span>
                </div>
                <div>
                  {!timer.running ? (
                    <img src={PlayImage} alt="play" onClick={handleStart} />
                  ) : (
                    <img src={PauseImage} alt="pause" onClick={handlePause} />
                  )}
                  <img src={ResetImage} alt="reset" onClick={handleReset} />
                </div>
              </div>
            </>
          ) : (
            <>
              <h1>Seu tempo acabou!</h1>
              <button className="btn-primary" onClick={handleReset}>
                Recomeçar
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Timer;
