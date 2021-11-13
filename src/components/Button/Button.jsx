import React from "react";

export const Button = React.memo(({ text, onClick, disabled }) => {
  console.log("button");
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
});
