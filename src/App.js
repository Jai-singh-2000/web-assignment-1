import "./App.css";
import Header from "./components/Header";
import Promo from "./components/Promo";
import Banner from "./components/Banner";
import ShopItems from "./components/ShopItems";
import Games from "./components/Games";
import Difference from "./components/Difference";
import ShopActivity from "./components/ShopActively";
import Looks from "./components/Looks";
import Advertisement from "./components/Advertisement";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Promo/>
      <Banner/>
      <ShopItems/>
      <Games/>
      <Difference/>
      <ShopActivity/>
      <Looks/>
      <Advertisement/>
      <Footer/>
    </>
  )
}

export default App;