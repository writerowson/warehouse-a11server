
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

import DetailofInventory from './pages/HomePage/IInventory/detailOfInventory/DetailofInventory';
import NotFounded from './pages/NotFounded/NotFounded';
import Login from './pages/LogIn/Login';
import Register from './pages/Register/Register';

import Inventories from './pages/HomePage/IInventory/Inventories';
import Blog from './pages/Blog/Blog';
import RequireAuth from './Shared/RequireAuth';

function App() {

  return (
    <div className="bg-light">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} > </Route>
        <Route path='home' element={<Home></Home>} > </Route>
        <Route path='/inventory' element={<Inventories></Inventories>} > </Route>
        <Route path='/inventory/:inventoryId' element={<RequireAuth><DetailofInventory></DetailofInventory></RequireAuth>} > </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} > </Route>
        <Route path='/blog' element={<RequireAuth><Blog></Blog></RequireAuth>} > </Route>
        <Route path='*' element={<NotFounded></NotFounded>} > </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
