import { useTopMenuList } from "../model/top-menu.model";
import { MenuItem } from "../ui/menu.item";
import { MenuNestedItem } from '../ui/menu-nested.item';
import { MenuItemEntity } from '../model/entities';
import { useBottomMenuList } from "../model/bottom-menu.model";

//Надо возвращать из композа

export function SidebarMenuList({
  menuItems
}: {
  menuItems: MenuItemEntity[]
}) {

  return (
    <>
      {menuItems.map((menuItem: MenuItemEntity) => (
        menuItem.children == undefined
          ? <MenuItem
            key={menuItem.id}
            icon={menuItem.icon}
            label={menuItem.label}
            link={menuItem.link}
          />
          : <MenuNestedItem
            key={menuItem.id}
            parentIcon={menuItem.icon}
            parentLabel={menuItem.label}
            toggleIcon={menuItem.children.toggleIcon}
            childItems={menuItem.children.childItems}
          />
      ))}
    </>
  )
}