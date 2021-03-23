import { useState, useRef } from "react";

import ImcTableView from "./views/ImcTableView";
import ImcView from "./views/ImcView";
import ImcController from "./controllers/ImcController";
import Person from "./domain/Person";

import "./App.css";

function App() {
  const [controller] = useState(new ImcController());
  const [person, setPerson] = useState(new Person());

  const heightElem = useRef();
  const weightElem = useRef();

  const calculateImc = async (evt) => {
    evt.preventDefault();

    var newPerson = new Person(
      parseFloat(heightElem.current.value),
      parseFloat(weightElem.current.value)
    );

    const calculatedPerson = await controller.calculate(newPerson.toObject());
    setPerson(calculatedPerson);
  };

  return (
    <div className="container">
      <div className="data">
        <div className="form">
          <div className="row">
            <ImcTableView />
          </div>
          <hr />
          <form onSubmit={calculateImc}>
            <div className="row">
              <label>Altura</label>
              <input id="altura" placeholder="0.00" ref={heightElem} />
            </div>
            <div className="row">
              <label>Peso</label>
              <input id="peso" placeholder="0.00" ref={weightElem} />
            </div>
            <button type="submit" className="action">
              Calcular
            </button>
          </form>
        </div>
      </div>
      <hr />
      <ImcView class="data" person={person} />
    </div>
  );
}

export default App;
