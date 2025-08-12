// app/components/project-card.tsx
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '../ui';
import {  FaGithub, FaRegWindowMaximize } from 'react-icons/fa';
import { Project } from '@/@types/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="aspect-[4/2] relative">
          <Image
            src={project.coverImage.url || ''}
            alt={`Imagem do projeto ${project.title}`}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 px-6">
        <CardTitle className="mb-2 text-xl font-semibold">{project.title}</CardTitle>
        <p className="text-muted-foreground text-sm">
          {project.description}
        </p>
      </CardContent>
      <CardFooter>
        <div className='grid w-full'>
            <div className="flex flex-wrap gap-2">
          {project.technologie.map((tag) => (
            <Badge key={tag.id} variant="secondary">
              {tag.name}
            </Badge>
          ))}
        </div>
         <div className='space-y-2'>
          <Button className='w-full mt-4' variant={'secondary'} asChild >
              <Link href={''} >
                <FaRegWindowMaximize  />
                Preview
              </Link>
          </Button>
          <Button className='w-full' variant={'secondary'} asChild >
            <Link href={''} >
              <FaGithub />
              Repositório
            </Link>
          </Button>
         </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export { ProjectCard }