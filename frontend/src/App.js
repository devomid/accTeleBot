import Items from './pages/items';
import Login from './pages/loginPage';
import Parties from './pages/parties';
import SelectionPage from './pages/selectionPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/select' element={<SelectionPage />} />
        <Route path='/items' element={<Items />} />
        <Route path='/parties' element={<Parties />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
