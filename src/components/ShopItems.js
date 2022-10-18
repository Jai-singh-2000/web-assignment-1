import "./Shop.css";
import leftArrow from "../Images/leftArrow.svg";
import rightArrow from "../Images/rightArrow.svg";
import item1 from "../Images/item1.svg";
import item2 from "../Images/item2.svg";
import item3 from "../Images/item3.svg";
import item4 from "../Images/item4.svg";
import item5 from "../Images/item5.svg";
import item6 from "../Images/item6.svg";

const ShopItems = () => {
  return (
    <div className="shop">

        <div className="section-heading flex-center">
            <h1>Shop by Items</h1>
        </div>    
        
        <div className="section-title flex-center">
            <p>Your Game. Your Rules</p>
        </div>

        <div className="shop-items">
            
            <div className="shop-wrapper ">

                <div className="left-arrow">
                    <img src={leftArrow} alt="" />
                </div>
                
                <div className="item">
                    <img id="item1" src={item1} alt="" />
                    <p>Shoes</p>
                </div>
                <div className="item">
                    <img id="item2" src={item2} alt="" />
                    <p>Bottles</p>
                </div>
                <div className="item">
                    <img id="item3" src={item3} alt="" />
                    <p>Bags</p>
                </div>
                <div className="item">
                    <img id="item4" src={item4} alt="" />
                    <p>Gloves</p>
                </div>
                <div className="item">
                    <img id="item5" src={item5} alt="" />
                    <p>Socks</p>
                </div>
                <div className="item">
                    <img id="item6" src={item6} alt="" />
                    <p>Balls</p>
                </div>
                
                <div className="right-arrow">
                    <img src={rightArrow} alt="" />
                </div>
        
            </div>
            

        </div>    


    </div>
  )
}

export default ShopItems