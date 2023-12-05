import MoneyInput from "../components/moneyInput";
import Navbar from "../components/navbar";
import StatsContainer from "../components/stats";
import Title from "../components/title";
import useGastoDetailList from "../hooks/useGastoDetailList";
import useIngresoDetailList from "../hooks/useIngresoDetailList";

const HomeView = () => {
  const gastoTotal = useGastoDetailList();
  const ingresoTotal = useIngresoDetailList();
  const balance = ingresoTotal - gastoTotal;
  return (
    <div className="homeContainer">
      <div>
        <Navbar />
      </div>
      <div className="mainContainer">
        <div className="numerosContainer">
          <Title name="BALANCE" number={balance} />

          <div className="ingreso_gastos">
            <StatsContainer
              name="INGRESOS"
              number={ingresoTotal}
              value={ingresoTotal}
            />
            <StatsContainer name="GASTOS" number={gastoTotal} value={-1} />
          </div>
        </div>
        <MoneyInput />
      </div>
    </div>
  );
};

export default HomeView;
