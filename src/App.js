import logo from './logo.svg';
import './App.css';
import Calc from './components/Calc';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calc/>} />
        <Route path='/view' element={<View/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
