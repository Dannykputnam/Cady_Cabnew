import { Routes, Route } from 'react-router-dom';
import Home from "./components/shared/Home";
import Nomatch from './components/shared/Nomatch';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => (
<>
  <MainNavbar />
    <Container>
      <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
    </Container>
  </>
)



export default App;
