import "./Difference.css";
import box1 from "../Images/box1.svg";
import box2 from "../Images/box2.svg";
import box3 from "../Images/box3.svg";

const Difference = () => {
  return (
    <div className="difference">
        
        <div className="section-heading flex-center">
            <h1>What Makes Us Different</h1>
        </div>    
        
        <div className="section-title flex-center mb-2">
            <p>Helping people manage anxiety, pain, and sleeplessness.</p>
        </div>

        <div className="boxes">

            <div className="box">
                <div className="box-icon">
                    <img src={box1} alt="" />
                </div>
                
                <div className="box-heading">
                    <p>Locally <br/>Sourced</p>
                </div>
                <div className="box-title">
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                </div>
            </div>
            
            <div className="box">
                <div className="box-icon">
                    <img src={box2} alt="" />
                </div>
                
                <div className="box-heading">
                    <p>100% <br/> Sustainable Fabric</p>
                </div>
                <div className="box-title">
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                </div>
            </div>
            
            
            <div className="box">
                <div className="box-icon">
                    <img src={box3} alt="" />
                </div>
                
                <div className="box-heading">
                    <p>Best Of The <br/> Class Material</p>
                </div>
                <div className="box-title">
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                </div>
            </div>
            
            

          

        </div>
    </div>
  )
}

export default Difference;