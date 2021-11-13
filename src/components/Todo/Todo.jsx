import React from "react";
import { useSelector } from "react-redux";
import { todos } from "../../store/features/todo/todoSlice";
import { Add } from "../Add/Add";
import { TodoItem } from "../TodoItem/TodoItem";
import "./Todo.scss";

export default function Todo() {
  const todoList = useSelector(todos);
  return (
    <div className="todo">
      <h1 className="title">TODO List</h1>
      <Add />
      <ul className="list">
        {todoList.map((todo, i) => {
          return <TodoItem todo={todo} i={i} />;
        })}
      </ul>
    </div>
  );
}
