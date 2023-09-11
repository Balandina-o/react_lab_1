import classes from "./Card.module.css";
import React, { useState } from "react";

export default function Card(props) {
  const [show_email, setShowEmail] = useState(false);

  return (
    <div className={classes.card}>
      <img src={props.avatar} alt="risotto" />
      <div className={classes.user_info}>
        <div>Имя: {props.first_name}</div>
        <div>Фамилия: {props.last_name}</div>
        <div>
          Почта:
          {show_email ? (
            <span>{props.email}</span>
          ) : (
            <span style={{ color: "gray", fontSize: "20px" }}></span>
          )}
        </div>
        <button
          onClick={() => {
            setShowEmail(!show_email);
          }}
        >
          {show_email ? "Скрыть" : "Показать"}
        </button>
        <div>Возраст: {props.year}</div>
        <button onClick={() => props.deleteUser(props.id)}>Удалить</button>
      </div>
    </div>
  );
}
