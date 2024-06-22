import React from "react";
import Field from "../Form/Input/Field";
import TextArea from "../Form/Input/TextArea";
import Submit from "../Form/Submit/Submit";

const FormRestaurant = () => {
  return (
    <form>
      <Field label="Name" placeholder="Restaurant Name" />
      <Field label="Email" placeholder="Restaurant Email" />
      <TextArea label="Descraption" placeholder="Restaurant Descraption" />
      <Submit />
    </form>
  );
};

export default FormRestaurant;
