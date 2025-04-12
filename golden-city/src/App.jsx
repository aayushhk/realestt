
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoldenCityApp from './pages/GoldenCityApp'; // Your main viewer
import GoldenCityViewer from './pages/GoldenCityViewer'; // The new page
import PropertyCards from './pages/PropertyCards'; // The new page
import './App.css'; // Your CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoldenCityApp />} />
        <Route path="/about" element={<GoldenCityViewer />} />
        <Route path="/listing" element={<PropertyCards />} />
      </Routes>
    </Router>
  );
}

export default App;
