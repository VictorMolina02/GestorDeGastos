const Title = ({ number }) => {
  const className = number > 0 ? "verde" : "rojo";
  return (
    <div className="title">
      <div className="titleContainer">
        <p className="balance">BALANCE :</p>
        <h1 className={className}>
          {number.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            minumumFractionDigits: 2,
          })}
        </h1>
      </div>
    </div>
  );
};

export default Title;
