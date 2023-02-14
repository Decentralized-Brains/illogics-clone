import Navbar from "./global/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Staking from "./pages/staking/Staking.jsx";
import Footer from "./global/Footer.jsx";
import BoxCard from "./pages/home/BoxCard.jsx";
import PillCubes from "./pages/home/PillCubesCard.jsx";
import DapeCard from "./pages/home/DapeCard.jsx";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<BoxCard />} />
          <Route path="boxcard" element={<BoxCard />} />
          <Route path="pillcubes" element={<PillCubes />} />
          <Route path="dapecard" element={<DapeCard />} />
        </Route>
        <Route path="staking" element={<Staking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
