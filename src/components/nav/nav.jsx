import style from "./nav.module.css";

import pets from "../../assets/animals.inicialpage.png";
import logoPet from "../../assets/arcticons_pet-first-aid.svg";
import { Link } from "react-router-dom";

const navigation = [
  { componente: "/produtos", name: "Produtos" },
  { componente: "/servicos", name: "Serviços" },
  { componente: "/localizacao", name: "Localizacao" },
  { componente: "/cadastro", name: "Cadastro" },
  // { componente: "/", name: "Início" },
];

const Nav = () => {
  return (
    <div className={style.navBar}>
      <div className={style.head}></div>
      <div className={style.logo}>
        <img src={logoPet} alt="" />
      </div>
      <div className={style.title}>
        <h1>Little Pet</h1>
      </div>
      <div className={style.links}>
        {navigation.map((nav) => (
          <Link key={nav.name} to={nav.componente}>
            {nav.name}
          </Link>
        ))}
        <div className={style.socialLinks}>
          <div>
            <a href="#">
              <ion-icon name="logo-instagram" width={"1em"}></ion-icon>
            </a>
          </div>
          <div>
            <a href="#">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </div>
          <div>
            <a href="">
              <ion-icon name="logo-twitter"></ion-icon>{" "}
            </a>
          </div>
        </div>
        <div className={style.petsImage}>
          <img src={pets} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
