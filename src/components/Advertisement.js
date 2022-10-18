import "./Advertisement.css";
import advertisement1 from "../Images/advertisement1.png";
import advertisement2 from "../Images/advertisement2.png";

const Advertisement = () => {
  return (
    <div className="advertisement">
        <div className="one flex-center">
            <img src={advertisement1} alt="" />
        </div>
        <div className="two flex-center">
            <img src={advertisement2} alt="" />  
        </div>
    </div>
  )
}

export default Advertisement