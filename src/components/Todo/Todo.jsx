import React from "react";
import { useSelector } from "react-redux";
import { todos } from "../../store/features/todo/todoSlice";
import { Add } from "../Add/Add";
import { TodoItem } from "../TodoItem/TodoItem";

export default function Todo() {
  const todoList = useSelector(todos);
  return (
    <div>
      <h1>TODO List</h1>
      <Add />
      <ul>
        {todoList.map((todo, i) => {
          return <TodoItem todo={todo} i={i} />;
        })}
      </ul>
    </div>
  );
}
