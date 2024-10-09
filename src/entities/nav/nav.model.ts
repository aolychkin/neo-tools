import { HomePage } from "../../pages/home/compose/home.page";
import { Page, PageChild, PageTabs, Perm } from "./entities";
import { Fruits, Vegetables, Meat } from "../../shared/bbundle";
import { ConfigPage } from "../../pages/config/_compose/config.page";
import { OperationsPage } from "../../pages/operations/_compose/operations.page";
import { Operations } from "../../widgets/fin-operations/_compose/operations";
import { Funds } from "../../widgets/fin-operations/_compose/funds";
import { Modelling } from "../../widgets/fin-operations/_compose/modelling";

export function useNav() {
  const data: Page[] = [
    {
      id: 1,
      order: 1,
      location: "sidebar-top",
      label: 'Дашборд',
      icon: 'mdi-light:home',
      link: '/dashboard',
      permission: <Perm> {permission: "shared"},
      component: HomePage(),
      tabs: <PageTabs[]>[
        {
          id: 1,
          order: 1,
          label: 'Личности',
          link: 'person',
          permission: <Perm> {permission: "shared"},
          component: Fruits(),
        },
        {
          id: 2,
          order: 2,
          label: 'Команды',
          link: 'team',
          permission: <Perm> {permission: "shared"},
          component: Vegetables(),
        },
        {
          id: 3,
          order: 3,
          label: 'Объединения',
          link: 'union',
          permission: <Perm> {permission: "shared"},
          component: Meat(),
        },
        {
          id: 4,
          order: 4,
          label: 'Общества',
          link: 'socium',
          permission: <Perm> {permission: "shared"},
          component: Meat(),
        }
      ]
    },
    {
      id: 2,
      order: 2,
      location: "sidebar-top",
      label: 'Конфигурация',
      icon: 'mdi-light:home',
      link: '/config',
      permission: <Perm> {permission: "shared"},
      component: ConfigPage(),
    },
    {
      id: 3,
      order: 3,
      location: "sidebar-top",
      label: 'Финансы',
      icon: 'mdi-light:home',
      link: '/finance',
      permission: <Perm> {permission: "shared"},
      component: OperationsPage(),
      tabs: <PageTabs[]>[
        {
          id: 1,
          order: 1,
          label: 'Операции',
          link: 'operations',
          permission: <Perm> {permission: "shared"},
          component: Operations(),
        },
        {
          id: 2,
          order: 2,
          label: 'Фонды',
          link: 'funds',
          permission: <Perm> {permission: "shared"},
          component: Funds(),
        },
        {
          id: 3,
          order: 3,
          label: 'Моделирование',
          link: 'union',
          permission: <Perm> {permission: "shared"},
          component: Modelling(),
        },
        {
          id: 4,
          order: 4,
          label: 'Контрагенты',
          link: 'socium',
          permission: <Perm> {permission: "shared"},
          component: Meat(),
        }
        ,
        {
          id: 4,
          order: 4,
          label: 'Проекты',
          link: 'socium',
          permission: <Perm> {permission: "shared"},
          component: Meat(),
        }
      ]
    },
    {
      id: 4,
      order: 4,
      location: "sidebar-top",
      label: 'Tasks',
      icon: 'mdi-light:home',
      link: '/',
      permission: <Perm> {permission: "shared"},
      component: HomePage(),
      children: <PageChild> {
        toggleIcon: 'ep:arrow-down',
        childItems: [
          {
            id: 5,
            order: 1,
            location: "sidebar-top",
            label: 'All tasks',
            icon: 'home',
            link: '/',
            permission: <Perm> {permission: "shared"},
            component: HomePage(),
          },
          {
            id: 6,
            order: 2,
            location: "sidebar-top",
            label: 'Backlog',
            icon: 'home',
            link: '/',
            permission: <Perm> {permission: "shared"},
            component: HomePage(),
          },
          {
            id: 7,
            order: 3,
            location: "sidebar-top",
            label: 'In progress',
            icon: 'home',
            link: '/',
            permission: <Perm> {permission: "shared"},
            component: HomePage(),
          },
          {
            id: 8,
            order: 4,
            location: "sidebar-top",
            label: 'Done 3',
            icon: 'home',
            link: '/',
            permission: <Perm> {permission: "shared"},
            component: HomePage(),
          },
        ]
      }
    },
    {
      id: 9,
      order: 1,
      location: "sidebar-bottom",
      label: 'Support',
      icon: 'mdi-light:home',
      link: '/',
      permission: <Perm> {permission: "shared"},
      component: HomePage(),
    },
    {
      id: 10,
      order: 2,
      location: "sidebar-bottom",
      label: 'Settings',
      icon: 'mdi-light:home',
      link: '/',
      permission: <Perm> {permission: "shared"},
      component: HomePage(),
    }
  ]

  return data;
}