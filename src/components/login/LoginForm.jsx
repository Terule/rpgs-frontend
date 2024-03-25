import { Button, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import FormTextInput from "../inputs/FormTextInput";

const defaultValues = {
  email: "",
  password: ""
}

const LoginForm = () => {
  const { handleSubmit, control } = useForm({ defaultValues });
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = async (data) => {
    console.log(data)
    enqueueSnackbar("Login successful", { variant: 'success' })
    // await axios.post("http://localhost:4001/login", data, {
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   }
    // }).then((response) => {
    //   enqueueSnackbar(response.data.message, { variant: 'success' })
    //   navigate('/login')
    // }).catch((error) => {
    // console.log(error)
    //   enqueueSnackbar(error.response.data.message, { variant: 'error' })
    // })
  }

  return (
    <>
      <FormTextInput name="email" type="text" control={control} label="Email" />
      <FormTextInput name="password" type="text" control={control} label="Password" />
      <Button 
        sx={{width: '100%', height: '50px', fontSize: '1.2rem', fontWeight: '600'}}
        variant="contained"
        size="large"
        onClick={handleSubmit(handleLogin)}
      >
        Login
      </Button>
      <Typography variant="caption" sx={{m: "0 0 0 6px", fontStyle: 'italic', color: 'grey'}} noWrap>
        Don&apos;t have an account? <Link replace underline="none" component={RouterLink} to="/register">Register</Link>
      </Typography>
    </>
  )
}
export default LoginForm