import "./style.css";
import Counter from "../../components/Counter";
import { useState } from "react";

function Main() {
  const [showCounter, setShowCounter] = useState(false);
  const [text, setText] = useState("");

  const handleChangeText = (newText) => {
    setText(newText);
  };

  return (
    <div className="container">
      {text}
      {showCounter && <Counter handleChangeText={handleChangeText} />}
      <button onClick={() => setShowCounter(!showCounter)}>Show/Hide</button>
    </div>
  );
}

export default Main;
