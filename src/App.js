
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/shop';
import Cart from './pages/cart/cart';
import MainLayout from './componatnts/Layout/MainLayOut';
import Login from './pages/Login/Login';
import Sign from './pages/Sign/Sign';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import IsNotLogin from './componatnts/Protectedlogin/IsNotLogin';
import IsLogin from './componatnts/Protectedlogin/IsLogin';
import SingleProduct from './pages/SingleProduct/SingleProduct';



function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<IsLogin><Shop /></IsLogin>} />
              <Route path="product/:id" element={<IsLogin><SingleProduct /></IsLogin>} />
              <Route path="cart" element={<IsLogin><Cart /></IsLogin>} />
              <Route path="Login" element={<IsNotLogin><Login /></IsNotLogin>} />
              <Route path="Sign" element={<IsNotLogin><Sign /></IsNotLogin>} />
            </Route>
          </Routes>
        </BrowserRouter>

      </RecoilRoot>

      <ToastContainer />
    </div>
  );
}

export default App;
