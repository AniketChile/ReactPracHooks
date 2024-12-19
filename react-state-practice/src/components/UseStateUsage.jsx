import React, { useState } from "react";

function UseStateUsage(props) {
  //   first example from below on
  const [bike, setBike] = useState("Splendor");

  const setbmw = () => {
    setBike("BMW");
  };
  const setronin = () => {
    setBike("TVS Ronin");
  };

  // Another Example from below on

  const [powerR, setPowerr] = useState({
    rname: "xoxo",
    cname: "yoyo",
    charc: "zolo",
    color: "dolo",
  });

  const rangerName = () => {
    setPowerr((powerR) => {
      return { ...powerR, rname: "Thunder Ranger" };
    });
  };
  const charName = () => {
    setPowerr((powerR) => {
      return { ...powerR, cname: "Hunter" };
    });
  };
  const character = () => {
    setPowerr((powerR) => {
      return { ...powerR, charc: "Side Character with Main Character Vibes" };
    });
  };

  const rangerColor = () => {
    setPowerr((powerR) => {
      return {
        ...powerR,
        color: "Crimson",
      };
    });
  };

  const rangerName2 = () => {
    setPowerr((powerR) => {
      return { ...powerR, rname: "Wind Rangers" };
    });
  };
  const charName2 = () => {
    setPowerr((powerR) => {
      return { ...powerR, cname: "Dustin" };
    });
  };
  const character2 = () => {
    setPowerr((powerR) => {
      return { ...powerR, charc: "Side Character" };
    });
  };
  const rangerColor2 = ()=>{
    setPowerr((powerR)=>{
        return {
            ...powerR,color:'Yellow'
        }
    })
  }

  return (
    <>
      <h1>
        <b>This is React hooks Practice 1 - useState</b>
      </h1>
      <br />
      <div className="text-xl">My favourite Bike is {bike}</div>
      <button className="m-3" onClick={setbmw}>
        BMW
      </button>

      <button onClick={setronin}>TVS Ronin</button>
      <p>
        You can use the normal function to change the value which were assign in
        the variable but the catch is that.The UI created under the library
        React will only allow the React to make any changes so whatever the
        changes you wanted to create will display in the log but and in the
        database but if you want to make changes in the UI which you are
        creating under React then you have to use the React Hooks to do so.{" "}
      </p>

      <br />
      <p>In the above example React's useState Hook is been used. </p>

      <br />
      <h1>Another Example using objects</h1>

      <br />
      <br />
      <div className="text-xl">
        My favourite Power Ranger is {powerR.rname} who's name is {powerR.cname}{" "}
        and he is the {powerR.charc} and color of his suit is {powerR.color}
      </div>
      <div className="bg-red-900 rounded-xl p-2">
        <button className="m-3" onClick={rangerName}>
          Aniket's Fav Ranger
        </button>
        <button className="m-3" onClick={charName}>
          Aniket's Ranger Name
        </button>
        <button className="m-3" onClick={character}>
          Aniket's Ranger character vibe
        </button>

        <button onClick={rangerColor}>Ranger Color</button>
        <br />
        <hr />
        <button className="m-3" onClick={rangerName2}>
          Aniket's 2nd Fav Ranger
        </button>
        <button className="m-3" onClick={charName2}>
          Aniket's 2nd Ranger Name
        </button>
        <button className="m-3" onClick={character2}>
          Aniket's 2nd Ranger character vibe
        </button>
        <button onClick={rangerColor2}>Ranger Color</button>
      </div>
    </>
  );
}

export default UseStateUsage;
