import React from "react";

const CustomSelect = ({ value, onChange }) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="" disabled selected>
        Сортировка
      </option>
      <option value="first_name"> Имя</option>
      <option value="last_name"> Фамилия</option>
    </select>
  );
};

export default CustomSelect;
