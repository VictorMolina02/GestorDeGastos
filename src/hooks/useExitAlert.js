import Swal from "sweetalert2";

const mostrarAlerta = () => {
  Swal.fire("EXITO!", "SUS DATOS DE CARGARON CORRECTAMENTE", "success");
  setTimeout(() => {
    // Muestra la alerta de success

    // Refresca la página
    window.location.reload();
  }, 3000);
};

export default mostrarAlerta;
