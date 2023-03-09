import "../App.css";
export default function ChildThree({
  title, //os estados passados pelo componente PAI
  message,
}) {
  return (
    <div className="filho3">
      <section>
        <h3>{title}</h3>
        <p>{message}</p>
      </section>
    </div>
  );
}
