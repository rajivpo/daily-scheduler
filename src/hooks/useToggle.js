import { useState, useCallback } from "react";

// Toggles modal open and close
const useToggle = (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue);

  return [toggle, useCallback(() => setToggle(status => !status), [])];
}

export default useToggle;