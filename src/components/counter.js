import React from "react"

function Counter() {
  return (
    
   <div className="counter" >
        <button data-testid="minus-btn"className="counter--minus">-</button>
        <div className="counter--count">
          <h1 data-testid="counterId">0</h1>
        </div>
        <button data-testid="add-btn"className="counter--plus">+</button>
        
  </div>
   
  );
}

export default Counter;


