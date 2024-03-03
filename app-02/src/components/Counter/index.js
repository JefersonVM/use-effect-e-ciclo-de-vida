import "./style.css";
const { useState, useEffect } = require("react");

const Counter = ({ handleChangeText }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleChangeText('Montei o componente counter');

    return () => {
      handleChangeText('Desmontei o componente counter');
    };
  }, []);

  return (
    <div className="container-counter">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
