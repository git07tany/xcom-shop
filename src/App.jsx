import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import NotebooksPage from './pages/NotebooksPage';

const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/catalog/notebooks" element={<NotebooksPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;