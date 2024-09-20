import { ListItem, ListItemButton, ListItemContent, Typography } from '@mui/joy'
import { Icon } from '@iconify/react';

export function MenuItem({
  icon,
  label,
  link,
}: {
  icon: string;
  label: string;
  link: string;
}) {
  return (
    <ListItem nested>
      <ListItemButton
        role="menuitem"
        component="a"
        href={link}
      >
        <Icon icon={icon}/>
        <ListItemContent>
          <Typography level="title-sm">{label}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  )
}