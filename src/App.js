import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <div>
    <Routes>
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/greeting">Random Greeting</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default App;
