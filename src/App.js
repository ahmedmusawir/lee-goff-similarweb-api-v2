import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import MainNavbar from './components/general/MainNavbar';
import SamplePage from './pages/SamplePage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sample-page' element={<SamplePage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
