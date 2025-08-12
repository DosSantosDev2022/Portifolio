import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';
// Importa os dados do nosso novo ficheiro
import { pageHeader, biography, skillCategories, cta } from '@/config/about-data';
import { ScrollAnimation } from '@/components/global';

export default function AboutPage() {
  return (
    <ScrollAnimation className="p-4 sm:p-6 lg:p-8 space-y-16">
      
      {/* --- Cabeçalho e Introdução (Dados Dinâmicos) --- */}
      <section className="max-w-4xl mx-auto text-center">
        <Badge variant="secondary" className="mb-4">{pageHeader.badge}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {pageHeader.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {pageHeader.description}
        </p>
      </section>

      {/* --- Secção de Biografia com Foto (Dados Dinâmicos) --- */}
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src={biography.imageUrl}
                alt="Foto de Juliano Santos"
                fill
                className="rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">{biography.title}</h2>
            {biography.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* --- Secção de Competências (Skills) (Dados Dinâmicos) --- */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Minhas Competências</h2>
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge key={skill.name}>{skill.name}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* --- Secção Call to Action (CTA) (Dados Dinâmicos) --- */}
      <section className="max-w-4xl mx-auto text-center bg-secondary/50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">{cta.title}</h2>
        <p className="text-muted-foreground mb-6">{cta.description}</p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Entrar em Contato <Mail className="ml-2 size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              Ver Meus Projetos <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

    </ScrollAnimation>
  );
}