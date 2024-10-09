import { Box, listItemButtonClasses } from "@mui/joy";
import { ReactNode } from "react";

export function SidebarMainLayout({ children }: { children: ReactNode[] }) {
  return (
    <Box
      sx={{
        minHeight: 0,
        overflow: 'hidden auto',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        [`& .${listItemButtonClasses.root}`]: {
          gap: 1.5,
        },
      }}
    >
      {children}
    </Box>
  )
}