import React from "react";
import "./Button.scss";

export const Button = React.memo(({ text, onClick, disabled }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
});
