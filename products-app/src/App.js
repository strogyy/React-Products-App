import ProductsData from "./components/ProductData/ProductsData"
import ProductsDetails from "./components/ProductDetails/ProductDetails";
import GoToTop from "./components/GoToTop/GoToTop"
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductsData />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>   
        <GoToTop/>
      </Router>
  );
};

export default App;
