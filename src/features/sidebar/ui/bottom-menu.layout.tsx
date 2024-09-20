import { List } from "@mui/joy";
import { SidebarMenuList } from "../compose/sidebar-menu.list";
import { useBottomMenuList } from "../model/bottom-menu.model";

export function BottomMenuLayout() {
  return (
    <List
      size="sm"
      sx={{
        mt: 'auto',
        flexGrow: 0,
        '--ListItem-radius': (theme) => theme.vars.radius.sm,
        '--List-gap': '8px',
        mb: 2,
      }}
    >
      <SidebarMenuList menuItems={useBottomMenuList()} />
    </List>
  )
}