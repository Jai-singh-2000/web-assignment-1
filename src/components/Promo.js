import "./Promo.css";
import shopArrow from "../Images/shopArrow.svg";

const Promo = () => {
  return (
    <div className="promo-div">
        <div className="promo flex">
            
            <div className="seperate">
                <p>Free Delivery on orders above Rs. 1000,  DON’T MISS</p>
            </div>

            <div className="seperate flex active">
                <h4>SHOP NOW</h4>
                <img src={shopArrow} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Promo;