import "../App.css";
import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import ChildThree from "./ChildThree";

export default function Parent({ title }) {
  const [activeIndex, setActiveIndex] = useState(0); //do parent para child

  const [message, setMessage] = useState(""); //do child para parent

  const callback = (payload) => {
    setMessage(payload); //passa o payload para o estado message
  };

  return (
    <>
      <div className="pai">
        <section>
          <h3>{title}</h3>
          <h5>Mensagem: {message}</h5>
          <ChildOne
            title="filho1"
            isActive={activeIndex === 0}
            paragrafo="esse é o filho 1"
            onShow={() => setActiveIndex(0)}
            callback={callback}
          >
            <h1> FILHO UM </h1>
          </ChildOne>
          <ChildTwo
            title="filho2"
            isActive={activeIndex === 1}
            paragrafo="esse é o filho 2"
            onShow={() => setActiveIndex(1)}
            callback={callback}
          >
            <h1> FILHO DOIS </h1>
          </ChildTwo>
          <ChildThree title="filho3" message={message}></ChildThree>
        </section>
      </div>
    </>
  );
}
