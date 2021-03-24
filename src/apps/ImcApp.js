import { useState } from "react";

import { usePerson } from '../hooks/usePerson.hook';

import ImcTableView from "../views/ImcTableView";
import ImcView from "../views/ImcView";
import ImcForm from "../views/forms/ImcForm";
import ImcController from "../controllers/ImcController";
import Person from "../domain/Person";

import "./ImcApp.css";

function ImcApp() {
  const [,setPerson] = usePerson();
  const [controller,] = useState(new ImcController());
 
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
          <ImcForm onSubmit={calculateImc} />
        </div>
      </div>
      <hr />
      <ImcView class="data" />
    </div>
  );
}

export default ImcApp;
