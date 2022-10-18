import "./Footer.css";
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";
import youtube from "../Images/youtube.svg";
import twitter from "../Images/twitter.svg";
import pinterest from "../Images/pinterest.svg";
import call from "../Images/call.svg";
import mail from "../Images/mail.svg";
import map from "../Images/map.svg";

const Footer = () => {
  return (
    <div className="footer flex-center">
        <div className="foot-inside">
            
            <div className="foot-up">
                
                <div className="f-one flex-center mt-2">
                    <div className="cover">
                        <p>Sign Up Today and get <br/>Rs. 200 off  On your first order.</p>
                        <input type="text" placeholder="Enter your e-mail" />
                        <div className="social">
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={youtube} alt="" />
                            <img src={twitter} alt="" />
                            <img src={pinterest} alt="" />
                        </div>
                    </div>
                </div>


                <div className="f-two flex-center mt-2">
                    <div className="cover">
                        <h3>Collection</h3>
                        <div className="f-links">
                            <p>Clothing</p>
                            <p>Tops</p>
                            <p>Sweaters</p>
                            <p>Dresses</p>
                            <p>Shoes</p>
                        </div>
                    </div>
                </div>


                <div className="f-three flex-center mt-2">
                    <div className="cover">
                        <h3>Company</h3>
                        <div className="f-links">
                            <p>Career at Toppers</p>
                            <p>About Toppers</p>
                            <p>Contact Us</p>
                            <p>Gift Cards</p>
                            <p>Blog</p>
                        </div>
                    </div>
                </div>


                <div className="f-four flex-center mt-2">
                    <div className="cover">
                        <h3>Need Help</h3>
                        <div className="f-links">
                         <p>Order Status</p>
                            <p>Shipping & Delivery</p>
                            <p>FAQ & Helps</p>
                            <p>Terms & Conditions</p>
                            <p>Legal & Privacy</p>
                        </div>
                    </div>
                </div>

                <div className="f-five flex-center mt-2">
                    <div className="cover">
                            <h3>Exclusive Services</h3>
                            <div className="f-links more">
                                <p>
                                    <img src={call} alt="" />
                                    Call Us: +1 666 8888
                                </p>
                                <p>
                                    <img src={mail} alt="" />
                                    Send us an email
                                </p>
                                <p>
                                    <img src={map} alt="" />
                                    See our stores
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="foot-down">
                <hr width="90%" color="white" size="50px" />
                <br />
                <p>© 2022 Toppers United. All Rights Reserved.</p>
            </div>


        </div>
    </div>
  )
}

export default Footer