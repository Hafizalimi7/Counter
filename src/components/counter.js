import React from "react"

function Counter() {
  
    const [count, setCount] = React.useState(0)

    function add(){
      setCount(function(prevCount){
        return prevCount + 1
      })
    }

    function minus(){
      setCount(function(prevCount){
        return prevCount -1
      })
    }
  
  return (

    
    
   <div className="counter" >
        <button data-testid="minus-btn"className="counter--minus" onClick={minus}>-</button>
        <div className="counter--count">
          <h1 className={`${count < 0 ? "red":"black"}`} data-testid="counterId">{count}</h1>
        </div>
        <button data-testid="add-btn"className="counter--plus"  onClick={add}>+</button>
        
  </div>
   
  );
}

export default Counter;


