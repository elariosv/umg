import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HumanResources from './pages/HumanResources';
import Filesharing from './pages/fileSharibg';
import { Calendar } from './pages/calendar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/umg" element={<Home />} />
          <Route path="/human-resources" element={<HumanResources />} />
          <Route path="/filesharing" element={<Filesharing/>}></Route>
          <Route path="/calendar" element={<Calendar/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;