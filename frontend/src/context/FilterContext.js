import { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [doctorSpec, setDoctorSpec] = useState(""); // default value can be customized

  const contextValue = {
    doctorSpec,
    setDoctorSpec,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
