import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    <h1>Error 404: Page Not found</h1>
    <Link to='/'>
      Go Back Home
    </Link>
  </>
)

export default Nomatch;