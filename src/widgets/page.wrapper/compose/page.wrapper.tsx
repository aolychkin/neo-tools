import { ReactNode } from "react";
import { Container, Grid, Box, CssBaseline } from "@mui/joy";
import { Sidebar } from "../../../features/sidebar/_compose/sidebar";
import { Header } from "../../../features/page-header/compose/header";
import { BreadcrumbsList } from "../../../features/page-header/ui/breadcrumbs.list";
import { PageTabs } from "../../../features/page-nav/_compose/page-tabs";
import { light } from "@mui/material/styles/createPalette";

import {
  extendTheme as materialExtendTheme,
  ThemeProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';

const materialTheme = materialExtendTheme();

export function PageWraper({
  children
}: {
  children?: ReactNode
}) {
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
          <Sidebar />
          <Header />
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
            <Box sx={{ flex: 1, width: '100%' }}>
              <Box
                sx={{
                  position: 'sticky',
                  top: { sm: -100, md: -110 },
                  bgcolor: 'background.body',
                  zIndex: 9995,
                }}
              >
                <BreadcrumbsList />
                {children == undefined ? <PageTabs /> : children}
              </Box>
            </Box>
          </Box>
        </Box>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  )
}