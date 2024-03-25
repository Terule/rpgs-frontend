import { IconButton, TextField } from "@mui/material"
import { Controller } from "react-hook-form"
import { PropTypes } from 'prop-types';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const FormTextInput = ({name, control, label, type, getValues}) => {
  const [showPassword, setShowPassword] = useState(false);
  const fieldRules = (name) => {
    switch (name) {
      case "name":
        return {
          required: `${label} is required`,
          minLength: {
            value: 3,
            message: `${label} must be at least 3 characters`
          }
        }
      case "email":
        return {
          required: `${label} is required`,
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address"
          }
        }
      case "password":
        return {
          required: `${label} is required`,
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters"
          }
        }
      case "cpassword":
        return {
          required: `${label} is required`,
          validate: (value) => value === getValues().password || "Passwords do not match"
        }
      default:
        return {
          required: `${label} is required`
        }
    }
  };
  return (
    <Controller
      name={name}
      rules={fieldRules(name)}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: {error},
      }) => (
        <TextField
          label={label}
          fullWidth
          type={name === "password" || name === "cpassword" ? showPassword ? "text" : "password" : type}
          variant="outlined"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          InputProps={(name === "password" || name === "cpassword") ? {
            endAdornment: (
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            )
          } : {}}
        />
      )}
    />
  )
}

FormTextInput.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object,
  label: PropTypes.string,
}.isRequired;

export default FormTextInput