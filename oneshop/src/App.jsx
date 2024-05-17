import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="home" element={<Home/>}/>
  <Route/>
  <Route/>
  <Route/>
</Routes>
</BrowserRouter>
    
  )
}

export default App
