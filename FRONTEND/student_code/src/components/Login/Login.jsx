import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, TextField, CardActions, Button, Typography, Divider } from '@mui/material';

function Login({ onLogin, goToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Validación básica
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    setErrorMessage('');
    onLogin(email, password);
  };

  return (
    <Card sx={{ maxWidth: '500px', margin: 'auto', marginTop: '20px' }}>
      <CardHeader title="Login" />
      <CardContent>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
        />
        {errorMessage && (
          <Typography color="error" textAlign="center" mt={2}>
            {errorMessage}
          </Typography>
        )}
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={goToRegister}>Register</Button>
        <Button onClick={handleLogin} color="success">
          Login
        </Button>
      </CardActions>
    </Card>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  goToRegister: PropTypes.func.isRequired,
};

export default Login;