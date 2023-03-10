import './App.css';
import { Route,Routes } from 'react-router-dom';
import ResponsiveAppBar from './Components/menuBar';
import Book from './Components/book';
import Home from './Components/home';
import Upload from './Components/upload';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/Book' element={<Book/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Upload' element={<Upload/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
