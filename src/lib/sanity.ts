import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'
export const hasSanityConfig = Boolean(projectId && dataset)

export const client = hasSanityConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2026-06-18',
      useCdn: true
    })
  : null

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: unknown) {
  return builder?.image(source)
}

