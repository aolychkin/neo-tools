import { MenuItemEntity } from "./entities";

export function useTopMenuList() {
  const data:  MenuItemEntity []= [
    {
      id: 1,
      order: 1,
      label: 'Home',
      icon: 'mdi-light:home',
      link: '/',
    },
    {
      id: 1,
      order: 2,
      label: 'Dashboard',
      icon: 'mdi-light:home',
      link: '/',
    },
    {
      id: 1,
      order: 3,
      label: 'Order',
      icon: 'mdi-light:home',
      link: '/',
    },
    {
      id: 1,
      order: 4,
      label: 'Tasks',
      icon: 'mdi-light:home',
      link: '/',
      children: {
        toggleIcon: 'ep:arrow-down',
        childItems: [
          {
            id: 1,
            order: 1,
            label: 'All tasks',
            icon: 'home',
            link: '/',
          },
          {
            id: 1,
            order: 2,
            label: 'Backlog',
            icon: 'home',
            link: '/',
          },
          {
            id: 1,
            order: 3,
            label: 'In progress',
            icon: 'home',
            link: '/',
          },
          {
            id: 1,
            order: 4,
            label: 'Done 3',
            icon: 'home',
            link: '/',
          },
        ]
      }
    },
  ]

  return data;
}