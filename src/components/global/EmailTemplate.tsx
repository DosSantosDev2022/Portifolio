interface EmailTemplateProps {
  firstName: string
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div>
      <h1>{firstName} </h1>
    </div>
  )
}
