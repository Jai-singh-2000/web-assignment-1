import "./Looks.css";
import product1 from "../Images/product1.png";
import product2 from "../Images/product2.png";
import product3 from "../Images/product3.png";
import product4 from "../Images/product4.png";
import Stars from "../tools/Stars";
import ProductOptions from "../tools/ProductOptions";
import Cart from "../tools/Cart";

const Looks = () => {
  return (
    <div className="looks">
         <div className="section-heading flex-center">
            <h1>Looks You’ll Love</h1>
        </div>    
        
        <div className="section-title flex-center mb-2">
            <p>Top sale this week</p>
        </div>

        <div className="product-container">
            
            <div className="product">
                <div className="product-image">
                    <img src={product1} alt="" />

                    <div className="offers">
                        <div className="newTag">NEW</div>
                        <div className="discountTag">-25%</div>
                    </div>   
                </div>

                <div className="product-heading">
                    <p>Combo Tennis Shorts & Tee</p>
                </div>
                <div className="product-price">
                    <p>Rs. 1,600 <span id="small"><del>Rs. 1,800</del></span></p>
                </div>

                <Stars/>
                <span id="small"> (1,234 reviews)</span>                
                
            </div>
            
            
            <div className="product">
                
                <div className="product-image">
                    <img src={product2} alt="" />
                    <div className="offers">
                        <div className="discountTag">-25%</div>
                    </div>

                    <ProductOptions/>
                    <Cart/>
                </div>

                <div className="product-heading">
                    <p>Universal Sports Cap</p>
                </div>
                <div className="product-price">
                    <p>Rs. 1,600 <span id="small"><del>Rs. 1,800</del></span></p>
                </div>
                
                <Stars/>
                <span id="small"> (1,234 reviews)</span>   
            
            </div>
            
            
            <div className="product">
                <div className="product-image">
                    <img src={product3} alt="" />
                </div>
                <div className="product-heading">
                    <p>Training Max Shoes</p>
                </div>
                <div className="product-price">
                    <p>Rs. 1,600 <span id="small"><del>Rs. 1,800</del></span></p>
                </div>
                
                <Stars/>
                <span id="small"> (1,234 reviews)</span>   
            </div>
            
            <div className="product">
                <div className="product-image">
                    <img src={product4} alt="" />
                    <ProductOptions/>
                    <Cart/>
                </div>
                <div className="product-heading">
                    <p>Women Long Blazer</p>
                </div>
                <div className="product-price">
                    <p>Rs. 1,600 <span id="small"><del>Rs. 1,800</del></span></p>
                </div>
                
                <Stars/>
                <span id="small"> (1,234 reviews)</span>   
            </div>
           

            

        </div>

    </div>
  )
}

export default Looks