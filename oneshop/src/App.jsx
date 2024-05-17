import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import { fetchProducts } from "./services/fakestoreapi";
import { useEffect, useState } from "react";
import Kids from "./pages/Kids";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";

function App() {
  const [products, setProducts]=useState()
  const [loading, setLoading]=useState(true)
  
  useEffect(
    ()=>{
      const getProducts = async ()=>{
        try {
          const result = await fetchProducts();
          setProducts(result);
        }
        catch(err){console.log(err)}
        finally{setLoading(false)}
      }

getProducts()    },[]
  )


return <BrowserRouter> 
<Routes> 
  <Route path="/" element={<Home/>}/>
  <Route path="/kids" element={<Kids />}/>
  <Route path="/mens" element={<Mens />}/>
  <Route path="/womens" element={<Womens />}/>
</Routes>
</BrowserRouter>
    
  
}

export default App
