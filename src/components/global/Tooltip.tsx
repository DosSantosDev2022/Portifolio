'use client'

import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

interface TooltipComponentProps {
  children: ReactNode
  content: string
}

export function TooltipComponent({ children, content }: TooltipComponentProps) {
  return (
    <Tooltip.Provider delayDuration={300} skipDelayDuration={500}>
      <Tooltip.Root>
        <Tooltip.TooltipTrigger>{children}</Tooltip.TooltipTrigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={5}
            align="center"
            aria-label="Logo da tecnologia utilizada"
            className="animate-bounce rounded-md bg-light p-2 font-medium text-primary"
          >
            {content}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
