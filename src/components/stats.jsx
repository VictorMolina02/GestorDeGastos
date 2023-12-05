const StatsContainer = ({ name, number, value }) => {
  const className = value > 0 ? "verde" : "rojo";
  return (
    <div className="statsContainer">
      <div></div>
      <p className={className}>
        {name}:{" "}
        <p className="cashContainer">
          {number.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            minumumFractionDigits: 2,
          })}
        </p>
      </p>
    </div>
  );
};

export default StatsContainer;
