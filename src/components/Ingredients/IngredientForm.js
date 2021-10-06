import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({title:title,amount:amount})
  };

  return (
    <section className="ingredient-form">
      <Card>
       {/* 02 */}
      </Card>
    </section>
  );
});

export default IngredientForm;
