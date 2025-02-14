import { Sheet, GlobalStyles, IconButton} from "@mui/joy";
import { Icon } from "@iconify/react";
import { toggleSidebar } from "../../../widgets/page.wrapper/lib/utilis";
import { BreadcrumbsList } from "../ui/breadcrumbs.list";

export function Header() {
  return (
    <Sheet
      sx={{
        display: { xs: 'flex', md: 'none' },
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: 'var(--Header-height)',
        zIndex: 9998,
        p: 2,
        gap: 1,
        borderBottom: '1px solid',
        borderColor: 'background.level1',
        boxShadow: 'sm',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Header-height': '52px',
            [theme.breakpoints.up('md')]: {
              '--Header-height': '0px',
            },
          },
        })}
      />
      <IconButton
        onClick={() => toggleSidebar()}
        variant="outlined"
        color="neutral"
        size="sm"
      >
        <Icon icon="mdi-light:home" />
      </IconButton>
      <BreadcrumbsList/>
    </Sheet>
  );
}