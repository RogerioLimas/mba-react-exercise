function ImcView({ person, className }) {

  console.log("imc view rendering...");

  return (
    <div className={className}>
      Seu IMC &eacute; <span id="imc">{person.imc}</span> ==>{" "}
      <strong>{person.imcDescription}</strong>
    </div>
  );
}

export default ImcView;
