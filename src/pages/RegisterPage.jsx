import { Box } from '@mui/material';
import RegisterCardContainer from '../components/register/RegisterCardContainer';


const RegisterPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <RegisterCardContainer />
    </Box>
  )
}
export default RegisterPage