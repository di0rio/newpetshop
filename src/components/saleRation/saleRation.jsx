import style from "./saleRation.module.css";

import racao1 from "../../assets/image 2.png";
import racao2 from "../../assets/image 3.png";
import racao3 from "../../assets/image 4.png";
import BtnBuyNow from "../btnBuyNow/btnBuyNow";

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
        <div>
          <img
            src={racao1}
            alt="ração de cachorro adulto da marca 'drools', com embalagem preta e vermelha."
          />
          <p>Ração de Frango e ovo 3 kg Ração seca para cães adulto</p>
          <BtnBuyNow />

        </div>

        <div>
          <img
            src={racao2}
            alt="ração de cachorro adulto da marca 'canine creek', com embalagem branca e azul claro transparente. 4kg"
          />
          <p>
            Ração Sabor Frango e carne para cães 4 kg ressecada para cães adulto
          </p>
          <BtnBuyNow />
       
        </div>

        <div>
          <img
            src={racao3}
            alt="biscoitos para cachorros da marca pedigree, com embalagem amarela. 500g"
          />
          <p>Biscoito Sabor Carne para Cães 500g Biscoito para Cães Adultos</p>
          <BtnBuyNow />
        </div>
      </div>
      {/* <div className={style.decription}>

      </div> */}
    </div>
  );
};

export default SaleRation;
