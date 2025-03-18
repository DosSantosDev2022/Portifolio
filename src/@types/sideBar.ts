export interface sideBarTypes {
	sideBar: {
		profile: {
			url: string
		}
		name: string
		profession: string
		socialLinks: {
			id: string
			name: string
			url: string
			icon: {
				url: string
			}
		}[]
		technologies: {
			id: string
			name: string
			icon: {
				url: string
			}
		}[]
		contactList: {
			id: string
			name: string
			label: string
			icon: {
				url: string
			}
		}[]
	}
}
