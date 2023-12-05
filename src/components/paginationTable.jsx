import { useState } from "react";
import { Table } from "react-bootstrap";
import Paginacion from "./Paginacion";
import useDbList from "../hooks/useDbList";
const PaginationTable = () => {
  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(5);
  const [valueSelect, setValueSelect] = useState("ingreso");
  const cash = useDbList(valueSelect);
  const maximo = cash.length / porPagina;
  return (
    <div className="detailsView">
      <select
        value={valueSelect}
        onChange={(e) => setValueSelect(e.target.value)}
        id="det"
      >
        <option disabled>Seleccione</option>
        <option value="ingreso">Ingreso</option>
        <option value="gasto">Gasto</option>
      </select>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Monto</th>
            <th>Detalle</th>
            <th>Fecha</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
          {cash
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map((detail) => {
              const montoARS = detail.monto;
              return (
                <tr key={detail.id}>
                  <td>
                    {Number(montoARS).toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                      minumumFractionDigits: 2,
                    })}
                  </td>
                  <td>{detail.select}</td>
                  <td>
                    {detail.dia}-{detail.mes}-{detail.year}
                  </td>
                  <td>{detail.motivo}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <div>
        <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </div>
    </div>
  );
};

export default PaginationTable;
