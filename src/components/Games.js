import "./Games.css";
import card1 from "../Images/card1.png"
import card2 from "../Images/card2.png"
import card3 from "../Images/card3.png"
import card4 from "../Images/card4.png";
import leftArrow from "../Images/leftArrow.svg";
import rightArrow from "../Images/rightArrow.svg";

const Games = () => {
  return (
    <div className="games">
       <div className="section-heading flex-center">
            <h1>Games You Love</h1>
        </div>    
        
        <div className="section-title flex-center mb-2">
            <p>Top sale this week</p>
        </div>

        <div className="arrows">
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
        </div>

        <div className="cards">
            <div className="card">
                <img src={card1} alt="" />
                <p>Basketball</p>
            </div>
            <div className="card">
                <img src={card2} alt="" />
                <p>Boxing</p>
            </div>
            <div className="card">
                <img src={card3} alt="" />
                <p>Cricket</p>
            </div>
            <div className="card">
                <img src={card4} alt="" />
                <p>Soccer</p>
            </div>
        </div>
    </div>
  )
}

export default Games