import { v4 as uuidv4 } from "uuid";

export function addTodoAsync(name) {
  const id = uuidv4();
  const todo = { name, id, completed: false };
  return new Promise((resolve) => setTimeout(() => resolve(todo), 1000));
}
