import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Navigation/Home/Home';
import About from './Components/Navigation/about/About';
import Inscription from './Components/Navigation/Inscription/Inscription';
import News from './Components/Navigation/News/News';

function App() {
  return (
    <div className="App">
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div >
  );
}

export default App;
