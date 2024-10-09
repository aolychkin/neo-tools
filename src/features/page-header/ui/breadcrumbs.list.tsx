import { Box, Breadcrumbs, Typography, Link } from "@mui/joy";
import { Icon } from "@iconify/react";
import { BreadcrumbsItem } from "./breadcrumbs-item";
import { useNav } from "../../../entities/nav/nav.model";


export function BreadcrumbsList() {
  const pathname = window.location.pathname
  const pathnameSplited = pathname.split('/')
  const thisPage = useNav().filter(
    (menuItem) => menuItem.link == "/" + pathnameSplited[1]
  )[0];
  const thisTab = thisPage.tabs != undefined 
  ? thisPage.tabs.filter(
    (tabItem) => tabItem.link == pathnameSplited[2]
  )[0]
  : undefined;

  return (
    <Box sx={{ px: { xs: 2, md: 6 } }}>
      <Breadcrumbs
        size="sm"
        aria-label="breadcrumbs"
        separator={<Icon icon="solar:alt-arrow-right-broken" />}
        sx={{ pl: 0 }}
      >
        <BreadcrumbsItem link="/" color="neutral" icon="mdi-light:home" />
        <BreadcrumbsItem link={thisPage.link} color={thisTab == undefined ? "primary" : "neutral"} label={thisPage.label} />
        {thisTab != undefined && <BreadcrumbsItem link={thisPage.link + "/" + thisTab.link} label={thisTab.label} color="primary"/>}

      </Breadcrumbs>
    </Box>
  );
}

