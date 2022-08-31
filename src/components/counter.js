import React from "react"

function Counter() {
  return (
   <div className="counter">
        <h1 data-testid="titleId" className="title">
            Counter
        </h1>
        <div className="counter--count">
          <h1 data-testid="counterId">0</h1>
        </div>
        <button data-testid="add-btn"className="counter--plus">
          +
        </button>
  </div>
   
  );
}

export default Counter;
