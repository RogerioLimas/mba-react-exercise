import React, { useState } from 'react';

import { useDeclaration } from '../hooks/useDeclaration.hook';

import IrpfTableView from '../views/IrpfTableView.jsx';
import IrpfForm from '../views/forms/IrpfForm';
import IrpfController from '../controllers/IrpfController';
import Declaration from '../domain/Declaration';
import IrpfView from '../views/IrpfView';

function OtherApp() {
  const [, setDeclaration] = useDeclaration();
  const [controller] = useState(new IrpfController());

  const calculateTax = async (salary, dependants) => {
    var newDeclaration = new Declaration(
      parseFloat(salary),
      parseInt(dependants)
    );

    const calculatedDeclaration = await controller.calculate(
      newDeclaration.toObject()
    );

    setDeclaration(calculatedDeclaration);
  };

  return (
    <div className='container'>
      <div className='data'>
        <div className='form'>
          <div className='row'>
            <IrpfTableView />
          </div>
          <hr />
          <IrpfForm onSubmit={calculateTax} />
        </div>
      </div>
      <hr />
      <IrpfView class="data" />
    </div>
  );
}

export default OtherApp;
