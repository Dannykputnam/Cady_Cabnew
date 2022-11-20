import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import InNavbar from './InNavbar'
import { Container, Nav, Navbar} from 'react-bootstrap';


const MainNavbar = ({ user, handleLogout}) => {

  const rightNavItems = () => {
    if (user) {
      return (
        <>
        <InNavbar></InNavbar>
          <li onClick={() => handleLogout()}>
            Logout
          </li>
        </>
      )
    } else {
      return (
        <>
            <Nav.Link>
              <Link to='/login'>
                Login
              </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/register'>
              Register
            </Link>
          </Nav.Link>
   </>
      )
    }
  }

  return (
    <>
    {/*  <nav>
        <ul>
          <Link to='/'>
            <li>
              Home
            </li>
          </Link>
          { rightNavItems() }
        </ul>
    </nav> */}
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>
          <Link to='/'>
              Cady Caddy
          </Link>
            </Navbar.Brand>
          <Nav className="me-auto float-right">
          { rightNavItems() }
            
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedNavbar