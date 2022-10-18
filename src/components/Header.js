import "./Header.css";
import logo from "../Images/logo.svg";
import search from "../Images/search.svg";
import like from "../Images/like.svg";
import cart from "../Images/cart.svg";
import profile from "../Images/profile.svg";

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src={logo} alt="" />
        </div>

        <div className="nav-container">
            <div className="up">
                <div className="dropdown ml-1">
                    <div className="seperate">
                    <select name="languages" id="lang">
                        <option value="javascript">English</option>
                        <option value="javascript">Hindi</option>
                    </select>
                    </div>
                    <div className="seperate">
                    <select name="languages" id="lang">
                        <option value="javascript">USD</option>
                        <option value="javascript">INR</option>
                    </select>
                    </div>
                </div>
            </div>

            <div className="down">
                <div className="left">

                    <div className="link">
                        <p>Home</p>
                    </div>
                    <div className="link">
                        <p>School Uniforms</p>
                    </div>
                    <div className="link">
                        <p>Corporate</p>
                    </div>
                    <div className="link">
                        <p>Sports</p>
                    </div>
                    <div className="link">
                        <p>Blogs</p>
                    </div>



                </div>

                <div className="right">
                    <div className="icons-div mr-3">
                        <div className="icon">
                            <img src={search} alt="" />
                        </div>
                        <div className="icon">
                            <img src={like} alt="" />
                        </div>
                        <div className="icon">
                            <img src={cart} alt="" />
                        </div>
                        <div className="icon">
                            <img src={profile} alt="" />
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;