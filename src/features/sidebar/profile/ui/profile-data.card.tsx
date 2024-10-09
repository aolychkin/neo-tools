import { Box, Typography } from "@mui/joy";

export function ProfileData({name, email}:{name: string; email: string}) {
  return (
    <Box sx={{ minWidth: 0, flex: 1 }}>
      <Typography level="title-sm">{name}</Typography>
      <Typography level="body-xs">{email}</Typography>
    </Box>
  )
}