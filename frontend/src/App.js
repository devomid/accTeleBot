import Items from './pages/items';
import Login from './pages/loginPage';
import Parties from './pages/parties';
import SelectionPage from './pages/selectionPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

function App() {

  return (
    <CssVarsProvider theme={theme} defaultMode='system'>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/select' element={<SelectionPage />} />
          <Route path='/items' element={<Items />} />
          <Route path='/parties' element={<Parties />} />
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
