import style from "./saleRation.module.css";

import racao1 from "../../assets/image 2.png";
import racao2 from "../../assets/image 3.png";
import racao3 from "../../assets/image 4.png";
import BtnBuyNow from "../btnBuyNow/btnBuyNow";
import Card from "../card/card";

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
        <Card img={racao1}>
        Ração de Frango e ovo 3 kg Ração seca para cães adulto!
        </Card>
        <Card img={racao2}>
        Ração Sabor Frango e carne para cães 4 kg ressecada para cães adulto
        </Card>
        <Card img={racao3}>
        Ração Sabor Frango e carne para cães 4 kg ressecada para cães adulto
        </Card>

      </div>
    </div>
  );
};

export default SaleRation;
