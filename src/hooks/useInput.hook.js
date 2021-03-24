import { useState } from "react";

export const useInput = (initialValue) => {
  const [val, setVal] = useState(initialValue);

  return [
    val,
    setVal,
    {
      value: val,
      onChange: (e) => setVal(e.target.value),
    },
  ];
};
