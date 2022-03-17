import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncomplateTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setComplateTodos] = useState(["ううう", "えええ"]);

  const onChengeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  const onClickComplate = (index) => {
    //未完了から削除した配列を作成
    const newIncompTodos = [...incompleteTodos];
    newIncompTodos.splice(index, 1);

    //完了へ追加
    const newCompTodos = [...completeTodos, incompleteTodos[index]];

    //各リストに反映
    setIncomplateTodos(newIncompTodos);
    setComplateTodos(newCompTodos);
  };

  const onClickBack = (index) => {
    // alert("戻す" + index);
    const newCompTodos = [...completeTodos];
    newCompTodos.splice(index, 1);

    const newIncompTodos = [...incompleteTodos, completeTodos[index]];
    //各リストに反映
    setIncomplateTodos(newIncompTodos);
    setComplateTodos(newCompTodos);
  };

  // const todosInputDisabelCheck = () => {
  //   return incompleteTodos.length >= 5;
  // };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChengeTodoText={onChengeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodoは5個までです！先に消費してください。
        </p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
