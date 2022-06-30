import React from "react";
import Card from "./card";
import { useQuery } from "@apollo/client";
import { GET_CARDS } from "../../grapql/query";
import Spinner from "./spinner";
import "./cardcontainer.css";

function Cards() {
  const { data, loading, error } = useQuery<any>(GET_CARDS);
  if (loading) {
    return (
      <div className="spinnerDiv">
        <Spinner />;
      </div>
    );
  }
  if (error) {
    return <div>Something went wrong</div>;
  }

  console.log(data.flashCardlist);
  return (
    <div className="cardsmain">
      {data.flashCardlist.map((flashcard) => (
        <Card
          key={flashcard.id}
          title={flashcard.title}
          description={flashcard.description}
        />
      ))}
    </div>
  );
}

export default Cards;
