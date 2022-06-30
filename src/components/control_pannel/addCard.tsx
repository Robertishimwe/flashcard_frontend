import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { InputBox, LoginBtn } from "../login_signup/InputBox";
import "./addcard.css";

const CREATE_CARD_MUTATION = gql`
  mutation (
    $category: String!
    $title: String!
    $description: String!
    $done: Boolean!
  ) {
    create(
      category: $category
      title: $title
      description: $description
      done: $done
    ) {
      id
      title
      description
      done
    }
  }
`;

function AddCard() {
  const [title, setTitle] = useState("");
  const [description, setDescriptions] = useState("");
  const [category, setCategory] = useState("");

  const [createCard, { called, loading, data }] = useMutation(
    CREATE_CARD_MUTATION,
    {
      variables: {
        category,
        title,
        description,
        done: false,
      },
    }
  );
  if (called && loading) {
    return <p className="loading">Loading ...</p>;
  }
  if (data && data.create) {
    window.location.reload();
    console.log(data);
  }

  const btnProps = {
    value: "Add card",
  };
  interface LoginProps {
    name: string;
    placeholder: string;
    type: string;
  }

  const inputProps: LoginProps[] = [
    {
      name: "title",
      placeholder: "Enter title of the card",
      type: "text",
    },
    {
      name: "description",
      placeholder: "Enter description",
      type: "text",
    },
    {
      name: "category",
      placeholder: "Enter category of the card",
      type: "text",
    },
  ];

  return (
    <div className="addCardContainer">
      {inputProps.map((inputProp) => (
        <InputBox
          name={inputProp.name}
          placeholder={inputProp.placeholder}
          type={inputProp.type}
          key={inputProp.name}
          onChange={(e: any) => {
            if (inputProp.name === "title") {
              setTitle(e.target.value);
            }
            if (inputProp.name === "description") {
              setDescriptions(e.target.value);
            }
            if (inputProp.name === "category") {
              setCategory(e.target.value);
            }
          }}
        />
      ))}
      <LoginBtn onClick={createCard} value={btnProps.value} />
    </div>
  );
}

export default AddCard;
