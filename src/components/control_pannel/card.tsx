import React from "react";
import "./cardsStyle.css";

function Cards(props: any) {
  const { title, description } = props;
  return (
    <div className="maincontainer">
      <div className="thecard">
        <div className="thefront">
          <h1>Title</h1>
          <p>{title}</p>
        </div>

        <div className="theback">
          <h1>Description</h1>
          <p>{description}</p>
          <button>Mark as done</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
