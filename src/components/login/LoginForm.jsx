import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [fieldValues, setFieldValues] = useState({
    email: '',
    password: ''
  })

  const validateEmail = (email) => {
    if (email.length === 0) return true;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    if (password.length === 0) return true;
    return password.length >= 8;
  }

  const handleFieldChange = (e) => {
    setFieldValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <FormControl
        sx={{ m: 1, width: '350px' }}
        variant="outlined"
      >
        <InputLabel htmlFor="email">Email</InputLabel>
        <OutlinedInput
          id="email"
          name="email"
          label="email"
          onChange={handleFieldChange}
          value={fieldValues.email}
          error={validateEmail(fieldValues.email) ? false : true}
          endAdornment={
            <InputAdornment position="end">
                <Email />
            </InputAdornment>
          }
          type='email'
        />
      </FormControl>
      <FormControl
        sx={{ m: 1, width: '350px' }}
        variant="outlined"
      >
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          name="password"
          label="Password"
          error={validatePassword(fieldValues.password) ? false : true}
          onChange={handleFieldChange}
          value={fieldValues.password}
          endAdornment={
            <InputAdornment position="end" sx={{marginRight:'2px'}}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{ cursor: 'pointer', paddingRight: '10px'}}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          type={showPassword ? 'text' : 'password'}
        />
      </FormControl>
      <FormControl
        sx={{ m: 1, width: '350px' }}
        variant="outlined"
      >
      <Button 
        sx={{width: '100%', height: '50px', fontSize: '1.2rem', fontWeight: '600'}}
        variant="contained"
        size="large"
      >
        Login
      </Button>
      </FormControl>
      <Typography variant="caption" sx={{m: "0 0 0 6px", fontStyle: 'italic', color: 'grey'}} noWrap>
        Don&apos;t have an account? <Link replace underline="none" component={RouterLink} to="/register">Register</Link>
      </Typography>
    </Box>
  )
}
export default LoginForm