import { Box, Typography } from "@mui/joy";
import { useColorScheme } from '@mui/joy/styles';
import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import { Icon } from "@iconify/react";
import { ColorSchemeToggle } from "../../../../shared/color-scheme-toggle";
import { useNeoInfo } from "../../../../entities/nav/neo-info";

export function SidebarHeader() {
  const neoInfo = useNeoInfo()
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <IconButton variant="soft" color="primary" size="sm">
        <Icon icon={neoInfo.icon} />
      </IconButton>
      <Typography level="title-lg">{neoInfo.label}</Typography>
      <ColorSchemeToggle sx={{ ml: 'auto' }} />
    </Box>
  )
}