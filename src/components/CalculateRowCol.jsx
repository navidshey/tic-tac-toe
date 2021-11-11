import React from "react";

const CalculateRowCol = (props) => {
  if (isNaN(props.index)) return <div></div>;

  //  props.index = props.index ? props.index+1 : props.index;
  const row = Math.ceil(props.index / 3);
  const column = props.index - (row - 1) * 3;
  return (
    <div>
      row: {row}, columns: {column}
    </div>
  );
};

export default CalculateRowCol;
