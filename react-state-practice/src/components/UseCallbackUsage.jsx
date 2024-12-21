import React, { useCallback, useState } from 'react';
import Header from './Header';

function UseCallbackUsage(props) {
    const[count,setCount]=useState(0);
    const newFn =  useCallback(()=>{},[])

    return (
        <div>
            <Header newFn={newFn}/>
            <h1>{count}</h1>
            <button onClick={()=>setCount(prev=>prev+1)}>Click Here</button>

            <p>
                The useCallback is a hook in React that helps you optimize performance by memoizing caching the funcitons. Means the callback function will run only one when the one of the dependency gets change.
            </p>
        </div>
    );
}

export default UseCallbackUsage;