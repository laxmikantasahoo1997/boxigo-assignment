import { createContext, useEffect, useState } from "react";
import { getDataFromAPI } from "../config/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [moves, setMoves] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataFromAPI(setMoves, setLoading);
  }, []);

  return (
    <DataContext.Provider value={{ moves, loading }}>
      {children}
    </DataContext.Provider>
  );
};
