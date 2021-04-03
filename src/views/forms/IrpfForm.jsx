import React from 'react';

import { useInput } from "../../hooks/useInput.hook";

const IrpfForm = ({ onSubmit }) => {
    const [salary, , salaryProps] = useInput(0.0);
    const [dependants, , dependantsProps] = useInput(0);

    const submit = (evt) => {
        evt.preventDefault();
        onSubmit(salary, dependants);
      };

    return (
        <form onSubmit={submit}>
            <div className='row'>
                <label>Salário</label>
                <input id='salary' placeholder='0.00' {...salaryProps} />
            </div>
            <div className='row'>
                <label>Dependentes</label>
                <input id='dependentes' placeholder='0' {...dependantsProps} />
            </div>
            <button type='submit' className='action'>
                Calcular
            </button>
            <hr />
            <label>
                <strong>Salário:</strong>
                <span>{salary}</span>
            </label>
            <label>
                <strong>Dependentes:</strong>
                <span>{dependants}</span>
            </label>
        </form>
    );
};

export default IrpfForm;
