import { useNav } from "../../../../entities/nav/nav.model";

export function useTopMenuList() {
  return useNav().filter(
    (menuItem) => menuItem.location == "sidebar-top"
  );
}

export function useBottomMenuList() {
  return useNav().filter(
    (menuItem) => menuItem.location == "sidebar-bottom"
  );
}