export type MenuChildItemEntity = {
  toggleIcon: string;
  childItems: MenuItemEntity[]
}

export type MenuItemEntity = {
  [x: string]: any;
  id: number;
  order: number;
  label: string;
  icon: string;
  link: string;
  children?: MenuChildItemEntity
};
