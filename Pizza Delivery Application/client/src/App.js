import TopBar from "./components/TopBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import AdminScreen from "./Screens/AdminScreen";
import OrderScreen from "./Screens/OrderScreen";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar/>
      <Routes>
        <Route path="/admin" element={<AdminScreen/>} />       
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} /> 
        <Route path="/orders" element={<OrderScreen/>} /> 
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/cart" element={<CartScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
