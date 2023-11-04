import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HumanResources from './pages/HumanResources';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/human-resources" element={<HumanResources />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;