import { Button, Link, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import FormFileInput from "../formInputs/FormFileInput"
import FormTextInput from "../formInputs/FormTextInput";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
  image: null
}

const RegisterForm = () => {
  const [image, setImage] = useState(null);
  const { handleSubmit, control, getValues } = useForm({ defaultValues });
  const onSubmit = async (data) => {
    await axios.post("http://localhost:4001/register", data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then((response) => {
      console.log(response)
      setImage(response.data.user.imageUrl)
    }).catch((error) => {
    console.log(error)
  })
  }
  return (
    <>
      <FormTextInput name="name" type="text" control={control} label="Name" />
      <FormTextInput name="email" type="text" control={control} label="Email" />
      <FormTextInput name="password" type="text" control={control} label="Password" />
      <FormTextInput name="cpassword" type="text" control={control} getValues={getValues} label="Confirm Password" />
      <FormFileInput name="image" label="Profile picture" control={control} />
      <Button onClick={handleSubmit(onSubmit)} fullWidth size="large" variant="contained">Create account</Button>
      <Typography variant="caption" sx={{m: "0 0 0 6px", fontStyle: 'italic', color: 'grey'}} noWrap>
        Already have an acccount? <Link replace underline="none" component={RouterLink} to="/login">Login</Link>
      </Typography>
      {image && <img src={`http://localhost:4001/${image}`} />}
    </>
  )
}
export default RegisterForm