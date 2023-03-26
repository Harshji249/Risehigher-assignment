import './App.css';
import Home from './Components/Home';
import ListData from './Components/ListData';
import Navibar from './Components/Navibar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>

    <Navibar/>
    <Routes>
    <Route exact  path="/" element={<Home key="Home"/> }></Route>
    <Route exact  path="/Cryptocurrencies" element={<ListData key="ListData"/> }></Route>
    </Routes>
      </div>
    </Router>
  );
}

export default App;
