function ImcView(props) {
  console.log('rendering...');
  const { person, className } = props;

  return (
    <div className={className}>
      Seu IMC &eacute; <span id="imc">{person.imc}</span> ==>{" "}
      <strong>{person.imcDescription}</strong>
    </div>
  );
}

export default ImcView;