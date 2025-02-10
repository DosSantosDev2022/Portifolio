import { GET_DATA_HOME } from '@/utils/query/GET_HOME_PAGE'
import { bebas } from '@/assets/fonts'
import Link from 'next/link'
import { Button } from '@/components/global/uiChroma/button'
import { RichText } from '@/components/global/RichText'
import { Projects } from '@/components/global/Projects'
import ScrollAnimation from '@/components/animations/ScrollAnimation'
import { Card } from '@/components/global/card'

export default async function Home() {
  const { home } = await GET_DATA_HOME()

  return (
    <div className="container mx-auto space-y-10 px-4 py-8 md:space-y-20 lg:px-12 lg:py-16">
      {/* Hero Section */}
      <ScrollAnimation className="flex flex-col items-start gap-1 lg:w-[582px]">
        <h1
          className={`${bebas.className} text-4xl leading-tight font-normal md:text-6xl lg:text-8xl`}
        >
          {home.sectionHero.title}
        </h1>
        <span className="text-base leading-relaxed font-normal">
          {home.sectionHero.smallText}
        </span>
      </ScrollAnimation>

      {/* About Me Section */}
      <ScrollAnimation className="flex flex-col items-start gap-6 rounded-md md:gap-12">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-bold md:text-xl lg:text-4xl">
            {home.sectionAboutMe.smallText}
          </h2>
          <RichText
            content={home.sectionAboutMe.longText.raw}
            renderers={{
              bold: ({ children }) => <b className="font-bold">{children}</b>,
              p: ({ children }) => (
                <p className="text-base font-light">{children}</p>
              )
            }}
          />
          <Button asChild variants="shine">
            <Link href={'/About'} className="text-sm">
              Veja mais
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {home.features.map((feature) => (
            <Card key={feature.id} className="h-full">
              <div className="flex flex-col items-start gap-2">
                <h4 className="text-base font-bold">{feature.title}</h4>
                <span className="text-xs font-light">
                  {feature.description}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </ScrollAnimation>

      {/* Featured Projects Section */}
      <ScrollAnimation className="space-y-8">
        <div className="flex flex-col items-start gap-1">
          <h2 className={`${bebas.className} text-4xl font-normal`}>
            {home.featuredProjects.title}
          </h2>
          <p className="text-muted text-sm">
            {home.featuredProjects.smallText}
          </p>
        </div>
        <div className="flex flex-col gap-14 md:gap-20">
          {home.featuredProjects.projects.map((project) => (
            <Projects
              key={project.id}
              title={project.title}
              codeUrl={project.codeLink}
              demoUrl={project.deployLink}
              slug={`/Project/${project.slug}`}
              description={project.description}
              coverImage={project.coverImage.url}
              id={project.title}
              tech={project.technologie.map((tech) => ({
                id: tech.id,
                name: tech.name,
                icon: tech.icon.url
              }))}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <Button asChild sizes="sm" variants="shine">
            <Link href={'/Projects'}>Ver todos</Link>
          </Button>
        </div>
      </ScrollAnimation>
    </div>
  )
}
