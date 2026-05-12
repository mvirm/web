import React from "react";
//spiner de 3 dots
const Spinner = ({ text }) => {
  return (
    <div className="spinner">
      <section>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <span>{text}</span>
    </div>
  );
};

export default Spinner;
