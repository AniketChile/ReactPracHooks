import React, { useEffect, useState } from "react";

function UseEffect(props) {
  const [count, setCount] = useState(0);
  const [incount, setIncount] = useState(0);
  const [outcount, setOutcount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setIncount((incount) => incount + 1);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  });

  useEffect(() => {
    setTimeout(() => {
      setOutcount((outcount) => outcount + 1);
    }, 2000);
  }, [count]);

  return (
    <>
      <h1 className="text-6xl font-bold p-3">
        This is React hooks Practice 2 - useEffect{" "}
      </h1>
      <br />
      <div className="container p-2 bg-red-300 rounded-md m-3 text-black">
        <p className="text-4xl px-2 py-2 bg-red-500 rounded-2xl font-semibold">
          This is useEffect without any dependency
        </p>
        <p className="text-3xl m-2">
          The below state gets update after every 2 seconds
        </p>
        <h2 className="font-bold bg-red-100 text-black rounded-2xl p-2">
          This {count} get's updated after every 2 seconds.
        </h2>
      </div>

      <div className="p-3 container bg-yellow-300 m-3 rounded-md text-black">
        {/* <p>This is useEffect with empty dependency</p> */}
        <p className="text-4xl px-2 py-2 bg-red-500 rounded-2xl font-semibold">
          This is useEffect without empty dependency
        </p>
        <p className="text-3xl m-2">
          The below state gets update after every 2 seconds
        </p>
        <h2 className="font-bold bg-red-100 text-black rounded-2xl p-2">
          This {incount} get's updated after every 2 seconds.
        </h2>
        <p>With only empty dependency the useEffect will only run once.</p>
      </div>

      <div className="bg-green-300 p-3 container m-3 rounded-md text-black">
        {/* <p>This is useEffect with empty dependency</p> */}
        <p className="text-4xl px-2 py-2 bg-red-500 rounded-2xl font-semibold">
          This is useEffect with dependency
        </p>
        <p className="text-3xl m-2">
          The below state gets update after every 2 seconds
        </p>
        <h2 className="font-bold bg-red-100 text-black rounded-2xl p-2">
          This {outcount} get's updated after every 2 seconds.
        </h2>
        <p>
          Whenever there is changes in the dependecny the UseEffect will run
        </p>
      </div>

      <div className="bg-slate-500 text-black rounded-sm">
        <p className="m-2">
          <ul>
            useEffect:- the useEffect hook is used to perform the side effects
            in the components. some eg of side effects are:-
            <li>1.Fetching data from API.</li>
            <li>2.Directly updating the DOM.</li>
            <li>3.Timers like SetTimeOut and SetInterval. </li>
          </ul>
        </p>

        <p className="m-2 bg-slate-300 rounded-sm">
          {" "}
          useEffect consist of two thing
          <ul>
            <li> 1.Callback </li>
            <li>2.Dependency.</li>
          </ul>
          dependency is not necessary/optional but call back is necessary.
        </p>

        <p className="m-2">
          {" "}
          when we use the useEffect without dependency then whenever their is
          change in the state the useEffect callback function will get call and
          will get executed.
        </p>

        <p>
          {" "}
          react.strictmode is the react strict mode which is used to runtime
          checks to make that app in the development is safe.{" "}
        </p>
      </div>
    </>
  );
}

export default UseEffect;
