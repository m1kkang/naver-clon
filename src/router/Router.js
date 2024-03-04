import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';

function Routers() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Routers;