import { useContext } from 'react';

import { PersonContext } from '../contexts/PersonContextProvider';

function ImcView({ className }) {

  const { person } = useContext(PersonContext);

  return (
    <div className={className}>
      Seu IMC &eacute; <span id="imc">{person.imc}</span> ==>{" "}
      <strong>{person.imcDescription}</strong>
    </div>
  );
}

export default ImcView;
