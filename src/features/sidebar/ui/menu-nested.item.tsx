import { Box, List, ListItem, ListItemButton, ListItemContent, Typography } from "@mui/joy";
import { MenuItemEntity } from "../model/entities";
import { Icon } from "@iconify/react";
import React from "react";

function MenuItemToggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: 'grid',
            transition: '0.2s ease',
            '& > *': {
              overflow: 'hidden',
            },
          },
          open ? { gridTemplateRows: '1fr' } : { gridTemplateRows: '0fr' },
        ]}
      >
        {children}
      </Box>
    </>
  );
}

export function MenuNestedItem({
  parentIcon,
  parentLabel,
  toggleIcon,
  childItems,
}: {
  parentIcon: string;
  parentLabel: string;
  toggleIcon: string;
  childItems: MenuItemEntity [];
}) {
  return (
    <ListItem nested>
      <MenuItemToggler
        renderToggle={({ open, setOpen }) => (
          <ListItemButton onClick={() => setOpen(!open)}>
            <Icon icon={parentIcon} />
            <ListItemContent>
              <Typography level="title-sm">{parentLabel}</Typography>
            </ListItemContent>
            <Icon icon={toggleIcon} style={{
              transform: open ? 'rotate(180deg)' : 'none'
            }} />
          </ListItemButton>
        )}
      >
        <List sx={{ gap: 0.5 }}>
          {childItems.map((childItem: MenuItemEntity) => (
            <ListItem nested>
              <ListItemButton
                role="menuitem"
                component="a"
                href={childItem.link}
              >
                <Icon icon={childItem.icon} />
                <ListItemContent>
                  <Typography level="title-sm">{childItem.label}</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MenuItemToggler>
    </ListItem>
  )
}