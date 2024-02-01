
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PagePages from './Pages/pagePages';
import PrtofolioPage from './Pages/prtofolioPage';
import ShopPage from './Pages/shopPage';
import Page404 from './Pages/Page404';
import Header from './componant/Header';
import Footer from './componant/footer';
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path="/pages" element={<PagePages />} />
          <Route path='/profolio' element={<PrtofolioPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>

      <Outlet />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
