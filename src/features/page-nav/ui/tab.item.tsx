import { Tabs, TabList, tabClasses, Tab, TabPanel, Link } from "@mui/joy";
import { Outlet } from "react-router-dom";
import { useNav } from "../../../entities/nav/nav.model";

export function TabItem({
  link,
  label,
}:{
  link: string;
  label: string;
}) {
  return (
    <Tab component={Link} href={link} sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={link}>
      {label}
    </Tab>
  )
}