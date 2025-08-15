import { ScrollAnimation } from '@/components/global';
import { FormContact } from '@/components/global/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription,Button } from '@/components/ui';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {

  const whatsappNumber = "5511916453897";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Vi seu portfólio e gostaria de conversar.")}`;

  return (
    <ScrollAnimation className="p-4 sm:p-6 lg:p-8">
      {/* --- Cabeçalho da Página --- */}
      <div className="max-w-6xl mx-auto text-center lg:text-start mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Entre em Contato</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tem uma pergunta ou uma proposta, entre em contato.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* --- Coluna do Formulário --- */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Envie-me uma mensagem</CardTitle>
              <CardDescription>Preencha o formulário abaixo e retornarei o mais breve possível.</CardDescription>
            </CardHeader>
            <CardContent>
              <FormContact />
            </CardContent>
          </Card>
        </div>

        {/* --- Coluna de Contato Direto --- */}
        <div className="lg:col-span-1 space-y-8">
          <h2 className="text-3xl font-bold">Outras Formas de Contato</h2>
          <p className="text-muted-foreground">
            Se preferir um contato mais direto, pode me encontrar aqui. Respondo rapidamente, especialmente via WhatsApp.
          </p>
          
          <div className="space-y-4">
            {/* Contato via WhatsApp */}
            <Button asChild variant="outline" className="w-full text-lg p-6 justify-start">
              <Link href={whatsappLink} target="_blank">
                <Phone className="mr-4 size-6 text-green-500" />
                <span className='text-sm lg:text-base'>Conversar no WhatsApp</span>
              </Link>
            </Button>

            {/* Contato via E-mail */}
            <Button asChild variant="outline" className="w-full text-lg p-6 justify-start">
              <Link href="dossantosdevoficial@gmail.com">
                <Mail className="mr-4 size-6 text-primary" />
                <span className='text-sm lg:text-base'>dossantosdevoficial@gmail.com</span>
              </Link>
            </Button>
          </div>
          
          <div className="text-center lg:text-start pt-4">
            <h3 className="text-xl font-semibold mb-3">Horário de Atendimento</h3>
            <p className="text-muted-foreground">
              Segunda a Sexta<br/>
              09:00 - 18:00
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}