import { Box} from "@mui/joy";
import { ReactNode } from "react";

export function SidebarProfileLayout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      {children}
    </Box>
  )
}