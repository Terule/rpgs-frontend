import { Box, Typography } from "@mui/material"

const Error404 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Typography variant="h1" marginTop={10}>404</Typography>
      <Typography variant="h3">Page Not Found</Typography>
    </Box>
  )
}
export default Error404