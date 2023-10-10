import Header from "../components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import CreateRestaurant from "../pages/CreateRestaurant";
import NotFound from "../pages/NotFound";
import RestaurantBranch from "../pages/RestaurantBranch";
//import WithLoader from "../components/WithLoader";

//const loader = WithLoader()

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RestaurantBranch" element={<RestaurantBranch  />} />  
          <Route path="/CreateRestaurant" element={<CreateRestaurant />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
