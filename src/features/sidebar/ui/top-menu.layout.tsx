import { List } from "@mui/joy";
import { SidebarMenuList } from "../compose/sidebar-menu.list";
import { useTopMenuList } from "../model/top-menu.model";

export function TopMenuLayout(){
  return (
    <List
      size="sm"
      sx={{
        gap: 1,
        '--List-nestedInsetStart': '30px',
        '--ListItem-radius': (theme) => theme.vars.radius.sm,
      }}
    >
      <SidebarMenuList menuItems={useTopMenuList()}/>
    </List>
  )
}