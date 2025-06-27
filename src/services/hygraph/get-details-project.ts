import { fetchHygraphQuery } from '@/app/api/hygraph/fetchHygraphQuery'
import type { DetailsProject, Project } from '@/@types/detailsProject'

export const getDetailsProject = async (
	slug: string,
): Promise<Project> => {
	const query = `
    query MyQuery($slug: String!) {
      projects(where: {slug: $slug}) {
        id
        title
        subtitle
        slug
        description
        technologie {
          id
          name
          icon {
            url
          }
        }
        completeDescription {
          raw
        }
        coverImage {
          url
        }
        codeLink
        deployLink
      }
    }
  
  `
	const variables = { slug }
	const data: DetailsProject = await fetchHygraphQuery(query, variables)

	return data.projects
}
