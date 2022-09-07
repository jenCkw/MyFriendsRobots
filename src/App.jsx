import CarteList from "./components/CarteList";
import SearchBar from "./components/SearchBar";
import Accroche from "./components/Accroche";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Accroche/>
      <CarteList/>
      <SearchBar/>
    </div>
  );
}

export default App;
