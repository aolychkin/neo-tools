import { Icon } from "@iconify/react";
import { IconButtonProps, useColorScheme, IconButton } from "@mui/joy";
import React from "react";

import { useColorScheme as useJoyColorScheme } from '@mui/joy/styles';
import { useColorScheme as useMaterialColorScheme } from '@mui/material/styles';

// const ModeToggle = () => {
//   const { mode, setMode: setMaterialMode } = useMaterialColorScheme();
//   const { setMode: setJoyMode } = useJoyColorScheme();
//   const [mounted, setMounted] = React.useState(false);
//   React.useEffect(() => {
//     setMounted(true);
//   }, []);
//   if (!mounted) {
//     // prevent server-side rendering mismatch
//     // because `mode` is undefined on the server.
//     return null;
//   }
//   return (
//     <IconButton
//       onClick={() => {
//         setMaterialMode(mode === 'dark' ? 'light' : 'dark');
//         setJoyMode(mode === 'dark' ? 'light' : 'dark');
//       }}
//     >
//       {/** You can use `mode` from Joy UI or Material UI since they are synced **/}
//       {mode === 'dark' ? <DarkMode /> : <LightMode />}
//     </IconButton>
//   );
// };

export function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, sx, ...other } = props;
  const { mode, setMode: setMaterialMode } = useMaterialColorScheme();
  const { setMode: setJoyMode } = useJoyColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <IconButton
        size="sm"
        variant="outlined"
        color="neutral"
        {...other}
        sx={sx}
        disabled
      />
    );
  }
  return (
    <IconButton
      data-screenshot="toggle-mode"
      size="sm"
      variant="outlined"
      color="neutral"
      {...props}
      onClick={() => {
        setMaterialMode(mode === 'dark' ? 'light' : 'dark');
        setJoyMode(mode === 'dark' ? 'light' : 'dark');
      }}
      sx={[
        mode === 'dark'
          ? { '& > *:first-of-type': { display: 'none' } }
          : { '& > *:first-of-type': { display: 'initial' } },
        mode === 'light'
          ? { '& > *:last-of-type': { display: 'none' } }
          : { '& > *:last-of-type': { display: 'initial' } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Icon icon={""} />
      <Icon icon={""} />
    </IconButton>
  );
}