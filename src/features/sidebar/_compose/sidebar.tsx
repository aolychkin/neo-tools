import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import { SidebarMenu } from '../menu/compose/sidebar.menu';
import { SidebarLayout } from '../../../widgets/page.wrapper/ui/sidebar.layout';
import { SidebarMainLayout } from '../../../widgets/page.wrapper/ui/sidebar-main.layout';
import { Notify } from '../notify/_compose/notify';
import { SidebarProfile } from '../profile/compose/sidebar-profile';
import { SidebarHeader } from '../header/_compose/sidebar-header';
import { useNotifyCard } from '../notify/model/notify.model';

export function Sidebar() {
  return (
    <SidebarLayout>
      <SidebarMainLayout>
        <SidebarHeader />
        <SidebarMenu />
        <Notify notifyItems={useNotifyCard()}/>
      </SidebarMainLayout>
      <Divider />
      <SidebarProfile />
    </SidebarLayout>
  );
}
