import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function componentDiMount() {
    setCounter(10);
  }

  return (
    <div className="flex justify-center ">
      <button
        className="px-6 py-2 bg-red-500 text-white rounded ml-3 mr-3"
        onClick={() => setCounter(counter - 1)}
      >
        -1
      </button>
      <h1 className="px-6 py-2 rounded">{counter}</h1>
      <button
        className="px-6 py-2 bg-red-500 text-white rounded ml-3"
        onClick={() => setCounter(counter + 1)}
      >
        +1
      </button>
    </div>
  );
};

export default Counter;
