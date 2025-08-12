import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {feature} from '@/config/home-data'
// Ícones
import { MapPin } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import { ScrollAnimation } from '@/components/global';

export default function Home() {
  return (
    <div className="mx-auto mb-6 max-w-screen-md space-y-14 px-4 py-6 lg:space-y-20 lg:py-16">
      
      {/* --- Secção 1: Introdução (Mantida) --- */}
      <section className="space-y-4">
        <ScrollAnimation>
            <h1 className="text-3xl font-medium lg:text-4xl">Olá! Eu sou Juliano
              <div className="flex flex-col items-start sm:flex-row sm:items-center">
                <span className="text-primary">FullStack Developer</span>
                <div className="mt-3 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-base sm:ms-4 lg:mt-0">
                  <MapPin className="size-4" /> Brasil
                </div>
              </div>
            </h1>
        <p className="text-muted-foreground">
          Desenvolvedor fullstack e especialista em Next Js, construindo aplicações de ponta a ponta.
        </p>
        <div className="flex gap-4 pt-2">
          <Button asChild variant={'secondary'}>
            <Link href="/about">Sobre mim</Link>
          </Button>
          <Button asChild variant={'ghost'} className="inline-flex items-center justify-center gap-2">
            <Link href="/contact" className='flex items-center gap-2'>
              <MdEmail className="size-4" /> Contato
            </Link>
          </Button>
        </div>
        </ScrollAnimation>
        
      </section>

      {/* --- NOVA Secção 2: Features / O que eu ofereço --- */}
      <section>
        <ScrollAnimation className="pb-8 text-center">
          <h2 className="text-2xl font-medium">Principais Serviços</h2>
          <p className="text-muted-foreground mt-1">Soluções completas para levar sua ideia ao próximo nível.</p>
        </ScrollAnimation>

        <ScrollAnimation className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1: Frontend */}
          {feature.map((feat) => {
            return (
            <Card key={feat.id} className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <feat.icon className="size-6 text-primary" />
              </div>
              <CardTitle>{feat.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                  {feat.description}
              </p>
            </CardContent>
          </Card>
            )
          })}
        
        </ScrollAnimation>
      </section>
    </div>
  );
}