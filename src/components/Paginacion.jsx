import { useState } from "react";

function Paginacion({ pagina, setPagina, maximo }) {
  const [input, setInput] = useState(1);
  const nextPage = () => {
    setInput(input + 1);
    setPagina(pagina + 1);
  };
  const previousPage = () => {
    setInput(input - 1);
    setPagina(pagina - 1);
  };
  return (
    <div className="pag">
      <button
        disabled={pagina === 1 || pagina < 1}
        onClick={previousPage}
        className="btn"
      >
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </button>
      <p>{input}</p>
      <button
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
        onClick={nextPage}
        className="btn"
      >
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Paginacion;
