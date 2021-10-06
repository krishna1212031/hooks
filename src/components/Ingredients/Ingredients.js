import React, { useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    fetch(
      "https://list-maker-6e532-default-rtdb.firebaseio.com/ingredients.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const recievedData = [];
        for (const key in responseData) {
          recievedData.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setIngredients(recievedData);
      });
  }, []);
  const ingredientHandler = (ingredient) => {
    fetch(
      "https://list-maker-6e532-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        header: { "content-Type": "application/json" },
      }
    )
      .then((Response) => Response.json())
      .then((ResponseData) => {
        setIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: ResponseData.name, ...ingredient },
        ]);
      });
  };
  return (
    <div className="App">
      <IngredientForm onAddIngredient={ingredientHandler} />
      <section>
        <Search />
        <IngredientList ingredients={ingredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
};

export default Ingredients;
