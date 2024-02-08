import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import "./Auth.css"

const AuthUser = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <Card className="authentication">
        <h2>Login required</h2>
        <hr />
      <form>
        <Input
          id="email"
          element="input"
          type="email"
          label="Email-ID"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter valid email"
          onInput={inputHandler}
        />
        <Input
          id="password"
          type="password"
          element="input"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(8)]}
          errorText="Please enter valid password (atleast 8 characters)"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default AuthUser;
