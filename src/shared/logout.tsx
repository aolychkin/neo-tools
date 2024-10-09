import { Icon } from "@iconify/react";
import { Box, Avatar, Typography, IconButton } from "@mui/joy";

export function Logout({icon}:{icon:string}) {
  return (
      <IconButton size="sm" variant="plain" color="neutral">
        <Icon icon={icon} />
      </IconButton>
  )
}