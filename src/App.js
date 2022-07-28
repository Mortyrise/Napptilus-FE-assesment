import './App.css';
import PLP from './Pages/PLP';
import PDP from './Pages/PDP';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PLP />} />
        <Route path='/product/:id' element={<PDP />} />
      </Routes>
    </Router>
  );
}

export default App;
