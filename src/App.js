import "./App.css";
import Parent from "./components/Parent";

function App() {
  return (
    <>
      <div>
        <h1> Exemplo de compartilhamento de estados</h1>
        <h1> Pai para Filhos e Filhos para Pai</h1>
        <p> by Malki-çedheq 08/03/2023</p>
      </div>
      <Parent title="pai" />;
    </>
  );
}

export default App;
