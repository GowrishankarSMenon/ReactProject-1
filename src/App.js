import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Earlyjoin from './components/Earlyjoin';
import Aboutus from './components/Aboutus';
import Stats1 from './components/Stats1';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Earlyjoin />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
      <br />
      <Stats1/>
    </Router>
  );
}

export default App;
