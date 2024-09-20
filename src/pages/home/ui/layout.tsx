import { ReactNode } from "react";
import { Container, Grid, Box, CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";

export function Layout({
  sidebar
}:{
  sidebar: ReactNode
}){
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        {sidebar}
        Header
        <Box
          component="main"
          className="MainContent"
          sx={{
            pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
            overflow: 'auto',
          }}
        >
          MainPart
        </Box>
      </Box>
    </CssVarsProvider>
  )
}