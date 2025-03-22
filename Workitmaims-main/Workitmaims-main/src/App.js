import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Feature from './Pages/Feature';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Login from './Component/Login';
import Register from './Component/Register';
import ROapp from './ronkasrc/ROapp';
import RjApp from './Rsrc2/Rjapp';
import  RTApp  from './RTSrc3/RTApp';
import RTHome from './RTSrc3/pages/RTHome';
import RTAbout from './RTSrc3/pages/RTAbout';
import RTServices from './RTSrc3/components/RTServices';
import RTSignUp from './RTSrc3/pages/RTSignUp';
import RTLogin from './RTSrc3/pages/RTLogin';
import TjHomePage from './Tjsorce/Tjcomponents/TjHomePage';
import TjCategories from './Tjsorce/Tjcomponents/TjCategories';
import TjShopPage from './Tjsorce/Tjcomponents/TJShopPage';
import TjApp from './Tjsorce/TjApp';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/feature" element={<Feature/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/Temp1" element={<ROapp/>} />
        <Route path="/Temp2" element={<RjApp/>} />
        <Route path="/Temp3" element={<RTApp/>} />
        <Route path="/Temp4" element={<TjApp/>} />

        <Route path="/RThome" element={<RTHome/>} />
        <Route path="/RTabout" element={<RTAbout/>} />
        <Route path="/RTservices" element={<RTServices/>} />
        <Route path="/RTsiginup" element={<RTSignUp/>} />
        <Route path="/RTlogin" element={<RTLogin/>} />
        <Route path="/Tjhome" element={<TjHomePage/>} />
        <Route path="/Tjcontact" element={<TjCategories/>} />
        <Route path="/TjShop" element={<TjShopPage/>} />

    </Routes>
</Router>
  );
}

export default App;
