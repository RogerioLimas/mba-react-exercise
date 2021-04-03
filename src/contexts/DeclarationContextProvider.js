import { createContext, useState } from 'react';
import Declaration from '../domain/Declaration';

export const DeclarationContext = createContext();

export default function DeclarationContextProvider({ children }) {
  const [declaration, setDeclaration] = useState(new Declaration());

  const setData = (data) => {
    const declarationDTO = {
      totalSalary: 0.0,
      dependants: 0,
      tax: data.toFixed(3).slice(0,-1)
    };

    setDeclaration(declarationDTO);
  };

  return (
    <DeclarationContext.Provider value={{ declaration, setData }}>
      {children}
    </DeclarationContext.Provider>
  );
}
