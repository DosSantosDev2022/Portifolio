interface EmailTemplateProps {
	firstName: string
}

const EmailTemplate = ({ firstName }: EmailTemplateProps) => {
	return (
		<div>
			<h1>{firstName} </h1>
		</div>
	)
}

export { EmailTemplate }
