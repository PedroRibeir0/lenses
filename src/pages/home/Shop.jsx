import { LiaAngleRightSolid } from 'react-icons/lia'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Items from './Items';


export default function Shop() {

  function Price({name, price, dotId, itemId}){
    return(
      <>
        <div className="dot" id={dotId}>
          <div className="mid-dot"></div>
        </div>
        <div className="item-info" id={itemId}>
          <span className="new">New</span>
          <span className="item-name">{name}</span>
          <span className="item-price"><span className="dollar">$</span>{(price).toFixed(2)}</span>
          <LiaAngleRightSolid className='arrow'/>
        </div>
      </>
    )
  }

  return (
    <section className="shop">
      <div className="designed-by-you">
          <h2>Designed by you</h2>
          <h3>Your Style</h3>
          <p>Express your unique style with customizable lenses and frames. Make a statement that's exclusively you. Discover endless possibilities.</p>
          <button className="shop-now-button">
            <span>Shop now</span>
            <AiOutlineArrowRight/>
          </button>
      </div>
      <div className="shop-images">
        {Items.map((item, index)=>{
          return(
            <picture className="item" key={index+1}>
              <img src={`/images/style-img-${index+1}-edit.jpg`} alt="" />
              <Price
                name={item.name}
                price={item.price}
                itemId={`item-${index+1}`}
                dotId={`dot-${index+1}`}
              />
            </picture>
          )
        })}
      </div>
    </section>
  );
}