import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/App.scss';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/" element={<ProductDetail />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
