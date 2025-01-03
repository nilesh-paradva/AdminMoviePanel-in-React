import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; 
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import AddItems from './pages/AddItem';
import SignUp from './pages/SignUp';
import Catalog from './pages/Catalog';
import EditItem from './pages/Edititem';
import SingleMovie from './pages/SingleMovieView';
import GetUsers from './pages/Users';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="additems" element={<AddItems />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path='edititem/:id' element={<EditItem />} />
            <Route path="singleviewmovie/:id" element={<SingleMovie />} />
            <Route path="users" element={<GetUsers />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
