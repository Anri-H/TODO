import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/features/todo/todoSlice";
import {Button }from "../Button/Button";
import Input from "../Input/Input";

export const Add = React.memo(() => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleChangeNewTodo = ({ target }) => setNewTodo(target.value);

  const handleAdd = () => {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  return (
    <div>
      <Input value={newTodo} onChange={handleChangeNewTodo} />
      <Button text="Add" disabled={!newTodo} onClick={handleAdd} />
    </div>
  );
});
