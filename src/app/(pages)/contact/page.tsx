import { ScrollAnimation } from '@/components/global';
import { FormContact } from '@/components/global/form';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';

export default function ContactPage() {

  const whatsappNumber = "5511916453897";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Vi seu portfólio e gostaria de conversar.")}`;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-20">
      <ScrollAnimation>

        {/* --- Cabeçalho da Página --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Entre em Contato
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tem uma pergunta, proposta de projeto ou apenas quer bater um papo? Envie uma mensagem!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* --- Coluna do Formulário (2/3 de largura em LG) --- */}
          <div className="lg:col-span-2">
            <Card className='shadow-2xl'> {/* Destaque no card do formulário */}
              <CardHeader>
                <CardTitle className='text-2xl font-bold'>Envie-me uma mensagem</CardTitle>
                <CardDescription>Preencha o formulário abaixo e retornarei o mais breve possível.</CardDescription>
              </CardHeader>
              <CardContent>
                <FormContact /> {/* Componente de formulário */}
              </CardContent>
            </Card>
          </div>

          {/* --- Coluna de Contato Direto (1/3 de largura em LG) --- */}
          <div className="lg:col-span-1 space-y-8 pt-4 lg:pt-0">
            <h2 className="text-3xl font-bold border-b pb-2">Contatos Diretos</h2>

            <p className="text-muted-foreground">
              Se preferir, me encontre diretamente por estas plataformas. Respondo rapidamente, especialmente via WhatsApp e Telegram.
            </p>

            <div className="space-y-4">
              {/* Contato via WhatsApp */}
              <Button asChild variant="secondary" className="w-full text-lg p-6 h-auto justify-start transition-transform hover:scale-[1.01]">
                <Link href={whatsappLink} target="_blank">
                  <Phone className="mr-4 size-6 text-green-500" />
                  <span className='text-base font-semibold'>Conversar no WhatsApp</span>
                </Link>
              </Button>

              {/* Contato via Telegram */}
              <Button asChild variant="secondary" className="w-full text-lg p-6 h-auto justify-start transition-transform hover:scale-[1.01]">
                <Link target='_blank' href="https://t.me/DosSantosDev">
                  <FaTelegramPlane className="mr-4 size-6 text-blue-500" />
                  <span className='text-base font-semibold'>Conversar no Telegram</span>
                </Link>
              </Button>
            </div>

            <div className="text-center lg:text-start pt-4 border-t lg:border-none">
              <h3 className="text-xl font-semibold mb-3">Horário de Atendimento</h3>
              <p className="text-muted-foreground">
                **Segunda a Sexta**<br />
                09:00 - 18:00 (Fuso Horário de Brasília)
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}