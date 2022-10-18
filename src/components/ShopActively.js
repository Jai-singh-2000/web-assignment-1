import "./Shop.css";
import activity1 from "../Images/activity1.svg";
import activity2 from "../Images/activity2.svg";
import activity3 from "../Images/activity3.svg";
import activity4 from "../Images/activity4.svg";
import activity5 from "../Images/activity5.svg";

const ShopActivity = () => {
  return (
    <div className="shop">

        <div className="section-heading flex-center">
            <h1>Shop By Activity</h1>
        </div>    
        
        <div className="section-title flex-center">
            <p>There is something for everyone</p>
        </div>

        <div className="activity-items">
            
            <div className="activity-wrapper">

                <div className="activity">
                    <img src={activity1} alt="" />
                    <p id="line1">AEROBICS <br/> & FITNESS</p>
                </div>
                <div className="activity">
                    <img src={activity2} alt="" />
                    <p id="line2">WATER <br/> SPORTS</p>
                </div>
                <div className="activity">
                    <img src={activity3} alt="" />
                    <p id="line3">CYCLING <br/> SPORTS</p>
                </div>
                <div className="activity">
                    <img src={activity4} alt="" />
                    <p id="line4">CYCLING <br/> SPORTS</p>
                </div>
                <div className="activity">
                    <img src={activity5} alt="" />
                    <p id="line5">CYCLING <br/> SPORTS</p>
                </div>
                
            </div>
            

        </div>    


    </div>
  )
}

export default ShopActivity