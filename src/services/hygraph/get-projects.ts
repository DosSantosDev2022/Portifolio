import { fetchHygraphQuery } from '@/app/api/hygraph/fetchHygraphQuery'
import type { Project } from '@/@types/projects'

interface HygraphResponse {
	project: Project[]
	projectConnection: {
		aggregate: {
			count: number
		}
	}
}

interface projectData {
	project: Project[]
	totalCount: number
}

export const getAllProjects = async (
	page: number,
	pageSize: number,
): Promise<projectData> => {
	const query = `
    query MyQuery($first: Int, $skip: Int) {
      project(first: $first, skip: $skip) {
        id
        title
        subtitle
        slug
        description
        coverImage {
          url
        }
        codeLink
        deployLink
        technologie {
          id
          name
          icon {
            url
          }
        }
      }
      
      projectConnection {
        aggregate {
          count
        }
      }
    }
  `

	const skip = (page - 1) * pageSize
	const variables = { first: pageSize, skip }

	const response = await fetchHygraphQuery<HygraphResponse>(
		query,
		variables,
	)

	const { project, projectConnection } = response

	if (!project || !projectConnection) {
		throw new Error('Failed to fetch projects or projectConnection')
	}

	const totalCount = projectConnection.aggregate.count
	return { project, totalCount }
}
