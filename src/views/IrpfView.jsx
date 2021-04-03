import React from 'react';
import { useDeclaration } from '../hooks/useDeclaration.hook';

const IrpfView = ({ className }) => {
  const [declaration] = useDeclaration();

  return (
    <div className={className}>
      Imposto devido: <span id='tax'>{declaration.tax || 0}</span>
    </div>
  );
};

export default IrpfView;
