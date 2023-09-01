import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state: any) => state.data);
  console.log("todoList", todoList);
  const hadnleNewTodo = () => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };
  const handleDelete = (item: any) => {
    dispatch({ type: "DELETE_TODO", payload: item });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {todoList.map((item: any) => {
          return (
            <div
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 16,
                borderStyle: "solid",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <h6>{item}</h6>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          );
        })}
        <h4>Add New Todo</h4>
        <input
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
          placeholder="Add new todo"
        />
        <button onClick={() => hadnleNewTodo()}>ADD</button>
      </div>
    </div>
  );
}

export default TodoList;
