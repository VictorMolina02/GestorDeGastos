import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const MoneyInput = () => {
  const db = getFirestore();
  const valorInicial = {
    monto: "".toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minumumFractionDigits: 2,
    }),
    dia: "",
    mes: "",
    year: "",
    motivo: "",
    select: "",
  };

  const [data, setData] = useState(valorInicial);
  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    try {
      if (data.select == "Gasto") {
        await addDoc(collection(db, "gasto"), {
          ...data,
        });
      } else {
        await addDoc(collection(db, "ingreso"), {
          ...data,
        });
      }
    } catch (error) {
      console.error(error);
    }
    setData({ ...valorInicial });
  };
  const mostrarAlerta = () => {
    Swal.fire("EXITO!", "SUS DATOS DE CARGARON CORRECTAMENTE", "success");
    setTimeout(() => {
      // Muestra la alerta de success

      // Refresca la página
      window.location.reload();
    }, 3000);
  };
  return (
    <div className="moneyContainer">
      <div className="formContainer">
        <form onSubmit={guardarDatos} id="form">
          <div className="mb-3">
            <label htmlFor="monto" className="form-label">
              Monto:
            </label>
            <input
              type="text"
              name="monto"
              className="form-control"
              id="monto"
              aria-describedby="emailHelp"
              placeholder="Ingrese el monto:"
              onChange={capturarInputs}
              value={data.monto}
            />
          </div>
          <div className="mb-3 fechaContainer">
            <div>
              <label htmlFor="dia" className="form-label">
                Dia:
              </label>
              <input
                type="text"
                className="form-control"
                id="dia"
                name="dia"
                onChange={capturarInputs}
                value={data.dia}
              />
            </div>
            <div>
              <label className="labelmes" htmlFor="mes">
                Mes:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="mes"
                id="mes"
                onChange={capturarInputs}
                value={data.mes}
              >
                <option value="">Seleccione:</option>
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Mayo">Mayo</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
              </select>
            </div>
            <div>
              <label htmlFor="year" className="form-label">
                Año:
              </label>
              <input
                type="text"
                className="form-control"
                id="year"
                name="year"
                onChange={capturarInputs}
                value={data.year}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="motivo" className="form-label">
              Motivo:
            </label>
            <input
              type="text"
              className="form-control"
              id="motivo"
              placeholder="Ingrese el motivo:"
              name="motivo"
              onChange={capturarInputs}
              value={data.motivo}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="select">Selecione:</label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="select"
              id="select"
              onChange={capturarInputs}
              value={data.select}
            >
              <option value="">Seleccione:</option>
              <option value="Ingreso">Ingreso</option>
              <option value="Gasto">Gasto</option>
            </select>
          </div>
          <button onClick={mostrarAlerta} className="btn btn-success">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default MoneyInput;
