import { Tabs, TabList, tabClasses, Tab, TabPanel, Link } from "@mui/joy";
import { Outlet } from "react-router-dom";
import { useNav } from "../../../entities/nav/nav.model";
import { Page } from "../../../entities/nav/entities";
import { TabItem } from "../ui/tab.item";
import { ReactNode } from "react";

export function PageTabsLayout({
  pathname,
  children
}:{
  pathname: string
  children:  ReactNode
}) {
  return (
    <Tabs defaultValue={pathname} sx={{ bgcolor: 'transparent' }}>
      <TabList
        tabFlex={1}
        size="sm"
        sx={{
          pl: { xs: 0, md: 4 },
          justifyContent: 'left',
          [`&& .${tabClasses.root}`]: {
            fontWeight: '600',
            flex: 'initial',
            color: 'text.tertiary',
            [`&.${tabClasses.selected}`]: {
              bgcolor: 'transparent',
              color: 'text.primary',
              '&::after': {
                height: '2px',
                bgcolor: 'primary.500',
              },
            },
          },
        }}
      >
        {children}
      </TabList>
      <TabPanel value={pathname}>
        <Outlet />
      </TabPanel>
    </Tabs>
  )
}