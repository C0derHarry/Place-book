import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Jga ka naam de"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Abe naam toh dhans se daal le"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Iss jga ke baare kucch likh (accha sa haan, bura likha toh maarunga)"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Kucch toh daal bhai mtlb khali chhod dega?"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="address daaliye"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Khali nhi chhodne ka!"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
