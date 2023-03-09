import "../App.css";
export default function ChildOne({
  title, //os estados passados pelo componente PAI
  paragrafo,
  isActive,
  onShow,
  callback,
}) {
  //função que passa dados do componente filho para o componente pai
  //atraves do estado callback
  const handleChange = (evento) => {
    callback(evento.target.value); //estado passado pelo componente FILHO
  };

  return (
    <div className="filho1">
      <section>
        <h3>{title}</h3>
        {isActive ? (
          <>
            <p>{paragrafo}</p>
            <input type="text" id="campo1" onChange={handleChange}></input>
          </>
        ) : (
          <>
            <button onClick={onShow}>Mostrar</button>
          </>
        )}
      </section>
    </div>
  );
}
