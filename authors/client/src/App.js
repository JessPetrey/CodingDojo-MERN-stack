import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main'
import Detail from './views/Detail';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path='/authors' />
        <Route element={<Detail />} path='/authors/:id' />
        <Route element={<Edit />} path='/authors/:id/edit' />
      </Routes>
    </div>
  );
}

export default App;
