import { InputAdornment, TextField } from "@mui/material"
import { Controller } from "react-hook-form"
import { PropTypes } from 'prop-types';
import { AttachFile } from "@mui/icons-material";

const FormFileInput = ({ name, control, label }) => {
  return (
    <Controller 
      name={name}
      control={control}
      rules={{ validate: {
        lasThan5MB: (files) =>  {
          if (!files) return;
          return files.size < 5000000 || "The file size is too large";
        },
        acceptedFormats: (files) => (files ? ["image/jpeg", "image/png", "image/jpg"].includes(files.type) ||
        "Only PNG, JPG and JPEG" : true)
      }}}
      render={({ 
        field: { onChange, value },
        fieldState: { error }
      }) => (
        <TextField
          type="file"
          fullWidth
          variant="outlined"
          label={label}
          onChange={(e) => onChange(e.target.files[0] || null)}
          error={!!error}
          helperText={error ? error.message : null}
          value={value?.fileName}
          InputProps={{
            startAdornment: <InputAdornment position="start"><AttachFile /></InputAdornment>
          }}
        />
      )}
        
    />
  )
}
FormFileInput.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object,
  label: PropTypes.string,
}.isRequired;
export default FormFileInput