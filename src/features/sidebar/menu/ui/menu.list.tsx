import { MenuItem } from "./menu.item";
import { MenuNestedItem } from './menu-nested.item';
import { Page } from '../../../../entities/nav/entities';

export function MenuList({
  menuItems
}: {
  menuItems: Page[]
}) {

  return (
    <>
      {menuItems.map((menuItem: Page) => (
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