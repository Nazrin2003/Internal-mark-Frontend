import logo from './logo.svg';
import './App.css';
import Calc from './components/Calc';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calc/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
