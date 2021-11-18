import React from "react";
import { useCustomForm } from "./../hooks/useCustomForm";
import TextFieldGroup from "./commons/TextFieldGroup";
import { useGameStore } from "../contexts/GameContext";
import { isEmpty } from "./../utils/validation";
import * as Styles from "./../styles/game";

const initialValue = {
  boardRow: "6",
  boardColumn: "4",
  winnerLength: "3",
};

const StartUp = () => {
  const gameStore = useGameStore();
  const onSubmit = (values) => {
    gameStore.setStartUpData(+values.boardRow, +values.boardColumn, +values.winnerLength);
  };

  const validation = (data) => {
    let errors = {};

    if (isEmpty(data) || isEmpty(data.boardRow)) {
      errors.boardRow = "Please enter the rows number!";
    } else if (+data.boardRow < 3) {
      errors.boardRow = "Rows number should be bigger than 3.";
    } else if (+data.boardRow > 10) {
      errors.boardRow = "Rows number should be less than 10.";
    }

        if (isEmpty(data) || isEmpty(data.boardColumn)) {
      errors.boardColumn = "Please enter the columns number!";
    } else if (+data.boardColumn < 3) {
      errors.boardColumn = "columns number should be bigger than 3.";
    } else if (+data.boardColumn > 10) {
      errors.boardColumn = "commons number should be less than 10.";
    }

    if (isEmpty(data) || isEmpty(data.winnerLength)) {
      errors.winnerLength = "Please enter Adjacent number.";
    } else if (+data.winnerLength < 3) {
      errors.winnerLength = "Adjacent cells number should be bigger that 2.";
    } else if (+data.winnerLength > data.boardRow || +data.winnerLength > data.boardColumn) {
      errors.winnerLength =
        "Adjacent cells could not be bigger than rows or columns number.";
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
        placeholder="Rows"
        name="boardRow"
        value={values.boardRow}
        onChange={handleChange}
        error={errors.boardRow}
        info="Number of Rows"
      />

       <TextFieldGroup
        placeholder="columns"
        name="boardColumn"
        value={values.boardColumn}
        onChange={handleChange}
        error={errors.boardColumn}
        info="Number of Columns"
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
