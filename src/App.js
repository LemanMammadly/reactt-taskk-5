import './App.css';
import Header from './components/Header';
import AddProduct from './pages/AddProduct';
import Index from './pages/Index';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Product from './pages/Product';

if(localStorage.getItem('products')===null){
  localStorage.setItem('products',JSON.stringify([]))
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/addproducts' element={<AddProduct/>}/>
            <Route path='/product' element={<Product/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
