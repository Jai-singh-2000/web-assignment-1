import "./Banner.css";
import banner from "../Images/banner.svg"

const Banner = () => {
  return (
    <div className="banner">
        <img src={banner} alt="" />

        <div className="caption">
            <div className="heading">
                <h1>Play the game.<br/>Your rules. 
                    <span className="active">
                        Your way
                    </span>
                </h1>
            </div>
            
            <div className="title">
                <p>Made to fit school unifroms that give you the edge</p>
            </div>
            
            <div className="explore">
                <button>EXPLORE NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Banner