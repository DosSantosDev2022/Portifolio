"use client";

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { UserProfile } from './user-profile';
import { SidebarNav } from './sidebar-nav';
import { navLinks, socialLinks } from '@/config/sidebar-links';

const MobileSidebar = () => {
  return (
    // O <header> foi removido. O componente agora retorna apenas o Sheet.
    // As classes 'md:hidden' garantem que isto só aparece em ecrãs pequenos.
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          {/* O botão agora é flutuante com posicionamento fixo */}
          <Button
            size='icon'
            variant='secondary'
            className="fixed top-4 left-4 z-50" // <-- CLASSES IMPORTANTES AQUI
          >
            <Menu className='size-5' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className="w-full sm:w-72 p-0 flex flex-col">
          {/* O conteúdo do Sheet permanece o mesmo */}
          <div className='p-4 mb-4 border-b'>
            <UserProfile />
          </div>
          
          <nav className='flex-1 space-y-8 p-4'>
            <SidebarNav isSocial={false} title={''} links={navLinks} />
            <SidebarNav links={socialLinks} title="Social" isSocial />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { MobileSidebar };