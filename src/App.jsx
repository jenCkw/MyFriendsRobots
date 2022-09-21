import { Routes, Route } from "react-router-dom";
import CarteList from "./components/CarteList";
import SearchBar from "./components/SearchBar";
import Accroche from "./components/Accroche";
import RobotsDetails from "./RobotsDetails";
import "./App.css";

export default function App() {
  return (
    <main>
      <div className="container">
        <Accroche />
        {/* <CarteList /> */}
        <Routes>
          <Route path="/" element={<CarteList />} />
          <Route path="/RobotsDetails/:id" element={<RobotsDetails />} />
        </Routes>
      </div>
    </main>
  );
}
