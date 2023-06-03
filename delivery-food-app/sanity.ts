import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'gia1vjf1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-22',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

export default client
