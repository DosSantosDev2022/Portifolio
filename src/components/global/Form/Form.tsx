'use client'

import { Button } from '../button'
import { Input } from './Input'
import { TextArea } from './TextArea'
import { Label } from './label'

export function Form() {
  return (
    <form className="w-full space-y-6">
      <div className="flex flex-col gap-1">
        <Label htmlFor="">Nome</Label>
        <Input placeholder="Digite seu nome" type="text" />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="">Email</Label>
        <Input placeholder="Digite seu e-mail" type="email" />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="">Telefone</Label>
        <Input placeholder="(xx) xxxx-xxxx" type="number" />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="">Mensagem</Label>
        <TextArea placeholder="Deixe sua mensagem..." />
      </div>
      <div className="flex w-full items-center justify-end p-2">
        <Button
          className="flex h-[54px] w-[137px] items-center justify-center p-4 text-base font-bold uppercase tracking-wider "
          variant="highlight"
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}
