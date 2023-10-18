import style from "./btn.module.css";

const Btn = () => {
  return (
    <div>
      <div>
        <button className={style.btnSeeMore}><p>Veja mais</p></button>
      </div>
    </div>
  );
};

export default Btn;
