import { useState } from "react";

export const useCheckedState = (initialState) => {
  const [checked, setChecked] = useState(initialState);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return [checked, handleChange];
};
