import Navbar from "../components/navbar";
import PaginationTable from "../components/paginationTable";

const Details = () => {
  return (
    <div className="homeContainer">
      <div>
        <Navbar />
      </div>
      <div className="mainContainer">
        <div className="mb-3"></div>
        <PaginationTable />
      </div>
    </div>
  );
};

export default Details;
