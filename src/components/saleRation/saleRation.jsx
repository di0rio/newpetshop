import style from "./saleRation.module.css";

import racao1 from "../../assets/image 2.png";
import racao2 from "../../assets/image 3.png";
import racao3 from "../../assets/image 4.png";

const SaleRation = () => {
  return (
    <div>
      <div className={style.textOne}>
        <p>Nutrientes Caninos & Comidas</p>
      </div>
      <div className={style.textTwo}>
        <p>25% DE DESCONTO EM TODOS OS PRODUTOS</p>
      </div>
      <div className={style.ration}>
        <img src={racao1} alt="" />
        <img src={racao2} alt="" />
        <img src={racao3} alt="" />
      </div>
      <div className={style.decription}>
        <h5>
          Baba | 3KG Galinha adulta e ovo Ovo, Galinha 3 kg Alimento seco para
          cães adultos
        </h5>
        <h5>
          Riacho Canino 4 KG Galinha adulta e ovo Ovo, Galinha 3 kg Alimento
          seco para cães adultos
        </h5>
        <h5>
          Biscoitos Biscork Galinha adulta e ovo Ovo, Galinha Seca Alimento para
          cão adulto
        </h5>
      </div>
    </div>
  );
};

export default SaleRation;
