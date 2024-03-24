import { Paper, Typography } from "@mui/material"
import RegisterForm from "./RegisterForm"

const RegisterCardContainer = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 3,
        gap: 2
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: '600', mb:'20px' }}>Sign up</Typography>
      <RegisterForm />
    </Paper>
  )
}
export default RegisterCardContainer