import "../App.css";
export default function ChildTwo({
  title,
  children,
  isActive,
  onShow,
  callback,
}) {
  const handleChange = (evento) => {
    callback(evento.target.value);
  };
  return (
    <div className="filho2">
      <section>
        <h3>{title}</h3>
        {isActive ? (
          <>
            <p>{children}</p>
            <input type="text" id="campo1" onChange={handleChange}></input>
          </>
        ) : (
          <button onClick={onShow}>Mostrar</button>
        )}
      </section>
    </div>
  );
}
