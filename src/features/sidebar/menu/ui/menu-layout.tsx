import { List } from "@mui/joy";
import { ReactNode } from "react";

export function MenuLayout({ children, isTop }: { children: ReactNode; isTop: boolean }) {
  if (isTop) {
    return (
      <List
        size="sm"
        sx={{
          gap: 1,
          '--List-nestedInsetStart': '30px',
          '--ListItem-radius': (theme) => theme.vars.radius.sm,
        }}
      >
        {children}
      </List>
    )
  }

  // Bottom menu
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
      {children}
    </List>
  )
}