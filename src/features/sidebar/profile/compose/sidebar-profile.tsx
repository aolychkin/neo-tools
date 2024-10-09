import { Logout } from "../../../../shared/logout";
import { ProfileData } from "../ui/profile-data.card";
import { SidebarProfileLayout } from "../ui/profile.layout";
import { usePrifileCard } from "../model/profile.model";
import { ProfileAvatar } from "../../../../shared/avatar";

export function SidebarProfile() {
  const data = usePrifileCard()
  return (    
    <SidebarProfileLayout>
      <ProfileAvatar avatar={data.avatar} avatarSize="sm"/>
      <ProfileData name={data.name} email={data.email}/>
      <Logout icon={data.icon}/>
    </SidebarProfileLayout>
  )
}