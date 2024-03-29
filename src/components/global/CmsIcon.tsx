type CMSIconProps = {
  icon: string
  className?: string
}

export function CMSIcon({ icon, className }: CMSIconProps) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<i class="${className}">${icon}</i>`,
      }}
    />
  )
}
