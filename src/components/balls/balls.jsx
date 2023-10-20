import style from './balls.module.css'

import bolas from "../../assets/img.balls-removebg-preview.png"

const Balls = () => {
  return (
    <div className={style.ball}>    <img src={bolas} alt="" /></div> 
  )
}

export default Balls