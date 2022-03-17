import React from "react";

export const InputTodo = (props) => {
  const style = {
    backgroundColor: "#c1ffff",
    height: "30px"
  };

  const { todoText, onChengeTodoText, onClickAdd, disabled } = props;
  return (
    <div style={style} className="input-area">
      <input
        desabled={disabled}
        placeholder="TOODOを入力"
        value={todoText}
        onChange={onChengeTodoText}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
