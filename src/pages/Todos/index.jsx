import { Button, Input } from "antd";
import React, { useState } from "react";
import "./index.css";
function Todos() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const addTodo = () => {
    if (inputText) {
      setEditText("");
      setEdit(false);
      setEditIndex(null);
      setTodos((prevVal) => [...prevVal, inputText]);
      setInputText("");
    }
  };
  const deleteTodo = (index) => {
    const tempArr = [...todos.filter((item) => item != todos[index])];
    setTodos(tempArr);
  };
  const updateTodo = (index) => {
    const tempArr = [...todos];
    tempArr[index] = editText;
    setTodos(tempArr);
    setEditText("");
    setEdit(false);
    setEditIndex(null);
  };
  return (
    <div className="page">
      <h1>Todo App</h1>
      <div className="add-todo">
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter Task"
        />
        <Button onClick={addTodo} type="primary">
          Add
        </Button>
      </div>
      <div>
        {todos.map((item, index) => {
          return (
            <div className="add-todo item" key={index}>
              {edit && editIndex == index ? (
                <Input
                  placeholder="Edit Todo"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <p>{item}</p>
              )}
              <Button
                type="primary"
                onClick={() => {
                  if (edit) {
                    updateTodo(index);
                  } else {
                    setEdit(true);
                    setEditText(item);
                    setEditIndex(index);
                  }
                }}
              >
                {edit ? "Save" : "Edit"}
              </Button>
              <Button
                className="delete-button"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
