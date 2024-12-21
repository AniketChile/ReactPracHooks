import React, { useRef, useState } from 'react';

function UseRef(props) {

    // const [value,setValue] = useState(0)
    const InputElement =  useRef();

    const gotClicked = ()=>{
        InputElement.current.style.background="blue";
    }



    return (
        <div>
            <h1>
                This is UseRef 
            </h1>
            <input type="text" ref={InputElement} />
            <button onClick={gotClicked}>Click me</button>
        </div>
    );
}

export default UseRef;