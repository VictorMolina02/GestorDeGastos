const StatsContainer = ({ name, number, value }) => {
  const className = value > 0 ? "verde" : "rojo";
  return (
    <div className="statsContainer">
      <div className="dataContainer">
        <p className={className}>{name}: </p>
      </div>
      <div>
        {" "}
        <p id="cashNumber" className={className}>
          {number.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            minumumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};

export default StatsContainer;
