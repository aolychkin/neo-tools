import { ReactElement, ReactNode } from "react";

export type PageChild = {
  toggleIcon: string;
  childItems: Page[]
}

export type PageTabs = {
  id: number;
  order: number;
  label: string;
  link: string;
  permission: Perm;
  component: ReactNode;
}

export type Page = {
  id: number;
  order: number;
  location: string;
  label: string;
  icon: string;
  link: string;
  permission: Perm;
  component: ReactNode;
  tabs?: PageTabs[];
  children?: PageChild;
};

export type NeoInfo = {
  icon: string;
  label: string;
}

export type Perm = {
  permission: "shared" | "person" | "lead" | "cap" | "holder"
}

export type NotifyCard = {
  id: number;
  title: string;
  description: string;
  button: string;
  progress: number;
  color: string;
}
