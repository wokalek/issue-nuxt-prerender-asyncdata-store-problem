export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  return {
    id: 123,
    slug,
    name: 'My Product',
    tags: [
      'tag1',
      'tag2',
      'tag3',
    ]
  }
})
