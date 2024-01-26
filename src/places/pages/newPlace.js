import React from "react";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/components/util/validators";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Nam Myo Ho Renge Kyo"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a name"
      />
    </form>
  );
};

export default NewPlace;
