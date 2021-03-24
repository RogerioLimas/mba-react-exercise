import { createContext, useState } from 'react';
import Person from  '../domain/Person';

export const PersonContext = createContext();

export default function PersonContextProvider({children}) {
  const [person, setPerson] = useState(new Person());

  return <PersonContext.Provider value={{person, setPerson}}>
    {children}
  </PersonContext.Provider>
}