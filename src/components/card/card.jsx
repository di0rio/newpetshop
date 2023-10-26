import BtnBuyNow from '../btnBuyNow/btnBuyNow'
import style from './card.module.css'

const Card = ({children, img}) => {
  return (
    <div>
        <div>
            <img src={img} alt="rações para cães." width={'270'} />
            <p>{children}</p>
            <BtnBuyNow></BtnBuyNow>
        </div>
    </div>
  )
}

export default Card