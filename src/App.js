import { useState } from 'react';

import ImcTableView from './views/ImcTableView';
import ImcController from './controllers/ImcController';
import Person from './domain/Person';

import "./App.css";

function App() {

  const [controller,] = useState(new ImcController());
  
  const calculateImc = () => {
    const heightElem = document.querySelector("#altura");
    const weightElem = document.querySelector("#peso");
  
    if(!heightElem) throw Error("height is required field!");
    if(!weightElem) throw Error("weight is required field!");
  
    var person = new Person(
      parseFloat(heightElem.value), 
      parseFloat(weightElem.value));
  
    controller.calculate(person.toObject());
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
      {/* <ImcView class="data" /> */}
    </div>
  );
}

export default App;
