import style from "./nav.module.css";

import pets from "../../assets/animals.inicialpage.png";
import logoPet from "../../assets/arcticons_pet-first-aid.svg";

const Nav = () => {
  return (
    <div className={style.navBar}>
      <div className={style.head}>
        
      </div>
      <div className={style.logo}>
        <img src={logoPet} alt="" />
      </div>
      <div className={style.title}>
        <h1>Little Pet</h1>
      </div>
      <div className={style.links}>
        <li>
          <a href="">Serviços</a>
        </li>
        <li>
          <a href="">Produtos</a>
        </li>
        <li>
          <a href="">Localização</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
        <div className={style.socialLinks}>
          <ion-icon name="logo-instagram" width={"1em"}></ion-icon>
          <ion-icon name="logo-whatsapp"></ion-icon>
        </div>
        <div className={style.petsImage}>
          <img src={pets} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
