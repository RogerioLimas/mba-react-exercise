import { useState } from 'react';

import ImcTableView from './views/ImcTableView';
import ImcView from './views/ImcView';
import ImcController from './controllers/ImcController';
import Person from './domain/Person';

import "./App.css";

function App() {

  const [controller,] = useState(new ImcController());
  const [person, setPerson] = useState(new Person());
  
  const calculateImc = async () => {
    const heightElem = document.querySelector("#altura");
    const weightElem = document.querySelector("#peso");
  
    if(!heightElem) throw Error("height is required field!");
    if(!weightElem) throw Error("weight is required field!");
  
    var newPerson = new Person(
      parseFloat(heightElem.value), 
      parseFloat(weightElem.value));
  
    const calculatedPerson = await controller.calculate(newPerson.toObject());
    setPerson(calculatedPerson);
    
  }

  return (
    <div className="container">
      <div className="data">
        <div className="form">
          <div className="row">
            <ImcTableView />
          </div>
          <hr />
          <div className="row">
            <label>Altura</label>
            <input id="altura" placeholder="0.00" />
          </div>
          <div className="row">
            <label>Peso</label>
            <input id="peso" placeholder="0.00" />
          </div>
          <button type="button" onClick={calculateImc} className="action">
            Calcular
          </button>
        </div>
      </div>
      <hr />
      <ImcView class="data" person={person} />
    </div>
  );
}

export default App;
