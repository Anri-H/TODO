import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/features/todo/todoSlice";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Add() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  const handleChangeNewTodo = ({ target }) => setNewTodo(target.value);

  return (
    <div>
      <Input value={newTodo} onChange={handleChangeNewTodo} />
      <Button text="Add" disabled={!newTodo} onClick={handleAdd} />
    </div>
  );
}
