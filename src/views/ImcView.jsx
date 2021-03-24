import { usePerson } from '../hooks/usePerson.hook';

function ImcView({ className }) {

  const [person] = usePerson();

  return (
    <div className={className}>
      Seu IMC &eacute; <span id="imc">{person.imc}</span> ==>{" "}
      <strong>{person.imcDescription}</strong>
    </div>
  );
}

export default ImcView;
