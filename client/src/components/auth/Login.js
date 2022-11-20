import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Button } from 'react-bootstrap';

const Login = ({ handleLogin}) =>{
  const [user, setUser] = useState ({email: '', password:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user)
    setUser({email: '', password:''})
  }

return (
  <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
          <Form.Control 
              type='email'
              autoFocus
              name='email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value})}
              required
          />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
          <Form.Control 
            type='password'
            name='password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value})}
            required
          />
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value } />}
  </AuthConsumer>
)

export default ConnectedLogin