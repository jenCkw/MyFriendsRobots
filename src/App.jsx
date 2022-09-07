import CarteList from "./components/CarteList";
import SearchBar from "./components/SearchBar";
import Accroche from "./components/Accroche";
import "./App.css";

export default function App() {
  return (
    <main>
      <div className="container">
      <Accroche/>
      <CarteList/>
      </div>
    </main>
    
  );
}

