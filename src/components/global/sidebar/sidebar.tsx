// app/components/sidebar/index.jsx
import { DesktopSidebar } from './desktop-sidebar';
import { MobileSidebar } from './mobile-sidebar';

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
}

export { Sidebar }