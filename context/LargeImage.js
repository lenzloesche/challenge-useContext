import { createContext } from "react";
import { useState } from "react";
export const LargeImage = createContext();
export function LargeImageProvider({ children }) {
  const [isLarge, setIsLarge] = useState(true);
  function handleSetIsLarge(newValue) {
    setIsLarge(newValue);
  }
  return (
    <LargeImage.Provider value={{ isLarge, handleSetIsLarge }}>
      {children}
    </LargeImage.Provider>
  );
}
