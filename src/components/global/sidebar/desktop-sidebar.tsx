'use client'

import { navLinks, socialLinks } from '@/config/sidebar-links'
import { SidebarNav } from './sidebar-nav'
import { UserProfile } from './user-profile'

const DesktopSidebar = () => {
	return (
		<aside className='hidden md:flex md:w-64 flex-col fixed inset-y-0 z-10 bg-secondary/20 p-4'>
			<div className='flex h-full w-full flex-col'>
				{/* Mantenho o UserProfile separado do padding do nav. */}
				<div className='mb-8'> {/* Aumentei o espaçamento inferior. */}
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
		</ aside>
	)
}

export { DesktopSidebar }

