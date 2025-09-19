'use client'
import { UserProfile } from './user-profile'
import { SidebarNav } from './sidebar-nav'
import { navLinks, socialLinks } from '@/config/sidebar-links'

const DesktopSidebar = () => {
	return (
		<aside className='hidden md:flex md:w-64 lg:w-72 flex-col fixed inset-y-0 z-10 border-r p-4'>
			<div className='flex h-full w-full flex-col'>
				<div className='mb-4'>
					<UserProfile />
				</div>

				<nav className='flex-1 space-y-8'>
					<SidebarNav
						isMobile={false}
						isSocial={false}
						title={''}
						links={navLinks}
					/>
					<SidebarNav
						isMobile={false}
						links={socialLinks}
						title='Social'
						isSocial
					/>
				</nav>
			</div>
		</aside>
	)
}

export { DesktopSidebar }
