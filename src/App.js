import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Inventory from './pages/HomePage/IInventory/Inventory';

function App() {

  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} >Home </Route>
        <Route path='home' element={<Home></Home>} >Home </Route>
        <Route path='/inventory' element={<Inventory></Inventory>} >Inventory </Route>
        <Route path='/' element={<Home></Home>} >Home </Route>
        <Route path='/' element={<Home></Home>} >Home </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
