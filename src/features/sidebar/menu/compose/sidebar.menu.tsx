import { MenuList } from "../ui/menu.list";
import { useBottomMenuList, useTopMenuList } from "../model/menu.model";
import { MenuLayout } from "../ui/menu-layout";

export function SidebarMenu() {
  return (
    <>
      <MenuLayout isTop={true}>
        <MenuList menuItems={useTopMenuList()} />
      </MenuLayout>
      <MenuLayout isTop={false}>
        <MenuList menuItems={useBottomMenuList()} />
      </MenuLayout>
    </>

  )
}