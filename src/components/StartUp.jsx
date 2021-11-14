import React from "react";
import { useCustomForm } from "./../hooks/useCustomForm";
import TextFieldGroup from "./commons/TextFieldGroup";
import { useGameStore } from "../contexts/GameContext";
import { isEmpty } from "./../utils/validation";
import * as Styles from "./../styles/game";

const initialValue = {
  boardLength: "4",
  winnerLength: "4",
};

const StartUp = () => {
  const gameStore = useGameStore();
  const onSubmit = (values) => {
    gameStore.setStartUpData(+values.boardLength, +values.winnerLength);
  };

  const validation = (data) => {
    let errors = {};

    if (isEmpty(data)) {
      errors.boardLength = "Please enter the rows and columns number!";
    } else if (+data.boardLength < 3) {
      errors.boardLength = "Rows and columns number should be bigger than 3.";
    } else if (+data.boardLength > 10) {
      errors.boardLength = "Rows and commons number should be less than 10.";
    }

    if (isEmpty(data)) {
      errors.winnerLength = "Please enter Adjacent number.";
    } else if (+data.winnerLength < 3) {
      errors.winnerLength = "Adjacent cells number should be bigger that 2.";
    } else if (+data.winnerLength > data.boardLength) {
      errors.winnerLength =
        "Adjacent cells could not be bigger than rows and columns number.";
    }
    return {
      errors,
      isValid: isEmpty(errors),
    };
  };

  const { values, errors, handleChange, handleSubmit } = useCustomForm({
    initialValues: initialValue,
    onSubmit: onSubmit,
    validation: validation,
  });

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <TextFieldGroup
        placeholder="Rows * columns"
        name="boardLength"
        value={values.boardLength}
        onChange={handleChange}
        error={errors.boardLength}
        info="Number of Rows and Columns"
      />

      <TextFieldGroup
        placeholder="Adjacent cells"
        name="winnerLength"
        value={values.winnerLength}
        onChange={handleChange}
        error={errors.winnerLength}
        info="Adjacent Cells Number to Win"
      />

      <TextFieldGroup
        name="submitBtn"
        value="Start the Game"
        type="submit"
        className=""
      ></TextFieldGroup>
    </Styles.Container>
  );
};

export default StartUp;
