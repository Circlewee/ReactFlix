import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './routes/Home.js';
import Detail from './routes/Detail.js';
import Nav from './components/Nav';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* home component */}
        <Route path='/ReactFlix' element={<Home />}></Route>
        <Route path='/' element={<Navigate replace to='/ReactFlix' />} />
        {/* detail component */}
        {/* :(something)  ==>  useParams().(something) */}
        <Route path='/movie/:id' element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
