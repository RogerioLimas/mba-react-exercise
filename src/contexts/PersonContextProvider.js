import { createContext, useState } from 'react';
import Person from  '../domain/Person';

export const PersonContext = createContext();

export default function PersonContextProvider({children}) {
  const [person, setPerson] = useState(new Person());

  const setData = (data) => {
    setPerson(data);
  }

  return <PersonContext.Provider value={{person, setData}}>
    {children}
  </PersonContext.Provider>
}