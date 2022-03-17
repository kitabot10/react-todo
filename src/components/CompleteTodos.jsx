import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complate-area">
      <p className="title">完了のTODO</p>
      <ul>
        <li>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
