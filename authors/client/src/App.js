import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main'
import Edit from './views/Edit';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<Create />} path='/new' />
        <Route element={<Edit />} path='/edit/:id' />
      </Routes>
    </div>
  );
}

export default App;
