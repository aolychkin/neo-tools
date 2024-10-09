import { useNav } from "../../../entities/nav/nav.model";

export function usePageTabs(){
  const pathname = window.location.pathname
  const thisPage = useNav().filter(
    (menuItem) => menuItem.link == "/" + pathname.split('/')[1]
  )[0];
  
  return thisPage
}