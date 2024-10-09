import { Tabs, TabList, tabClasses, Tab, TabPanel, Link } from "@mui/joy";
import { Outlet } from "react-router-dom";
import { useNav } from "../../../entities/nav/nav.model";
import { Page } from "../../../entities/nav/entities";
import { TabItem } from "../ui/tab.item";
import { PageTabsLayout } from "../ui/page-tabs.layout";

export function PageTabs() {
  const pathname = window.location.pathname
  const thisPage = useNav().filter(
    (menuItem) => menuItem.link == "/" + pathname.split('/')[1]
  )[0];

  return (
    <PageTabsLayout pathname={pathname}>
      {thisPage.tabs != undefined && thisPage.tabs.map((tab) => (
        <TabItem link={thisPage.link + '/' + tab.link} label={tab.label} />
      ))}
    </PageTabsLayout>
  )
}