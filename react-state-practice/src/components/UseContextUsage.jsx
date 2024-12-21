import React from "react";
import Profile from "./Profile";
import Footer from "./Footer";

function UseContextUsage(props) {
  return (
    <div className="container">
      <>
        <Profile/>
        <Footer />
      </>
    <hr />
    <br />
      <p>
        Prop drilling is bad for that UseContext is use. The useContext is used
        to manage the Global data in the React app
      </p>
    </div>
  );
}

export default UseContextUsage;
