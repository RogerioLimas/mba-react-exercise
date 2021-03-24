import { useState } from "react";

import ImcTableView from "./views/ImcTableView";
import ImcView from "./views/ImcView";
import ImcForm from "./views/forms/ImcForm";
import ImcController from "./controllers/ImcController";
import Person from "./domain/Person";

import "./App.css";

function App() {
  const [controller,] = useState(new ImcController());
  const [person, setPerson] = useState(new Person());
 
  const calculateImc = async (height, weight) => {
    var newPerson = new Person(parseFloat(height),parseFloat(weight));

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
          <ImcForm onSubmit={calculateImc} person={person} />
        </div>
      </div>
      <hr />
      <ImcView class="data" person={person} />
    </div>
  );
}

export default App;
