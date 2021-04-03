import { useContext } from 'react';
import { DeclarationContext } from '../contexts/DeclarationContextProvider';

export const useDeclaration = () => {
  const { declaration, setData } = useContext(DeclarationContext);
  return [declaration, setData];
};
