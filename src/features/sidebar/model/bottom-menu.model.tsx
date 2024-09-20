import { MenuItemEntity } from "./entities";

export function useBottomMenuList(){
  const data:  MenuItemEntity []= [
    {
      id: 1,
      order: 1,
      label: 'Support',
      icon: 'mdi-light:home',
      link: '/',
    },
    {
      id: 1,
      order: 2,
      label: 'Settings',
      icon: 'mdi-light:home',
      link: '/',
    }
  ]

  return data;
}