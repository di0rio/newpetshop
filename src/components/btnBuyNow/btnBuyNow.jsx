import Swal from "sweetalert2";
import style from "./btnBuyNow.module.css";

const BtnBuyNow = () => {
  const handleClick = async () => {

    const result = await fetch("Comprado!");
    
    Swal.fire({
      background: 'black',
      color: 'white',
      title:"Item comprado!",
      text:"Obrigo pelo dinheiro, volte sempre😘✌️",
      confirmButtonColor: 'blue',
      icon: 'info',
      iconColor: 'blue',
    })
  };

  return (
    <div className={style.location}>
      <button onClick={handleClick} className={style.btnBuy}>Compre agora</button>
    </div>
  );
};

export default BtnBuyNow;
