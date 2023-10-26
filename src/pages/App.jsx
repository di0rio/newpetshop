import { Outlet } from "react-router-dom";

import Balls from "../components/balls/balls";
import Btn from "../components/btn/btn";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import SaleRation from "../components/saleRation/saleRation";

import "./App.css";

const App = () => {
  return (
    <div>
      <div>
        <Nav />
        <Outlet />
      </div>
      <div className="container">
        <SaleRation />
        <Btn />
        <Balls />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
