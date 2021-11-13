import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { edit, complete, remove } from "../../store/features/todo/todoSlice";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import "./TodoItem.scss";

export const TodoItem = React.memo(({ todo, i }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [edited, setEdited] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setEdited(todo.name);
  }, [todo]);

  const handleEdit = useCallback(() => {
    if (isEdit) {
      dispatch(edit({ name: edited, i }));
      setIsEdit(false);
    } else setIsEdit(true);
  }, [isEdit]);

  const handleChangeEdit = ({ target }) => setEdited(target.value);

  const handleCompleted = () => dispatch(complete(i));

  const handleDelete = useCallback(() => dispatch(remove(i)), []);

  return (
    <li className="main">
      <Input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCompleted}
      />
      {isEdit ? (
        <Input type="text" value={edited} onChange={handleChangeEdit} />
      ) : (
        <span>{todo.name}</span>
      )}
      <div>
        <Button text={isEdit ? "Save" : "Edit"} onClick={handleEdit} />
        <Button text="Delete" onClick={handleDelete} />
      </div>
    </li>
  );
});
