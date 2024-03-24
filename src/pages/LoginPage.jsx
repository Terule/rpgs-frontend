import { Box } from '@mui/material';
import LoginCardContainer from '../components/login/LoginCardContainer';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <LoginCardContainer />
    </Box>
  )
}
export default LoginPage