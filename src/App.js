import './App.css';
import Menu from "./components/Menu"
import Helsinki from "./components/Helsinki"
import Tampere from "./components/Tampere"
import Turku from "./components/Turku"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/helsinki" element={<Helsinki />} />
          <Route path="/tampere" element={<Tampere />} />
          <Route path="/turku" element={<Turku />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
