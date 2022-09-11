import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import DashBoard from './Pages/DashBoard/DashBoard';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashBoard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
