import { Profile } from "./entities";

export function usePrifileCard() {
  const data: Profile =
  {
    id: 1,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286',
    name: 'Алексей Л.',
    email: 'space@neosocium.com',
    icon: "mdi-light:home",
  }

  return data;
}