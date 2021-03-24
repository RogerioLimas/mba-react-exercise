import { useContext } from 'react';
import { PersonContext } from '../contexts/PersonContextProvider';

export const usePerson = () => {
  const { person, setData } = useContext(PersonContext);
  return [person, setData];
};
