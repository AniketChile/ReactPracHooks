import React, { useMemo, useState } from "react";

function UseMemoUsage(props) {

    const [number,setNumber]=useState()
    const [counter,setCounter]=useState(0)

    function cubeNum(num){
        console.log('Calculation done');
        return Math.pow(num,3)
    }

    const result = useMemo(()=>cubeNum(number),[number])

  return (
    <div>

        <input className="h-12 w-96 rounded-xl p-2" placeholder="Enter the value to get cube below" type="number" name="" id="" value={number} onChange={(e)=>{setNumber(e.target.value)}} /><h1>Cube of the number :{result}</h1>
        <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
        <h1>{counter}</h1>
      <p>The React useMemo Hook returns a memoized value. </p>
      <p>
    
        It's like caching a value so that it doesn't need to be recalculated.
      </p>
    </div>
  );
}

export default UseMemoUsage;
